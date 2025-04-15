import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaTimes, FaFilter, FaSearch, FaBriefcase, FaMapMarkerAlt, FaNetworkWired, FaUser, FaPowerOff } from 'react-icons/fa';

const Network = () => {
  const [activeTab, setActiveTab] = useState('connections');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Add effect to simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const connections = [
    {
      id: 1,
      name: 'Alex Morgan',
      title: 'Product Designer at Google',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      mutualConnections: 12,
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'David Chen',
      title: 'Software Engineer at Meta',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      mutualConnections: 8,
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      title: 'Marketing Director at Twitter',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      mutualConnections: 15,
      location: 'Austin, TX'
    },
    {
      id: 4,
      name: 'Michael Brown',
      title: 'Data Scientist at IBM',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      mutualConnections: 6,
      location: 'Boston, MA'
    },
    {
      id: 5,
      name: 'Emily Wilson',
      title: 'Senior Software Engineer at Netflix',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      mutualConnections: 12,
      location: 'San Francisco, CA'
    },
    {
      id: 6,
      name: 'Jason Lee',
      title: 'Product Manager at Dropbox',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      mutualConnections: 8,
      location: 'New York, NY'
    },
    {
      id: 7,
      name: 'Rachel Green',
      title: 'UX Designer at Adobe',
      image: 'https://randomuser.me/api/portraits/women/79.jpg',
      mutualConnections: 15,
      location: 'Austin, TX'
    },
    {
      id: 8,
      name: 'Mark Thompson',
      title: 'Data Scientist at IBM',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      mutualConnections: 6,
      location: 'Boston, MA'
    }
  ];

  const suggestions = [
    {
      id: 9,
      name: 'Sophia Martinez',
      title: 'Frontend Developer at Airbnb',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      mutualConnections: 11,
      location: 'Seattle, WA'
    },
    {
      id: 10,
      name: 'Brian Johnson',
      title: 'Marketing Director at Shopify',
      image: 'https://randomuser.me/api/portraits/men/36.jpg',
      mutualConnections: 9,
      location: 'Chicago, IL'
    },
    {
      id: 11,
      name: 'Jessica Williams',
      title: 'Product Manager at Uber',
      image: 'https://randomuser.me/api/portraits/women/24.jpg',
      mutualConnections: 7,
      location: 'Los Angeles, CA'
    },
    {
      id: 12,
      name: 'Robert Davis',
      title: 'Backend Developer at Stripe',
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
      mutualConnections: 5,
      location: 'Portland, OR'
    }
  ];

  const invitations = [
    {
      id: 13,
      name: 'Laura Smith',
      title: 'Content Strategist at Adobe',
      image: 'https://randomuser.me/api/portraits/women/54.jpg',
      mutualConnections: 4,
      date: '2 days ago',
      location: 'Denver, CO'
    },
    {
      id: 14,
      name: 'Daniel Jackson',
      title: 'UI Designer at Figma',
      image: 'https://randomuser.me/api/portraits/men/71.jpg',
      mutualConnections: 3,
      date: '1 week ago',
      location: 'Seattle, WA'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    initial: { 
      boxShadow: "0 0 0 rgba(88, 86, 214, 0)" 
    },
    animate: { 
      boxShadow: "0 0 15px rgba(88, 86, 214, 0.4)",
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" 
      }
    }
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <NetworkBackground>
        <NetworkNode style={{ top: '10%', left: '20%', animationDelay: '0s' }} />
        <NetworkNode style={{ top: '25%', right: '15%', animationDelay: '0.5s' }} />
        <NetworkNode style={{ bottom: '30%', left: '15%', animationDelay: '1s' }} />
        <NetworkNode style={{ bottom: '15%', right: '25%', animationDelay: '1.5s' }} />
        <NetworkNode style={{ top: '50%', left: '50%', animationDelay: '2s' }} />
        <NetworkLine style={{ top: '15%', left: '30%', width: '20%', transform: 'rotate(30deg)' }} />
        <NetworkLine style={{ top: '30%', right: '25%', width: '15%', transform: 'rotate(-45deg)' }} />
        <NetworkLine style={{ bottom: '40%', left: '20%', width: '30%', transform: 'rotate(-20deg)' }} />
        <NetworkLine style={{ bottom: '20%', right: '30%', width: '25%', transform: 'rotate(60deg)' }} />
      </NetworkBackground>
      
      <PageContent>
        <NetworkHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title>
            <FaNetworkWired style={{ marginRight: '10px' }} />
            My Network
          </Title>
          <SearchContainer>
            <SearchIconWrapper>
              <FaSearch />
            </SearchIconWrapper>
            <SearchInput 
              type="text" 
              placeholder="Search connections..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
          <FilterButton 
            onClick={() => setShowFilters(!showFilters)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilter />
            <span>Filters</span>
          </FilterButton>
        </NetworkHeader>

        <AnimatePresence>
          {showFilters && (
            <FiltersContainer
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FilterGroup>
                <FilterLabel>Location</FilterLabel>
                <FilterSelect>
                  <option value="">All Locations</option>
                  <option value="San Francisco, CA">San Francisco, CA</option>
                  <option value="New York, NY">New York, NY</option>
                  <option value="Austin, TX">Austin, TX</option>
                </FilterSelect>
              </FilterGroup>
              
              <FilterGroup>
                <FilterLabel>Industry</FilterLabel>
                <FilterSelect>
                  <option value="">All Industries</option>
                  <option value="Technology">Technology</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                </FilterSelect>
              </FilterGroup>
              
              <FilterGroup>
                <FilterLabel>Connection</FilterLabel>
                <FilterSelect>
                  <option value="">All Connections</option>
                  <option value="1st">1st Connections</option>
                  <option value="2nd">2nd Connections</option>
                  <option value="3rd">3rd+ Connections</option>
                </FilterSelect>
              </FilterGroup>
              
              <ApplyFiltersButton
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(88, 86, 214, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Filters
              </ApplyFiltersButton>
            </FiltersContainer>
          )}
        </AnimatePresence>
        
        <TabsContainer
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <TabButton 
            active={activeTab === 'connections'} 
            onClick={() => setActiveTab('connections')}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser style={{ marginRight: '8px' }} />
            Connections ({connections.length})
          </TabButton>
          <TabButton 
            active={activeTab === 'invitations'} 
            onClick={() => setActiveTab('invitations')}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserPlus style={{ marginRight: '8px' }} />
            Invitations ({invitations.length})
          </TabButton>
          <TabButton 
            active={activeTab === 'suggestions'} 
            onClick={() => setActiveTab('suggestions')}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPowerOff style={{ marginRight: '8px' }} />
            People You May Know
          </TabButton>
        </TabsContainer>

        <AnimatePresence mode="wait">
          {activeTab === 'connections' && (
            <ConnectionsGrid
              key="connections"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 10 }}
            >
              {connections.map((connection) => (
                <ConnectionCard 
                  key={connection.id} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    borderColor: "rgba(88, 86, 214, 0.3)"
                  }}
                >
                  <ConnectionHeader>
                    <ProfileImage 
                      src={connection.image} 
                      alt={connection.name}
                      variants={pulseVariants}
                      initial="initial"
                      animate="animate"
                    />
                    <RemoveButton 
                      aria-label="Remove connection"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 82, 82, 0.1)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTimes />
                    </RemoveButton>
                  </ConnectionHeader>
                  
                  <ConnectionInfo>
                    <ConnectionName 
                      to={`/profile/${connection.id}`}
                      whileHover={{ color: "#5856d6" }}
                    >
                      {connection.name}
                    </ConnectionName>
                    
                    <ConnectionTitle>
                      <FaBriefcase />
                      <span>{connection.title}</span>
                    </ConnectionTitle>
                    
                    <ConnectionLocation>
                      <FaMapMarkerAlt />
                      <span>{connection.location}</span>
                    </ConnectionLocation>
                    
                    <MutualConnections>
                      {connection.mutualConnections} mutual connections
                    </MutualConnections>
                  </ConnectionInfo>
                  
                  <MessageButton 
                    to={`/messages/${connection.id}`}
                    whileHover={{ 
                      backgroundColor: "rgba(88, 86, 214, 0.1)", 
                      color: "#5856d6" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Message
                  </MessageButton>
                </ConnectionCard>
              ))}
            </ConnectionsGrid>
          )}

          {activeTab === 'invitations' && (
            <InvitationsContainer
              key="invitations"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 10 }}
            >
              {invitations.map((invitation) => (
                <InvitationCard 
                  key={invitation.id} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    borderColor: "rgba(88, 86, 214, 0.3)"
                  }}
                >
                  <InvitationInfo>
                    <ProfileImage 
                      src={invitation.image} 
                      alt={invitation.name}
                      variants={pulseVariants}
                      initial="initial"
                      animate="animate"
                    />
                    <InvitationContent>
                      <InvitationName>{invitation.name}</InvitationName>
                      <InvitationTitle>{invitation.title}</InvitationTitle>
                      <InvitationLocation>
                        <FaMapMarkerAlt />
                        <span>{invitation.location}</span>
                      </InvitationLocation>
                      <InvitationMeta>
                        <span>{invitation.mutualConnections} mutual connections</span>
                        <span>Received {invitation.date}</span>
                      </InvitationMeta>
                    </InvitationContent>
                  </InvitationInfo>
                  
                  <InvitationActions>
                    <AcceptButton
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(88, 86, 214, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Accept
                    </AcceptButton>
                    <IgnoreButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ignore
                    </IgnoreButton>
                  </InvitationActions>
                </InvitationCard>
              ))}
            </InvitationsContainer>
          )}

          {activeTab === 'suggestions' && (
            <SuggestionsGrid
              key="suggestions"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 10 }}
            >
              {suggestions.map((suggestion) => (
                <ConnectionCard 
                  key={suggestion.id} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    borderColor: "rgba(88, 86, 214, 0.3)"
                  }}
                >
                  <ConnectionHeader>
                    <ProfileImage 
                      src={suggestion.image} 
                      alt={suggestion.name}
                      variants={pulseVariants}
                      initial="initial"
                      animate="animate" 
                    />
                    <DismissButton 
                      aria-label="Dismiss suggestion"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 82, 82, 0.1)" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTimes />
                    </DismissButton>
                  </ConnectionHeader>
                  
                  <ConnectionInfo>
                    <ConnectionName 
                      to={`/profile/${suggestion.id}`}
                      whileHover={{ color: "#5856d6" }}
                    >
                      {suggestion.name}
                    </ConnectionName>
                    
                    <ConnectionTitle>
                      <FaBriefcase />
                      <span>{suggestion.title}</span>
                    </ConnectionTitle>
                    
                    <ConnectionLocation>
                      <FaMapMarkerAlt />
                      <span>{suggestion.location}</span>
                    </ConnectionLocation>
                    
                    <MutualConnections>
                      {suggestion.mutualConnections} mutual connections
                    </MutualConnections>
                  </ConnectionInfo>
                  
                  <ConnectButton
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(88, 86, 214, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaUserPlus />
                    <span>Connect</span>
                  </ConnectButton>
                </ConnectionCard>
              ))}
            </SuggestionsGrid>
          )}
        </AnimatePresence>
      </PageContent>
    </PageContainer>
  );
};

