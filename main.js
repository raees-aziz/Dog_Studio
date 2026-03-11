// import { render } from 'less';
import * as THREE from 'three';


const scene=new THREE.Scene()
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000)
scene.add(camera)
camera.position.z=4

// mesh => {shape and material}

const cubeGeometry=new THREE.BoxGeometry(1,1,1)
const cubeMaterial=new THREE.MeshBasicMaterial({color:0x00ff00})
const cube=new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cube)

// light
const light=new THREE.DirectionalLight(0xFFFFFF,1)
scene.add(light)
light.position.y=4
// light.position.z=5

// render
const renderer=new THREE.WebGLRenderer()
renderer.setSize(innerWidth,innerHeight)

document.body.appendChild(renderer.domElement)

function animate(){
    cube.rotation.z+=0.02
    cube.rotation.y+=0.02
    renderer.render(scene,camera)

}
renderer.setAnimationLoop(animate)