import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import { OrbitControls, useGLTF, PresentationControls, Float, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaArrowRight, FaBriefcase, FaUsers, FaUserPlus } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

// Custom components
import HeroAnimation from '../animations/HeroAnimation';
import FeaturedUsers from '../components/home/FeaturedUsers';
import JobListings from '../components/home/JobListings';
import CommunityGroups from '../components/home/CommunityGroups';
import NetworkSuggestions from '../components/home/NetworkSuggestions';
import SpaceBackground from '../animations/SpaceBackground';
import NetworkVisualization from '../animations/NetworkVisualization';

// Custom Environment component with error handling
const SafeEnvironment = () => {
  return (
    <Suspense fallback={null}>
      <Environment preset="sunset" blur={0.8} />
    </Suspense>
  );
};

// 3D Model Component - Fallback for when Spline doesn't load
const Model = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={3.5}>
      <MeshDistortMaterial
        color="#5856d6"
        attach="material"
        distort={0.6}
        speed={2.5}
        roughness={0.1}
        metalness={0.2}
      />
    </Sphere>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [usersRef, usersInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [jobsRef, jobsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [communitiesRef, communitiesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [networkRef, networkInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const features = [
    {
      id: 1,
      icon: "💼",
      title: "Career Opportunities",
      description: "Discover job opportunities tailored to your skills and experience. Connect directly with hiring managers and companies."
    },
    {
      id: 2,
      icon: "🔗",
      title: "Network Expansion",
      description: "Build and grow your professional network. Connect with industry leaders, peers, and potential mentors."
    },
    {
      id: 3,
      icon: "💬",
      title: "Messaging",
      description: "Seamless communication with your connections. Share ideas, collaborate on projects, and stay in touch."
    },
    {
      id: 4,
      icon: "👥",
      title: "Community Groups",
      description: "Join communities based on your interests and industry. Share knowledge and stay updated with the latest trends."
    }
  ];
  
  const handleSplineLoad = () => {
    console.log("Spline model loaded successfully");
    setSplineLoaded(true);
  };

  const handleSplineError = (err) => {
    console.error("Error loading Spline model:", err);
    setSplineError(true);
  };

  return (
    <HomeContainer ref={containerRef}>
      <SpaceBackgroundContainer>
        <SpaceBackground />
      </SpaceBackgroundContainer>
      
      <HeroSection ref={heroRef}>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTagline>Professional Networking Reimagined</HeroTagline>
            <HeroTitle>
              Connect, Collaborate, and Grow Your Professional Network
            </HeroTitle>
            <HeroDescription>
              Postr is the modern platform for professionals to connect, share insights, and unlock new career opportunities. Build meaningful relationships that propel your career forward.
            </HeroDescription>
          </motion.div>
        </HeroContent>
        
        <HeroVisual>
          {splineError && (
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 300 }}
              >
                <Float
                  speed={2}
                  rotationIntensity={0.5}
                  floatIntensity={1}
                >
                  <Model />
                </Float>
              </PresentationControls>
              <SafeEnvironment />
            </Canvas>
          )}
          
          <SplineContainer $isLoaded={splineLoaded} $isError={splineError}>
            <Spline 
              scene="https://prod.spline.design/w6Bcv27rCr6CQ1w7/scene.splinecode" 
              onLoad={handleSplineLoad}
              onError={handleSplineError}
            />
          </SplineContainer>
        </HeroVisual>
        
        <ScrollIndicator 
          style={{ y, opacity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span>Scroll Down</span>
          <ScrollArrow />
        </ScrollIndicator>
      </HeroSection>
      
      <Section ref={featuresRef} first>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Why Professionals Choose Postr</SectionTitle>
          <SectionDescription>
            Our platform is designed to enhance your professional journey with features that matter.
          </SectionDescription>
        </SectionHeader>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              custom={index}
              variants={featureVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>
      
      <Section ref={usersRef} alternate>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={usersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Featured Professionals</SectionTitle>
          <SectionDescription>
            Connect with industry leaders and experts in your field.
          </SectionDescription>
        </SectionHeader>
        
        <FeaturedUsers isVisible={usersInView} />
      </Section>
      
      <Section ref={jobsRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={jobsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Trending Job Opportunities</SectionTitle>
          <SectionDescription>
            Find your next career move with companies that value your skills.
          </SectionDescription>
        </SectionHeader>
        
        <JobListings isVisible={jobsInView} />
      </Section>
      
      <Section ref={communitiesRef} alternate>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={communitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Explore Communities</SectionTitle>
          <SectionDescription>
            Join groups of like-minded professionals and expand your knowledge.
          </SectionDescription>
        </SectionHeader>
        
        <CommunityGroups isVisible={communitiesInView} />
      </Section>
      
      <Section ref={networkRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={networkInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Grow Your Network</SectionTitle>
          <SectionDescription>
            Connect with professionals who can help accelerate your career growth.
          </SectionDescription>
        </SectionHeader>
        
        <NetworkSuggestions isVisible={networkInView} />
      </Section>
      
      <CTASection ref={ctaRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
        >
          <CTAContent>
            <CTATitle>Ready to transform your professional journey?</CTATitle>
            <CTADescription>
              Join thousands of professionals who have already discovered the power of Postr for career growth.
            </CTADescription>
            <CTAButton to="/network">Get Started Now</CTAButton>
          </CTAContent>
        </motion.div>
      </CTASection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: linear-gradient(135deg, #0f0f13 0%, #17171d 100%);
`;

const SpaceBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  height: 680px; /* Slightly increased height */
  background: #000000;
  overflow: visible; /* Changed from hidden to allow for overlap */
  padding-top: 90px; /* Increased padding for better spacing from navbar */
  margin-bottom: 0; /* Remove margin to allow sections to flow together */
  z-index: 1; /* Ensure it's above the SpaceBackground */
  
  &::after {
    content: "";
    position: absolute;
    bottom: -30px; /* Extend beyond the section for seamless transition */
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, rgba(15, 15, 19, 1) 20%, transparent);
    z-index: 2;
  }
  
  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
    min-height: 800px;
    padding-bottom: 80px;
  }
  
  @media (max-width: 576px) {
    min-height: 700px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--spacing-lg);
  max-width: 550px; /* Slightly increased for better text layout */
  z-index: 2;
  margin-left: calc((100% - 1200px) / 2);
  
  @media (max-width: 1200px) {
    margin-left: var(--spacing-lg);
  }
  
  @media (max-width: 992px) {
    padding: var(--spacing-xl) var(--spacing-lg);
    text-align: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  
  @media (max-width: 576px) {
    padding: var(--spacing-lg);
  }
`;

const HeroTagline = styled.p`
  color: var(--primary);
  font-weight: var(--font-weight-semibold);
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(88, 86, 214, 0.3));
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  background: linear-gradient(90deg, #ffffff, #b3b2f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #5856d6, #8f8cf7);
    border-radius: 3px;
  }
  
  @media (max-width: 992px) {
    font-size: 2.5rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: var(--on-surface);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const HeroVisual = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  z-index: 2;
  
  @media (max-width: 992px) {
    height: 450px;
    max-width: 100%;
    margin-top: 30px;
  }
  
  @media (max-width: 576px) {
    height: 350px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px; /* Increased from 30px for better spacing */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--on-surface);
  font-size: 14px;
  cursor: pointer;
  
  span {
    margin-bottom: 8px;
  }
`;

const ScrollArrow = styled.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  filter: drop-shadow(0 0 5px rgba(88, 86, 214, 0.5));
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

const Section = styled.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  margin: 0; /* Remove top margin from first section */
  margin-top: ${props => props.first ? '-50px' : '60px'}; /* Overlap with hero section if first */
  background-color: ${props => props.alternate ? 'rgba(30, 30, 36, 0.7)' : 'rgba(18, 18, 24, 0.5)'};
  border-radius: 24px; /* More rounded corners for futuristic look */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: ${props => props.first ? '3' : '1'}; /* Ensure the first section is above the hero gradient */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(88, 86, 214, 0.3), transparent);
    animation: glowLine 8s infinite linear;
  }
  
  @keyframes glowLine {
    0% {
      left: -50%;
    }
    100% {
      left: 100%;
    }
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #ffffff, #c4c3f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #5856d6, #8f8cf7);
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--on-surface);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: var(--spacing-xl);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(88, 86, 214, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(88, 86, 214, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: var(--spacing-md);
  color: #5856d6;
  background: linear-gradient(135deg, #5856d6, #8f8cf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(88, 86, 214, 0.3));
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--on-background);
  margin-bottom: var(--spacing-sm);
`;

const FeatureDescription = styled.p`
  color: var(--on-surface);
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  margin-top: 80px; /* Increased spacing */
  margin-bottom: 80px; /* Increased spacing */
  background: linear-gradient(135deg, rgba(30, 30, 36, 0.7) 0%, rgba(18, 18, 24, 0.7) 100%);
  text-align: center;
  border-radius: 24px; /* More rounded corners */
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(88, 86, 214, 0.2), transparent 70%);
    z-index: -1;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: var(--spacing-xl);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(88, 86, 214, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: subtle-pulse 4s infinite alternate;
  
  @keyframes subtle-pulse {
    0% {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(88, 86, 214, 0.1);
    }
    100% {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 25px rgba(88, 86, 214, 0.3);
    }
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #ffffff, #b3b2f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: var(--on-surface);
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  color: white;
  font-weight: var(--font-weight-semibold);
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  border: none;
  box-shadow: 0 5px 20px rgba(88, 86, 214, 0.4);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 7px 25px rgba(88, 86, 214, 0.6);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const SplineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$isLoaded && !props.$isError ? 1 : 0};
  transition: opacity 0.7s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  
  canvas {
    object-fit: contain !important;
    max-width: 100% !important;
    max-height: 100% !important;
    transform: scale(0.9);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(88, 86, 214, 0.1) 0%, transparent 70%);
    filter: blur(20px);
    opacity: ${props => props.$isLoaded ? 0.7 : 0};
    transition: opacity 1s ease;
    pointer-events: none;
  }
  
  pointer-events: ${props => props.$isLoaded ? 'auto' : 'none'};
`;

export default Home; 