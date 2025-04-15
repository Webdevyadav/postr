import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useThree, extend } from '@react-three/fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

extend({ EffectComposer, RenderPass, UnrealBloomPass });

// Generate random stars
function generateStars(count, spread) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * spread;
    positions[i3 + 1] = (Math.random() - 0.5) * spread;
    positions[i3 + 2] = (Math.random() - 0.5) * spread;

    // Add some color variation
    const color = new THREE.Color();
    
    // Create different star colors with a bias towards blue and purple
    const colorChoice = Math.random();
    if (colorChoice > 0.8) {
      // Blue stars
      color.setHSL(0.6, 1, 0.9);
    } else if (colorChoice > 0.6) {
      // Purple stars
      color.setHSL(0.75, 1, 0.9);
    } else if (colorChoice > 0.4) {
      // White stars
      color.setRGB(1, 1, 1);
    } else if (colorChoice > 0.2) {
      // Cyan stars
      color.setHSL(0.5, 1, 0.9);
    } else {
      // Yellow stars (fewer)
      color.setHSL(0.15, 0.8, 0.8);
    }

    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;

    // Randomize star sizes
    sizes[i] = Math.random() * 1.5 + 0.5;
  }

  return { positions, colors, sizes };
}

// Shooting stars component
function ShootingStars({ count = 20 }) {
  const mesh = useRef();
  const trailMeshes = useRef([]);
  
  // Initialize shooting stars data
  const shootingStars = useRef(Array.from({ length: count }, () => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150
    ),
    velocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.8,
      (Math.random() - 0.5) * 0.8,
      (Math.random() - 0.5) * 0.8
    ).normalize().multiplyScalar(0.5 + Math.random() * 1.5),
    size: 0.5 + Math.random() * 1,
    active: false,
    timeToActivate: Math.random() * 50, // Random delay before becoming active
    lifespan: 2 + Math.random() * 3 // How long the shooting star is visible
  })));

  // Create the trail meshes once
  React.useEffect(() => {
    trailMeshes.current = shootingStars.current.map(() => {
      const geometry = new THREE.BufferGeometry();
      const trailLength = 20;
      const positions = new Float32Array(trailLength * 3);
      
      // Initialize with positions outside view
      for (let i = 0; i < trailLength; i++) {
        positions[i * 3] = 0;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = 0;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      // Create gradient material from blue/white to transparent
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0x88ccff),
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      
      return { geometry, material, positions, active: false };
    });
  }, []);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    shootingStars.current.forEach((star, index) => {
      // Check if it's time to activate this shooting star
      if (!star.active && time > star.timeToActivate) {
        star.active = true;
        star.startTime = time;
        star.position.set(
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 150
        );
        
        // Normalize direction and set speed
        star.velocity.set(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize().multiplyScalar(0.5 + Math.random() * 1.5);
      }
      
      // If active, update position
      if (star.active) {
        const elapsedTime = time - star.startTime;
        
        // If the star has lived its lifespan, reset it
        if (elapsedTime > star.lifespan) {
          star.active = false;
          star.timeToActivate = time + Math.random() * 10; // Random delay before becoming active again
          return;
        }
        
        // Update position
        star.position.add(star.velocity);
        
        // Update trail
        const trailMesh = trailMeshes.current[index];
        const positions = trailMesh.positions;
        
        // Shift all positions back
        for (let i = positions.length / 3 - 1; i > 0; i--) {
          positions[i * 3] = positions[(i - 1) * 3];
          positions[i * 3 + 1] = positions[(i - 1) * 3 + 1];
          positions[i * 3 + 2] = positions[(i - 1) * 3 + 2];
        }
        
        // Add new position to the front
        positions[0] = star.position.x;
        positions[1] = star.position.y;
        positions[2] = star.position.z;
        
        // Update geometry
        trailMesh.geometry.attributes.position.needsUpdate = true;
      }
    });
  });
  
  return (
    <group ref={mesh}>
      {trailMeshes.current.map((trailMesh, index) => (
        <line key={index} geometry={trailMesh.geometry} material={trailMesh.material} />
      ))}
    </group>
  );
}

function Stars({ count = 5000 }) {
  const pointsRef = useRef();
  const { positions, colors, sizes } = generateStars(count, 100);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    // Rotate the stars slightly
    if (pointsRef.current) {
      pointsRef.current.rotation.x = time * 0.02;
      pointsRef.current.rotation.y = time * 0.01;
    }
    
    // Animate star sizes for twinkling effect
    const sizes = pointsRef.current.geometry.attributes.size.array;
    for (let i = 0; i < sizes.length; i++) {
      sizes[i] = Math.max(0.5, Math.sin(time + i * 100) * 0.5 + 1);
    }
    pointsRef.current.geometry.attributes.size.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <PointMaterial
        size={1}
        sizeAttenuation={true}
        transparent
        alphaTest={0.5}
        depthWrite={false}
        vertexColors
      />
    </Points>
  );
}

// Add a nebula background
function Nebula() {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime() * 0.1;
      mesh.current.material.uniforms.time.value = time;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, -50]} scale={[100, 100, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 },
          color1: { value: new THREE.Color("#5856d6") },
          color2: { value: new THREE.Color("#34aadc") }
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          
          // Simplex noise function from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
          vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
          
          float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
              dot(x12.zw,x12.zw)), 0.0);
            m = m*m;
            m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }
          
          void main() {
            // Create a slowly moving nebula effect
            vec2 p = vUv * 4.0;
            float noise = snoise(p + time * 0.1) * 0.5 + 0.5;
            noise += snoise(p * 2.0 + time * 0.2) * 0.25 + 0.25;
            noise += snoise(p * 4.0 + time * 0.3) * 0.125 + 0.125;
            noise /= 1.875;
            
            // Mix colors based on noise
            vec3 color = mix(color1, color2, noise);
            
            // Add some variation in brightness
            float brightness = snoise(p * 0.5 + time * 0.05) * 0.5 + 0.5;
            brightness = pow(brightness, 2.0) * 0.4;
            
            // Final color with opacity for a subtle effect
            gl_FragColor = vec4(color, brightness * 0.15);
          }
        `}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function Effects() {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef();

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  return (
    <effectComposer ref={composerRef} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass
        attachArray="passes"
        args={[new THREE.Vector2(size.width, size.height), 1.8, 0.4, 0.85]}
      />
    </effectComposer>
  );
}

function SpaceBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
      <color attach="background" args={['#050510']} />
      <fog attach="fog" args={['#050510', 50, 200]} />
      <ambientLight intensity={0.2} />
      <Nebula />
      <Stars count={6000} />
      <ShootingStars count={15} />
      <Effects />
    </Canvas>
  );
}

export default SpaceBackground; 