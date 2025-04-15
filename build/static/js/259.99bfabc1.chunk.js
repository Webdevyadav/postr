"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[259],{5259:(e,r,i)=>{i.r(r),i.d(r,{default:()=>Z});var a=i(5043),o=i(5464),t=i(6759),n=i(6938),l=i(2774),s=i(579);const d=(0,o.Ay)(t.P.div)`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: #0c0c14;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
`,p=o.Ay.div`
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
`,c=o.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,x=o.Ay.header`
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
`,g=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,b=o.Ay.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,h=o.Ay.span`
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(88, 86, 214, 0.3);
`,m=o.Ay.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`,u=o.Ay.p`
  font-size: 1.2rem;
  margin: 10px 0 0;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,f=(0,o.Ay)(t.P.div)`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,y=o.Ay.div`
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
`,v=o.Ay.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  margin-right: 15px;
`,j=o.Ay.input`
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
`,w=(0,o.Ay)(t.P.button)`
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
`,k=(0,o.Ay)(t.P.div)`
  background: rgba(15, 15, 25, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`,A=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,z=o.Ay.div`
  display: flex;
  flex-direction: column;
`,S=o.Ay.label`
  font-size: 0.85rem;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.7);
`,$=o.Ay.select`
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
`,P=o.Ay.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 25px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,C=o.Ay.button`
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
`,F=(0,o.Ay)(t.P.button)`
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
`,T=(0,o.Ay)(t.P.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,D=(0,o.Ay)(t.P.div)`
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
`,Y=o.Ay.div`
  color: #5856d6;
  font-size: 1.5rem;
  margin-bottom: 5px;
