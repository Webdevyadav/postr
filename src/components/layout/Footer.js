import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaArrowUp, FaGlobe, FaCodeBranch, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterWrapper>
      <BackgroundGlow />
      <GlowLine />
      
      <FooterContent>
        <FooterTopSection>
          <FooterBranding>
            <FooterLogo>
              <LogoIcon />
              <LogoText>postr</LogoText>
            </FooterLogo>
            
            <FooterTagline>
              Connect, share, and grow your professional network in the digital age
            </FooterTagline>
            
            <SubscribeForm>
              <SubscribeInput 
                type="email" 
                placeholder="Enter your email"
              />
              <SubscribeButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </SubscribeButton>
            </SubscribeForm>
          </FooterBranding>
          
          <FooterLinks>
            <FooterLinkGroup>
              <FooterLinkHeader>Company</FooterLinkHeader>
              <AnimatedLink to="/about">About Us</AnimatedLink>
              <AnimatedLink to="/careers">Careers</AnimatedLink>
              <AnimatedLink to="/press">Press</AnimatedLink>
              <AnimatedLink to="/blog">Blog</AnimatedLink>
              <AnimatedLink to="/contact">Contact</AnimatedLink>
            </FooterLinkGroup>
            
            <FooterLinkGroup>
              <FooterLinkHeader>Resources</FooterLinkHeader>
              <AnimatedLink to="/help-center">Help Center</AnimatedLink>
              <AnimatedLink to="/community-guidelines">Community Guidelines</AnimatedLink>
              <AnimatedLink to="/privacy">Privacy Policy</AnimatedLink>
              <AnimatedLink to="/terms">Terms of Service</AnimatedLink>
              <AnimatedLink to="/accessibility">Accessibility</AnimatedLink>
            </FooterLinkGroup>
            
            <FooterLinkGroup>
              <FooterLinkHeader>Features</FooterLinkHeader>
              <AnimatedLink to="/network">Network</AnimatedLink>
              <AnimatedLink to="/jobs">Jobs</AnimatedLink>
              <AnimatedLink to="/messages">Messages</AnimatedLink>
              <AnimatedLink to="/communities">Communities</AnimatedLink>
              <AnimatedLink to="/events">Events</AnimatedLink>
            </FooterLinkGroup>
          </FooterLinks>
        </FooterTopSection>
        
        <FooterBottom>
          <SocialLinks>
            <SocialLink 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </SocialLink>
            <SocialLink 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Github"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Youtube"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
          
          <Copyright>
            <CopyrightText>
              © {new Date().getFullYear()} Postr. All rights reserved.
            </CopyrightText>
            <MadeWith>
              Made with <FaHeart /> by Sachin Yadav
            </MadeWith>
          </Copyright>
          
          <FooterAction>
            <FooterButton 
              as={Link} 
              to="/api"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCodeBranch /> API
            </FooterButton>
            <FooterButton 
              as="a" 
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGlobe /> Website
            </FooterButton>
            <ScrollToTopButton 
              onClick={scrollToTop}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp />
            </ScrollToTopButton>
          </FooterAction>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #0c0c14;
  padding: 80px 0 40px;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  bottom: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(88, 86, 214, 0.1) 0%, rgba(88, 86, 214, 0.05) 30%, rgba(88, 86, 214, 0) 70%);
  filter: blur(60px);
  z-index: -1;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 300px;
    left: -400px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(130, 87, 229, 0.1) 0%, rgba(130, 87, 229, 0.05) 30%, rgba(130, 87, 229, 0) 70%);
    filter: blur(60px);
  }
`;

const GlowLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(88, 86, 214, 0) 0%,
    rgba(88, 86, 214, 0.5) 50%,
    rgba(88, 86, 214, 0) 100%
  );
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const FooterTopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterBranding = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5856d6, #a55eea);
  margin-right: 12px;
`;

const LogoText = styled.h3`
  font-size: 28px;
  background: linear-gradient(135deg, #5856d6, #a55eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin: 0;
  font-weight: 700;
`;

const FooterTagline = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 20px 0;
  font-size: 16px;
  max-width: 340px;
  line-height: 1.6;
`;

const SubscribeForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SubscribeInput = styled.input`
  flex: 1;
  height: 44px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  padding: 0 20px;
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(88, 86, 214, 0.5);
    box-shadow: 0 0 0 3px rgba(88, 86, 214, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SubscribeButton = styled(motion.button)`
  height: 44px;
  padding: 0 20px;
  background: linear-gradient(135deg, #5856d6, #a55eea);
  border: none;
  border-radius: 22px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLinkHeader = styled.h4`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, #5856d6, #a55eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
`;

const AnimatedLink = styled(Link)`
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 12px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 15px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #5856d6, #a55eea);
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #fff;
    transform: translateX(5px);
    
    &:before {
      opacity: 1;
      box-shadow: 0 0 10px rgba(88, 86, 214, 0.6);
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    order: 1;
    margin-top: 20px;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(88, 86, 214, 0.2);
    color: #fff;
  }
`;

const Copyright = styled.div`
  @media (max-width: 768px) {
    order: 0;
  }
`;

const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin: 0 0 5px;
`;

const MadeWith = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
  svg {
    color: #ff6b81;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const FooterAction = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const FooterButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  svg {
    font-size: 12px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const ScrollToTopButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(88, 86, 214, 0.2), rgba(165, 94, 234, 0.2));
  border: 1px solid rgba(88, 86, 214, 0.3);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  cursor: pointer;
`;

export default Footer; 