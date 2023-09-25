import "./style.css";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

let fillerDiv = document.querySelector(".filler");
let secondaryDiv = document.querySelector(".secondary");

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// instantiate a loader
const loader = new OBJLoader();

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(2, 2, 2);
THREE.Object3D.DefaultUp.set(0, 0, 1);
scene.add(camera);

// load a resource
let logoMesh;

loader.load(
  "B:/projects/responsive-logo-final/static/models/logo/Obj/project-desk-4dc6d8fcea089283c968e0461330f846.obj",
  function (object) {
    logoMesh = object;
    if (window.innerWidth <= 420) {
      logoMesh.scale.x = 0.052;
      logoMesh.scale.y = 0.052;
      logoMesh.scale.z = 0.052;
    } else {
      logoMesh.scale.x = 0.064;
      logoMesh.scale.y = 0.064;
      logoMesh.scale.z = 0.064;
    }

    logoMesh.rotation.x = 1.65;
    logoMesh.rotation.y = 0;
    logoMesh.rotation.z = 0;
    // console.log(logoMesh.quaternion)
    // logoMesh.rotation.x = 0;
    // logoMesh.rotation.y = 0;
    // logoMesh.rotation.z = 0;

    logoMesh.position.x = 2;
    logoMesh.position.y = 1.85;
    logoMesh.position.z = -1.55;

    scene.add(logoMesh);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened");
  }
);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;
let coords = {
  x: 0,
  y: 0,
};

const windowHalfX = window.innerWidth / 2;
let logoRotationDivider = 1;

let roationSpeed = 0.05;
let rotationOffset = 0;
let zoomOffset = 0;
let zoomSpeed = 0.02;
let opacityOffset = 0;
let opacitySpeed = 0.02;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  if (scrollY >= 500) {
    logoRotationDivider = 26;
    fillerDiv.style.transform = `scale(${Math.min(
      0.25 + (scrollY - 500) / 500,
      1
    )}, ${Math.min(0.25 + (scrollY - 500) / 500, 1)})`;

    opacityOffset += ((scrollY - 500) / 500 - opacityOffset) * opacitySpeed;

    fillerDiv.style.opacity = `${Math.min(opacityOffset, 1)}`;

    zoomOffset += (scrollY * 0.1 - zoomOffset) * zoomSpeed;
    if (logoMesh) {
      fillerDiv.style.top = `${Math.min(scrollY / 50, 18)}vh`;

      if (fillerDiv.style.top === "18vh") {
        fillerDiv.style.position = "relative";
        fillerDiv.style.top = `calc(${Math.min(scrollY, 950)}px + 18vh)`;
        fillerDiv.style.left = "0";
        secondaryDiv.style.marginTop = "120vh";
      } else {
        fillerDiv.style.position = "fixed";
        secondaryDiv.style.marginTop = "400vh";
      }
    }
  } else {
    fillerDiv.style.transform = "scale(0.25, 0.25)";
    fillerDiv.style.opacity = "0";
    zoomOffset += (scrollY * 0.02 - zoomOffset) * zoomSpeed;

    if (scrollY === 0) logoRotationDivider = 1;
    else if (scrollY > 0 && scrollY <= 100) logoRotationDivider = 5;
    else if (scrollY > 100 && scrollY <= 200) logoRotationDivider = 10;
    else if (scrollY > 200 && scrollY <= 300) logoRotationDivider = 15;
    else if (scrollY > 300 && scrollY <= 400) logoRotationDivider = 20;
    else if (scrollY > 400 && scrollY <= 499) logoRotationDivider = 25;
    if (logoMesh) {
      // logoMesh.position.set(2, 1.85, -1.55);
      // zOffSet += latVelocity * 0.025;
      // logoMesh.scale.set(
      //   0.064 + scrollY * 0.0002,
      //   0.064 + scrollY * 0.0002,
      //   0.064 + scrollY * 0.0002
      // );
      // logoMesh.position.set(2, 1.85, -1.55 + scrollY * 0.002);
    }
  }
  if (rotationOffset >= 0.05 || rotationOffset <= -0.05) {
    roationSpeed = 0.05;
    if (rotationOffset >= 0.1 || rotationOffset <= -0.1) {
      roationSpeed = 0.04;
      if (rotationOffset >= 0.2 || rotationOffset <= -0.2) {
        roationSpeed = 0.03;
        if (rotationOffset >= 0.3 || rotationOffset <= -0.3) {
          roationSpeed = 0.01;
          if (rotationOffset >= 0.4 || rotationOffset <= -0.4) {
            roationSpeed = 0.005;
          }
        }
      }
    }
  }

  rotationOffset += (coords.x - rotationOffset) * roationSpeed;
  if (logoMesh) {
    logoMesh.rotation.set(1.65, 0, rotationOffset / logoRotationDivider);
    camera.zoom = 1 + zoomOffset;
  }
  camera.updateProjectionMatrix();
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

//track users mouse/touch position
const onMouseMove = (event) => {
  coords.x = event.clientX / sizes.width - 0.5;
};

const onTouchMove = (event) => {
  if (event.touches && event.touches[0]) {
    coords.x = event.touches[0].clientX / sizes.width - 0.5;
  } else if (event.originalEvent && event.originalEvent.changedTouches[0]) {
    coords.x =
      event.originalEvent.changedTouches[0].clientX / sizes.width - 0.5;
  } else if (event.clientX && event.clientY) {
    coords.x = event.clientX / sizes.width - 0.5;
  }
};

window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("touchmove", onTouchMove, false);
