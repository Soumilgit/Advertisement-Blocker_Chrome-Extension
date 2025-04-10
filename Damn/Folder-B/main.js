
let scene, camera, renderer;

document.addEventListener("DOMContentLoaded", function()
{
  initializeScene()


  scene.add(new THREE.AmbientLight(0xffffff,0.5))

  const pointLightLeft = new THREE.PointLight(0xff4422, 1)
  pointLightLeft.position.set(-1,-1,3)
  scene.add(pointLightLeft)

  const pointLightRight = new THREE.PointLight(0x44ff88, 1)
  pointLightRight.position.set(1,2,3)
  scene.add(pointLightRight)

  const pointLightTop = new THREE.PointLight(0xdd3311, 1)
  pointLightTop.position.set(0,3,2)
  scene.add(pointLightTop)

 
  const texture = new THREE.TextureLoader().load( "./ThreeJS/MinecraftBlock/what.jpg" );

  const material = new THREE.MeshStandardMaterial({
    map: texture,
    metalness:0.7,
    roughness:0.3,
  })

  var geometry = new THREE.BoxGeometry();
  const mesh = new THREE.Mesh(geometry,material)

  scene.add(mesh)
  camera.position.set(0,0,2)

  function animate()
  {
    mesh.rotation.z +=0.01
    mesh.rotation.x +=0.01
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()
})

function initializeScene()
{
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({alpha: true})
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  scene.background = new THREE.Color( 0x000000 );
}
