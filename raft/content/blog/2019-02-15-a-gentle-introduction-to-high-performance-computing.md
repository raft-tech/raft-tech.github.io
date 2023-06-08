---
layout: post
title:  "Intro to HPC"
date:   2019-02-15
categories:
featimg: /images/featimage/feb_15_2019.jpeg
bgimg: /images/bgimg/hpc.jpg
author: Bhaarat Sharma
---

**CIO LEVEL SUMMARY:**

- High Performance Computing (HPC) uses existing technology to create a high level of performance that is above and beyond what a typical computer can do.

- HPC is often implemented using multiple computers, called *clusters*, that work together to generate a high level of performance.

- When HPC is implemented using large clusters of computers, special thought needs to be given to how the computers communicate with each other.

- NextGen Healthcare utilizes HPC\--as well as other recent technologies\--in order to build (and help others build) a large database of Electronic Healthcare Records (EHR).

- This large scale ability to aggregate health information allows companies, organizations, and researchers access to huge amounts of health related data, which provides opportunities for large scale insights from this data.

**WHAT IS HPC?**

The computer\--or tablet or other mobile device\--that you are using to
access this article is pretty powerful. But there are limitations on
what it can do. These limitations are caused by many different parts of
your computer's hardware and/or software. For example, the Hard Drive on
your computer has a finite amount of storage. While it's enough for most
of the things you do day to day, if you tried to store a million
Electronic Health Records (EHRs) like many large medical organizations
do, your device would not be up for the job. Luckily, using High
Performance Computing, we can distribute the necessary storage across
many computers, even adding redundancy so that information will stay
safe in the event of a computer failure.

Similarly, you might need to actually do something with the data instead
of just letting it sit there. Creating reports, searching for records,
and doing other analyses on this data requires a huge amount of
processing power. The simplest computer, a central processing unit (CPU)
can only process one calculation at a time (although does it so quickly
that this might seem hard to believe). If you have a three step program
that needs to do A, B, and then C, the CPU will need to execute A, wait
until A finishes, execute B, wait until B finishes, and then finally
execute C. When you're dealing with large amounts of data and intensive
calculations, the time needed to wait for even a superfast computer
would be unreasonable.

So far, we've looked at how one computer can, but HPC clusters have many
computers that are available to complete tasks. These tasks\--like
finding the average latency between diagnosis and treatment of a certain
condition\--are submitted to the cluster along with the amount of
resources needed to complete the task. A *scheduler* takes that task and
spreads it out over the available *nodes* (or computers) in the cluster.

Imagine a restaurant who is making a lasagna as their dinner special.
Let's simplify and say that there are 6 steps to making a pan of
lasagna:

1. Chop onion, garlic and herbs

2. Sauté onion, garlic, and herbs with meat and tomato sauce

3. Parboil noodles

4. Mix Ricotta and egg mixture

5. Layer meat sauce, noodles, ricotta mix, and mozzarella til pan is full

6. Bake at 400° F for 1 hour

Now, if you only have one chef, you would by necessity do each step one
at a time. But having a bunch of sous chefs in the kitchen would help
speed things up. For example, one chef could chop onions, while the
other chops the garlic and herbs. Since chopping onions doesn't rely on
chopping garlic and herbs, we can do them at the same time. We CAN'T,
however, sauté the chopped onion, garlic and herbs while also chopping
them. So far we've discovered two types of tasks: ones that are
independent and can be done separately, and ones that are dependent and
have to be done in order.

HPC clusters can help you with tasks or subtasks that are independent of
each other. For example, if you need to look through psychiatric
diagnoses and change any previous diagnosis of Asperger's Syndrome to
Autism Spectrum Disorder to reflect changes in the DSM-5, you could use
multiple cores to do many changes at one time, speeding up the process
immensely if you have huge amounts of files.

However, just like you cannot both chop and sauté the onions, garlic and
herbs at the same time, there are some computer processes that are
dependent on each other, and do not enjoy the same speed increase when
using an HPC cluster. For example, no matter how many chefs are
available, it will still take an hour to bake the lasagna. Similarly in
an HPC cluster, if a single process takes 1 hour, if it's unable to be
split up into subtasks, then we cannot possibly speed it up to be
shorter than an hour. For a mathematical example, calculating the
Fibonacci series\--in which each number in the series is the sum of the
previous two numbers\--does not benefit from additional cores. Since the
calculation must be done in order and relies on previous calculations,
the computer must wait for one calculation to be done before it can do
another.

