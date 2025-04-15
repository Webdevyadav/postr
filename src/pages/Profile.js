import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaUniversity, FaGlobe, FaLinkedin, FaTwitter, FaGithub, FaUserPlus, FaCommentAlt, FaEllipsisH, FaEnvelope, FaPen, FaCame, FaTimes, FaThumbsUp, FaComment, FaShare, FaStar, FaCode } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import NetworkVisualization from '../animations/NetworkVisualization';

// Safe NetworkVisualization component with error handling
const SafeNetworkViz = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      <NetworkVisualization />
    </Suspense>
  );
};

// Sample user data (in a real app, this would come from an API)
const userData = {
  me: {
    id: 'me',
    name: 'John Doe',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    bio: 'Passionate frontend developer with 8+ years of experience in building modern web applications. Specialized in React, TypeScript, and modern web technologies.',
    coverImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg',
    connections: 482,
    posts: 47,
    views: 1243,
    company: 'TechCorp Inc.',
    education: 'Stanford University, Computer Science',
    website: 'https://johndoe.dev',
    social: {
      linkedin: 'johndoe',
      twitter: 'johndoe',
      github: 'johndoe'
    },
    skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Redux', 'Node.js', 'GraphQL', 'Jest', 'Webpack'],
    experience: [
      {
        id: 1,
        role: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        duration: 'Jan 2020 - Present',
        description: 'Leading frontend development for the company\'s main product. Implemented new features and improved performance by 40%.'
      },
      {
        id: 2,
        role: 'Frontend Developer',
        company: 'WebSolutions LLC',
        duration: 'Mar 2017 - Dec 2019',
        description: 'Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces.'
      },
      {
        id: 3,
        role: 'Junior Web Developer',
        company: 'Digital Agency',
        duration: 'Jun 2015 - Feb 2017',
        description: 'Built and maintained websites for various clients using HTML, CSS, and JavaScript.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'M.S. in Computer Science',
        institution: 'Stanford University',
        duration: '2013 - 2015'
      },
      {
        id: 2,
        degree: 'B.S. in Computer Science',
        institution: 'UC Berkeley',
        duration: '2009 - 2013'
      }
    ]
  },
  1: {
    id: '1',
    name: 'Alex Morgan',
    title: 'Product Designer at Google',
    location: 'New York, NY',
    bio: 'Product designer with a passion for creating user-centered digital experiences. Currently working at Google, focusing on design systems and accessibility.',
    coverImage: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    connections: 723,
    posts: 38,
    views: 982,
    company: 'Google',
    education: 'Rhode Island School of Design, Graphic Design',
    website: 'https://alexmorgan.design',
    social: {
      linkedin: 'alexmorgan',
      twitter: 'alexmorgan',
      github: 'alexmorgan'
    },
    skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Design Systems', 'Accessibility'],
    experience: [
      {
        id: 1,
        role: 'Senior Product Designer',
        company: 'Google',
        duration: 'Apr 2021 - Present',
        description: 'Leading design for key products, focusing on creating accessible and intuitive user experiences.'
      },
      {
        id: 2,
        role: 'Product Designer',
        company: 'Airbnb',
        duration: 'Jan 2018 - Mar 2021',
        description: 'Designed user interfaces and experiences for the Airbnb platform, with a focus on mobile applications.'
      },
      {
        id: 3,
        role: 'UI Designer',
        company: 'Freelance',
        duration: 'Jun 2016 - Dec 2017',
        description: 'Worked with various clients to create user interfaces for web and mobile applications.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'BFA in Graphic Design',
        institution: 'Rhode Island School of Design',
        duration: '2012 - 2016'
      }
    ]
  }
};

