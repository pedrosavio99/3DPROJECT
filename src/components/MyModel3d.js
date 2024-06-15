import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

// Componente para carregar e renderizar o modelo GLTF
const Model = () => {
  // Substitua 'model.gltf' pelo caminho para o seu arquivo GLTF/GLB
  const { scene } = useGLTF("/modelo3/untitled.gltf");
  return <primitive object={scene} scale={1} />; // Ajuste a escala conforme necessário
};

const Mymodel3d = () => {
  return (
    <Canvas
      style={{ width: "600px", height: "300px" }}
      camera={{ position: [5, 5, 5], fov: 100 }} // Ajuste do fov para um ângulo mais amplo
    >
      <ambientLight intensity={1.0} /> {/* Aumenta a intensidade da luz ambiente */}
      <pointLight position={[5, 8, 5]} intensity={1.5} /> {/* Posição e intensidade da luz */}
      <mesh
        // Scale the object to 3 times its original size in all dimensions (x, y, z)
        scale={[3, 3, 3]}
      >
        <Model /> {/* Renderiza o modelo personalizado */}
        <OrbitControls />
      </mesh>
    </Canvas>
  );
};

export default Mymodel3d;
