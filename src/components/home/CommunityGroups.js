import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaArrowRight } from 'react-icons/fa';

const CommunityGroups = ({ isVisible }) => {
  const communities = [
    {
      id: 1,
      name: 'UX/UI Designers Connect',
      members: 8742,
      posts: 347,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A community for UX/UI designers to share work, get feedback, and discuss design trends.',
      tags: ['Design', 'UX', 'UI', 'Product']
    },
    {
      id: 2,
      name: 'Data Science Experts',
      members: 12453,
      posts: 521,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Discuss the latest in data science, machine learning, AI, and analytics with fellow professionals.',
      tags: ['Data Science', 'ML', 'AI', 'Analytics']
    },
    {
      id: 3,
      name: 'Frontend Developers Hub',
      members: 15782,
      posts: 683,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stay up-to-date with the latest frontend frameworks, tools, and best practices.',
      tags: ['JavaScript', 'React', 'CSS', 'Web Dev']
    },
    {
      id: 4,
      name: 'Product Managers Network',
      members: 7521,
      posts: 298,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Connect with product managers to share strategies, tools, and career advice.',
      tags: ['Product', 'Strategy', 'Management']
    },
    {
      id: 5,
      name: 'Startup Founders Circle',
      members: 5382,
      posts: 214,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A supportive community for startup founders to network, share experiences, and get advice.',
      tags: ['Startups', 'Entrepreneurship', 'Business']
    },
    {
      id: 6,
      name: 'Women in Tech',
      members: 9436,
      posts: 421,
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Empowering women in technology through networking, mentorship, and career development.',
      tags: ['Women', 'Diversity', 'Tech', 'Career']
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

  const cardVariants = {
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

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {communities.map((community) => (
        <CommunityCard
          key={community.id}
          variants={cardVariants}
          to={`/communities/${community.id}`}
        >
          <CardImage style={{ backgroundImage: `url(${community.image})` }}>
            <CardImageOverlay />
            <CommunityName>{community.name}</CommunityName>
          </CardImage>
          
          <CardContent>
            <CommunityStats>
              <StatItem>
                <FaUsers />
                <span>{community.members.toLocaleString()} members</span>
              </StatItem>
              <StatItem>
                <span>{community.posts} posts this week</span>
              </StatItem>
            </CommunityStats>
            
            <CommunityDescription>{community.description}</CommunityDescription>
            
            <TagContainer>
              {community.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagContainer>
            
            <JoinButtonWrapper>
              <JoinButton>
                <span>Join Group</span>
                <FaArrowRight />
              </JoinButton>
            </JoinButtonWrapper>
          </CardContent>
        </CommunityCard>
      ))}
      
      <MoreCommunitiesLink to="/communities">
        Explore All Communities
        <FaArrowRight />
      </MoreCommunitiesLink>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CommunityCard = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(255, 255, 255, 0.1);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const CardImage = styled.div`
  position: relative;
  height: 160px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(18, 18, 20, 0.3), rgba(18, 18, 20, 0.8));
`;

const CommunityName = styled.h3`
  position: absolute;
  bottom: var(--spacing-md);
  left: var(--spacing-md);
  right: var(--spacing-md);
  color: var(--on-background);
  font-size: 1.2rem;
  font-weight: var(--font-weight-semibold);
  margin: 0;
  z-index: 1;
`;

const CardContent = styled.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CommunityStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  color: var(--on-surface);
  font-size: 0.85rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 6px;
    color: var(--primary);
  }
`;

const CommunityDescription = styled.p`
  color: var(--on-surface);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--spacing-md);
`;

const Tag = styled.span`
  background-color: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  padding: 4px 8px;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: var(--font-weight-medium);
`;

const JoinButtonWrapper = styled.div`
  margin-top: auto;
`;

const JoinButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  background-color: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  svg {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background-color: rgba(88, 86, 214, 0.2);
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const MoreCommunitiesLink = styled(Link)`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: var(--spacing-md);
  color: var(--primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  margin-top: var(--spacing-md);
  
  svg {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    text-decoration: underline;
    
    svg {
      transform: translateX(3px);
    }
  }
`;

export default CommunityGroups; 