import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

// Color constants
const NODE_COLORS = {
  primary: new THREE.Color('#5856d6'),
  secondary: new THREE.Color('#34aadc'),
  accent: new THREE.Color('#5ac8fa'),
  highlight: new THREE.Color('#ff2d55')
};

// Generate network node positions in a 3D space
const generateNodes = (count) => {
  const nodes = [];
  
  // Create a sphere of nodes
  for (let i = 0; i < count; i++) {
    // Use fibonacci sphere algorithm for even distribution
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    
    // Random radius between 2 and 3
    const radius = 2 + Math.random() * 1;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    // Node properties
    nodes.push({
      id: i,
      position: new THREE.Vector3(x, y, z),
      size: 0.04 + Math.random() * 0.05,
      color: Math.random() > 0.8 ? NODE_COLORS.highlight : 
             Math.random() > 0.5 ? NODE_COLORS.secondary : NODE_COLORS.primary,
      pulseSpeed: 0.5 + Math.random(),
      pulseStrength: 0.1 + Math.random() * 0.3,
      connections: []
    });
  }
  
  // Create connections (edges) between nodes
  nodes.forEach(node => {
    // Each node connects to 2-5 other nodes
    const connectionCount = 2 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < connectionCount; i++) {
      // Find a random node to connect to (not including self)
      let targetIndex;
      do {
        targetIndex = Math.floor(Math.random() * nodes.length);
      } while (targetIndex === node.id || node.connections.includes(targetIndex));
      
      // Add connection
      node.connections.push(targetIndex);
      
      // Make the connection bidirectional (not always)
      if (Math.random() > 0.5) {
        nodes[targetIndex].connections.push(node.id);
      }
    }
  });
  
  return nodes;
};

// Network node component with pulsing animation
const Node = ({ position, size, color, pulseSpeed, pulseStrength, isHighlighted, onClick }) => {
  const meshRef = useRef();
  const initialSize = size;
  
  // Spring animation for highlighting
  const { scale } = useSpring({
    scale: isHighlighted ? 1.8 : 1,
    config: { tension: 150, friction: 20 }
  });
  
  // Animate the node pulsing
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const pulse = Math.sin(time * pulseSpeed) * pulseStrength + 1;
      meshRef.current.scale.setScalar(initialSize * pulse);
    }
  });
  
  return (
    <animated.mesh 
      ref={meshRef} 
      position={position} 
      scale={scale.to(s => [s * initialSize, s * initialSize, s * initialSize])}
      onClick={onClick}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial 
        color={isHighlighted ? NODE_COLORS.highlight : color} 
        roughness={0.3}
        metalness={0.8}
        emissive={isHighlighted ? NODE_COLORS.highlight : color}
        emissiveIntensity={isHighlighted ? 0.7 : 0.4}
      />
    </animated.mesh>
  );
};

// Connection line between nodes
const Connection = ({ startPosition, endPosition, isHighlighted }) => {
  const lineRef = useRef();
  
  // Create geometry
  const points = [startPosition, endPosition];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  useFrame(({ clock }) => {
    if (lineRef.current && isHighlighted) {
      const time = clock.getElapsedTime();
      // Animate the line opacity for highlighted connections
      lineRef.current.material.opacity = Math.sin(time * 3) * 0.2 + 0.8;
    }
  });
  
  return (
    <line ref={lineRef} geometry={lineGeometry}>
      <lineBasicMaterial 
        color={isHighlighted ? "#ff2d55" : "#5856d6"} 
        transparent={true} 
        opacity={isHighlighted ? 0.8 : 0.2} 
        linewidth={1}
      />
    </line>
  );
};

// Data flow animation along connections
const DataFlow = ({ startPos, endPos, speed, color }) => {
  const meshRef = useRef();
  const [progress, setProgress] = useState(0);
  const direction = new THREE.Vector3().subVectors(endPos, startPos).normalize();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Update progress along the path
      setProgress(prev => {
        const newProgress = prev + speed * 0.01;
        if (newProgress > 1) {
          // Reset when reaching endpoint
          return 0;
        }
        return newProgress;
      });
      
      // Calculate current position
      const currentPos = new THREE.Vector3().lerpVectors(startPos, endPos, progress);
      meshRef.current.position.copy(currentPos);
    }
  });
  
  // Only render if in progress
  if (progress === 0) return null;
  
  return (
    <mesh ref={meshRef} scale={[0.02, 0.02, 0.02]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

// Main network visualization component
const NetworkVisualization = () => {
  const groupRef = useRef();
  const [nodes] = useState(() => generateNodes(25));
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [dataFlows, setDataFlows] = useState([]);
  
  // Rotate the entire network slowly
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    }
    
    // Occasionally create new data flows
    if (Math.random() < 0.02) {
      const sourceNode = Math.floor(Math.random() * nodes.length);
      if (nodes[sourceNode].connections.length > 0) {
        const targetIndex = Math.floor(Math.random() * nodes[sourceNode].connections.length);
        const targetNode = nodes[sourceNode].connections[targetIndex];
        
        setDataFlows(prev => {
          // Remove an old flow if there are too many
          if (prev.length > 20) {
            return [
              ...prev.slice(1),
              {
                id: Date.now(),
                source: sourceNode,
                target: targetNode,
                speed: 0.5 + Math.random(),
                color: Math.random() > 0.7 ? '#ff2d55' : '#5ac8fa'
              }
            ];
          }
          
          return [
            ...prev,
            {
              id: Date.now(),
              source: sourceNode,
              target: targetNode,
              speed: 0.5 + Math.random(),
              color: Math.random() > 0.7 ? '#ff2d55' : '#5ac8fa'
            }
          ];
        });
      }
    }
  });
  
  // Handle node click
  const handleNodeClick = (nodeId) => {
    if (highlightedNode === nodeId) {
      setHighlightedNode(null);
    } else {
      setHighlightedNode(nodeId);
    }
  };
  
  return (
    <group ref={groupRef}>
      {/* Render connections first (behind nodes) */}
      {nodes.map(node => 
        node.connections.map(targetId => (
          <Connection 
            key={`${node.id}-${targetId}`}
            startPosition={node.position}
            endPosition={nodes[targetId].position}
            isHighlighted={
              highlightedNode === node.id || 
              highlightedNode === targetId
            }
          />
        ))
      )}
      
      {/* Render nodes */}
      {nodes.map(node => (
        <Node 
          key={node.id}
          position={node.position}
          size={node.size}
          color={node.color}
          pulseSpeed={node.pulseSpeed}
          pulseStrength={node.pulseStrength}
          isHighlighted={highlightedNode === node.id}
          onClick={() => handleNodeClick(node.id)}
        />
      ))}
      
      {/* Render data flows */}
      {dataFlows.map(flow => (
        <DataFlow 
          key={flow.id}
          startPos={nodes[flow.source].position}
          endPos={nodes[flow.target].position}
          speed={flow.speed}
          color={flow.color}
        />
      ))}
    </group>
  );
};

export default NetworkVisualization; 