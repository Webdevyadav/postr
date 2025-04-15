import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBell, 
  FaUser, 
  FaComment, 
  FaHeart, 
  FaUsers, 
  FaBriefcase, 
  FaCheck, 
  FaTimes,
  FaEllipsisH
} from 'react-icons/fa';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  
  const notifications = [
    {
      id: 1,
      type: 'connection',
      user: {
        name: 'Emma Wilson',
        image: 'https://randomuser.me/api/portraits/women/32.jpg',
        id: 'emma'
      },
      content: 'accepted your connection request',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'message',
      user: {
        name: 'Jason Lee',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        id: 'jason'
      },
      content: 'sent you a message',
      time: '5 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'job',
      user: {
        name: 'Tesla',
        image: 'https://logo.clearbit.com/tesla.com',
        id: 'tesla'
      },
      content: 'Your job application was viewed',
      time: 'Yesterday',
      read: true
    },
    {
      id: 4,
      type: 'community',
      user: {
        name: 'UX/UI Designers Connect',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        id: '1'
      },
      content: 'Your post received 25 likes',
      time: '2 days ago',
      read: true
    },
    {
      id: 5,
      type: 'like',
      user: {
        name: 'Sarah Johnson',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        id: 'sarah'
      },
      content: 'liked your comment',
      time: '3 days ago',
      read: true
    }
  ];

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(notification => notification.type === filter);

  const getIcon = (type) => {
    switch(type) {
      case 'connection': return <FaUser />;
      case 'message': return <FaComment />;
      case 'like': return <FaHeart />;
      case 'community': return <FaUsers />;
      case 'job': return <FaBriefcase />;
      default: return <FaBell />;
    }
  };

  const getIconBackground = (type) => {
    switch(type) {
      case 'connection': return 'linear-gradient(135deg, #5856d6, #a55eea)';
      case 'message': return 'linear-gradient(135deg, #36d1dc, #5b86e5)';
      case 'like': return 'linear-gradient(135deg, #ff6b6b, #ff8e8e)';
      case 'community': return 'linear-gradient(135deg, #4facfe, #00f2fe)';
      case 'job': return 'linear-gradient(135deg, #43e97b, #38f9d7)';
      default: return 'linear-gradient(135deg, #5856d6, #a55eea)';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
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
        <NotificationsHeader>
          <Title>Notifications</Title>
          
          <FilterContainer>
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              All
            </FilterButton>
            <FilterButton 
              active={filter === 'connection'} 
              onClick={() => setFilter('connection')}
            >
              Connections
            </FilterButton>
            <FilterButton 
              active={filter === 'message'} 
              onClick={() => setFilter('message')}
            >
              Messages
            </FilterButton>
            <FilterButton 
              active={filter === 'job'} 
              onClick={() => setFilter('job')}
            >
              Jobs
            </FilterButton>
          </FilterContainer>
        </NotificationsHeader>
        
        <NotificationsList
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredNotifications.map(notification => (
            <NotificationItem 
              key={notification.id}
              read={notification.read}
              variants={itemVariants}
            >
              <NotificationIconContainer 
                background={getIconBackground(notification.type)}
              >
                {getIcon(notification.type)}
              </NotificationIconContainer>
              
              <NotificationContent>
                <NotificationUser to={`/profile/${notification.user.id}`}>
                  <UserAvatar>
                    <img src={notification.user.image} alt={notification.user.name} />
                  </UserAvatar>
                  <UserName>{notification.user.name}</UserName>
                </NotificationUser>
                
                <NotificationText>{notification.content}</NotificationText>
                <NotificationTime>{notification.time}</NotificationTime>
              </NotificationContent>
              
              <NotificationActions>
                {!notification.read && (
                  <ActionButton>
                    <FaCheck />
                  </ActionButton>
                )}
                <ActionButton>
                  <FaEllipsisH />
                </ActionButton>
              </NotificationActions>
            </NotificationItem>
          ))}
        </NotificationsList>
        
        {filteredNotifications.length === 0 && (
          <EmptyState>
            <EmptyStateIcon>
              <FaBell />
            </EmptyStateIcon>
            <EmptyStateText>No notifications to display</EmptyStateText>
            <EmptyStateDescription>
              When you have new notifications, they will appear here.
            </EmptyStateDescription>
          </EmptyState>
        )}
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
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const NotificationsHeader = styled.header`
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
  margin: 0 0 20px;
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

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.active ? 'rgba(88, 86, 214, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(88, 86, 214, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 20px;
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'rgba(88, 86, 214, 0.25)' : 'rgba(255, 255, 255, 0.08)'};
    transform: translateY(-2px);
  }
`;

const NotificationsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NotificationItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: ${props => props.read ? 'rgba(20, 20, 30, 0.5)' : 'rgba(88, 86, 214, 0.05)'};
  border: 1px solid ${props => props.read ? 'rgba(255, 255, 255, 0.05)' : 'rgba(88, 86, 214, 0.1)'};
  border-radius: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.read ? 'rgba(255, 255, 255, 0.1)' : 'rgba(88, 86, 214, 0.2)'};
  }
`;

const NotificationIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background: ${props => props.background};
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationUser = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 5px;
`;

const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserName = styled.span`
  font-weight: 600;
  color: #fff;
  font-size: 0.95rem;
`;

const NotificationText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.9rem;
`;

const NotificationTime = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  display: block;
  margin-top: 5px;
`;

const NotificationActions = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 15px;
`;

const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: rgba(20, 20, 30, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

const EmptyStateIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(88, 86, 214, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: rgba(88, 86, 214, 0.7);
  font-size: 1.5rem;
`;

const EmptyStateText = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 0 10px;
`;

const EmptyStateDescription = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  max-width: 300px;
  margin: 0 auto;
`;

export default Notifications; 