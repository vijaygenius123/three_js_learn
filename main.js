import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)



const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xff6347})
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
const pointLightHelper = new THREE.PointLightHelper(pointLight)
const ambientLight = new THREE.AmbientLight(0xffffff)
pointLight.position.set(0,0,0)
scene.add(pointLight)
scene.add(pointLightHelper)
scene.add(ambientLight)

function animate(){
    requestAnimationFrame(animate)
    torus.rotation.x += 0.01
    torus.rotation.y += 0.005
    torus.rotation.z += 0.01
    renderer.render(scene, camera)
}

animate()
