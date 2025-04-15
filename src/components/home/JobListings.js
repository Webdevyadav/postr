import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaBookmark } from 'react-icons/fa';

const JobListings = ({ isVisible }) => {
  const jobs = [
    {
      id: 1,
      title: 'Senior UX Designer',
      company: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.com',
      location: 'New York, NY (Remote)',
      salary: '$120k - $150k',
      type: 'Full-time',
      posted: '2 days ago',
      tags: ['UX Design', 'Figma', 'User Research']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Spotify',
      logo: 'https://logo.clearbit.com/spotify.com',
      location: 'Remote',
      salary: '$95k - $120k',
      type: 'Full-time',
      posted: '3 days ago',
      tags: ['React', 'TypeScript', 'CSS']
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Tesla',
      logo: 'https://logo.clearbit.com/tesla.com',
      location: 'Austin, TX',
      salary: '$130k - $160k',
      type: 'Full-time',
      posted: '1 week ago',
      tags: ['Python', 'Machine Learning', 'SQL']
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'Airbnb',
      logo: 'https://logo.clearbit.com/airbnb.com',
      location: 'San Francisco, CA (Hybrid)',
      salary: '$140k - $180k',
      type: 'Full-time',
      posted: '5 days ago',
      tags: ['Product Strategy', 'Agile', 'Analytics']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
      {jobs.map((job) => (
        <JobCard key={job.id} variants={itemVariants}>
          <JobHeader>
            <CompanyLogo src={job.logo} alt={`${job.company} logo`} />
            <JobTitleContainer>
              <JobTitle>{job.title}</JobTitle>
              <CompanyName>{job.company}</CompanyName>
            </JobTitleContainer>
            <SaveButton aria-label="Save job">
              <FaBookmark />
            </SaveButton>
          </JobHeader>
          
          <JobDetails>
            <JobDetail>
              <FaMapMarkerAlt />
              <span>{job.location}</span>
            </JobDetail>
            
            <JobDetail>
              <FaDollarSign />
              <span>{job.salary}</span>
            </JobDetail>
            
            <JobDetail>
              <FaClock />
              <span>Posted {job.posted}</span>
            </JobDetail>
          </JobDetails>
          
          <JobTags>
            {job.tags.map((tag, index) => (
              <JobTag key={index}>{tag}</JobTag>
            ))}
          </JobTags>
          
          <JobActions>
            <ApplyButton to={`/jobs/${job.id}`}>Apply Now</ApplyButton>
            <ViewButton to={`/jobs/${job.id}`}>View Details</ViewButton>
          </JobActions>
        </JobCard>
      ))}
      
      <MoreJobsLink to="/jobs">
        View All Job Opportunities
        <ArrowIcon />
      </MoreJobsLink>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
`;

const JobCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-md);
  margin-right: var(--spacing-md);
  background-color: white;
  padding: 5px;
  object-fit: contain;
`;

const JobTitleContainer = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--on-background);
  margin-bottom: 4px;
`;

const CompanyName = styled.p`
  color: var(--on-surface);
  font-size: 0.9rem;
`;

const SaveButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--primary);
  }
`;

const JobDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const JobDetail = styled.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.9rem;
  
  svg {
    margin-right: 6px;
    color: var(--primary);
  }
`;

const JobTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: var(--spacing-md);
`;

const JobTag = styled.span`
  background-color: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
`;

const JobActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const ApplyButton = styled(Link)`
  flex: 1;
  padding: 10px 20px;
  background: var(--gradient-1);
  color: white;
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-md);
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(88, 86, 214, 0.4);
  }
`;

const ViewButton = styled(Link)`
  flex: 1;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-md);
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--on-background);
  }
`;

const MoreJobsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  color: var(--primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  margin-top: var(--spacing-md);
  
  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  transform: rotate(-45deg);
  margin-left: 8px;
`;

export default JobListings; 