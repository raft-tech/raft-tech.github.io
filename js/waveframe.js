// ThreeJS and Third-party deps
import * as THREE from "three";
import { RenderPass } from "/js/three.js-master/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "/js/three.js-master/examples/jsm/postprocessing/EffectComposer.js";

// import * as THREE from "https://unpkg.com/browse/three@0.151.3/build/three.module.js";
// import { RenderPass } from "https://unpkg.com/browse/three@0.151.3/examples/jsm/postprocessing/RenderPass.js";
// import { EffectComposer } from "https://unpkg.com/browse/three@0.151.3/examples/jsm/postprocessing/EffectComposer.js";

const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");

const startApp = (mode) => {
  let theme = mode || document.getElementsByTagName('html')[0].getAttribute('data-bs-theme');
  if (theme === 'dark') {
    runApp(appDark, scene, renderer, camera, true, uniforms, undefined);
  } else {
    runApp(appLight, scene, renderer, camera, true, uniforms, undefined);
  }
}

lightMode.addEventListener("click", () => {
  startApp("light");
});

darkMode.addEventListener("click", () => {
  startApp("dark");
});


/**
 * Initializes a reasonable uniforms object ready to be used in fragments
 * @returns a uniforms object with u_time, u_mouse and u_resolution
 */
const getDefaultUniforms = () => {
  return {
    u_time: { value: 0.0 },
    u_mouse: {
      value: {
        x: 0.0,
        y: 0.0
      }
    },
    u_resolution: {
      value: {
        x: window.innerWidth * window.devicePixelRatio,
        y: window.innerHeight * window.devicePixelRatio
      }
    }
  };
};

/**
 * This function contains the boilerplate code to set up the environment for a threejs app;
 * e.g. HTML canvas, resize listener, mouse events listener, requestAnimationFrame
 * Consumer needs to provide the created renderer, camera and (optional) composer to this setup function
 * This has the benefit of bringing the app configurations directly to the consumer, instead of hiding/passing them down one more layer
 * @param {object} app a custom Threejs app instance that needs to call initScene and (optioal) updateScene if animation is needed
 * @param {object} scene Threejs scene instance
 * @param {object} renderer Threejs renderer instance
 * @param {object} camera Threejs camera instance
 * @param {bool} enableAnimation whether the app needs to animate stuff
 * @param {object} uniforms Uniforms object to be used in fragments, u_resolution/u_mouse/u_time got updated here
 * @param {object} composer Threejs EffectComposer instance
 * @returns a custom threejs app instance that has the basic setup ready that can be further acted upon/customized
 */
