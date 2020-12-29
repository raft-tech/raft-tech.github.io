---
layout: post
title:  "Creating a pipeline with Raspberry Pi, Arduino, Docker and k3s"
short_title: "HIL CI/CD Pipelines - 1"
date: 2020-07-13
categories:
featimg: /assets/images/featimage/dusty_uno.png
bgimg: /assets/images/bgimg/pressure-water-line-509871_1920.jpg
author: Barak Stout
---

<img class='float-img-right' src="/assets/images/featimage/dusty_uno.png"  alt="Mu Dusty Arduino Uno">
Over the past several weeks, I was presented with the idea of [_Hardware In the Loop_](https://en.wikipedia.org/wiki/Hardware-in-the-loop_simulation) (HIL). In a byte, it is the idea of having a [digital twin](https://en.wikipedia.org/wiki/Digital_twin), a digital replica of a physical embedded system that can run in a virtual environment during development. The main benefit of this idea is so hardware and software can be created in parallel, rather than hardware availability becoming a blocker to the software development team. If we take the idea a little bit further, we can use the concept to create a CI/CD pipeline that starts as the developer's code passes through vigorous testing and ends on a physical device, using containerization and network availability. Now I have to admit, like most programmers I like solving problems. Some problems just linger around for a while. Others just have to be solved. This was a little bit of both. The more I thought about it, the more  I wanted to try it out for myself. _How would I do this if I had to?_ Well, I have been looking for a reason to dust off my Pi and Arduino. Thus began my weekend rabbit hole...

I spent some time thinking about HIL with the end-goal in mind. What we really want is to get to the hardware running such that it can be configured and/or observed by software alone. Although computational costs may seem negligible these days, embedded systems that interface analog and digital signals still have very little computing power. The Arduino Uno for example has only 32k bytes of flash memory which is part of the reason why Embedded systems run programs written in cryptic code to optimize run time and with short variable names to save memory. It would ideal if we could attach a powerhouse like a Pi, or a cluster of them, running a container orchestration system and enhance the capabilities of the overall system.

## Version 1.0

Like all great quests, mine started with curiosity. I didn't want to research too much, but I found enough evidence that HIL _can be_ implemented. To simulate this, I created an experiment. It starts with an IR sensor, attached to an [Ardiuno Uno](https://store.arduino.cc/usa/arduino-uno-rev3), which is attached via USB to a [Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) running [k3s](https://github.com/rancher/k3s) using [Docker](https://www.docker.com/) for container orchestration. If I can get a signal from the container on the Pi to the Arduino and back, I can leverage containers and all the benefits of a modern CI/CD pipeline. The hidden benefit here is that containers can run anywhere with simulated hardware I/O -- and hence making HIL work.

Containers are typically microservices and/or different versions of an application. For this usage, k3s acts exactly as it is marketed, _"Lightweight Kubernetes"_. Getting a k3s cluster gives us the affordance to use almost anything that can run on a traditional Kubernetes cluster. At least in theory. This means we can bring into our k3s cluster powerful tools like [Strimzi](https://strimzi.io/) for Kafka, [Rook](https://rook.io/) for Cassandra and a whole lot of others -- even [Kubeflow](https://www.kubeflow.org/). I am both happy and sad to report that setting up a Raspberry Pi in headless mode with k3s running was the smoothest install I have had to do. Ever.

Below are my k3s on Pi install notes:

### Getting the Pi ready

On host machine:
  - Download [balenaEtcher](https://www.balena.io/etcher/)
  - Download [Raspberry Pi OS (32-bit) Lite](https://downloads.raspberrypi.org/raspios_lite_armhf_latest.torrent)
  - Insert memory card into reader
  - Run balenaEtcher
  - Use UI to install the OS

Take memory card out of host and put in pi
  - Power up pi
  - The OS default credentials are:
    ```
    Username: pi
    Password: raspberry
    ```
  - Run `sudo raspi-config` to open config UI
  - Use config UI for:
    - change password
    - setup keyboard local (UK is the default)
    - setup wifi
    - enable ssh
    - reduce video mem to 16

Once done, the Pi will be available for ssh via:
  - From host:
  ```sh
  ssh pi@raspberrypi.local
  ```

### Instilling k3s

ssh into pi
  - open this file `sudo nano /boot/cmdline.txt` and add the following at the end of the line
  ```sh
  cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory
  ```
  - run
    ```sh
    sudo apt-get update && sudo apt-get upgrade
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    export K3S_KUBECONFIG_MODE="644"
    export INSTALL_K3S_EXEC=" --no-deploy servicelb --no-deploy --docker traefik"
    curl -sfL https://get.k3s.io | sh -s - --docker

  - Once done, you can check that k3s is up via `sudo systemctl status k3s`
  - You can use `ifconfig` to see ip

#### Accessing the cluster from host
Back on host machine, copy the `KUBECONFIG` file from Pi to host.
```sh
scp pi@192.168.1.83:/etc/rancher/k3s/k3s.yaml ~/Downloads/k3sconfig
```
Open the `KUBECONFIG` and update the ip (127.0.0.1) to the cluster's master ip

After establishing that running k3s wasn't a problem, I looked into running Docker on Pi. By default, k3s uses [containerd](https://containerd.io/) as the default container run time system. I have been working a lot with Docker, so I figured that learning containerd was not a side lesson I wanted to learn this weekend. Again it is with mixed feelings that I report that installing Docker on Pi is as easy as `curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh`. _When did programming become so easy?_

Until this point in my journey, things were going good. I reached a point where I can run containers on the pi, which means that portion of the pipeline is done. The next step was to get the Arduino and [Sharp IR Distance sensor](https://engineering.purdue.edu/ME588/SpecSheets/sharp_gp2d12.pdf) working. An IR Distance sensor works by using a beam of infrared light to reflect off an object to measure its distance. It's been a while since I tinkered with electronics, but I was able to follow a couple of tutorials, [How to use a Sharp GP2Y0A21YK0F IR Distance Sensor with Arduino](https://www.makerguides.com/sharp-gp2y0a21yk0f-ir-distance-sensor-arduino-tutorial/) and [GP2D12 Project](https://www.swanrobotics.com/projects/gp2d12_project/) and get something working. I ended up with code that spits out the distance in cm. To get the code on the Arduino, I connected it directly to my laptop. The first tutorial used the [Sharp IR](https://github.com/guillaume-rico/SharpIR) library code. The second program used fancy math based on an older work for [LINEARIZING SHARP RANGER DATA](https://acroname.com/blog/linearizing-sharp-ranger-data). I tried both approaches and in both cases, I ended up with results that resembled a random number generator rather than distance. Nevertheless, I had working hardware to work with -- running an embed system connected to an analog device. For simplicity, I configured the Arduino to print out the raw values it reads from the IR sensor with the following program:

```c
int IR_SENSOR  = 0;  // Sensor is connected to the analog A0
int DELAY   = 1000;   // Delay in ms between loop() runs
int sensorData = 0; // Sensor result

void setup()
{
  Serial.begin(9600); // setup communication over serial
  Serial.println("Starting ir_sensor_demo...");
}

void loop()
{
  // read & print the value from the ir sensor
  sensorData = analogRead(IR_SENSOR);
  Serial.println(sensorData);

  delay(DELAY);
}
```

The code is as simple as it seems. Every _DELAY_ ms, the _int_ value Arduino reads from its analog input is printed out to the serial buffer. Nothing fancy. I got the code on Arduino, again without much of a hassle. The next step was to get the Arduino connected to the pi. I got [Ardiuno IDE](https://github.com/arduino/Arduino) installed on the Pi using `sudo apt-get install Arduino` and was encouraged when I found an [Ardiuno manpage](https://github.com/arduino/Arduino/blob/master/build/shared/manpage.adoc), just to find out it doesn't work in headless mode. It kept looking for `X11 DISPLAY`, which isn't available in headless mode. I did some more digging and found chatter about getting the Arduino IDE working in CLI without a display, but I haven't managed to replicate it. Once again, I decided that this was a side lesson I need not experience this weekend. From my perspective, it resulted in having to plug the Arduino into the laptop every time I need to update the code on it. Thankfully, it was just a couple of times. The code running on the hardware didn't really need to change much at the moment.

Taking another approach to communicating with Arduino from the pi, I installed [Python's Serial library](https://pypi.org/project/pyserial/) using `pip install pyserial`. Utilizing this library and Linux device structure, I was able to monitor the serial incoming data stream with this little Python program:

```python
import serial
ser = serial.Serial('/dev/ttyACM0', 9600)
while 1:
    if(ser.in_waiting >0):
        line = ser.readline()
        print(line)

```

Finally, I was making some headway. I had the individual blocks, but it still wasn't a pipeline. Not yet. For it to resemble the CI/CD pipeline that has become an industry standard, it will need to be containerized. Dockerizing this program was as simple as it appears. I used a Python base image and installed the serial library. Here is the content of my Dockerfile:  

```dockerfile
FROM python:3.7

RUN apt-get update
RUN pip install pyserial

COPY comm_test.py comm_test.py

CMD ["python","./comm_test.py"]
```

and I used `sudo docker build . -t comm_test_docker` to build. The new bit for me was that you can allow access to a host physical device to a container at run time with a simple command. Thus after building, all I had to do is:

```sh
docker run -it --device=/dev/ttyACM0 comm-test-docker
```

And the results just showed up as:
```
b'Starting ir_sensor_demo...\r\n'
b'48\r\n'
b'69\r\n'
b'174\r\n'
b'345\r\n'
b'694\r\n'
b'898\r\n'
b'837\r\n'
b'697\r\n'
b'425\r\n'
b'4\r\n'
b'10\r\n'
```

As you can see, these are the raw bytes of data, received over serial into a docker container. And the results are random. I suspect that the sensor I was using was bad. Or just old. I didn't really have a way to check it, so I kept using it for my learning purpose while I ordered new sensors for future usage.

## Version 2.0

Time for v2.0. As always, there comes a time to refactor. Programming has always been about small, incremental, forward progress. You get one thing working and then another. Until you break something. Then you fix it and move on to the next thing. I could see it all coming together conceptually, but I wasn't satisfied just yet. For this to be a real CI/CD, I want to be able to make changes and have them take an effect through the pipeline. We are looking for the software running on the Pi to use its resources to potentially control the hardware. In my case, I choose to configure the _DELAY_ time and have the ability to soft reboot the device. My thoughts were, that maybe there is an optimal _DELAY_ time in which the measurements are more accurate. Having the ability to soft reset the board meant I can write Python code, that can run in a container and interact with the embedded system. A few modifications later and I ended up with the following code to run on the Arduino:

```c
#include <avr/wdt.h>

int IR_SENSOR  = 0;  // Sensor is connected to the analog A0
int DELAY   = 1000;   // Delay in ms between loop() runs
int sensorData = 0; // Sensor result

void(* resetFunc) (void) = 0; //declare reset function @ address 0

void setup()
{
  Serial.begin(9600); // setup communication over serial
  Serial.println("Starting ir_sensor_demo...");
}

void loop()
{
  // read & print the value from the ir sensor
  sensorData = analogRead(IR_SENSOR); //Get sensor value
  Serial.println(sensorData);

  if (Serial.available() > 0) {
    int data = Serial.readStringUntil('\n').toInt();
    Serial.print("Got new delay value: ");
    Serial.println(data);

    if ( data >= 1000) {
      DELAY = data;
      Serial.println("DELAY has been updated");
    }

    if (data == -1) {
      Serial.println("Soft reset signal received");
      delay(500);
      resetFunc();
    }
  }

  delay(DELAY);
}
```

At this point, I had everything I needed to satisfy my problem-solving mind. For this to work, I still need a way to virtualize things. Specifically, to create the digital twin for the Pi and/or Arduino to run this whole thing as a pipeline in the cloud. Thankfully it was around here that I started to remember I am not a sole developer in this world. There are open-source projects like [QEMU](https://hub.docker.com/r/ryankurte/docker-rpi-emu/) used in [docker-rpi-emu](https://github.com/ryankurte/docker-rpi-emu) and there are paid services like [Microsoft's Azure Digital Twins](https://azure.microsoft.com/en-us/services/digital-twins/) that can take us the extra step for this to be a fully functioning pipeline. The reason HIL isn't popularized is just that it's still in its inception state.

## Conclusion

My weekend quest ended up with mixed results and left me wanting to continue this work. This quest was a warmup, in which I have managed to recreate the problem and to create a manual pipeline to deliver code to a container and to an embedded system, but it's still not quite the automated pipeline I would prefer. The HIL we are striving for is for developers to be able to commit code to a repo and from there the entire operation is fully automated. From building and testing the code base; to scanning for vulnerabilities; to testing on a digital twin; to deploying to the device. In my case, I was able to create an environment in which the hardware can be reconfigured by the Pi via signals and the Pi is running a container. Therefore, if I could setup a deployment pipeline from a repo to the Pi using any traditional CI/CD service, but I ran out of _"weekend"_ time to spare...

Currently, my plan is to proceed with this project and include some fellow Rafters to see what we can come up with. HIL solutions are still in the making and there is plenty of work. There are many more embedded systems in the world than any other computer. The advantages gained by utilizing HIL are numerous. Above all else, it will shorten the delivery time to embedded systems and allow the dev teams to work with the best CI/CD practices from non-embedded systems. As to my own little sandbox projects, here are some things I would like to see resolved in the next iteration, or over a weekend:

- Code delivery from Pi to Arduino
- Code delivery from repo to pi
- Code delivery from repo to Arduino
- Testing out _QEMU_ and docker as a digital twin
- Exploring the capabilities of _Microsoft’s Azure Digital Twins_

~~_To be continued..._~~ Continued [Using Docker, Drone.io and Ino to build a HIL Pipeline](/2020/08/17/continue-exploring-hil.html)