const Profile = () => {
  const { id = 'me' } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('experience');
  const [activeContentTab, setActiveContentTab] = useState('posts');
  const [animate, setAnimate] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: '',
    title: '',
    location: '',
    company: '',
    bio: ''
  });

  useEffect(() => {
    // Simulate API call to fetch user data
    setLoading(true);
    const timer = setTimeout(() => {
      const fetchedUser = userData[id] || userData.me;
      setUser(fetchedUser);
      setLoading(false);
      
      // Start animations after data is loaded
      setTimeout(() => {
        setAnimate(true);
      }, 300);
      
      // Update edit form data
      setEditFormData({
        name: fetchedUser.name,
        title: fetchedUser.title,
        location: fetchedUser.location,
        company: fetchedUser.company,
        bio: fetchedUser.bio
      });
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Update the animation variants for more subtle effects
  const glowVariants = {
    hidden: { 
      opacity: 0,
      filter: "drop-shadow(0 0 0px rgba(88, 86, 214, 0))"
    },
    visible: { 
      opacity: 1,
      filter: "drop-shadow(0 0 10px rgba(88, 86, 214, 0.3))",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 3
      }
    }
  };

  const floatVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // Add back the missing animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveProfile = () => {
    // Here you would typically make an API call to save the profile
    console.log("Saving profile data:", editFormData);
    
    // Update local user data (in a real app, this would come from the API response)
    user.name = editFormData.name;
    user.title = editFormData.title;
    user.location = editFormData.location;
    user.company = editFormData.company;
    user.bio = editFormData.bio;
    
    // Close the modal
    setShowEditModal(false);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <LoaderSpinner />
      </LoadingContainer>
    );
  }

  return (
    <ProfileContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <ProfileHeader 
        variants={glowVariants}
        initial="hidden"
        animate="visible"
      >
        {id === 'me' && (
          <EditProfileButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowEditModal(true)}
          >
            <FaPen />
            <span>Edit</span>
          </EditProfileButton>
        )}
        
        <CoverImage style={{ backgroundImage: `url(${user.coverImage})` }}>
          <CoverParticles />
          <CoverOverlay />
          <NetworkVisualizationWrapper>
            <Canvas 
              camera={{ position: [0, 0, 5], fov: 75 }}
              gl={{ antialias: true, alpha: true }}
              onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0); // Transparent background
              }}
            >
              <SafeNetworkViz />
            </Canvas>
          </NetworkVisualizationWrapper>
        </CoverImage>
        
        <ProfileHeaderContent>
          <ProfileImageContainer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={floatVariants}
            whileInView="visible"
          >
            <ProfileImage 
              src={user.profileImage} 
              alt={user.name} 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            <ProfileStatus
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              variants={pulseVariants}
            />
          </ProfileImageContainer>
          
          <ProfileInfo>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProfileNameWrapper>
                <ProfileName>{user.name}</ProfileName>
                <NameHighlight 
                  initial={{ opacity: 0, width: "0%" }}
                  animate={{ opacity: 1, width: "110%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </ProfileNameWrapper>
              <ProfileTitle>{user.title}</ProfileTitle>
              
              <BadgesContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <ProfileBadge
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaStar /> Pro Member
                </ProfileBadge>
                <ProfileBadge
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode /> Top Contributor
                </ProfileBadge>
              </BadgesContainer>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ProfileLocation>
                <FaMapMarkerAlt />
                <span>{user.location}</span>
              </ProfileLocation>
              
              <ProfileCompany>
                <FaBriefcase />
                <span>Works at {user.company}</span>
              </ProfileCompany>
            </motion.div>
            
            <ProfileConnectionsInfo
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <ConnectionCount>{user.connections} connections</ConnectionCount>
              <PostsCount>{user.posts} posts</PostsCount>
              <ViewsCount>{user.views} profile views this month</ViewsCount>
            </ProfileConnectionsInfo>
          </ProfileInfo>
          
          <ProfileActions
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {id !== 'me' && (
              <>
                <PrimaryButton
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(88, 86, 214, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUserPlus />
                  <span>Connect</span>
                </PrimaryButton>
                <SecondaryButton
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCommentAlt />
                  <span>Message</span>
                </SecondaryButton>
                <ActionButton
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEllipsisH />
                </ActionButton>
              </>
            )}
          </ProfileActions>
        </ProfileHeaderContent>
      </ProfileHeader>
      
      <ProfileContent>
        <MainColumn>
          <AboutSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionTitle>About</SectionTitle>
            <SectionContent>
              <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
                {user.bio}
              </motion.p>
            </SectionContent>
          </AboutSection>
          
          {/* Content Tabs */}
          <ContentTabsContainer>
            <ContentTabButton 
              active={activeContentTab === 'posts'} 
              onClick={() => setActiveContentTab('posts')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCommentAlt /> Posts
            </ContentTabButton>
            <ContentTabButton 
              active={activeContentTab === 'experience'} 
              onClick={() => setActiveContentTab('experience')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaBriefcase /> Experience
            </ContentTabButton>
            <ContentTabButton 
              active={activeContentTab === 'connections'} 
              onClick={() => setActiveContentTab('connections')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaUserPlus /> Connections
            </ContentTabButton>
          </ContentTabsContainer>
          
          {/* Content Tab Panels */}
          <AnimatePresence mode="wait">
            {activeContentTab === 'posts' && (
              <ContentWrapper
                key="posts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PostsGrid>
                  {samplePosts.map(post => (
                    <PostCard key={post.id}>
                      <PostHeader>
                        <PostAuthorImage src={post.author.image} alt={post.author.name} />
                        <PostAuthorInfo>
                          <PostAuthorName>{post.author.name}</PostAuthorName>
                          <PostDate>{post.date}</PostDate>
                        </PostAuthorInfo>
                      </PostHeader>
                      <PostContent>{post.content}</PostContent>
                      {post.image && <PostImage src={post.image} alt="" />}
                      <PostFooter>
                        <PostAction>
                          <FaThumbsUp /> {post.likes}
                        </PostAction>
                        <PostAction>
                          <FaComment /> {post.comments}
                        </PostAction>
                        <PostAction>
                          <FaShare />
                        </PostAction>
                      </PostFooter>
                    </PostCard>
                  ))}
                </PostsGrid>
              </ContentWrapper>
            )}
            
            {activeContentTab === 'experience' && (
              <ContentWrapper
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContainer>
                  <TabButton 
                    active={activeTab === 'experience'} 
                    onClick={() => setActiveTab('experience')}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Experience
                  </TabButton>
                  <TabButton 
                    active={activeTab === 'education'} 
                    onClick={() => setActiveTab('education')}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Education
                  </TabButton>
                </TabsContainer>
                
                <TabContent>
                  <AnimatePresence mode="wait">
                    {activeTab === 'experience' ? (
                      <motion.div
                        key="experience"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {user.experience.map((exp) => (
                          <ExperienceCard 
                            key={exp.id} 
                            variants={fadeIn}
                            whileHover={{ 
                              y: -5, 
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", 
                              borderColor: "rgba(88, 86, 214, 0.3)" 
                            }}
                          >
                            <ExperienceHeader>
                              <ExperienceTitle>{exp.role}</ExperienceTitle>
                              <ExperiencePeriod>{exp.duration}</ExperiencePeriod>
                            </ExperienceHeader>
                            <ExperienceCompany>{exp.company}</ExperienceCompany>
                            <ExperienceDescription>{exp.description}</ExperienceDescription>
                          </ExperienceCard>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="education"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {user.education.map((edu) => (
                          <EducationCard 
                            key={edu.id} 
                            variants={fadeIn}
                            whileHover={{ 
                              y: -5, 
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", 
                              borderColor: "rgba(88, 86, 214, 0.3)" 
                            }}
                          >
                            <EducationHeader>
                              <EducationDegree>{edu.degree}</EducationDegree>
                              <EducationPeriod>{edu.duration}</EducationPeriod>
                            </EducationHeader>
                            <EducationInstitution>{edu.institution}</EducationInstitution>
                            <EducationDescription>{edu.duration}</EducationDescription>
                          </EducationCard>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TabContent>
              </ContentWrapper>
            )}
            
            {activeContentTab === 'connections' && (
              <ContentWrapper
                key="connections"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ConnectionsGrid>
                  {sampleConnections.map(connection => (
                    <ConnectionCard 
                      key={connection.id}
                      whileHover={{ y: -5 }}
                    >
                      <ConnectionCardHeader>
                        <ConnectionImage src={connection.image} alt={connection.name} />
                        <ConnectionName>{connection.name}</ConnectionName>
                        <ConnectionTitle>{connection.title}</ConnectionTitle>
                      </ConnectionCardHeader>
                      <ConnectionCardFooter>
                        <SecondaryButton
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaCommentAlt />
                          <span>Message</span>
                        </SecondaryButton>
                      </ConnectionCardFooter>
                    </ConnectionCard>
                  ))}
                </ConnectionsGrid>
              </ContentWrapper>
            )}
          </AnimatePresence>
        </MainColumn>
        
        <SideColumn>
          <SkillsSection
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionTitle>Skills</SectionTitle>
            <SkillsList
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {user.skills.map((skill, index) => (
                <SkillItem 
                  key={index} 
                  variants={slideIn}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(88, 86, 214, 0.2)", 
                    y: -3 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillsSection>
          
          <ContactSection
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SectionTitle>Contact & Social</SectionTitle>
            <SocialLinks
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <SocialLink 
                variants={slideIn} 
                href={`https://linkedin.com/in/${user.social.linkedin}`} 
                target="_blank"
                whileHover={{ x: 8, color: "#0077B5" }}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </SocialLink>
              <SocialLink 
                variants={slideIn} 
                href={`https://twitter.com/${user.social.twitter}`} 
                target="_blank"
                whileHover={{ x: 8, color: "#1DA1F2" }}
              >
                <FaTwitter />
                <span>Twitter</span>
              </SocialLink>
              <SocialLink 
                variants={slideIn} 
                href={`https://github.com/${user.social.github}`} 
                target="_blank"
                whileHover={{ x: 8, color: "#f5f5f5" }}
              >
                <FaGithub />
                <span>GitHub</span>
              </SocialLink>
              <SocialLink 
                variants={slideIn} 
                href={`mailto:${user.email}`}
                whileHover={{ x: 8, color: "#D44638" }}
              >
                <FaEnvelope />
                <span>Email</span>
              </SocialLink>
              <SocialLink 
                variants={slideIn} 
                href={user.website} 
                target="_blank"
                whileHover={{ x: 8, color: "#2196F3" }}
              >
                <FaGlobe />
                <span>Website</span>
              </SocialLink>
            </SocialLinks>
          </ContactSection>
        </SideColumn>
      </ProfileContent>
      
      {/* Edit Profile Modal */}
      <AnimatePresence>
        {showEditModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEditModal(false)}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <ModalHeader>
                <ModalTitle>Edit Profile</ModalTitle>
                <CloseButton 
                  onClick={() => setShowEditModal(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </CloseButton>
              </ModalHeader>
              
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditFormChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Title</FormLabel>
                <FormInput
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditFormChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Location</FormLabel>
                <FormInput
                  type="text"
                  name="location"
                  value={editFormData.location}
                  onChange={handleEditFormChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Company</FormLabel>
                <FormInput
                  type="text"
                  name="company"
                  value={editFormData.company}
                  onChange={handleEditFormChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Bio</FormLabel>
                <FormTextarea
                  name="bio"
                  value={editFormData.bio}
                  onChange={handleEditFormChange}
                />
              </FormGroup>
              
              <SaveButton
                onClick={handleSaveProfile}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Save Changes
              </SaveButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProfileContainer>
  );
};

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const LoaderSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-1);
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(88, 86, 214, 0.7);
    }
    
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(88, 86, 214, 0);
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(88, 86, 214, 0);
    }
  }
`;

const ProfileContainer = styled(motion.div)`
  padding: var(--spacing-lg);
  padding-top: calc(var(--spacing-lg) + 60px); /* Extra padding for navbar */
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(88, 86, 214, 0.1), transparent 60%);
    z-index: -1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-md);
    padding-top: calc(var(--spacing-md) + 50px);
  }
`;

const ProfileHeader = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(88, 86, 214, 0.15);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(88, 86, 214, 0.3), transparent);
    animation: glowLineHorizontal 15s infinite linear;
    opacity: 0.6;
  }
  
  @keyframes glowLineHorizontal {
    0% {
      left: -50%;
    }
    100% {
      left: 100%;
    }
  }
`;

const CoverImage = styled.div`
  height: 320px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, rgba(76, 0, 255, 0.2), rgba(88, 86, 214, 0.1), rgba(255, 66, 176, 0.1));
    z-index: 1;
    opacity: 0.5;
    animation: pulseBg 15s infinite alternate;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(76, 0, 255, 0.2), transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(255, 66, 176, 0.2), transparent 40%);
    z-index: 2;
    opacity: 0.3;
    mix-blend-mode: overlay;
  }
  
  @keyframes pulseBg {
    0% {
      opacity: 0.3;
      background-position: 0% 0%;
      transform: scale(1);
    }
    100% {
      opacity: 0.5;
      background-position: 100% 100%;
      transform: scale(1.03);
    }
  }
  
  @media (max-width: 768px) {
    height: 220px;
  }
`;

const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(18, 18, 20, 0.95)
  );
  backdrop-filter: blur(3px);
  z-index: 3;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    z-index: 4;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, transparent, rgba(18, 18, 20, 1));
    z-index: 4;
  }
`;

const CoverParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow: hidden;
  opacity: 0.4;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 5px 1px rgba(88, 86, 214, 0.6);
    animation: particleFloat 30s infinite linear;
    opacity: 0.4;
  }
  
  &::before {
    top: 20%;
    left: 30%;
    animation-duration: 25s;
    animation-delay: 2s;
  }
  
  &::after {
    top: 60%;
    left: 70%;
    animation-duration: 28s;
    animation-delay: 1s;
  }
  
  @keyframes particleFloat {
    0% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(50px, 25px) scale(1.2);
      opacity: 0.5;
    }
    50% {
      transform: translate(100px, -25px) scale(1);
      opacity: 0.3;
    }
    75% {
      transform: translate(50px, -50px) scale(1.1);
      opacity: 0.5;
    }
    100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.3;
    }
  }
`;

const ProfileHeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  position: relative;
  margin-top: -80px;
  z-index: 10;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  margin-right: var(--spacing-xl);
  z-index: 5;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(88, 86, 214, 0.5), rgba(130, 87, 229, 0.5), rgba(214, 86, 151, 0.5));
    z-index: -1;
    animation: rotate 12s linear infinite;
    filter: blur(4px);
    opacity: 0.7;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(88, 86, 214, 0.5), rgba(130, 87, 229, 0.2));
    z-index: -1;
    animation: rotate 15s linear infinite reverse;
    filter: blur(6px);
    opacity: 0.5;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: var(--spacing-md);
  }
`;

const ProfileImage = styled(motion.img)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 5px solid rgba(18, 18, 30, 0.8);
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfileStatus = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #4CAF50;
  border: 3px solid rgba(18, 18, 30, 0.8);
  z-index: 11;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
  position: relative;
  background: rgba(20, 20, 28, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(88, 86, 214, 0.15);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(88, 86, 214, 0.1) 0%, transparent 50%);
    pointer-events: none;
    border-radius: 16px;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(88, 86, 214, 0.1), transparent);
    background-size: 200% 200%;
    animation: shimmer 5s infinite linear;
    pointer-events: none;
    border-radius: 16px;
  }
  
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 200%;
    }
  }
`;

const ProfileNameWrapper = styled(motion.div)`
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(88, 86, 214, 0.3);
    filter: blur(20px);
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

const ProfileName = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  font-weight: 700;
  background: linear-gradient(to right, #ffffff, #a6b1e1, #5856d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  letter-spacing: 0.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50%;
    height: 3px;
    background: linear-gradient(to right, rgba(88, 86, 214, 0.8), rgba(88, 86, 214, 0));
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const NameHighlight = styled(motion.span)`
  position: absolute;
  width: 110%;
  height: 40%;
  background: linear-gradient(90deg, rgba(88, 86, 214, 0.15), rgba(130, 87, 229, 0.05), transparent);
  bottom: 15%;
  left: -5%;
  z-index: -1;
  filter: blur(10px);
  border-radius: 30px;
  opacity: 0.7;
`;

const ProfileTitle = styled.h2`
  font-size: 1.4rem;
  color: var(--on-surface);
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
  
  background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BadgesContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const ProfileBadge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(88, 86, 214, 0.1);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  color: white;
  border: 1px solid rgba(88, 86, 214, 0.15);
  
  svg {
    font-size: 0.8rem;
    color: rgba(88, 86, 214, 0.8);
  }
`;

const ProfileConnectionsInfo = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`;

const ConnectionCount = styled.div`
  color: var(--primary);
  font-weight: var(--font-weight-semibold);
`;

const PostsCount = styled.div`
  color: var(--on-surface);
`;

const ViewsCount = styled.div`
  color: var(--on-surface);
`;

const ProfileActions = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  
  @media (max-width: 992px) {
    margin-top: var(--spacing-md);
    width: 100%;
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    box-shadow: 0 0 15px rgba(88, 86, 214, 0.5);
  }
`;

const SecondaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--on-background);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const ActionButton = styled(motion.button)`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--on-background);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const EditProfileButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: rgba(88, 86, 214, 0.6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(88, 86, 214, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;

const ProfileContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--on-background);
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary);
    border-radius: 3px;
  }
`;

const SectionContent = styled.div`
  color: var(--on-surface);
  line-height: 1.6;
`;

const AboutSection = styled(motion.section)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(88, 86, 214, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ExperienceEducationSection = styled(AboutSection)``;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const TabButton = styled(motion.button)`
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  color: ${props => props.active ? 'var(--primary)' : 'var(--on-surface)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--primary)' : 'transparent'};
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  &:hover {
    color: var(--primary);
  }
`;

const TabContent = styled.div`
  min-height: 200px;
`;

const ExperienceCard = styled(motion.div)`
  padding: var(--spacing-md);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: var(--spacing-md);
  transition: all 0.3s ease;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const ExperienceTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--on-background);
  font-weight: var(--font-weight-semibold);
`;

const ExperiencePeriod = styled.span`
  color: var(--primary);
  font-size: 0.9rem;
`;

const ExperienceCompany = styled.div`
  color: var(--on-surface);
  margin-bottom: 8px;
  font-size: 1rem;
`;

const ExperienceDescription = styled.p`
  color: var(--on-surface);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const EducationCard = styled(ExperienceCard)``;

const EducationHeader = styled(ExperienceHeader)``;

const EducationDegree = styled(ExperienceTitle)``;

const EducationPeriod = styled(ExperiencePeriod)``;

const EducationInstitution = styled(ExperienceCompany)``;

const EducationDescription = styled(ExperienceDescription)``;

const SkillsSection = styled(AboutSection)``;

const SkillsList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

const SkillItem = styled(motion.div)`
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  padding: 8px 14px;
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(88, 86, 214, 0.05);
  
  &:hover {
    background: rgba(88, 86, 214, 0.2);
    transform: translateY(-2px);
  }
`;

const ContactSection = styled(AboutSection)``;

const SocialLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--on-surface);
  text-decoration: none;
  padding: 8px 0;
  transition: all 0.2s ease;
  
  svg {
    color: var(--primary);
    font-size: 1.2rem;
  }
  
  &:hover {
    color: var(--on-background);
    transform: translateX(5px);
  }
`;

// Add Modal Components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #1a1a2e;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  padding: 30px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(88, 86, 214, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle at top right, rgba(88, 86, 214, 0.1), transparent 70%);
    border-radius: 16px;
    z-index: -1;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ModalTitle = styled.h2`
  margin: 0;
  background: linear-gradient(to right, #fff, #a6b1e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
`;

const CloseButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: #a6b1e1;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: white;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #a6b1e1;
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(88, 86, 214, 0.5);
    box-shadow: 0 0 0 3px rgba(88, 86, 214, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(88, 86, 214, 0.5);
    box-shadow: 0 0 0 3px rgba(88, 86, 214, 0.2);
  }
`;

const SaveButton = styled(motion.button)`
  background: linear-gradient(135deg, rgba(88, 86, 214, 0.8), rgba(88, 86, 214, 0.4));
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(88, 86, 214, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, rgba(88, 86, 214, 1), rgba(88, 86, 214, 0.6));
  }
`;

// Content tabs components
const ContentTabsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 12px;
  background: rgba(30, 30, 40, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 8px;
  overflow: hidden;
`;

const ContentTabButton = styled(motion.button)`
  padding: 12px 20px;
  flex: 1;
  background: ${props => props.active ? 'rgba(88, 86, 214, 0.2)' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
  font-weight: ${props => props.active ? '600' : '400'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: ${props => props.active ? 'rgba(88, 86, 214, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  }
  
  svg {
    font-size: 16px;
  }
`;

const ContentWrapper = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
`;

// Components for the different content sections
const ConnectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ConnectionCard = styled(motion.div)`
  background: rgba(30, 30, 40, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(88, 86, 214, 0.3);
  }
`;

const ConnectionCardHeader = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const ConnectionImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(88, 86, 214, 0.3);
  margin-bottom: 10px;
`;

const ConnectionName = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 5px;
  color: white;
`;

const ConnectionTitle = styled.p`
  font-size: 0.85rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const ConnectionCardFooter = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostCard = styled(motion.div)`
  background: rgba(30, 30, 40, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  padding: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const PostAuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const PostAuthorInfo = styled.div`
  flex: 1;
`;

const PostAuthorName = styled.h3`
  font-size: 1rem;
  margin: 0 0 5px;
`;

const PostDate = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const PostContent = styled.p`
  margin: 0 0 15px;
  line-height: 1.6;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const PostFooter = styled.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 15px;
`;

const PostAction = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  
  &:hover {
    color: var(--primary);
  }
`;

// Sample data for connections and posts
const sampleConnections = [
  {
    id: 1,
    name: 'Emily Johnson',
    title: 'UX Designer at Apple',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    mutualConnections: 8
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Software Engineer at Microsoft',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    mutualConnections: 5
  },
  {
    id: 3,
    name: 'Sarah Williams',
    title: 'Product Manager at Netflix',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    mutualConnections: 12
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'Frontend Developer at Amazon',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    mutualConnections: 3
  }
];

const samplePosts = [
  {
    id: 1,
    author: {
      name: 'John Doe',
      image: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg'
    },
    content: 'Just finished an amazing project using React and Framer Motion. The animations are so smooth!',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    date: '2 days ago',
    likes: 42,
    comments: 5
  },
  {
    id: 2,
    author: {
      name: 'John Doe',
      image: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg'
    },
    content: 'What do you think about the new features in React 18? I\'m particularly excited about Concurrent Rendering.',
    image: null,
    date: '1 week ago',
    likes: 24,
    comments: 8
  }
];

// Fix the missing ProfileLocation and ProfileCompany components
const ProfileLocation = styled.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.95rem;
  margin-bottom: 5px;
  
  svg {
    color: var(--primary);
    margin-right: 8px;
  }
`;

const ProfileCompany = styled(ProfileLocation)``;

const NetworkVisualizationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  opacity: 0.7;
  z-index: 1;
  pointer-events: none;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export default Profile; 