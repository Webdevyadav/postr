import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaEllipsisH, FaPaperPlane, FaSmile, FaPaperclip, FaCircle, FaComments } from 'react-icons/fa';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Alex Morgan',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      lastMessage: 'Thanks for connecting! Would love to discuss the project further.',
      time: '2:30 PM',
      unread: 2,
      status: 'online'
    },
    {
      id: 2,
      name: 'David Chen',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastMessage: 'What do you think about the new design?',
      time: 'Yesterday',
      unread: 0,
      status: 'offline'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      lastMessage: 'Let me know when you are available for a call.',
      time: 'Monday',
      unread: 1,
      status: 'online'
    },
    {
      id: 4,
      name: 'Michael Brown',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      lastMessage: 'I have shared the document with you. Lets discuss tomorrow.',
      time: 'Last week',
      unread: 0,
      status: 'offline'
    }
  ];

  const conversations = [
    {
      id: 1,
      messages: [
        {
          id: 1,
          sender: 'Alex Morgan',
          text: 'Hi there! I saw your profile and I think your experience would be a great fit for a project I am working on.',
          time: '10:30 AM',
          isSender: false
        },
        {
          id: 2,
          sender: 'You',
          text: 'Hey Alex! Thanks for reaching out. I would love to hear more about the project.',
          time: '10:45 AM',
          isSender: true
        },
        {
          id: 3,
          sender: 'Alex Morgan',
          text: 'Great! It is a web application for a fintech startup. We need someone with your React skills to help us build the dashboard.',
          time: '11:00 AM',
          isSender: false
        },
        {
          id: 4,
          sender: 'You',
          text: 'That sounds interesting! Do you have any documentation or wireframes I could look at?',
          time: '11:15 AM',
          isSender: true
        },
        {
          id: 5,
          sender: 'Alex Morgan',
          text: 'Yes, I will share the project brief and wireframes with you. Would you be available for a call tomorrow to discuss the details?',
          time: '11:30 AM',
          isSender: false
        },
        {
          id: 6,
          sender: 'You',
          text: 'Definitely! I am free tomorrow afternoon. How does 2 PM sound?',
          time: '11:45 AM',
          isSender: true
        },
        {
          id: 7,
          sender: 'Alex Morgan',
          text: 'Perfect! I will send you a calendar invite. Thanks for connecting! I would love to discuss the project further.',
          time: '2:30 PM',
          isSender: false
        }
      ]
    },
    {
      id: 2,
      messages: [
        {
          id: 1,
          sender: 'David Chen',
          text: 'Hey, have you had a chance to look at the design mockups I sent?',
          time: 'Yesterday',
          isSender: false
        },
        {
          id: 2,
          sender: 'You',
          text: 'Yes, I reviewed them this morning. The UI looks clean and intuitive.',
          time: 'Yesterday',
          isSender: true
        },
        {
          id: 3,
          sender: 'David Chen',
          text: 'Thanks! I was thinking of making some changes to the navigation. What do you think about the new design?',
          time: 'Yesterday',
          isSender: false
        }
      ]
    },
    {
      id: 3,
      messages: [
        {
          id: 1,
          sender: 'Sarah Johnson',
          text: 'Hi there! I am organizing a panel discussion on women in tech next month and would love to have you as a speaker.',
          time: 'Monday',
          isSender: false
        },
        {
          id: 2,
          sender: 'You',
          text: 'That sounds amazing! I would be honored to participate.',
          time: 'Monday',
          isSender: true
        },
        {
          id: 3,
          sender: 'Sarah Johnson',
          text: 'Great! Let me know when you are available for a call to discuss the details.',
          time: 'Monday',
          isSender: false
        }
      ]
    },
    {
      id: 4,
      messages: [
        {
          id: 1,
          sender: 'Michael Brown',
          text: 'Hi, I have been looking at your portfolio and I am impressed with your data visualization work.',
          time: 'Last week',
          isSender: false
        },
        {
          id: 2,
          sender: 'You',
          text: 'Thank you, Michael! That is one of my favorite areas to work in.',
          time: 'Last week',
          isSender: true
        },
        {
          id: 3,
          sender: 'Michael Brown',
            text: 'Would you be interested in collaborating on a project? I have shared the document with you. Let us discuss tomorrow.',
          time: 'Last week',
          isSender: false
        }
      ]
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', message);
      setMessage('');
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
        <MessagesHeader>
          <Title>Messages</Title>
        </MessagesHeader>

        <MessagesLayout>
          <ChatsList>
            <SearchContainer>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
              <SearchInput type="text" placeholder="Search messages..." />
            </SearchContainer>

            {chats.map((chat, index) => (
              <ChatItem 
                key={chat.id} 
                selected={selectedChat === index}
                onClick={() => setSelectedChat(index)}
              >
                <ChatAvatar>
                  <img src={chat.image} alt={chat.name} />
                  {chat.status === 'online' && <StatusIndicator />}
                </ChatAvatar>
                <ChatInfo>
                  <ChatName>{chat.name}</ChatName>
                  <ChatLastMessage>{chat.lastMessage}</ChatLastMessage>
                </ChatInfo>
                <ChatMeta>
                  <ChatTime>{chat.time}</ChatTime>
                  {chat.unread > 0 && <UnreadBadge>{chat.unread}</UnreadBadge>}
                </ChatMeta>
              </ChatItem>
            ))}
          </ChatsList>

          <ChatContainer>
            {selectedChat !== null ? (
              <>
                <ChatHeader>
                  <ChatHeaderUser>
                    <img src={chats[selectedChat].image} alt={chats[selectedChat].name} />
                    <div>
                      <ChatHeaderName>{chats[selectedChat].name}</ChatHeaderName>
                      <ChatHeaderStatus>
                        {chats[selectedChat].status === 'online' ? (
                          <>
                            <StatusDot />
                            <span>Online</span>
                          </>
                        ) : (
                          'Offline'
                        )}
                      </ChatHeaderStatus>
                    </div>
                  </ChatHeaderUser>
                  <ChatOptions>
                    <FaEllipsisH />
                  </ChatOptions>
                </ChatHeader>

                <ChatContent>
                  {conversations[selectedChat].messages.map((msg) => (
                    <MessageBubble key={msg.id} isSender={msg.isSender}>
                      {!msg.isSender && <MessageSender>{msg.sender}</MessageSender>}
                      <div>{msg.text}</div>
                      <MessageTime isSender={msg.isSender}>{msg.time}</MessageTime>
                    </MessageBubble>
                  ))}
                </ChatContent>

                <ChatInputContainer onSubmit={handleSendMessage}>
                  <ChatInputWrapper>
                    <InputIconButton type="button">
                      <FaPaperclip />
                    </InputIconButton>
                    <ChatInput
                      type="text"
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <InputIconButton type="button">
                      <FaSmile />
                    </InputIconButton>
                  </ChatInputWrapper>
                  <SendButton 
                    type="submit" 
                    disabled={!message.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane />
                  </SendButton>
                </ChatInputContainer>
              </>
            ) : (
              <EmptyStateContainer>
                <EmptyStateIcon>
                  <FaComments />
                </EmptyStateIcon>
                <EmptyStateText>Select a conversation to start chatting</EmptyStateText>
                <EmptyStateSubText>
                  Your messages will appear here. Start a new conversation or select an existing one to get started.
                </EmptyStateSubText>
              </EmptyStateContainer>
            )}
          </ChatContainer>
        </MessagesLayout>
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
  filter: blur(60px);
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
    filter: blur(60px);
  }
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const MessagesHeader = styled.header`
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

const MessagesLayout = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 20px;
  height: calc(100vh - 180px);
  
  @media (max-width: 1024px) {
    grid-template-columns: 300px 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const ChatsList = styled.div`
  background: rgba(20, 20, 30, 0.6);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const SearchContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 34px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const SearchInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 12px 20px 12px 40px;
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(88, 86, 214, 0.5);
    box-shadow: 0 0 0 4px rgba(88, 86, 214, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.selected ? 'rgba(88, 86, 214, 0.1)' : 'transparent'};
  border-left: 3px solid ${props => props.selected ? '#5856d6' : 'transparent'};
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => props.selected ? '0' : '20px'};
    width: ${props => props.selected ? '100%' : 'calc(100% - 40px)'};
    height: 1px;
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ChatAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const StatusIndicator = styled.span`
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4CAF50;
  border: 2px solid #0c0c14;
  box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.3);
`;

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChatName = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 5px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatLastMessage = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 60px;
`;

const ChatTime = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 5px;
`;

const UnreadBadge = styled.div`
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(88, 86, 214, 0.5);
`;

const ChatContainer = styled.div`
  background: rgba(20, 20, 30, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(30, 30, 45, 0.6);
`;

const ChatHeaderUser = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
  }
