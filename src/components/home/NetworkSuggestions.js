import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaUserPlus, FaTimes } from 'react-icons/fa';

const NetworkSuggestions = ({ isVisible }) => {
  const connections = [
    {
      id: 1,
      name: 'Emily Wilson',
      title: 'Senior Software Engineer at Netflix',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      mutualConnections: 12,
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      name: 'Jason Lee',
      title: 'Product Manager at Dropbox',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      mutualConnections: 8,
      location: 'New York, NY'
    },
    {
      id: 3,
      name: 'Rachel Green',
      title: 'UX Designer at Adobe',
      image: 'https://randomuser.me/api/portraits/women/79.jpg',
      mutualConnections: 15,
      location: 'Austin, TX'
    },
    {
      id: 4,
      name: 'Mark Thompson',
      title: 'Data Scientist at IBM',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      mutualConnections: 6,
      location: 'Boston, MA'
    },
    {
      id: 5,
      name: 'Sophia Martinez',
      title: 'Frontend Developer at Airbnb',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      mutualConnections: 11,
      location: 'Seattle, WA'
    },
    {
      id: 6,
      name: 'Brian Johnson',
      title: 'Marketing Director at Shopify',
      image: 'https://randomuser.me/api/portraits/men/36.jpg',
      mutualConnections: 9,
      location: 'Chicago, IL'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <SuggestionTitle>
        People you may know based on your profile and network
      </SuggestionTitle>
      
      <ConnectionsGrid>
        {connections.map((connection) => (
          <ConnectionCard key={connection.id} variants={itemVariants}>
            <ConnectionHeader>
              <ProfileImage src={connection.image} alt={connection.name} />
              <CloseButton aria-label="Dismiss suggestion">
                <FaTimes />
              </CloseButton>
            </ConnectionHeader>
            
            <ConnectionInfo>
              <ConnectionName to={`/profile/${connection.id}`}>
                {connection.name}
              </ConnectionName>
              
              <ConnectionTitle>
                <FaBriefcase />
                <span>{connection.title}</span>
              </ConnectionTitle>
              
              <ConnectionLocation>
                {connection.location}
              </ConnectionLocation>
              
              <MutualConnections>
                {connection.mutualConnections} mutual connections
              </MutualConnections>
            </ConnectionInfo>
            
            <ConnectButton>
              <FaUserPlus />
              <span>Connect</span>
            </ConnectButton>
          </ConnectionCard>
        ))}
      </ConnectionsGrid>
      
      <MoreSuggestionsLink to="/network">
        View All Suggestions
      </MoreSuggestionsLink>
    </Container>
  );
};

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const SuggestionTitle = styled.h3`
  text-align: center;
  color: var(--on-surface);
  font-size: 1.1rem;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-xl);
`;

const ConnectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const ConnectionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const ConnectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary);
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--error);
  }
`;

const ConnectionInfo = styled.div`
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const ConnectionName = styled(Link)`
  display: block;
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--on-background);
  margin-bottom: 6px;
  text-decoration: none;
  
  &:hover {
    color: var(--primary);
    text-decoration: underline;
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
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 6px;
`;

const MutualConnections = styled.div`
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
`;

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 0;
  width: 100%;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(88, 86, 214, 0.2);
  }
`;

const MoreSuggestionsLink = styled(Link)`
  display: block;
  text-align: center;
  padding: var(--spacing-md);
  margin-top: var(--spacing-xl);
  color: var(--primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default NetworkSuggestions; 