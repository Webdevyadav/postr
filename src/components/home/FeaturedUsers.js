import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedUsers = ({ isVisible }) => {
  const users = [
    {
      id: 'me',
      name: 'Alex Morgan',
      title: 'Product Designer at Google',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      connections: 2378,
      background: 'linear-gradient(135deg, #4158D0, #C850C0)'
    },
    {
      id: 'me',
      name: 'David Chen',
      title: 'Software Engineer at Meta',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      connections: 1642,
      background: 'linear-gradient(135deg, #0093E9, #80D0C7)'
    },
    {
      id: 'me',
      name: 'Sarah Johnson',
      title: 'Marketing Director at Twitter',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      connections: 987,
      background: 'linear-gradient(135deg, #8BC6EC, #9599E2)'
    },
    {
      id: 'me',
      name: 'Michael Brown',
      title: 'Data Scientist at Amazon',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      connections: 1245,
      background: 'linear-gradient(135deg, #FCCF31, #F55555)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
      {users.map((user) => (
        <Link 
          key={user.id}
          to={`/profile/${user.id}`}
          style={{ textDecoration: 'none' }}
        >
          <UserCard 
            variants={itemVariants}
            background={user.background}
          >
            <CardTop>
              <UserImageLink to={`/profile/${user.id}`}>
                <UserImage src={user.image} alt={user.name} />
              </UserImageLink>
              <UserInfo>
                <UserName>{user.name}</UserName>
                <UserTitle>{user.title}</UserTitle>
              </UserInfo>
            </CardTop>
            
            <CardBottom>
              <ConnectionCount>
                <strong>{user.connections.toLocaleString()}</strong> connections
              </ConnectionCount>
              <ConnectButton to={`/profile/${user.id}`}>View Profile</ConnectButton>
            </CardBottom>
          </UserCard>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`;

const UserCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: ${props => props.background || 'var(--gradient-1)'};
    z-index: 0;
    border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
  }
`;

const CardTop = styled.div`
  padding: var(--spacing-lg);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const UserImageLink = styled(Link)`
  display: block;
  z-index: 1;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid var(--surface);
  margin-bottom: var(--spacing-md);
  object-fit: cover;
  z-index: 1;
`;

const UserInfo = styled.div`
  z-index: 1;
`;

const UserName = styled.h3`
  margin-bottom: var(--spacing-xs);
  font-size: 1.2rem;
  color: var(--on-background);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const UserTitle = styled.p`
  color: var(--on-surface);
  font-size: 0.9rem;
`;

const CardBottom = styled.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const ConnectionCount = styled.p`
  color: var(--on-surface);
  font-size: 0.9rem;
  
  strong {
    color: var(--on-background);
  }
`;

const ConnectButton = styled(Link)`
  padding: 8px 16px;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(88, 86, 214, 0.2);
    color: var(--primary);
  }
`;

export default FeaturedUsers; 