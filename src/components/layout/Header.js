import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaUsers, FaBell, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <HeaderWrapper scrolled={isScrolled}>
      <Container>
        <LogoSection to="/">
          <LogoIcon />
          <LogoText>postr</LogoText>
        </LogoSection>

        <SearchContainer isOpen={isSearchOpen}>
          <SearchIconWrapper onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <FaSearch />
          </SearchIconWrapper>
          <SearchInput
            type="text"
            placeholder="Search for people, jobs, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            isOpen={isSearchOpen}
          />
        </SearchContainer>

        <Navigation>
          <NavItem exact="true" to="/">
            <FaHome />
            <NavText>Home</NavText>
          </NavItem>
          
          <NavItem to="/network">
            <FaNetworkWired />
            <NavText>Network</NavText>
          </NavItem>
          
          <NavItem to="/jobs">
            <FaBriefcase />
            <NavText>Jobs</NavText>
          </NavItem>
          
          <NavItem to="/messages">
            <FaEnvelope />
            <NavText>Messages</NavText>
          </NavItem>
          
          <NavItem to="/communities">
            <FaUsers />
            <NavText>Communities</NavText>
          </NavItem>
        </Navigation>

        <ProfileSection>
          <NotificationBadge as={Link} to="/notifications">
            <FaBell />
            <NotificationCount>3</NotificationCount>
          </NotificationBadge>
          
          <EnhancedProfileButton to="/profile/me">
            <ProfileAvatarWrapper>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
            </ProfileAvatarWrapper>
            <ProfileButtonText>My Profile</ProfileButtonText>
          </EnhancedProfileButton>
        </ProfileSection>

        <MobileMenuToggle onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavItems>
                <MobileNavItem exact="true" to="/">
                  <FaHome />
                  <span>Home</span>
                </MobileNavItem>
                
                <MobileNavItem to="/network">
                  <FaNetworkWired />
                  <span>Network</span>
                </MobileNavItem>
                
                <MobileNavItem to="/jobs">
                  <FaBriefcase />
                  <span>Jobs</span>
                </MobileNavItem>
                
                <MobileNavItem to="/messages">
                  <FaEnvelope />
                  <span>Messages</span>
                </MobileNavItem>
                
                <MobileNavItem to="/communities">
                  <FaUsers />
                  <span>Communities</span>
                </MobileNavItem>
                
                <MobileNavItem to="/notifications">
                  <FaBell />
                  <span>Notifications</span>
                </MobileNavItem>
              </MobileNavItems>
              
              <MobileSearchContainer>
                <MobileSearchInput
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MobileSearchButton>
                  <FaSearch />
                </MobileSearchButton>
              </MobileSearchContainer>
              
              <MobileProfileSection>
                <MobileProfileAvatar to="/profile/me">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
                  <span>View My Profile</span>
                </MobileProfileAvatar>
              </MobileProfileSection>
            </MobileMenu>
          )}
        </AnimatePresence>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${props => props.scrolled ? 'rgba(18, 18, 20, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gradient-1);
  margin-right: 12px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${props => props.isOpen ? '300px' : '40px'};
  transition: width 0.3s ease;
  margin-left: 16px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--on-surface);
  cursor: pointer;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 20px;
  padding: 0 16px 0 40px;
  color: var(--on-background);
  font-size: 14px;
  outline: none;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 12px;
  color: var(--on-surface);
  text-decoration: none;
  font-size: 24px;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    color: var(--primary);
  }
  
  &.active {
    color: var(--primary);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      width: 5px;
      height: 5px;
      background-color: var(--primary);
      border-radius: 50%;
    }
  }
`;

const NavText = styled.span`
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-left: auto;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const NotificationBadge = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--on-surface);
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--on-background);
  }
`;

const NotificationCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: var(--primary);
  color: white;
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileAvatar = styled(Link)`
  display: none;
`;

const EnhancedProfileButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 6px;
  background: rgba(88, 86, 214, 0.15);
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid rgba(88, 86, 214, 0.3);
  
  &:hover {
    background: rgba(88, 86, 214, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(88, 86, 214, 0.2);
  }
`;

const ProfileAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileButtonText = styled.span`
  color: var(--on-background);
  font-size: 14px;
  font-weight: var(--font-weight-medium);
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--on-surface);
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: calc(100vh - 70px);
  background-color: var(--surface);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
`;

const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const MobileNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 0;
  color: var(--on-surface);
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  svg {
    margin-right: 12px;
    font-size: 20px;
  }
  
  &:hover {
    color: var(--primary);
  }
  
  &.active {
    color: var(--primary);
  }
`;

const MobileSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const MobileSearchInput = styled.input`
  flex: 1;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px 0 0 4px;
  padding: 0 16px;
  color: var(--on-background);
  font-size: 14px;
  outline: none;
  
  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const MobileSearchButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: var(--primary);
  border: none;
  border-radius: 0 4px 4px 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MobileProfileSection = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileProfileAvatar = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--on-surface);
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
    border: 2px solid var(--primary);
  }
  
  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export default Header; 