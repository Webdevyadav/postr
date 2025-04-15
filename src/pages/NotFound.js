import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const NotFoundScene = () => {
  return (
    <group>
      <Float 
        speed={1.5}
        rotationIntensity={0.4}
        floatIntensity={0.4}
      >
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial 
            color="#5856d6" 
            emissive="#5856d6"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      <Float 
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        position={[2, -1, -2]}
      >
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial 
            color="#34aadc" 
            emissive="#34aadc"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      <Float 
        speed={2.5}
        rotationIntensity={0.6}
        floatIntensity={0.6}
        position={[-2, 1, -1]}
      >
        <mesh>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial 
            color="#5ac8fa" 
            emissive="#5ac8fa"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

const NotFound = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <NotFoundContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <ContentContainer>
        <TextContainer>
          <ErrorCodeText variants={itemVariants}>404</ErrorCodeText>
          <Title variants={itemVariants}>Page Not Found</Title>
          <Description variants={itemVariants}>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </Description>
          <motion.div variants={itemVariants}>
            <BackHomeButton to="/">Back to Home</BackHomeButton>
          </motion.div>
        </TextContainer>
        
        <VisualContainer variants={itemVariants}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <NotFoundScene />
          </Canvas>
        </VisualContainer>
      </ContentContainer>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background-color: var(--background);
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: var(--spacing-xxl);
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-top: var(--spacing-xl);
  }
`;

const ErrorCodeText = styled(motion.h1)`
  font-size: 8rem;
  font-weight: 800;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1;
  
  @media (max-width: 576px) {
    font-size: 6rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--on-background);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--on-surface);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const BackHomeButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background: var(--gradient-1);
  color: white;
  font-weight: var(--font-weight-semibold);
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(88, 86, 214, 0.4);
  }
`;

const VisualContainer = styled(motion.div)`
  flex: 1;
  height: 400px;
`;

export default NotFound; 