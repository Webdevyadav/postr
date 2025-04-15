import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaComments, 
  FaBell, 
  FaBellSlash, 
  FaShare, 
  FaArrowLeft, 
  FaEllipsisH, 
  FaTags, 
  FaStar,
  FaFire,
  FaThumbsUp,
  FaRegThumbsUp,
  FaComment,
  FaUserPlus,
  FaUserCheck
} from 'react-icons/fa';

const CommunityDetail = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joined, setJoined] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Community data that would normally come from an API
  const communityData = {
    "1": {
      id: 1,
      name: "UX/UI Designers Connect",
      members: 8742,
      postCount: 347,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      coverImage: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
      description: "A community for UX/UI designers to share work, get feedback, and discuss design trends.",
      longDescription: "Our mission is to connect designers at all stages of their careers, from students to industry veterans. We provide a supportive space for sharing knowledge, getting feedback on work, exploring new trends, and addressing challenges in the UX/UI design field. Join us to expand your network, showcase your portfolio, and grow your design skills.",
      tags: ["Design", "UX", "UI", "Product"],
      featured: true,
      hot: true,
      admins: [
        {
          id: "emma",
          name: "Emma Wilson",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          title: "Senior UX Designer at Adobe"
        }
      ],
      posts: [
        {
          id: 101,
          author: {
            id: "emma",
            name: "Emma Wilson",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            title: "Senior UX Designer at Adobe"
          },
          content: "Just published a new case study on our redesign process. Check it out and let me know your thoughts!",
          image: "https://images.bannerbear.com/direct/4mGpW3zwpg0ZK0AxQw/requests/000/059/185/362/P523LdrvK613yy5mY7nypx4jW/0b0b2e0139c27c70412c512a80feb41515c0a91d.jpg",
          likes: 87,
          comments: 23,
          time: "2 days ago"
        },
        {
          id: 102,
          author: {
            id: "david",
            name: "David Chen",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            title: "UI Designer at Figma"
          },
          content: "What tools is everyone using for user testing these days? Looking for recommendations for remote testing.",
          image: null,
          likes: 42,
          comments: 56,
          time: "3 days ago"
        }
      ]
    },
    "8": {
      id: 8,
      name: "Remote Work Professionals",
      members: 11289,
      postCount: 487,
      image: "https://cdn-talent-wp.arc.dev/wp-content/uploads/2024/07/Blog-Banner-23-Top-Sites-to-Find-Remote-Work-in-2024.png",
      coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
      description: "Tips, tools, and strategies for successful remote work and distributed teams.",
      longDescription: "Remote Work Professionals is a community dedicated to supporting professionals who work remotely or manage distributed teams. We share best practices, remote work tools, home office setups, work-life balance strategies, and ways to maintain team culture across distances. Whether you are a seasoned remote worker or just starting your remote journey, this community offers resources to help you thrive.",
      tags: ["Remote", "WFH", "Productivity", "Teams"],
      featured: true,
      hot: true,
      admins: [
        {
          id: "sarah",
          name: "Sarah Johnson",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          title: "Head of Remote at GitLab"
        }
      ],
      posts: [
        {
          id: 201,
          author: {
            id: "sarah",
            name: "Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            title: "Head of Remote at GitLab"
          },
          content: "We just released our annual remote work report! Some fascinating trends on how companies are adapting to distributed workforces.",
          image: "https://images.unsplash.com/photo-1591382696684-38c427c7547a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          likes: 134,
          comments: 41,
          time: "1 day ago"
        },
        {
          id: 202,
          author: {
            id: "michael",
            name: "Michael Brown",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            title: "Remote Team Manager at Buffer"
          },
          content: "What's your favorite async communication tool? We're evaluating some new options for our team.",
          image: null,
          likes: 89,
          comments: 67,
          time: "4 days ago"
        }
      ]
    }
  };

  useEffect(() => {
    // Simulate API call to fetch community data
    setLoading(true);
    const timer = setTimeout(() => {
      const fetchedCommunity = communityData[id];
      setCommunity(fetchedCommunity);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleJoinToggle = () => {
    setJoined(!joined);
  };
  
  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  if (loading || !community) {
    return (
      <LoadingContainer>
        <LoaderSpinner />
      </LoadingContainer>
    );
  }

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundGlow />
      
      <CoverImageContainer style={{ backgroundImage: `url(${community.coverImage})` }}>
        <CoverOverlay />
        <BackButton to="/communities">
          <FaArrowLeft />
        </BackButton>
      </CoverImageContainer>
      
      <PageContent>
        <CommunityHeader>
          <CommunityImageWrapper>
            <CommunityImage src={community.image} alt={community.name} />
            {community.featured && <FeaturedBadge><FaStar /> Featured</FeaturedBadge>}
            {community.hot && <HotBadge><FaFire /> Hot</HotBadge>}
          </CommunityImageWrapper>
          
          <CommunityInfo>
            <CommunityName>{community.name}</CommunityName>
            <CommunityStats>
              <StatItem>
                <FaUsers />
                <span>{community.members.toLocaleString()} members</span>
              </StatItem>
              <StatItem>
                <FaComments />
                <span>{community.postCount} posts this week</span>
              </StatItem>
            </CommunityStats>
            
            <TagContainer>
              {community.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagContainer>
          </CommunityInfo>
          
          <ActionButtons>
            <JoinButton joined={joined} onClick={handleJoinToggle}>
              {joined ? (
                <>
                  <FaUserCheck />
                  <span>Joined</span>
                </>
              ) : (
                <>
                  <FaUserPlus />
                  <span>Join Group</span>
                </>
              )}
            </JoinButton>
            
            <ActionGroup>
              <NotificationButton onClick={handleNotificationsToggle}>
                {notifications ? <FaBell /> : <FaBellSlash />}
              </NotificationButton>
              <ShareButton>
                <FaShare />
              </ShareButton>
              <MoreButton>
                <FaEllipsisH />
              </MoreButton>
            </ActionGroup>
          </ActionButtons>
        </CommunityHeader>
        
        <MainContent>
          <ContentSection>
            <SectionTitle>About</SectionTitle>
            <AboutDescription>{community.longDescription}</AboutDescription>
            
            <Divider />
            
            <SectionTitle>Admins</SectionTitle>
            <AdminsList>
              {community.admins.map((admin) => (
                <AdminCard key={admin.id} to={`/profile/${admin.id}`}>
                  <AdminImage src={admin.image} alt={admin.name} />
                  <AdminInfo>
                    <AdminName>{admin.name}</AdminName>
                    <AdminTitle>{admin.title}</AdminTitle>
                  </AdminInfo>
                </AdminCard>
              ))}
            </AdminsList>
            
            <Divider />
            
            <SectionTitle>Recent Posts</SectionTitle>
            <PostsList>
              {community.posts.map((post) => (
                <PostCard key={post.id}>
                  <PostHeader>
                    <PostAuthor to={`/profile/${post.author.id}`}>
                      <PostAuthorImage src={post.author.image} alt={post.author.name} />
                      <PostAuthorInfo>
                        <PostAuthorName>{post.author.name}</PostAuthorName>
                        <PostAuthorTitle>{post.author.title}</PostAuthorTitle>
                      </PostAuthorInfo>
                    </PostAuthor>
                    <PostTime>{post.time}</PostTime>
                  </PostHeader>
                  
                  <PostContent>{post.content}</PostContent>
                  
                  {post.image && (
                    <PostImage src={post.image} alt="Post" />
                  )}
                  
                  <PostActions>
                    <PostAction>
                      <FaRegThumbsUp />
                      <span>{post.likes}</span>
                    </PostAction>
                    <PostAction>
                      <FaComment />
                      <span>{post.comments}</span>
                    </PostAction>
                    <PostAction>
                      <FaShare />
                    </PostAction>
                  </PostActions>
                </PostCard>
              ))}
            </PostsList>
          </ContentSection>
        </MainContent>
      </PageContent>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-color: #0c0c14;
  color: #fff;
  position: relative;
  overflow: hidden;
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
  z-index: 0;
  
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

const CoverImageContainer = styled.div`
  height: 240px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(12, 12, 20, 0.4), rgba(12, 12, 20, 0.8));
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  backdrop-filter: blur(5px);
  z-index: 5;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(88, 86, 214, 0.5);
    transform: translateY(-2px);
  }
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: -80px auto 0;
  padding: 0 20px 80px;
  position: relative;
  z-index: 2;
`;

const CommunityHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CommunityImageWrapper = styled.div`
  position: relative;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const CommunityImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  object-fit: cover;
  border: 4px solid #0c0c14;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 10px;
  left: -10px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
  
  svg {
    font-size: 0.8rem;
  }
`;

const HotBadge = styled.div`
  position: absolute;
  bottom: 10px;
  left: -10px;
  background: linear-gradient(135deg, #FF416C, #FF4B2B);
  color: white;
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(255, 65, 108, 0.3);
  
  svg {
    font-size: 0.8rem;
  }
`;

const CommunityInfo = styled.div`
  margin-top: 10px;
`;

const CommunityName = styled.h1`
  font-size: 1.8rem;
  margin: 0 0 10px;
  font-weight: 700;
  color: #fff;
`;

const CommunityStats = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  svg {
    color: var(--primary);
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 5px 10px;
  background: rgba(88, 86, 214, 0.15);
  border: 1px solid rgba(88, 86, 214, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const JoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  background: ${props => props.joined 
    ? 'rgba(88, 86, 214, 0.2)' 
    : 'linear-gradient(135deg, #5856d6, #a55eea)'};
  
  color: ${props => props.joined 
    ? 'var(--primary)' 
    : 'white'};
  
  border: ${props => props.joined 
    ? '1px solid rgba(88, 86, 214, 0.4)' 
    : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.joined 
      ? '0 5px 15px rgba(88, 86, 214, 0.2)' 
      : '0 5px 15px rgba(88, 86, 214, 0.4)'};
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

const NotificationButton = styled(IconButton)`
  &:hover {
    background: rgba(88, 86, 214, 0.2);
  }
`;

const ShareButton = styled(IconButton)``;

const MoreButton = styled(IconButton)``;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
`;

const ContentSection = styled.section`
  background: rgba(30, 30, 40, 0.3);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin: 0 0 20px;
  color: white;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 30px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
  }
`;

const AboutDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(88, 86, 214, 0) 0%,
    rgba(88, 86, 214, 0.3) 50%,
    rgba(88, 86, 214, 0) 100%
  );
  margin: 30px 0;
`;

const AdminsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const AdminCard = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(88, 86, 214, 0.1);
    transform: translateY(-2px);
  }
`;

const AdminImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid var(--primary);
`;

const AdminInfo = styled.div``;

const AdminName = styled.h3`
  font-size: 1rem;
  margin: 0 0 5px;
  color: white;
`;

const AdminTitle = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
`;

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const PostAuthor = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const PostAuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const PostAuthorInfo = styled.div``;

const PostAuthorName = styled.h4`
  font-size: 0.9rem;
  margin: 0 0 3px;
  color: white;
`;

const PostAuthorTitle = styled.p`
  font-size: 0.75rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
`;

const PostTime = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
`;

const PostContent = styled.p`
  margin: 0 0 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const PostActions = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const PostAction = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 5px;
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary);
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(88, 86, 214, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default CommunityDetail;