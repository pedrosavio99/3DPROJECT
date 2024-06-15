// MyScene.js
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const MyScene = () => {
  return (
    // Canvas component from react-three-fiber, acting as the main 3D rendering container
    <Canvas 
      // Set the canvas size to fill the entire viewport
      style={{ width: '200px', height: '200px' }} 
      // Set the initial position of the camera and its field of view
      camera={{ position: [5, 5, 5], fov: 60 }}
    >
      {/* Add ambient light to the scene with a moderate intensity */}
      <ambientLight intensity={0.5} />
      {/* Add a point light to the scene, positioned at [10, 10, 10] with full intensity */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Define a 3D object (a mesh) */}
      <mesh 
        // Scale the object to 3 times its original size in all dimensions (x, y, z)
        scale={[3, 3, 3]}
      >
        {/* Define the geometry of the object as a box with dimensions 1x1x1 */}
        <boxGeometry args={[1, 1, 1]} />
        {/* Define the material of the object, setting its color to red */}
        <meshStandardMaterial color={'red'} />
      </mesh>
      
      {/* Add orbit controls to enable mouse interaction for rotating the view */}
      <OrbitControls />
    </Canvas>
  )
}

export default MyScene