$$ \underbrace {1,1,2,3,5,8,13...}_\text{Fibonacci Series}%0 $$

## USING HPC

In practice, using an HPC to speed up your data processing can be as
simple as importing a package or downloading an add-on to whatever
program you're already using. Luckily, many great program have been
written in order to make distributed computing accessible to people
without advanced computing degrees.

Other times, software that you buy and use, such as EHR software from
NextGen have built in capabilities to help you create, manage, and use
HPCs to your advantage. NextGen Healthcare develops software to handle
Electronic Health Records, which can often be huge. NextGen software
allows multiple providers to have compatible systems, giving patients
and practitioners a more seamless experience when accessing personal
health records. A quicker and more accurate system of storing and
accessing health records can often lead to better and more accurate
outcomes.

Instead of faxing over loads of records to many different offices,
NextGen has provided a way to have all patient related information in
one place, even across practices. This provides are more whole picture
of a patient's health, both within and between healthcare organizations.

It also allows for more streamlined analytics. Especially with large
hospitals or health related organizations that have huge amounts of
EHRs. As Artificial Intelligence capabilities increase, we will need
ways to implement it in our healthcare systems.

One study[^1] created an AI framework that was able to outperform usual
treatment plans both in cost, and in positive patient outcomes.
According to the study, "the cost per unit of outcome change (CPUC) was
\$189 vs. \$497" for the AI vs. normal treatment. This lower cost was
also achieved while producing a "30- 35% increase in patient outcomes".
Using AI could lead to huge improvements in the level of healthcare
available to patients and practitioners alike. But, large scale
developments will most likely require larger, more advanced computer
architectures both for storing and for processing. The faster we are
able to complete data processing and computation, the more lives can be
improved or even saved.

## CLOUD BASED SERVICES

And while it's possible for anyone to build their own cluster of
computers, the knowledge, time, and energy required for its upkeep is
often a steep cost that companies cannot take on.

Luckily, large scale services such as Amazon Web Services (AWS) and
Google Cloud allow companies to purchase as little or as much computing
power as they need. These large companies take care of the hardware, and
much of the software necessary to use HPCs. They are also able to take
care of security for these clusters. EHRs require a high level of
security since they contain both Personal Health Information (PHI) and
Personal Identifiable Information (PII). Their services allow companies
to more easily integrate HPC into their existing data practices.

These services allow users a lot of flexibility in designing the type of
HPC architecture that they need. Not just overall, but for each specific
project that you might have. If one project that you are running uses
complex Machine Learning models with many parameters, you may need a
more GPU heavy cluster. Whereas other, smaller or less complex projects
may only require clusters of CPUs. Similarly, some projects may be more
memory heavy, requiring a lot of storage capability, whereas others
require less storage, but more processing. Building an on location
Cluster that can run all of these projects can be expensive and lead to
a lot of expensive hardware going unused most of the time. Using large
services like AWS or Google Cloud allow you to pay for what you need,
when you need it, and provide much of the infrastructure needed to
quickly transform your normal data pipeline into one that utilizes HPC.

## CONCLUSION

Many data processes require large amounts of storage and processing
power. Often more than one single machine can handle. This is especially
true with EHRs. Luckily, companies like NextGen, Amazon Web Services,
and Google Cloud provide both software and hardware solutions to large
healthcare data problems. While some processes cannot be parallelized,
many can; and the use of multiple machines linked together to form a
High Performance Cluster can produce incredible speed ups. This speed
allows us to take advantage of state of the art AI and Machine Learning
models that can improve patient experiences and outcomes. It can also
help with simpler data tasks such as making large scale record changes,
or searching through large amounts of data.

## RESOURCES

[Intro to Google Cloud](https://www.youtube.com/watch?v=VviB3kxFe_0)

[AWS and NextGen](https://www.youtube.com/watch?v=XvwdQ4Kigpk)

[AI on EHRs](https://arxiv.org/pdf/1301.2158.pdf)

[HPC Structure](http://hpc.fs.uni-lj.si/sites/default/files/HPC_for_dummies.pdf)

## REFERENCES

[^1]: [https://arxiv.org/pdf/1301.2158.pdf](https://arxiv.org/pdf/1301.2158.pdf)
