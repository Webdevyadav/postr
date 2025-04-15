import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, GradientTexture, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Floating Sphere component
const FloatingSphere = ({ position, size, color1, color2, distort = 0.4, speed = 2 }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.distort = THREE.MathUtils.lerp(
      mesh.current.distort,
      Math.sin(time * 0.3) * 0.2 + distort,
      0.3
    );
  });
  
  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh ref={mesh}>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial distort={distort} speed={speed} roughness={0}>
          <GradientTexture
            stops={[0, 1]} // as many stops as you want
            colors={[color1, color2]} // corresponding colors
            size={1024}
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  );
};

// Network Node Component
const NetworkNode = ({ position, size = 0.2, color = "#ffffff" }) => {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    mesh.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2) * 0.05);
  });
  
  return (
    <mesh position={position} ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

// Network Connection Component
const NetworkConnection = ({ start, end, color = "#ffffff", opacity = 0.3 }) => {
  const ref = useRef();
  
  useEffect(() => {
    // Create line geometry
    const points = [];
    points.push(new THREE.Vector3(...start));
    points.push(new THREE.Vector3(...end));
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    ref.current.geometry = geometry;
  }, [start, end]);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.material.opacity = (Math.sin(time * 2) * 0.2 + 0.8) * opacity;
  });
  
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
};

// Network Connections
const NetworkConnections = () => {
  const nodes = [
    [-2, 0, 0],
    [2, 0, 0],
    [0, 2, 0],
    [0, -2, 0],
    [1, 1, 1],
    [-1, -1, 1],
    [1, -1, -1],
    [-1, 1, -1],
  ];
  
  const connections = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
    [4, 5],
    [4, 6],
    [5, 7],
    [6, 7],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
  ];
  
  return (
    <group>
      {nodes.map((position, index) => (
        <NetworkNode 
          key={`node-${index}`} 
          position={position} 
          color={index % 2 === 0 ? "#5856d6" : "#34aadc"} 
        />
      ))}
      
      {connections.map((connection, index) => (
        <NetworkConnection 
          key={`connection-${index}`} 
          start={nodes[connection[0]]} 
          end={nodes[connection[1]]} 
          color={index % 2 === 0 ? "#5856d6" : "#34aadc"} 
          opacity={0.2} 
        />
      ))}
    </group>
  );
};

// Full Scene
const Scene = () => {
  const group = useRef();
  
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.1;
  });
  
  return (
    <group ref={group}>
      <FloatingSphere 
        position={[0, 0, 0]} 
        size={1} 
        color1="#5856d6" 
        color2="#34aadc" 
        distort={0.3} 
        speed={2} 
      />
      
      <FloatingSphere 
        position={[2, -1, -2]} 
        size={0.5} 
        color1="#34aadc" 
        color2="#007aff" 
        distort={0.5} 
        speed={3} 
      />
      
      <FloatingSphere 
        position={[-2, 1, -1]} 
        size={0.7} 
        color1="#007aff" 
        color2="#5ac8fa" 
        distort={0.4} 
        speed={2.5} 
      />
      
      <NetworkConnections />
    </group>
  );
};

const HeroAnimation = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Scene />
      <Environment preset="city" />
    </Canvas>
  );
};

export default HeroAnimation; 