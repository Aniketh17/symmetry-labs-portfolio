import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';

function AbstractShape({ position, color, speed, scale, type }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {type === 'torus' && <torusGeometry args={[1, 0.4, 16, 32]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, opacity: 0.8, pointerEvents: 'none' }}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ powerPreference: "default", antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#fdf8f6" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#e27243" />
        
        {/* Soft, warm terracotta and beige abstract shapes using lightweight standard materials */}
        <AbstractShape position={[-4, 2, -2]} color="#e27243" speed={0.4} scale={1.2} type="torus" />
        <AbstractShape position={[5, -2, -4]} color="#fdf9e9" speed={0.3} scale={1.5} type="icosahedron" />
        <AbstractShape position={[-5, -4, -3]} color="#b35b36" speed={0.2} scale={1.8} type="octahedron" />
        <AbstractShape position={[4, 4, -5]} color="#ddd9d7" speed={0.5} scale={1.4} type="torus" />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
