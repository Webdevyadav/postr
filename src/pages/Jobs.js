import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaSearch, FaFilter, FaDollarSign, FaRegClock, FaBookmark, FaRegBookmark, FaRocket, FaBolt, FaChartLine } from 'react-icons/fa';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState([2, 5]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const jobs = [
    {
      id: 1,
      title: 'Senior UX Designer',
      company: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.com',
      location: 'New York, NY',
      remote: true,
      salary: '$120k - $150k',
      type: 'Full-time',
      posted: '2 days ago',
      skills: ['UX Design', 'Figma', 'User Research', 'Prototyping'],
      description: 'We are looking for a Senior UX Designer to join our team and help create innovative user experiences across our products.'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Spotify',
      logo: 'https://logo.clearbit.com/spotify.com',
      location: 'Remote',
      remote: true,
      salary: '$95k - $120k',
      type: 'Full-time',
      posted: '3 days ago',
      skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
      description: 'Join our team to build and improve user interfaces for our music streaming platform used by millions worldwide.'
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Tesla',
      logo: 'https://logo.clearbit.com/tesla.com',
      location: 'Austin, TX',
      remote: false,
      salary: '$130k - $160k',
      type: 'Full-time',
      posted: '1 week ago',
      skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
      description: 'We are seeking a data scientist to help analyze and interpret complex data to drive innovation in electric vehicles and energy solutions.'
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'Airbnb',
      logo: 'https://logo.clearbit.com/airbnb.com',
      location: 'San Francisco, CA',
      remote: true,
      salary: '$140k - $180k',
      type: 'Full-time',
      posted: '5 days ago',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research'],
      description: 'Lead product development and strategy for our travel platform, working with cross-functional teams to deliver exceptional user experiences.'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Stripe',
      logo: 'https://logo.clearbit.com/stripe.com',
      location: 'Remote',
      remote: true,
      salary: '$110k - $140k',
      type: 'Full-time',
      posted: '1 day ago',
      skills: ['AWS', 'Kubernetes', 'CI/CD', 'Docker'],
      description: 'Help build and maintain our cloud infrastructure, automate processes, and improve system reliability and performance.'
    },
    {
      id: 6,
      title: 'Mobile App Developer',
      company: 'Uber',
      logo: 'https://logo.clearbit.com/uber.com',
      location: 'Chicago, IL',
      remote: false,
      salary: '$100k - $130k',
      type: 'Full-time',
      posted: '4 days ago',
      skills: ['Swift', 'Kotlin', 'Mobile UI', 'APIs'],
      description: 'Join our mobile team to develop and enhance our rider and driver apps used by millions of people around the world.'
    }
  ];

  // Simulate loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
  }, []);

  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundGlow />
      
      <PageContent>
        <JobsHeader>
          <HeaderContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Title>
                <GradientText>Find Your Dream Job</GradientText>
                <TitleIcon><FaRocket /></TitleIcon>
              </Title>
              <SubTitle>Discover opportunities that match your skills and career goals</SubTitle>
            </motion.div>
            
            <SearchBarContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <SearchBar>
                <SearchIconWrapper>
                  <FaSearch />
                </SearchIconWrapper>
                <SearchInput 
                  type="text" 
                  placeholder="Search jobs by title, company, or keywords..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </SearchBar>
              <FilterButton 
                onClick={() => setShowFilters(!showFilters)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFilter />
                <span>Filters</span>
              </FilterButton>
            </SearchBarContainer>
          </HeaderContent>
        </JobsHeader>
        
        <AnimatePresence>
          {showFilters && (
            <FiltersContainer
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiltersRow>
                <FilterGroup>
                  <FilterLabel>Location</FilterLabel>
                  <FilterSelect>
                    <option value="">All Locations</option>
                    <option value="Remote">Remote</option>
                    <option value="San Francisco, CA">San Francisco, CA</option>
                    <option value="New York, NY">New York, NY</option>
                    <option value="Austin, TX">Austin, TX</option>
                  </FilterSelect>
                </FilterGroup>
                
                <FilterGroup>
                  <FilterLabel>Job Type</FilterLabel>
                  <FilterSelect>
                    <option value="">All Types</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </FilterSelect>
                </FilterGroup>
                
                <FilterGroup>
                  <FilterLabel>Experience Level</FilterLabel>
                  <FilterSelect>
                    <option value="">All Levels</option>
                    <option value="Entry">Entry Level</option>
                    <option value="Mid">Mid Level</option>
                    <option value="Senior">Senior Level</option>
                    <option value="Executive">Executive</option>
                  </FilterSelect>
                </FilterGroup>
                
                <FilterGroup>
                  <FilterLabel>Salary Range</FilterLabel>
                  <FilterSelect>
                    <option value="">Any Salary</option>
                    <option value="0-50000">$0 - $50k</option>
                    <option value="50000-100000">$50k - $100k</option>
                    <option value="100000-150000">$100k - $150k</option>
                    <option value="150000+">$150k+</option>
                  </FilterSelect>
                </FilterGroup>
              </FiltersRow>
              
              <FiltersActions>
                <ResetButton>Reset</ResetButton>
                <ApplyFiltersButton
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(88, 86, 214, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Filters
                </ApplyFiltersButton>
              </FiltersActions>
            </FiltersContainer>
          )}
        </AnimatePresence>
        
        <JobStats
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <JobStat
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", 
              borderColor: "rgba(88, 86, 214, 0.3)" 
            }}
          >
            <StatIcon><FaBolt /></StatIcon>
            <StatValue>2,543</StatValue>
            <StatLabel>Active Jobs</StatLabel>
          </JobStat>
          <JobStat
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", 
              borderColor: "rgba(88, 86, 214, 0.3)" 
            }}
          >
            <StatIcon><FaRocket /></StatIcon>
            <StatValue>178</StatValue>
            <StatLabel>New Today</StatLabel>
          </JobStat>
          <JobStat
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)", 
              borderColor: "rgba(88, 86, 214, 0.3)" 
            }}
          >
            <StatIcon><FaChartLine /></StatIcon>
            <StatValue>87%</StatValue>
            <StatLabel>Response Rate</StatLabel>
          </JobStat>
        </JobStats>
        
        <JobsContainer
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {jobs.map((job) => (
            <JobCard 
              key={job.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <JobCardHeader>
                <CompanyLogo>
                  <img src={job.logo} alt={`${job.company} logo`} />
                </CompanyLogo>
                <div>
                  <JobTitle>{job.title}</JobTitle>
                  <CompanyName>
                    <FaBriefcase />
                    {job.company}
                  </CompanyName>
                </div>
                <SaveButton 
                  onClick={() => toggleSaveJob(job.id)}
                  saved={savedJobs.includes(job.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {savedJobs.includes(job.id) ? <FaBookmark /> : <FaRegBookmark />}
                </SaveButton>
              </JobCardHeader>
              
              <Divider />
              
              <JobMeta>
                <JobMetaItem>
                  <FaMapMarkerAlt />
                  <span>{job.location} {job.remote && "(Remote)"}</span>
                </JobMetaItem>
                <JobMetaItem>
                  <FaBriefcase />
                  <span>{job.type}</span>
                </JobMetaItem>
                <JobMetaItem>
                  <FaDollarSign />
                  <span>{job.salary}</span>
                </JobMetaItem>
                <JobMetaItem>
                  <FaRegClock />
                  <span>{job.posted}</span>
                </JobMetaItem>
              </JobMeta>
              
              <JobDescription>{job.description}</JobDescription>
              
              <SkillsContainer>
                {job.skills.map((skill, index) => (
                  <SkillTag 
                    key={index}
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillsContainer>
              
              <JobActions>
                <ApplyButton
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Apply Now
                </ApplyButton>
                <ViewDetailsButton
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Details
                </ViewDetailsButton>
              </JobActions>
            </JobCard>
          ))}
        </JobsContainer>
        
        <LoadMoreButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More Jobs
        </LoadMoreButton>
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

const JobsHeader = styled.header`
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

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(88, 86, 214, 0.3);
`;

const TitleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
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

const SearchBarContainer = styled(motion.div)`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0 20px;
  height: 60px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  &:focus-within {
    border-color: rgba(88, 86, 214, 0.5);
    box-shadow: 0 0 0 4px rgba(88, 86, 214, 0.1), 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SearchIconWrapper = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  margin-right: 15px;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const FilterButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(88, 86, 214, 0.1);
  border: 1px solid rgba(88, 86, 214, 0.3);
  border-radius: 50px;
  padding: 0 25px;
  height: 60px;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(88, 86, 214, 0.2);
  }
  
  svg {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const FiltersContainer = styled(motion.div)`
  background: rgba(15, 15, 25, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`;

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterLabel = styled.label`
  font-size: 0.85rem;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.7);
`;

const FilterSelect = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 15px;
  color: #fff;
  font-size: 0.95rem;
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: rgba(88, 86, 214, 0.5);
  }
  
  /* Arrow */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 15px;
  padding-right: 40px;
`;

const FiltersActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 25px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResetButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0 25px;
  height: 48px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ApplyFiltersButton = styled(motion.button)`
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  border: none;
  border-radius: 50px;
  padding: 0 30px;
  height: 48px;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const JobStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobStat = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StatIcon = styled.div`
  color: #5856d6;
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
`;

const JobsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const JobCard = styled(motion.div)`
  background: rgba(30, 30, 40, 0.4);
  border-radius: 16px;
  padding: var(--spacing-lg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(88, 86, 214, 0.1);
    border-color: rgba(88, 86, 214, 0.2);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(88, 86, 214, 0.1), transparent 70%);
    pointer-events: none;
  }
`;

const JobCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  position: relative;
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 2;
    position: relative;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  background: linear-gradient(90deg, #ffffff, #b3b2f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
`;

const CompanyName = styled.p`
  color: var(--on-surface);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 6px;
    color: var(--primary);
    font-size: 0.8rem;
  }
`;

const SaveButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.saved ? 'rgba(88, 86, 214, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.saved ? 'var(--primary)' : 'var(--on-surface)'};
  margin-left: auto;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${props => props.saved ? 'rgba(88, 86, 214, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  
  &:hover {
    background-color: ${props => props.saved ? 'rgba(88, 86, 214, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
    color: ${props => props.saved ? 'var(--primary)' : 'var(--on-background)'};
    box-shadow: 0 0 15px rgba(88, 86, 214, 0.3);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, rgba(88, 86, 214, 0.3), transparent);
  margin: var(--spacing-md) 0;
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const JobMetaItem = styled.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.9rem;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  svg {
    margin-right: 8px;
    color: var(--primary);
  }
`;

const JobDescription = styled.p`
  color: var(--on-surface);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 1;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: var(--spacing-md);
`;

const SkillTag = styled(motion.span)`
  background-color: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: var(--font-weight-medium);
  border: 1px solid rgba(88, 86, 214, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(88, 86, 214, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-color: rgba(88, 86, 214, 0.3);
  }
`;

const JobActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const ApplyButton = styled(motion.button)`
  flex: 1;
  padding: 12px 0;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  color: white;
  font-weight: var(--font-weight-medium);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(88, 86, 214, 0.5);
    
    &::before {
      left: 100%;
    }
  }
`;

const ViewDetailsButton = styled(motion.button)`
  flex: 1;
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  font-weight: var(--font-weight-medium);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--on-background);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const LoadMoreButton = styled(motion.button)`
  display: block;
  width: 200px;
  margin: var(--spacing-xl) auto;
  padding: 14px 0;
  background: linear-gradient(90deg, rgba(88, 86, 214, 0.2), rgba(140, 138, 247, 0.2));
  color: var(--primary);
  font-weight: var(--font-weight-medium);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(88, 86, 214, 0.2);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background: conic-gradient(
      rgba(88, 86, 214, 0.3),
      rgba(88, 86, 214, 0),
      rgba(88, 86, 214, 0.3),
      rgba(88, 86, 214, 0)
    );
    animation: rotate 4s linear infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(88, 86, 214, 0.3);
    
    &::after {
      opacity: 1;
    }
  }
`;

export default Jobs; 