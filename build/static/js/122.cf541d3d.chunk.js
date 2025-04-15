"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[122],{3122:(e,i,a)=>{a.r(i),a.d(i,{default:()=>Xe});var r=a(5043),t=a(3216),o=a(5464),n=a(6759),s=a(6938),d=a(2774),l=a(1985),c=a(3414),p=a(579);const g=()=>(0,p.jsxs)(r.Suspense,{fallback:null,children:[(0,p.jsx)("ambientLight",{intensity:.8}),(0,p.jsx)("pointLight",{position:[10,10,10]}),(0,p.jsx)(c.A,{})]}),x={me:{id:"me",name:"John Doe",title:"Senior Frontend Developer",location:"San Francisco, CA",bio:"Passionate frontend developer with 8+ years of experience in building modern web applications. Specialized in React, TypeScript, and modern web technologies.",coverImage:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",profileImage:"https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg",connections:482,posts:47,views:1243,company:"TechCorp Inc.",education:"Stanford University, Computer Science",website:"https://johndoe.dev",social:{linkedin:"johndoe",twitter:"johndoe",github:"johndoe"},skills:["React","JavaScript","TypeScript","CSS","HTML","Redux","Node.js","GraphQL","Jest","Webpack"],experience:[{id:1,role:"Senior Frontend Developer",company:"TechCorp Inc.",duration:"Jan 2020 - Present",description:"Leading frontend development for the company's main product. Implemented new features and improved performance by 40%."},{id:2,role:"Frontend Developer",company:"WebSolutions LLC",duration:"Mar 2017 - Dec 2019",description:"Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces."},{id:3,role:"Junior Web Developer",company:"Digital Agency",duration:"Jun 2015 - Feb 2017",description:"Built and maintained websites for various clients using HTML, CSS, and JavaScript."}],education:[{id:1,degree:"M.S. in Computer Science",institution:"Stanford University",duration:"2013 - 2015"},{id:2,degree:"B.S. in Computer Science",institution:"UC Berkeley",duration:"2009 - 2013"}]},1:{id:"1",name:"Alex Morgan",title:"Product Designer at Google",location:"New York, NY",bio:"Product designer with a passion for creating user-centered digital experiences. Currently working at Google, focusing on design systems and accessibility.",coverImage:"https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",profileImage:"https://randomuser.me/api/portraits/women/44.jpg",connections:723,posts:38,views:982,company:"Google",education:"Rhode Island School of Design, Graphic Design",website:"https://alexmorgan.design",social:{linkedin:"alexmorgan",twitter:"alexmorgan",github:"alexmorgan"},skills:["UI/UX Design","Figma","Adobe XD","Sketch","Prototyping","User Research","Design Systems","Accessibility"],experience:[{id:1,role:"Senior Product Designer",company:"Google",duration:"Apr 2021 - Present",description:"Leading design for key products, focusing on creating accessible and intuitive user experiences."},{id:2,role:"Product Designer",company:"Airbnb",duration:"Jan 2018 - Mar 2021",description:"Designed user interfaces and experiences for the Airbnb platform, with a focus on mobile applications."},{id:3,role:"UI Designer",company:"Freelance",duration:"Jun 2016 - Dec 2017",description:"Worked with various clients to create user interfaces for web and mobile applications."}],education:[{id:1,degree:"BFA in Graphic Design",institution:"Rhode Island School of Design",duration:"2012 - 2016"}]}},h=o.Ay.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`,m=o.Ay.div`
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
`,b=(0,o.Ay)(n.P.div)`
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
`,u=o.Ay.div`
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
`,y=o.Ay.div`
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
`,f=o.Ay.div`
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
`,v=o.Ay.div`
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
`,w=o.Ay.div`
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
`,j=(0,o.Ay)(n.P.div)`
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
`,k=(0,o.Ay)(n.P.img)`
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
`,A=(0,o.Ay)(n.P.div)`
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
`,C=o.Ay.div`
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
`,z=(0,o.Ay)(n.P.div)`
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
`,P=o.Ay.h1`
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
`,S=(0,o.Ay)(n.P.span)`
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
`,M=o.Ay.h2`
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
`,D=(0,o.Ay)(n.P.div)`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`,H=(0,o.Ay)(n.P.div)`
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
`,T=(0,o.Ay)(n.P.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`,F=o.Ay.div`
  color: var(--primary);
  font-weight: var(--font-weight-semibold);
`,I=o.Ay.div`
  color: var(--on-surface);
`,E=o.Ay.div`
  color: var(--on-surface);
`,R=(0,o.Ay)(n.P.div)`
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
`,L=(0,o.Ay)(n.P.button)`
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
`,J=(0,o.Ay)(n.P.button)`
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
`,$=(0,o.Ay)(n.P.button)`
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
`,B=(0,o.Ay)(n.P.button)`
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
`,G=o.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,N=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`,U=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`,_=o.Ay.h3`
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
`,W=o.Ay.div`
  color: var(--on-surface);
  line-height: 1.6;
`,Y=(0,o.Ay)(n.P.section)`
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
`,V=((0,o.Ay)(Y)``,o.Ay.div`
  display: flex;
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`),q=(0,o.Ay)(n.P.button)`
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  color: ${e=>e.active?"var(--primary)":"var(--on-surface)"};
  border-bottom: 2px solid ${e=>e.active?"var(--primary)":"transparent"};
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  &:hover {
    color: var(--primary);
  }
`,O=o.Ay.div`
  min-height: 200px;
`,X=(0,o.Ay)(n.P.div)`
  padding: var(--spacing-md);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: var(--spacing-md);
  transition: all 0.3s ease;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Q=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`,Z=o.Ay.h4`
  font-size: 1.1rem;
  color: var(--on-background);
  font-weight: var(--font-weight-semibold);
`,K=o.Ay.span`
  color: var(--primary);
  font-size: 0.9rem;
`,ee=o.Ay.div`
  color: var(--on-surface);
  margin-bottom: 8px;
  font-size: 1rem;
`,ie=o.Ay.p`
  color: var(--on-surface);
  font-size: 0.95rem;
  line-height: 1.6;
`,ae=(0,o.Ay)(X)``,re=(0,o.Ay)(Q)``,te=(0,o.Ay)(Z)``,oe=(0,o.Ay)(K)``,ne=(0,o.Ay)(ee)``,se=(0,o.Ay)(ie)``,de=(0,o.Ay)(Y)``,le=(0,o.Ay)(n.P.div)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`,ce=(0,o.Ay)(n.P.div)`
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
`,pe=(0,o.Ay)(Y)``,ge=(0,o.Ay)(n.P.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,xe=(0,o.Ay)(n.P.a)`
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
`,he=(0,o.Ay)(n.P.div)`
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
`,me=(0,o.Ay)(n.P.div)`
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
`,be=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,ue=o.Ay.h2`
  margin: 0;
  background: linear-gradient(to right, #fff, #a6b1e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
`,ye=(0,o.Ay)(n.P.button)`
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
`,fe=o.Ay.div`
  margin-bottom: 20px;
`,ve=o.Ay.label`
  display: block;
  margin-bottom: 8px;
  color: #a6b1e1;
  font-size: 0.9rem;
`,we=o.Ay.input`
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
`,je=o.Ay.textarea`
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
`,ke=(0,o.Ay)(n.P.button)`
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
`,Ae=o.Ay.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 12px;
  background: rgba(30, 30, 40, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 8px;
  overflow: hidden;
`,Ce=(0,o.Ay)(n.P.button)`
  padding: 12px 20px;
  flex: 1;
  background: ${e=>e.active?"rgba(88, 86, 214, 0.2)":"transparent"};
  color: ${e=>e.active?"#ffffff":"rgba(255, 255, 255, 0.6)"};
  font-weight: ${e=>e.active?"600":"400"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: ${e=>e.active?"rgba(88, 86, 214, 0.2)":"rgba(255, 255, 255, 0.05)"};
  }
  
  svg {
    font-size: 16px;
  }
`,ze=(0,o.Ay)(n.P.div)`
  border-radius: 16px;
  overflow: hidden;
`,Pe=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,Se=(0,o.Ay)(n.P.div)`
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
`,Me=o.Ay.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,De=o.Ay.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(88, 86, 214, 0.3);
  margin-bottom: 10px;
`,He=o.Ay.h3`
  font-size: 1.1rem;
  margin: 0 0 5px;
  color: white;
`,Te=o.Ay.p`
  font-size: 0.85rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`,Fe=o.Ay.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
`,Ie=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ee=(0,o.Ay)(n.P.div)`
  background: rgba(30, 30, 40, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  padding: 20px;
`,Re=o.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`,Le=o.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`,Je=o.Ay.div`
  flex: 1;
`,$e=o.Ay.h3`
  font-size: 1rem;
  margin: 0 0 5px;
`,Be=o.Ay.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`,Ge=o.Ay.p`
  margin: 0 0 15px;
  line-height: 1.6;
`,Ne=o.Ay.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`,Ue=o.Ay.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 15px;
`,_e=o.Ay.button`
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
`,We=[{id:1,name:"Emily Johnson",title:"UX Designer at Apple",image:"https://randomuser.me/api/portraits/women/12.jpg",mutualConnections:8},{id:2,name:"Michael Chen",title:"Software Engineer at Microsoft",image:"https://randomuser.me/api/portraits/men/22.jpg",mutualConnections:5},{id:3,name:"Sarah Williams",title:"Product Manager at Netflix",image:"https://randomuser.me/api/portraits/women/33.jpg",mutualConnections:12},{id:4,name:"David Kim",title:"Frontend Developer at Amazon",image:"https://randomuser.me/api/portraits/men/44.jpg",mutualConnections:3}],Ye=[{id:1,author:{name:"John Doe",image:"https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg"},content:"Just finished an amazing project using React and Framer Motion. The animations are so smooth!",image:"https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",date:"2 days ago",likes:42,comments:5},{id:2,author:{name:"John Doe",image:"https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg"},content:"What do you think about the new features in React 18? I'm particularly excited about Concurrent Rendering.",image:null,date:"1 week ago",likes:24,comments:8}],Ve=o.Ay.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.95rem;
  margin-bottom: 5px;
  
  svg {
    color: var(--primary);
    margin-right: 8px;
  }
`,qe=(0,o.Ay)(Ve)``,Oe=o.Ay.div`
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
`,Xe=()=>{const{id:e="me"}=(0,t.g)(),[i,a]=(0,r.useState)(null),[o,c]=(0,r.useState)(!0),[Xe,Qe]=(0,r.useState)("experience"),[Ze,Ke]=(0,r.useState)("posts"),[ei,ii]=(0,r.useState)(!1),[ai,ri]=(0,r.useState)(!1),[ti,oi]=(0,r.useState)({name:"",title:"",location:"",company:"",bio:""});(0,r.useEffect)((()=>{c(!0);const i=setTimeout((()=>{const i=x[e]||x.me;a(i),c(!1),setTimeout((()=>{ii(!0)}),300),oi({name:i.name,title:i.title,location:i.location,company:i.company,bio:i.bio})}),800);return()=>clearTimeout(i)}),[e]);const ni={hidden:{scale:.8,opacity:0},visible:{scale:1,opacity:1,transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"reverse",repeatDelay:3}}},si={hidden:{y:0},visible:{y:[-5,5,-5],transition:{duration:6,ease:"easeInOut",repeat:1/0,repeatType:"loop"}}},di={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},li={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}},ci={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},pi=e=>{const{name:i,value:a}=e.target;oi((e=>({...e,[i]:a})))};return o?(0,p.jsx)(h,{children:(0,p.jsx)(m,{})}):(0,p.jsxs)(b,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.7},children:[(0,p.jsxs)(u,{variants:{hidden:{opacity:0,filter:"drop-shadow(0 0 0px rgba(88, 86, 214, 0))"},visible:{opacity:1,filter:"drop-shadow(0 0 10px rgba(88, 86, 214, 0.3))",transition:{duration:1.5,ease:"easeInOut"}}},initial:"hidden",animate:"visible",children:["me"===e&&(0,p.jsxs)(B,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>ri(!0),children:[(0,p.jsx)(d.F7,{}),(0,p.jsx)("span",{children:"Edit"})]}),(0,p.jsxs)(y,{style:{backgroundImage:`url(${i.coverImage})`},children:[(0,p.jsx)(v,{}),(0,p.jsx)(f,{}),(0,p.jsx)(Oe,{children:(0,p.jsx)(l.Hl,{camera:{position:[0,0,5],fov:75},gl:{antialias:!0,alpha:!0},onCreated:e=>{let{gl:i}=e;i.setClearColor(0,0)},children:(0,p.jsx)(g,{})})})]}),(0,p.jsxs)(w,{children:[(0,p.jsxs)(j,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.2},variants:si,whileInView:"visible",children:[(0,p.jsx)(k,{src:i.profileImage,alt:i.name,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.4},whileHover:{scale:1.05,transition:{duration:.3}}}),(0,p.jsx)(A,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.3,delay:.7},variants:ni})]}),(0,p.jsxs)(C,{children:[(0,p.jsxs)(n.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[(0,p.jsxs)(z,{children:[(0,p.jsx)(P,{children:i.name}),(0,p.jsx)(S,{initial:{opacity:0,width:"0%"},animate:{opacity:1,width:"110%"},transition:{duration:.8,delay:.5}})]}),(0,p.jsx)(M,{children:i.title}),(0,p.jsxs)(D,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.7},variants:{animate:{transition:{staggerChildren:.1}}},children:[(0,p.jsxs)(H,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[(0,p.jsx)(d.gt3,{})," Pro Member"]}),(0,p.jsxs)(H,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[(0,p.jsx)(d.FSj,{})," Top Contributor"]})]})]}),(0,p.jsxs)(n.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},children:[(0,p.jsxs)(Ve,{children:[(0,p.jsx)(d.vq8,{}),(0,p.jsx)("span",{children:i.location})]}),(0,p.jsxs)(qe,{children:[(0,p.jsx)(d._yv,{}),(0,p.jsxs)("span",{children:["Works at ",i.company]})]})]}),(0,p.jsxs)(T,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.7},children:[(0,p.jsxs)(F,{children:[i.connections," connections"]}),(0,p.jsxs)(I,{children:[i.posts," posts"]}),(0,p.jsxs)(E,{children:[i.views," profile views this month"]})]})]}),(0,p.jsx)(R,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},children:"me"!==e&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(L,{whileHover:{scale:1.05,boxShadow:"0 5px 15px rgba(88, 86, 214, 0.5)"},whileTap:{scale:.95},children:[(0,p.jsx)(d.NPy,{}),(0,p.jsx)("span",{children:"Connect"})]}),(0,p.jsxs)(J,{whileHover:{scale:1.05,backgroundColor:"rgba(255, 255, 255, 0.1)"},whileTap:{scale:.95},children:[(0,p.jsx)(d.g5D,{}),(0,p.jsx)("span",{children:"Message"})]}),(0,p.jsx)($,{whileHover:{scale:1.1,backgroundColor:"rgba(255, 255, 255, 0.1)"},whileTap:{scale:.9},children:(0,p.jsx)(d.HFM,{})})]})})]})]}),(0,p.jsxs)(G,{children:[(0,p.jsxs)(N,{children:[(0,p.jsxs)(Y,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[(0,p.jsx)(_,{children:"About"}),(0,p.jsx)(W,{children:(0,p.jsx)(n.P.p,{variants:di,initial:"hidden",animate:"visible",transition:{duration:.5},children:i.bio})})]}),(0,p.jsxs)(Ae,{children:[(0,p.jsxs)(Ce,{active:"posts"===Ze,onClick:()=>Ke("posts"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,p.jsx)(d.g5D,{})," Posts"]}),(0,p.jsxs)(Ce,{active:"experience"===Ze,onClick:()=>Ke("experience"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,p.jsx)(d._yv,{})," Experience"]}),(0,p.jsxs)(Ce,{active:"connections"===Ze,onClick:()=>Ke("connections"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,p.jsx)(d.NPy,{})," Connections"]})]}),(0,p.jsxs)(s.N,{mode:"wait",children:["posts"===Ze&&(0,p.jsx)(ze,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:(0,p.jsx)(Ie,{children:Ye.map((e=>(0,p.jsxs)(Ee,{children:[(0,p.jsxs)(Re,{children:[(0,p.jsx)(Le,{src:e.author.image,alt:e.author.name}),(0,p.jsxs)(Je,{children:[(0,p.jsx)($e,{children:e.author.name}),(0,p.jsx)(Be,{children:e.date})]})]}),(0,p.jsx)(Ge,{children:e.content}),e.image&&(0,p.jsx)(Ne,{src:e.image,alt:""}),(0,p.jsxs)(Ue,{children:[(0,p.jsxs)(_e,{children:[(0,p.jsx)(d.gb0,{})," ",e.likes]}),(0,p.jsxs)(_e,{children:[(0,p.jsx)(d.j1Q,{})," ",e.comments]}),(0,p.jsx)(_e,{children:(0,p.jsx)(d.Zzu,{})})]})]},e.id)))})},"posts"),"experience"===Ze&&(0,p.jsxs)(ze,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:[(0,p.jsxs)(V,{children:[(0,p.jsx)(q,{active:"experience"===Xe,onClick:()=>Qe("experience"),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.05)"},whileTap:{scale:.98},children:"Experience"}),(0,p.jsx)(q,{active:"education"===Xe,onClick:()=>Qe("education"),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.05)"},whileTap:{scale:.98},children:"Education"})]}),(0,p.jsx)(O,{children:(0,p.jsx)(s.N,{mode:"wait",children:"experience"===Xe?(0,p.jsx)(n.P.div,{variants:ci,initial:"hidden",animate:"visible",exit:{opacity:0,y:10},transition:{duration:.3},children:i.experience.map((e=>(0,p.jsxs)(X,{variants:di,whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.15)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,p.jsxs)(Q,{children:[(0,p.jsx)(Z,{children:e.role}),(0,p.jsx)(K,{children:e.duration})]}),(0,p.jsx)(ee,{children:e.company}),(0,p.jsx)(ie,{children:e.description})]},e.id)))},"experience"):(0,p.jsx)(n.P.div,{variants:ci,initial:"hidden",animate:"visible",exit:{opacity:0,y:10},transition:{duration:.3},children:i.education.map((e=>(0,p.jsxs)(ae,{variants:di,whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.15)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,p.jsxs)(re,{children:[(0,p.jsx)(te,{children:e.degree}),(0,p.jsx)(oe,{children:e.duration})]}),(0,p.jsx)(ne,{children:e.institution}),(0,p.jsx)(se,{children:e.duration})]},e.id)))},"education")})})]},"experience"),"connections"===Ze&&(0,p.jsx)(ze,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:(0,p.jsx)(Pe,{children:We.map((e=>(0,p.jsxs)(Se,{whileHover:{y:-5},children:[(0,p.jsxs)(Me,{children:[(0,p.jsx)(De,{src:e.image,alt:e.name}),(0,p.jsx)(He,{children:e.name}),(0,p.jsx)(Te,{children:e.title})]}),(0,p.jsx)(Fe,{children:(0,p.jsxs)(J,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,p.jsx)(d.g5D,{}),(0,p.jsx)("span",{children:"Message"})]})})]},e.id)))})},"connections")]})]}),(0,p.jsxs)(U,{children:[(0,p.jsxs)(de,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.5},children:[(0,p.jsx)(_,{children:"Skills"}),(0,p.jsx)(le,{variants:ci,initial:"hidden",animate:"visible",children:i.skills.map(((e,i)=>(0,p.jsx)(ce,{variants:li,whileHover:{scale:1.05,backgroundColor:"rgba(88, 86, 214, 0.2)",y:-3},whileTap:{scale:.98},children:e},i)))})]}),(0,p.jsxs)(pe,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.6},children:[(0,p.jsx)(_,{children:"Contact & Social"}),(0,p.jsxs)(ge,{variants:ci,initial:"hidden",animate:"visible",children:[(0,p.jsxs)(xe,{variants:li,href:`https://linkedin.com/in/${i.social.linkedin}`,target:"_blank",whileHover:{x:8,color:"#0077B5"},children:[(0,p.jsx)(d.QEs,{}),(0,p.jsx)("span",{children:"LinkedIn"})]}),(0,p.jsxs)(xe,{variants:li,href:`https://twitter.com/${i.social.twitter}`,target:"_blank",whileHover:{x:8,color:"#1DA1F2"},children:[(0,p.jsx)(d.feZ,{}),(0,p.jsx)("span",{children:"Twitter"})]}),(0,p.jsxs)(xe,{variants:li,href:`https://github.com/${i.social.github}`,target:"_blank",whileHover:{x:8,color:"#f5f5f5"},children:[(0,p.jsx)(d.hL4,{}),(0,p.jsx)("span",{children:"GitHub"})]}),(0,p.jsxs)(xe,{variants:li,href:`mailto:${i.email}`,whileHover:{x:8,color:"#D44638"},children:[(0,p.jsx)(d.maD,{}),(0,p.jsx)("span",{children:"Email"})]}),(0,p.jsxs)(xe,{variants:li,href:i.website,target:"_blank",whileHover:{x:8,color:"#2196F3"},children:[(0,p.jsx)(d.f35,{}),(0,p.jsx)("span",{children:"Website"})]})]})]})]})]}),(0,p.jsx)(s.N,{children:ai&&(0,p.jsx)(he,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>ri(!1),children:(0,p.jsxs)(me,{onClick:e=>e.stopPropagation(),initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},transition:{type:"spring",damping:20},children:[(0,p.jsxs)(be,{children:[(0,p.jsx)(ue,{children:"Edit Profile"}),(0,p.jsx)(ye,{onClick:()=>ri(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,p.jsx)(d.QCr,{})})]}),(0,p.jsxs)(fe,{children:[(0,p.jsx)(ve,{children:"Name"}),(0,p.jsx)(we,{type:"text",name:"name",value:ti.name,onChange:pi})]}),(0,p.jsxs)(fe,{children:[(0,p.jsx)(ve,{children:"Title"}),(0,p.jsx)(we,{type:"text",name:"title",value:ti.title,onChange:pi})]}),(0,p.jsxs)(fe,{children:[(0,p.jsx)(ve,{children:"Location"}),(0,p.jsx)(we,{type:"text",name:"location",value:ti.location,onChange:pi})]}),(0,p.jsxs)(fe,{children:[(0,p.jsx)(ve,{children:"Company"}),(0,p.jsx)(we,{type:"text",name:"company",value:ti.company,onChange:pi})]}),(0,p.jsxs)(fe,{children:[(0,p.jsx)(ve,{children:"Bio"}),(0,p.jsx)(je,{name:"bio",value:ti.bio,onChange:pi})]}),(0,p.jsx)(ke,{onClick:()=>{console.log("Saving profile data:",ti),i.name=ti.name,i.title=ti.title,i.location=ti.location,i.company=ti.company,i.bio=ti.bio,ri(!1)},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Save Changes"})]})})})]})}},3414:(e,i,a)=>{a.d(i,{A:()=>g});var r=a(5043),t=a(6540),o=a(698),n=a(9408),s=a(579);const d={primary:new n.Color("#5856d6"),secondary:new n.Color("#34aadc"),accent:new n.Color("#5ac8fa"),highlight:new n.Color("#ff2d55")},l=e=>{let{position:i,size:a,color:n,pulseSpeed:l,pulseStrength:c,isHighlighted:p,onClick:g}=e;const x=(0,r.useRef)(),h=a,{scale:m}=(0,o.zh)({scale:p?1.8:1,config:{tension:150,friction:20}});return(0,t.F)((e=>{let{clock:i}=e;if(x.current){const e=i.getElapsedTime(),a=Math.sin(e*l)*c+1;x.current.scale.setScalar(h*a)}})),(0,s.jsxs)(o.CS.mesh,{ref:x,position:i,scale:m.to((e=>[e*h,e*h,e*h])),onClick:g,children:[(0,s.jsx)("sphereGeometry",{args:[1,16,16]}),(0,s.jsx)("meshStandardMaterial",{color:p?d.highlight:n,roughness:.3,metalness:.8,emissive:p?d.highlight:n,emissiveIntensity:p?.7:.4})]})},c=e=>{let{startPosition:i,endPosition:a,isHighlighted:o}=e;const d=(0,r.useRef)(),l=[i,a],c=(new n.BufferGeometry).setFromPoints(l);return(0,t.F)((e=>{let{clock:i}=e;if(d.current&&o){const e=i.getElapsedTime();d.current.material.opacity=.2*Math.sin(3*e)+.8}})),(0,s.jsx)("line",{ref:d,geometry:c,children:(0,s.jsx)("lineBasicMaterial",{color:o?"#ff2d55":"#5856d6",transparent:!0,opacity:o?.8:.2,linewidth:1})})},p=e=>{let{startPos:i,endPos:a,speed:o,color:d}=e;const l=(0,r.useRef)(),[c,p]=(0,r.useState)(0);(new n.Vector3).subVectors(a,i).normalize();return(0,t.F)((e=>{let{clock:r}=e;if(l.current){p((e=>{const i=e+.01*o;return i>1?0:i}));const e=(new n.Vector3).lerpVectors(i,a,c);l.current.position.copy(e)}})),0===c?null:(0,s.jsxs)("mesh",{ref:l,scale:[.02,.02,.02],children:[(0,s.jsx)("sphereGeometry",{args:[1,8,8]}),(0,s.jsx)("meshBasicMaterial",{color:d,transparent:!0,opacity:.8})]})},g=()=>{const e=(0,r.useRef)(),[i]=(0,r.useState)((()=>(e=>{const i=[];for(let a=0;a<e;a++){const r=Math.acos(2*a/e-1),t=Math.sqrt(e*Math.PI)*r,o=2+1*Math.random(),s=o*Math.sin(r)*Math.cos(t),l=o*Math.sin(r)*Math.sin(t),c=o*Math.cos(r);i.push({id:a,position:new n.Vector3(s,l,c),size:.04+.05*Math.random(),color:Math.random()>.8?d.highlight:Math.random()>.5?d.secondary:d.primary,pulseSpeed:.5+Math.random(),pulseStrength:.1+.3*Math.random(),connections:[]})}return i.forEach((e=>{const a=2+Math.floor(4*Math.random());for(let r=0;r<a;r++){let a;do{a=Math.floor(Math.random()*i.length)}while(a===e.id||e.connections.includes(a));e.connections.push(a),Math.random()>.5&&i[a].connections.push(e.id)}})),i})(25))),[a,o]=(0,r.useState)(null),[g,x]=(0,r.useState)([]);(0,t.F)((a=>{let{clock:r}=a;if(e.current){const i=r.getElapsedTime();e.current.rotation.y=.1*i,e.current.rotation.x=.2*Math.sin(.05*i)}if(Math.random()<.02){const e=Math.floor(Math.random()*i.length);if(i[e].connections.length>0){const a=Math.floor(Math.random()*i[e].connections.length),r=i[e].connections[a];x((i=>i.length>20?[...i.slice(1),{id:Date.now(),source:e,target:r,speed:.5+Math.random(),color:Math.random()>.7?"#ff2d55":"#5ac8fa"}]:[...i,{id:Date.now(),source:e,target:r,speed:.5+Math.random(),color:Math.random()>.7?"#ff2d55":"#5ac8fa"}]))}}}));return(0,s.jsxs)("group",{ref:e,children:[i.map((e=>e.connections.map((r=>(0,s.jsx)(c,{startPosition:e.position,endPosition:i[r].position,isHighlighted:a===e.id||a===r},`${e.id}-${r}`))))),i.map((e=>(0,s.jsx)(l,{position:e.position,size:e.size,color:e.color,pulseSpeed:e.pulseSpeed,pulseStrength:e.pulseStrength,isHighlighted:a===e.id,onClick:()=>{return i=e.id,void o(a===i?null:i);var i}},e.id))),g.map((e=>(0,s.jsx)(p,{startPos:i[e.source].position,endPos:i[e.target].position,speed:e.speed,color:e.color},e.id)))]})}}}]);
//# sourceMappingURL=122.cf541d3d.chunk.js.map