const runApp = (
  app,
  scene,
  renderer,
  camera,
  enableAnimation = false,
  uniforms = getDefaultUniforms(),
  composer = null,
) => {
  // Create the HTML container, styles defined in index.html
  const container = document.getElementById("waveframe");
  container.appendChild(renderer.domElement);

  // Register resize listener
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // update uniforms.u_resolution
    if (uniforms.u_resolution !== undefined) {
      uniforms.u_resolution.value.x =
        window.innerWidth * window.devicePixelRatio;
      uniforms.u_resolution.value.y =
        window.innerHeight * window.devicePixelRatio;
    }
  });

  // Define your app
  if (app.updateScene === undefined) {
    app.updateScene = (delta, elapsed) => {};
  }
  Object.assign(app, { ...app, container });

  // The engine that powers your scene into movement
  const clock = new THREE.Clock();
  const animate = () => {
    if (enableAnimation) {
      requestAnimationFrame(animate);
    }

    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();
    uniforms.u_time.value = elapsed;

    app.updateScene(delta, elapsed);

    if (composer === null) {
      renderer.render(scene, camera);
    } else {
      composer.render();
    }
  };

  app
    .initScene()
    .then(animate)
    .then(() => {
      // debugging info
      renderer.info.reset();
      // not sure if reliable enough, numbers change everytime...
      // console.log("Renderer info", renderer.info);
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * This creates the renderer, by default calls renderer's setPixelRatio and setSize methods
 * further reading on color management: See https://www.donmccurdy.com/2020/06/17/color-management-in-threejs/
 * @param {object} rendererProps props fed to WebGlRenderer constructor
 * @param {function} configureRenderer custom function for consumer to tune the renderer, takes renderer as the only parameter
 * @returns created renderer
 */
const createRenderer = (
  rendererProps = {},
  configureRenderer = (renderer) => {}
) => {
  const renderer = new THREE.WebGLRenderer(rendererProps, { alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor( 0x000000, 0 );

  // more configurations to the renderer from the consumer
  configureRenderer(renderer);

  return renderer;
};

/**
 * This function creates the EffectComposer object for post processing
 * @param {object} renderer The threejs renderer
 * @param {object} scene The threejs scene
 * @param {object} camera The threejs camera
 * @param {function} extraPasses custom function that takes takes composer as the only parameter, for the consumer to add custom passes
 * @returns The created composer object used for post processing
 */
const createComposer = (renderer, scene, camera, extraPasses) => {
  const renderScene = new RenderPass(scene, camera);

  let composer = new EffectComposer(renderer);
  composer.addPass(renderScene);

  // custom passes that the consumer wants to add
  extraPasses(composer);

  return composer;
};

/**
 * This function creates the three.js camera
 * @param {number} fov Field of view, def = 45
 * @param {number} near nearest distance of camera render range
 * @param {number} far furthest distance of camera render range
 * @param {object} camPos {x,y,z} of camera position
 * @param {object} camLookAt {x,y,z} where camera's looking at
 * @param {number} aspect Aspect ratio of camera, def = screen aspect
 * @returns the created camera object
 */
const createCamera = (
  fov = 45,
  near = 0.1,
  far = 100,
  camPos = { x: 0, y: 0, z: 5 },
  camLookAt = { x: 0, y: 0, z: 0 },
  aspect = window.innerWidth / window.innerHeight
) => {
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(camPos.x, camPos.y, camPos.z);
  camera.lookAt(camLookAt.x, camLookAt.y, camLookAt.z); // this only works when there's no OrbitControls
  camera.updateProjectionMatrix();
  return camera;
};


/**************************************************
 * 0. Tweakable parameters for the scene
 *************************************************/
const uniforms = {
  ...getDefaultUniforms(),
  u_pointsize: { value: 2.0 },
  // wave 1
  u_noise_freq_1: { value: 3.0 },
  u_noise_amp_1: { value: 0.2 },
  u_spd_modifier_1: { value: 1.0 },
  // wave 2
  u_noise_freq_2: { value: 2.0 },
  u_noise_amp_2: { value: 0.3 },
  u_spd_modifier_2: { value: 0.8 }
};

/**************************************************
 * 1. Initialize core threejs components
 *************************************************/
// Create the scene
let scene = new THREE.Scene();

// Create the renderer via 'createRenderer',
// 1st param receives additional WebGLRenderer properties
// 2nd param receives a custom callback to further configure the renderer
let renderer = createRenderer({ antialias: true });

// Create the camera
// Pass in fov, near, far and camera position respectively
let camera = createCamera(60, 1, 100, { x: 0, y: 0, z: 4.5 });

/**************************************************
 * 2. Build your scene in this threejs app
 * This app object needs to consist of at least the async initScene() function (it is async so the animate function can wait for initScene() to finish before being called)
 * initScene() is called after a basic threejs environment has been set up, you can add objects/lighting to you scene in initScene()
 * if your app needs to animate things(i.e. not static), include a updateScene(interval, elapsed) function in the app as well
 *************************************************/
let appDark = {
  vertexShader() {
    return `
    #define PI 3.14159265359

    uniform float u_time;
    uniform float u_pointsize;
    uniform float u_noise_amp_1;
    uniform float u_noise_freq_1;
    uniform float u_spd_modifier_1;
    uniform float u_noise_amp_2;
    uniform float u_noise_freq_2;
    uniform float u_spd_modifier_2;

    // 2D Random
    float random (in vec2 st) {
        return fract(sin(dot(st.xy,
                            vec2(12.9898,78.233)))
                    * 43758.5453123);
    }

    // 2D Noise based on Morgan McGuire @morgan3d
    // https://www.shadertoy.com/view/4dS3Wd
    float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        // Smooth Interpolation

        // Cubic Hermine Curve.  Same as SmoothStep()
        vec2 u = f*f*(3.0-2.0*f);
        // u = smoothstep(0.,1.,f);

        // Mix 4 coorners percentages
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
    }

    mat2 rotate2d(float angle){
        return mat2(cos(angle),-sin(angle),
                  sin(angle),cos(angle));
    }

    void main() {
      gl_PointSize = u_pointsize;

      vec3 pos = position;
      // pos.xy is the original 2D dimension of the plane coordinates
      pos.z += noise(pos.xy * u_noise_freq_1 + u_time * u_spd_modifier_1) * u_noise_amp_1;
      // add noise layering
      // minus u_time makes the second layer of wave goes the other direction
      pos.z += noise(rotate2d(PI / 4.) * pos.yx * u_noise_freq_2 - u_time * u_spd_modifier_2 * 0.6) * u_noise_amp_2;

      vec4 mvm = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvm;
    }
    `;
  },
  fragmentShader() {
      return `
        #ifdef GL_ES
        precision mediump float;
        #endif
    
        #define PI 3.14159265359
        #define TWO_PI 6.28318530718
        
        uniform vec2 u_resolution;
    
        void main() {
          vec2 st = gl_FragCoord.xy/u_resolution.xy;
          vec3 gradient = vec3(0.0);
          
          vec3 color1 = vec3(0.27, 0.29, 0.79);
          vec3 color2 = vec3(0.77, 0.18, 0.64);
          
          vec3 color3 = vec3(1.0, 0.8588, 0.9686);
          vec3 color4 = vec3(0.85098, 0.85490, 1.0);
    
          vec3 color5 = vec3(0.145, 0.094, 0.192);
          vec3 color6 = vec3(0.188, 0.098, 0.192);
          
          float factor = sqrt(dot(st, st));
    
          gradient = mix(color1, color2, factor);
          
          gl_FragColor = vec4(gradient,1.0);
        }
      `;
    
  },
  async initScene() {
    // Environment
    // scene.background = new THREE.Color(bgColor);

    // Mesh
    this.geometry = new THREE.PlaneGeometry(6, 6, 256, 256);
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: this.vertexShader(),
      fragmentShader: this.fragmentShader()
    });
    // const material = new THREE.MeshStandardMaterial();
    this.mesh = new THREE.Points(this.geometry, material);
    scene.add(this.mesh);

    // set appropriate positioning
    // this.mesh.position.set(-0.1, 0.4, 0);
    this.mesh.rotation.x = 3.1415 / 2;
    this.mesh.rotation.y = 3.1415;
  }
};

let appLight = {
  vertexShader() {
    return `
    #define PI 3.14159265359

    uniform float u_time;
    uniform float u_pointsize;
    uniform float u_noise_amp_1;
    uniform float u_noise_freq_1;
    uniform float u_spd_modifier_1;
    uniform float u_noise_amp_2;
    uniform float u_noise_freq_2;
    uniform float u_spd_modifier_2;

    // 2D Random
    float random (in vec2 st) {
        return fract(sin(dot(st.xy,
                            vec2(12.9898,78.233)))
                    * 43758.5453123);
    }

    // 2D Noise based on Morgan McGuire @morgan3d
    // https://www.shadertoy.com/view/4dS3Wd
    float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        // Smooth Interpolation

        // Cubic Hermine Curve.  Same as SmoothStep()
        vec2 u = f*f*(3.0-2.0*f);
        // u = smoothstep(0.,1.,f);

        // Mix 4 coorners percentages
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
    }

    mat2 rotate2d(float angle){
        return mat2(cos(angle),-sin(angle),
                  sin(angle),cos(angle));
    }

    void main() {
      gl_PointSize = u_pointsize;

      vec3 pos = position;
      // pos.xy is the original 2D dimension of the plane coordinates
      pos.z += noise(pos.xy * u_noise_freq_1 + u_time * u_spd_modifier_1) * u_noise_amp_1;
      // add noise layering
      // minus u_time makes the second layer of wave goes the other direction
      pos.z += noise(rotate2d(PI / 4.) * pos.yx * u_noise_freq_2 - u_time * u_spd_modifier_2 * 0.6) * u_noise_amp_2;

      vec4 mvm = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvm;
    }
    `;
  },
  fragmentShader() {
      return `
        #ifdef GL_ES
        precision mediump float;
        #endif

        #define PI 3.14159265359
        #define TWO_PI 6.28318530718
        
        uniform vec2 u_resolution;

        void main() {
          vec2 st = gl_FragCoord.xy/u_resolution.xy;
          vec3 gradient = vec3(0.0);
          
          vec3 color1 = vec3(0.27, 0.29, 0.79);
          vec3 color2 = vec3(0.77, 0.18, 0.64);
          
          vec3 color3 = vec3(1.0, 0.8588, 0.9686);
          vec3 color4 = vec3(0.85098, 0.85490, 1.0);

          vec3 color5 = vec3(0.145, 0.094, 0.192);
          vec3 color6 = vec3(0.188, 0.098, 0.192);
          
          float factor = sqrt(dot(st, st));

          gradient = mix(color3, color4, factor);
          
          gl_FragColor = vec4(gradient,1.0);
        }
    `;
    
  },
  async initScene() {
    // Environment
    // scene.background = new THREE.Color(bgColor);

    // Mesh
    this.geometry = new THREE.PlaneGeometry(6, 6, 256, 256);
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: this.vertexShader(),
      fragmentShader: this.fragmentShader()
    });
    // const material = new THREE.MeshStandardMaterial();
    this.mesh = new THREE.Points(this.geometry, material);
    scene.add(this.mesh);

    // set appropriate positioning
    // this.mesh.position.set(-0.1, 0.4, 0);
    this.mesh.rotation.x = 3.1415 / 2;
    this.mesh.rotation.y = 3.1415;
  }
};

/**************************************************
 * 3. Run the app
 * 'runApp' will do most of the boilerplate setup code for you:
 * e.g. HTML container, window resize listener, mouse move/touch listener for shader uniforms, THREE.Clock() for animation
 * Executing this line puts everything together and runs the app
 * ps. if you don't use custom shaders, pass undefined to the 'uniforms'(2nd-last) param
 * ps. if you don't use post-processing, pass undefined to the 'composer'(last) param
 *************************************************/
// runApp(app, scene, renderer, camera, true, uniforms, undefined);
startApp();