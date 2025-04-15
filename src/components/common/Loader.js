import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <LoaderWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LogoContainer>
        <Logo>
          <LogoCircle />
          <LogoText>postr</LogoText>
        </Logo>
        <LoadingBar>
          <LoadingProgress />
        </LoadingBar>
      </LogoContainer>
    </LoaderWrapper>
  );
};

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(88, 86, 214, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(88, 86, 214, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(88, 86, 214, 0);
  }
`;

const progress = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const LoaderWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  z-index: 9999;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const LogoCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-1);
  margin-right: 12px;
  animation: ${pulse} 1.5s infinite;
`;

const LogoText = styled.h1`
  font-size: 36px;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 700;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const LoadingProgress = styled.div`
  height: 100%;
  background: var(--gradient-1);
  border-radius: 2px;
  animation: ${progress} 2s ease-in-out infinite;
`;

export default Loader; 