`,H=o.Ay.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,R=o.Ay.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
`,L=(0,o.Ay)(t.P.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,N=(0,o.Ay)(t.P.div)`
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
`,U=o.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  position: relative;
`,J=o.Ay.div`
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
`,E=o.Ay.h3`
  font-size: 1.2rem;
  background: linear-gradient(90deg, #ffffff, #b3b2f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
`,M=o.Ay.p`
  color: var(--on-surface);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 6px;
    color: var(--primary);
    font-size: 0.8rem;
  }
`,X=(0,o.Ay)(t.P.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.saved?"rgba(88, 86, 214, 0.2)":"rgba(255, 255, 255, 0.05)"};
  color: ${e=>e.saved?"var(--primary)":"var(--on-surface)"};
  margin-left: auto;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${e=>e.saved?"rgba(88, 86, 214, 0.3)":"rgba(255, 255, 255, 0.1)"};
  
  &:hover {
    background-color: ${e=>e.saved?"rgba(88, 86, 214, 0.3)":"rgba(255, 255, 255, 0.1)"};
    color: ${e=>e.saved?"var(--primary)":"var(--on-background)"};
    box-shadow: 0 0 15px rgba(88, 86, 214, 0.3);
  }
`,I=o.Ay.div`
  height: 1px;
  background: linear-gradient(90deg, rgba(88, 86, 214, 0.3), transparent);
  margin: var(--spacing-md) 0;
`,G=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`,K=o.Ay.div`
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
`,O=o.Ay.p`
  color: var(--on-surface);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 1;
`,W=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: var(--spacing-md);
`,Q=(0,o.Ay)(t.P.span)`
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
`,V=o.Ay.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`,_=(0,o.Ay)(t.P.button)`
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
`,q=(0,o.Ay)(t.P.button)`
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
`,B=(0,o.Ay)(t.P.button)`
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
`,Z=()=>{const[e,r]=(0,a.useState)(""),[i,o]=(0,a.useState)(!1),[Z,ee]=(0,a.useState)([2,5]),[re,ie]=(0,a.useState)(!1);(0,a.useEffect)((()=>{setTimeout((()=>{ie(!0)}),600)}),[]);const ae={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,ease:"easeOut"}}};return(0,s.jsxs)(d,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:[(0,s.jsx)(p,{}),(0,s.jsxs)(c,{children:[(0,s.jsx)(x,{children:(0,s.jsxs)(g,{children:[(0,s.jsxs)(t.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.2},children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(h,{children:"Find Your Dream Job"}),(0,s.jsx)(m,{children:(0,s.jsx)(l.uoG,{})})]}),(0,s.jsx)(u,{children:"Discover opportunities that match your skills and career goals"})]}),(0,s.jsxs)(f,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.3},children:[(0,s.jsxs)(y,{children:[(0,s.jsx)(v,{children:(0,s.jsx)(l.KSO,{})}),(0,s.jsx)(j,{type:"text",placeholder:"Search jobs by title, company, or keywords...",value:e,onChange:e=>r(e.target.value)})]}),(0,s.jsxs)(w,{onClick:()=>o(!i),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,s.jsx)(l.YsJ,{}),(0,s.jsx)("span",{children:"Filters"})]})]})]})}),(0,s.jsx)(n.N,{children:i&&(0,s.jsxs)(k,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:[(0,s.jsxs)(A,{children:[(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{children:"Location"}),(0,s.jsxs)($,{children:[(0,s.jsx)("option",{value:"",children:"All Locations"}),(0,s.jsx)("option",{value:"Remote",children:"Remote"}),(0,s.jsx)("option",{value:"San Francisco, CA",children:"San Francisco, CA"}),(0,s.jsx)("option",{value:"New York, NY",children:"New York, NY"}),(0,s.jsx)("option",{value:"Austin, TX",children:"Austin, TX"})]})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{children:"Job Type"}),(0,s.jsxs)($,{children:[(0,s.jsx)("option",{value:"",children:"All Types"}),(0,s.jsx)("option",{value:"Full-time",children:"Full-time"}),(0,s.jsx)("option",{value:"Part-time",children:"Part-time"}),(0,s.jsx)("option",{value:"Contract",children:"Contract"}),(0,s.jsx)("option",{value:"Internship",children:"Internship"})]})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{children:"Experience Level"}),(0,s.jsxs)($,{children:[(0,s.jsx)("option",{value:"",children:"All Levels"}),(0,s.jsx)("option",{value:"Entry",children:"Entry Level"}),(0,s.jsx)("option",{value:"Mid",children:"Mid Level"}),(0,s.jsx)("option",{value:"Senior",children:"Senior Level"}),(0,s.jsx)("option",{value:"Executive",children:"Executive"})]})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(S,{children:"Salary Range"}),(0,s.jsxs)($,{children:[(0,s.jsx)("option",{value:"",children:"Any Salary"}),(0,s.jsx)("option",{value:"0-50000",children:"$0 - $50k"}),(0,s.jsx)("option",{value:"50000-100000",children:"$50k - $100k"}),(0,s.jsx)("option",{value:"100000-150000",children:"$100k - $150k"}),(0,s.jsx)("option",{value:"150000+",children:"$150k+"})]})]})]}),(0,s.jsxs)(P,{children:[(0,s.jsx)(C,{children:"Reset"}),(0,s.jsx)(F,{whileHover:{scale:1.05,boxShadow:"0 0 20px rgba(88, 86, 214, 0.5)"},whileTap:{scale:.95},children:"Apply Filters"})]})]})}),(0,s.jsxs)(T,{initial:{opacity:0,y:20},animate:{opacity:re?1:0,y:re?0:20},transition:{duration:.7,delay:.4},children:[(0,s.jsxs)(D,{whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.15)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,s.jsx)(Y,{children:(0,s.jsx)(l.lHQ,{})}),(0,s.jsx)(H,{children:"2,543"}),(0,s.jsx)(R,{children:"Active Jobs"})]}),(0,s.jsxs)(D,{whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.15)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,s.jsx)(Y,{children:(0,s.jsx)(l.uoG,{})}),(0,s.jsx)(H,{children:"178"}),(0,s.jsx)(R,{children:"New Today"})]}),(0,s.jsxs)(D,{whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.15)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,s.jsx)(Y,{children:(0,s.jsx)(l.YYR,{})}),(0,s.jsx)(H,{children:"87%"}),(0,s.jsx)(R,{children:"Response Rate"})]})]}),(0,s.jsx)(L,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:re?"visible":"hidden",children:[{id:1,title:"Senior UX Designer",company:"Amazon",logo:"https://logo.clearbit.com/amazon.com",location:"New York, NY",remote:!0,salary:"$120k - $150k",type:"Full-time",posted:"2 days ago",skills:["UX Design","Figma","User Research","Prototyping"],description:"We are looking for a Senior UX Designer to join our team and help create innovative user experiences across our products."},{id:2,title:"Frontend Developer",company:"Spotify",logo:"https://logo.clearbit.com/spotify.com",location:"Remote",remote:!0,salary:"$95k - $120k",type:"Full-time",posted:"3 days ago",skills:["React","TypeScript","CSS","JavaScript"],description:"Join our team to build and improve user interfaces for our music streaming platform used by millions worldwide."},{id:3,title:"Data Scientist",company:"Tesla",logo:"https://logo.clearbit.com/tesla.com",location:"Austin, TX",remote:!1,salary:"$130k - $160k",type:"Full-time",posted:"1 week ago",skills:["Python","Machine Learning","SQL","Data Visualization"],description:"We are seeking a data scientist to help analyze and interpret complex data to drive innovation in electric vehicles and energy solutions."},{id:4,title:"Product Manager",company:"Airbnb",logo:"https://logo.clearbit.com/airbnb.com",location:"San Francisco, CA",remote:!0,salary:"$140k - $180k",type:"Full-time",posted:"5 days ago",skills:["Product Strategy","Agile","Analytics","User Research"],description:"Lead product development and strategy for our travel platform, working with cross-functional teams to deliver exceptional user experiences."},{id:5,title:"DevOps Engineer",company:"Stripe",logo:"https://logo.clearbit.com/stripe.com",location:"Remote",remote:!0,salary:"$110k - $140k",type:"Full-time",posted:"1 day ago",skills:["AWS","Kubernetes","CI/CD","Docker"],description:"Help build and maintain our cloud infrastructure, automate processes, and improve system reliability and performance."},{id:6,title:"Mobile App Developer",company:"Uber",logo:"https://logo.clearbit.com/uber.com",location:"Chicago, IL",remote:!1,salary:"$100k - $130k",type:"Full-time",posted:"4 days ago",skills:["Swift","Kotlin","Mobile UI","APIs"],description:"Join our mobile team to develop and enhance our rider and driver apps used by millions of people around the world."}].map((e=>(0,s.jsxs)(N,{variants:ae,whileHover:{y:-5},children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(J,{children:(0,s.jsx)("img",{src:e.logo,alt:`${e.company} logo`})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(E,{children:e.title}),(0,s.jsxs)(M,{children:[(0,s.jsx)(l._yv,{}),e.company]})]}),(0,s.jsx)(X,{onClick:()=>{return r=e.id,void(Z.includes(r)?ee(Z.filter((e=>e!==r))):ee([...Z,r]));var r},saved:Z.includes(e.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:Z.includes(e.id)?(0,s.jsx)(l.U$b,{}):(0,s.jsx)(l.gGX,{})})]}),(0,s.jsx)(I,{}),(0,s.jsxs)(G,{children:[(0,s.jsxs)(K,{children:[(0,s.jsx)(l.vq8,{}),(0,s.jsxs)("span",{children:[e.location," ",e.remote&&"(Remote)"]})]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(l._yv,{}),(0,s.jsx)("span",{children:e.type})]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(l.Tsk,{}),(0,s.jsx)("span",{children:e.salary})]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(l.obD,{}),(0,s.jsx)("span",{children:e.posted})]})]}),(0,s.jsx)(O,{children:e.description}),(0,s.jsx)(W,{children:e.skills.map(((e,r)=>(0,s.jsx)(Q,{whileHover:{y:-3,scale:1.05},children:e},r)))}),(0,s.jsxs)(V,{children:[(0,s.jsx)(_,{whileHover:{scale:1.03},whileTap:{scale:.97},children:"Apply Now"}),(0,s.jsx)(q,{whileHover:{scale:1.03},whileTap:{scale:.97},children:"View Details"})]})]},e.id)))}),(0,s.jsx)(B,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Load More Jobs"})]})]})}}}]);
//# sourceMappingURL=259.99bfabc1.chunk.js.map