import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaArrowRight, FaSearch, FaTags, FaComments, FaFire, FaStar } from 'react-icons/fa';

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const communities = [
    {
      id: 1,
      name: 'UX/UI Designers Connect',
      members: 8742,
      posts: 347,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A community for UX/UI designers to share work, get feedback, and discuss design trends.',
      tags: ['Design', 'UX', 'UI', 'Product'],
      featured: true,
      hot: true
    },
    {
      id: 2,
      name: 'Data Science Experts',
      members: 12453,
      posts: 521,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Discuss the latest in data science, machine learning, AI, and analytics with fellow professionals.',
      tags: ['Data Science', 'ML', 'AI', 'Analytics'],
      featured: true,
      hot: false
    },
    {
      id: 3,
      name: 'Frontend Developers Hub',
      members: 15782,
      posts: 683,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stay up-to-date with the latest frontend frameworks, tools, and best practices.',
      tags: ['JavaScript', 'React', 'CSS', 'Web Dev'],
      featured: false,
      hot: true
    },
    {
      id: 4,
      name: 'Product Managers Network',
      members: 7521,
      posts: 298,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Connect with product managers to share strategies, tools, and career advice.',
      tags: ['Product', 'Strategy', 'Management'],
      featured: false,
      hot: false
    },
    {
      id: 5,
      name: 'Startup Founders Circle',
      members: 5382,
      posts: 214,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A supportive community for startup founders to network, share experiences, and get advice.',
      tags: ['Startups', 'Entrepreneurship', 'Business'],
      featured: true,
      hot: true
    },
    {
      id: 6,
      name: 'Women in Tech',
      members: 9436,
      posts: 421,
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Empowering women in technology through networking, mentorship, and career development.',
      tags: ['Women', 'Diversity', 'Tech', 'Career'],
      featured: true,
      hot: false
    },
    {
      id: 7,
      name: 'Blockchain Innovators',
      members: 6835,
      posts: 312,
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Explore blockchain technology, cryptocurrencies, and decentralized applications.',
      tags: ['Blockchain', 'Crypto', 'Web3', 'DeFi'],
      featured: false,
      hot: true
    },
    {
      id: 8,
      name: 'Remote Work Professionals',
      members: 11289,
      posts: 487,
      image: 'https://cdn-talent-wp.arc.dev/wp-content/uploads/2024/07/Blog-Banner-23-Top-Sites-to-Find-Remote-Work-in-2024.png',
      description: 'Tips, tools, and strategies for successful remote work and distributed teams.',
      tags: ['Remote', 'WFH', 'Productivity', 'Teams'],
      featured: true,
      hot: true
    }
  ];

  const trendingTopics = [
    { name: 'Artificial Intelligence', posts: 2583 },
    { name: 'Remote Work', posts: 1872 },
    { name: 'Web3', posts: 1654 },
    { name: 'Career Growth', posts: 1422 },
    { name: 'Work-Life Balance', posts: 1235 },
    { name: 'Salary Negotiation', posts: 987 },
    { name: 'Tech Interviews', posts: 854 },
    { name: 'Side Projects', posts: 721 }
  ];

  const filteredCommunities = communities.filter(community => {
    if (activeTab === 'featured' && !community.featured) {
      return false;
    }
    if (activeTab === 'hot' && !community.hot) {
      return false;
    }
    return true;
  });

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
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundGlow />
      <PageContent>
        <CommunitiesHeader>
          <Title>Explore Communities</Title>
          <SubTitle>Connect with like-minded professionals in your field</SubTitle>
          
          <SearchContainer>
            <SearchIconWrapper>
              <FaSearch />
            </SearchIconWrapper>
            <SearchInput 
              type="text" 
              placeholder="Search communities..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
          
          <TabsContainer>
            <TabButton 
              active={activeTab === 'all'} 
              onClick={() => setActiveTab('all')}
            >
              All Communities
            </TabButton>
            <TabButton 
              active={activeTab === 'featured'} 
              onClick={() => setActiveTab('featured')}
            >
              <FaStar />
              <span>Featured</span>
            </TabButton>
            <TabButton 
              active={activeTab === 'hot'} 
              onClick={() => setActiveTab('hot')}
            >
              <FaFire />
              <span>Hot</span>
            </TabButton>
          </TabsContainer>
        </CommunitiesHeader>
        
        <CommunityGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCommunities.map((community) => (
            <CommunityCard
              key={community.id}
              variants={itemVariants}
              to={`/communities/${community.id}`}
            >
              <CardImage style={{ backgroundImage: `url(${community.image})` }}>
                <CardImageOverlay />
                {community.featured && <FeaturedBadge><FaStar /> Featured</FeaturedBadge>}
                {community.hot && <HotBadge><FaFire /> Hot</HotBadge>}
                <CommunityName>{community.name}</CommunityName>
              </CardImage>
              
              <CardContent>
                <CommunityStats>
                  <StatItem>
                    <FaUsers />
                    <span>{community.members.toLocaleString()} members</span>
                  </StatItem>
                  <StatItem>
                    <FaComments />
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
                  <JoinButton as={Link} to={`/communities/${community.id}`}>
                    <span>Join Group</span>
                    <FaArrowRight />
                  </JoinButton>
                </JoinButtonWrapper>
              </CardContent>
            </CommunityCard>
          ))}
        </CommunityGrid>
        
        <SidebarSection>
          <SidebarTitle>
            <FaFire />
            <span>Trending Topics</span>
          </SidebarTitle>
          
          <TrendingTopicsList
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {trendingTopics.map((topic, index) => (
              <TopicItem key={index} variants={itemVariants}>
                <TopicName>
                  <FaTags />
                  <span>{topic.name}</span>
                </TopicName>
                <TopicPostCount>{topic.posts} posts</TopicPostCount>
              </TopicItem>
            ))}
          </TrendingTopicsList>
          
          <CreateCommunityButton variants={itemVariants}>
            <span>Create Community</span>
            <FaArrowRight />
          </CreateCommunityButton>
        </SidebarSection>
      </PageContent>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: #0c0c14;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(88, 86, 214, 0.2) 0%, rgba(88, 86, 214, 0.1) 30%, rgba(88, 86, 214, 0) 70%);
  filter: blur(50px);
  z-index: -1;
  
  &:after {
    content: '';
    position: absolute;
    top: 300px;
    left: -400px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(130, 87, 229, 0.2) 0%, rgba(130, 87, 229, 0.1) 30%, rgba(130, 87, 229, 0) 70%);
    filter: blur(50px);
  }
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CommunitiesHeader = styled.header`
  padding: 40px 0 30px;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(88, 86, 214, 0) 0%,
      rgba(88, 86, 214, 0.5) 50%,
      rgba(88, 86, 214, 0) 100%
    );
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(88, 86, 214, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  margin: 10px 0 0;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 30px 0;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 15px 20px 15px 50px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: rgba(88, 86, 214, 0.5);
    box-shadow: 0 0 0 4px rgba(88, 86, 214, 0.1), 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  overflow-x: auto;
  padding-bottom: 5px;
  
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${props => props.active ? 'rgba(88, 86, 214, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(88, 86, 214, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 50px;
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '500' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  svg {
    color: ${props => props.active ? '#a55eea' : 'rgba(255, 255, 255, 0.5)'};
    font-size: 1rem;
  }
  
  &:hover {
    background: ${props => props.active ? 'rgba(88, 86, 214, 0.25)' : 'rgba(255, 255, 255, 0.08)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
`;

const CommunityGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CommunityCard = styled(motion(Link))`
  background: rgba(20, 20, 30, 0.5);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(88, 86, 214, 0.1);
    border-color: rgba(88, 86, 214, 0.2);
  }
`;

const CardImage = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to top, rgba(12, 12, 20, 0.9), transparent);
  }
`;

const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(12, 12, 20, 0.2);
  z-index: 1;
`;

const CommunityName = styled.h3`
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  z-index: 3;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  svg {
    font-size: 0.8rem;
  }
`;

const HotBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #ff5e62 0%, #ff9966 100%);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  svg {
    font-size: 0.8rem;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CommunityStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  
  svg {
    color: rgba(88, 86, 214, 0.7);
    font-size: 0.9rem;
  }
`;

const CommunityDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
  flex: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  background: rgba(88, 86, 214, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(88, 86, 214, 0.2);
`;

const JoinButtonWrapper = styled.div`
  margin-top: auto;
`;

const JoinButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, rgba(88, 86, 214, 0.1) 0%, rgba(165, 94, 234, 0.1) 100%);
  border: 1px solid rgba(88, 86, 214, 0.3);
  border-radius: 50px;
  padding: 12px 20px;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  svg {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(88, 86, 214, 0.2) 0%, rgba(165, 94, 234, 0.2) 100%);
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const SidebarSection = styled.div`
  background: rgba(20, 20, 30, 0.5);
  border-radius: 16px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: #a55eea;
  }
`;

const TrendingTopicsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TopicItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`;

const TopicName = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: rgba(88, 86, 214, 0.7);
    font-size: 0.9rem;
  }
`;

const TopicPostCount = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  border-radius: 20px;
`;

const CreateCommunityButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  border: none;
  border-radius: 50px;
  padding: 15px 0;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 8px 20px rgba(88, 86, 214, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(88, 86, 214, 0.4);
  }
`;

export default Communities; 