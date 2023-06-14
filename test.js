  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("galaxy-container").appendChild(renderer.domElement);

  // Create galaxy geometry
  const galaxyGeometry = new THREE.Geometry();
  for (let i = 0; i < 10000; i++) {
    const star = new THREE.Vector3();
    star.x = THREE.MathUtils.randFloatSpread(2000);
    star.y = THREE.MathUtils.randFloatSpread(2000);
    star.z = THREE.MathUtils.randFloatSpread(2000);
    galaxyGeometry.vertices.push(star);
  }

  // Create galaxy material
  const galaxyMaterial = new THREE.PointsMaterial({ color: 0xffffff });

  // Create galaxy points
  const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);

  // Add galaxy to the scene
  scene.add(galaxy);

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    galaxy.rotation.y += 0.001;
    renderer.render(scene, camera);
  }
  animate();
