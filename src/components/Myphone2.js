import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

// Componente para carregar e renderizar o modelo GLTF
const Model = () => {
  // Substitua pelo caminho correto para o seu arquivo GLTF/GLB
  const { scene } = useGLTF('/model2/scene.gltf')
  return <primitive object={scene} scale={2.2} /> // Ajuste a escala conforme necessário
}

const MyScenePhone2 = () => {
  return (
    <Canvas
      style={{ width: '300px', height: '300px' }}
      camera={{ position: [10, 10, 10], fov: 70 }} // Ajuste da posição da câmera e do fov
    >
      {/* Luz ambiente com intensidade aumentada */}
      <ambientLight intensity={1.0} />

      {/* Luz pontual */}
      <pointLight position={[10, 10, 10]} intensity={1.0} />

      {/* Luz direcional simulando luz do sol */}
      <directionalLight position={[0, 10, 0]} intensity={0.5} color="white" />

      <mesh scale={[3, 3, 3]}>
        <Model /> {/* Renderiza o modelo personalizado */}
        <OrbitControls />
      </mesh>
    </Canvas>
  )
}

export default MyScenePhone2