`;

const ChatHeaderName = styled.div`
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
`;

const ChatHeaderStatus = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin-right: 6px;
`;

const ChatOptions = styled.div`
  color: rgba(255, 255, 255, 0.6);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const ChatContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(88, 86, 214, 0.3);
    border-radius: 3px;
  }
`;

const MessageBubble = styled.div`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: ${props => props.isSender 
    ? '18px 18px 4px 18px' 
    : '18px 18px 18px 4px'};
  background: ${props => props.isSender 
    ? 'linear-gradient(135deg, rgba(88, 86, 214, 0.8) 0%, rgba(165, 94, 234, 0.8) 100%)' 
    : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.isSender ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  align-self: ${props => props.isSender ? 'flex-end' : 'flex-start'};
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const MessageTime = styled.div`
  font-size: 0.7rem;
  color: ${props => props.isSender ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.5)'};
  margin-top: 5px;
  text-align: right;
`;

const MessageSender = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3px;
`;

const ChatInputContainer = styled.form`
  padding: 15px 20px;
  background: rgba(30, 30, 45, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ChatInputWrapper = styled.div`
  flex: 1;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 0 10px;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: rgba(88, 86, 214, 0.5);
    box-shadow: 0 0 0 4px rgba(88, 86, 214, 0.1);
  }
`;

const ChatInput = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  padding: 12px 15px;
  font-size: 0.95rem;
  flex: 1;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const InputIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const SendButton = styled(motion.button)`
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(88, 86, 214, 0.3);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(88, 86, 214, 0.5);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: rgba(88, 86, 214, 0.3);
`;

const EmptyStateText = styled.div`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const EmptyStateSubText = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  max-width: 300px;
  line-height: 1.5;
`;

export default Messages; 