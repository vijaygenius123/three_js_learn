import './style.css'

import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)



const geometry = new THREE.SphereGeometry(10, 100,200)
const planetTexture = new THREE.TextureLoader().load('planet.jpeg')
const material = new THREE.MeshStandardMaterial({ map: planetTexture})
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
//const pointLightHelper = new THREE.PointLightHelper(pointLight)
const ambientLight = new THREE.AmbientLight(0xffffff)
pointLight.position.set(0,0,0)
scene.add(pointLight)
scene.add(ambientLight)

//const gridHelper = new THREE.GridHelper(250, 50)

//scene.add(pointLightHelper)

new OrbitControls(camera, renderer.domElement)


const addStar = () => {
    const geometry = new THREE.SphereGeometry(.25, 24, 24)
    const material = new THREE.MeshStandardMaterial({color: 0xffffff})
    const star= new THREE.Mesh(geometry, material)

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

    star.position.set(x, y, z)
    scene.add(star)
}

Array(100).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpeg')
scene.background = spaceTexture

function animate(){
    requestAnimationFrame(animate)
    //torus.rotation.x += 0.01
    torus.rotation.y += 0.005
    //torus.rotation.z += 0.01
    renderer.render(scene, camera)
}

animate()