// Updated styling to be more futuristic
const PageContainer = styled(motion.div)`
  padding-top: 90px; /* Increased from 70px for better spacing */
  min-height: 100vh;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
`;

const NetworkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const NetworkNode = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background: rgba(88, 86, 214, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(88, 86, 214, 0.4);
  animation: pulse 3s infinite ease-in-out;
  
  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.4;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.4;
    }
  }
`;

const NetworkLine = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(88, 86, 214, 0.3), transparent);
  animation: flow 4s infinite linear;
  
  @keyframes flow {
    0% {
      opacity: 0;
      background-position: 0% 0%;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      background-position: 100% 0%;
    }
  }
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  position: relative;
  z-index: 1;
  margin-top: 20px;
`;

const NetworkHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  background: rgba(255, 255, 255, 0.03);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  color: var(--on-background);
  font-size: 2rem;
  margin-right: auto;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: var(--spacing-sm);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-md);
  color: var(--on-background);
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(88, 86, 214, 0.2);
    outline: none;
  }
  
  &::placeholder {
    color: var(--on-surface);
  }
`;

const FilterButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(88, 86, 214, 0.1);
  
  &:hover {
    background: rgba(88, 86, 214, 0.15);
    border-color: rgba(88, 86, 214, 0.2);
  }
`;

const FiltersContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`;

const FilterLabel = styled.label`
  font-size: 0.9rem;
  color: var(--on-surface);
  margin-bottom: 6px;
`;

const FilterSelect = styled.select`
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-md);
  color: var(--on-background);
  cursor: pointer;
  
  option {
    background: var(--surface);
  }
`;

const ApplyFiltersButton = styled(motion.button)`
  padding: 8px 16px;
  background: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-end;
  
  &:hover {
    background: var(--accent);
  }
  
  @media (max-width: 768px) {
    align-self: stretch;
  }
`;

const TabsContainer = styled(motion.div)`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: var(--spacing-xl); /* Increased spacing */
  overflow-x: auto;
  padding-bottom: 5px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabButton = styled(motion.button)`
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  color: ${props => props.active ? 'var(--primary)' : 'var(--on-surface)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--primary)' : 'transparent'};
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  border: none;
  
  &:hover {
    color: var(--primary);
  }
`;

const ConnectionsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--spacing-xl); /* Increased from lg to xl */
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SuggestionsGrid = styled(ConnectionsGrid)``;

const ConnectionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const ConnectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`;

const ProfileImage = styled(motion.img)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary);
`;

const RemoveButton = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  &:hover {
    color: var(--error);
  }
`;

const DismissButton = styled(RemoveButton)``;

const ConnectionInfo = styled.div`
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const ConnectionName = styled(motion(Link))`
  display: block;
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--on-background);
  margin-bottom: 8px;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

const ConnectionTitle = styled.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 6px;
  
  svg {
    color: var(--primary);
    margin-right: 6px;
    font-size: 0.7rem;
  }
  
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ConnectionLocation = styled.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 6px;
  
  svg {
    color: var(--primary);
    margin-right: 6px;
    font-size: 0.7rem;
  }
`;

const MutualConnections = styled.div`
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
`;

const MessageButton = styled(motion(Link))`
  padding: 10px 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  border-radius: var(--border-radius-md);
  text-align: center;
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ConnectButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
  width: 100%;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(88, 86, 214, 0.05);
`;

const InvitationsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const InvitationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InvitationActions = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: var(--spacing-md);
  }
`;

const AcceptButton = styled(motion.button)`
  padding: 10px 20px;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const IgnoreButton = styled(motion.button)`
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--on-background);
  }
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const InvitationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
    width: 100%;
  }
`;

const InvitationContent = styled.div`
  margin-left: var(--spacing-md);
`;

const InvitationName = styled.div`
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--on-background);
  margin-bottom: 4px;
`;

const InvitationTitle = styled.div`
  color: var(--on-surface);
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const InvitationLocation = styled.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 4px;
  
  svg {
    color: var(--primary);
    margin-right: 6px;
    font-size: 0.7rem;
  }
`;

const InvitationMeta = styled.div`
  display: flex;
  gap: var(--spacing-md);
  color: var(--on-surface);
  font-size: 0.8rem;
  
  span:first-child {
    color: var(--primary);
    font-weight: var(--font-weight-medium);
  }
`;

export default Network; 