"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[21],{1021:(i,a,e)=>{e.r(a),e.d(a,{default:()=>Z});var r=e(5043),o=e(5464),n=e(6938),t=e(6759),s=e(5475),l=e(2774),d=e(579);const c=(0,o.Ay)(t.P.div)`
  padding-top: 90px; /* Increased from 70px for better spacing */
  min-height: 100vh;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
`,p=o.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,g=o.Ay.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background: rgba(88, 86, 214, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(88, 86, 214, 0.4);
  animation: pulse 3s infinite ease-in-out;
  
  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.4;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.4;
    }
  }
`,m=o.Ay.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(88, 86, 214, 0.3), transparent);
  animation: flow 4s infinite linear;
  
  @keyframes flow {
    0% {
      opacity: 0;
      background-position: 0% 0%;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      background-position: 100% 0%;
    }
  }
`,x=o.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  position: relative;
  z-index: 1;
  margin-top: 20px;
`,h=(0,o.Ay)(t.P.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  background: rgba(255, 255, 255, 0.03);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,u=o.Ay.h1`
  color: var(--on-background);
  font-size: 2rem;
  margin-right: auto;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: var(--spacing-sm);
  }
`,b=o.Ay.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,v=o.Ay.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
`,y=o.Ay.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-md);
  color: var(--on-background);
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(88, 86, 214, 0.2);
    outline: none;
  }
  
  &::placeholder {
    color: var(--on-surface);
  }
`,f=(0,o.Ay)(t.P.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(88, 86, 214, 0.1);
  
  &:hover {
    background: rgba(88, 86, 214, 0.15);
    border-color: rgba(88, 86, 214, 0.2);
  }
`,w=(0,o.Ay)(t.P.div)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,j=o.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,k=o.Ay.label`
  font-size: 0.9rem;
  color: var(--on-surface);
  margin-bottom: 6px;
`,A=o.Ay.select`
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-md);
  color: var(--on-background);
  cursor: pointer;
  
  option {
    background: var(--surface);
  }
`,C=(0,o.Ay)(t.P.button)`
  padding: 8px 16px;
  background: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-end;
  
  &:hover {
    background: var(--accent);
  }
  
  @media (max-width: 768px) {
    align-self: stretch;
  }
`,S=(0,o.Ay)(t.P.div)`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: var(--spacing-xl); /* Increased spacing */
  overflow-x: auto;
  padding-bottom: 5px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,P=(0,o.Ay)(t.P.button)`
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  color: ${i=>i.active?"var(--primary)":"var(--on-surface)"};
  border-bottom: 2px solid ${i=>i.active?"var(--primary)":"transparent"};
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  border: none;
  
  &:hover {
    color: var(--primary);
  }
`,D=(0,o.Ay)(t.P.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--spacing-xl); /* Increased from lg to xl */
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,T=(0,o.Ay)(D)``,z=(0,o.Ay)(t.P.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }
`,M=o.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`,N=(0,o.Ay)(t.P.img)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary);
`,H=(0,o.Ay)(t.P.button)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  &:hover {
    color: var(--error);
  }
`,I=(0,o.Ay)(H)``,Y=o.Ay.div`
  margin-bottom: var(--spacing-md);
  flex: 1;
`,R=(0,o.Ay)((0,t.P)(s.N_))`
  display: block;
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--on-background);
  margin-bottom: 8px;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`,F=o.Ay.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 6px;
  
  svg {
    color: var(--primary);
    margin-right: 6px;
    font-size: 0.7rem;
  }
  
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,B=o.Ay.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 6px;
  
  svg {
    color: var(--primary);
    margin-right: 6px;
    font-size: 0.7rem;
  }
`,J=o.Ay.div`
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
`,L=(0,o.Ay)((0,t.P)(s.N_))`
  padding: 10px 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  border-radius: var(--border-radius-md);
  text-align: center;
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,$=(0,o.Ay)(t.P.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
  width: 100%;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(88, 86, 214, 0.05);
`,X=(0,o.Ay)(t.P.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,E=(0,o.Ay)(t.P.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,O=o.Ay.div`
  display: flex;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: var(--spacing-md);
  }
`,W=(0,o.Ay)(t.P.button)`
  padding: 10px 20px;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`,_=(0,o.Ay)(t.P.button)`
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--on-background);
  }
  
  @media (max-width: 768px) {
    flex: 1;
  }
`,q=o.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
    width: 100%;
  }
`,U=o.Ay.div`
  margin-left: var(--spacing-md);
`,G=o.Ay.div`
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--on-background);
  margin-bottom: 4px;
`,K=o.Ay.div`
  color: var(--on-surface);
  font-size: 0.9rem;
  margin-bottom: 4px;
`,Q=o.Ay.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 4px;
  
  svg {
    color: var(--primary);
    margin-right: 6px;
    font-size: 0.7rem;
  }
`,V=o.Ay.div`
  display: flex;
  gap: var(--spacing-md);
  color: var(--on-surface);
  font-size: 0.8rem;
  
  span:first-child {
    color: var(--primary);
    font-weight: var(--font-weight-medium);
  }
`,Z=()=>{const[i,a]=(0,r.useState)("connections"),[e,o]=(0,r.useState)(""),[t,s]=(0,r.useState)(!1),[Z,ii]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const i=setTimeout((()=>{ii(!0)}),500);return()=>clearTimeout(i)}),[]);const ai=[{id:1,name:"Alex Morgan",title:"Product Designer at Google",image:"https://randomuser.me/api/portraits/women/44.jpg",mutualConnections:12,location:"New York, NY"},{id:2,name:"David Chen",title:"Software Engineer at Meta",image:"https://randomuser.me/api/portraits/men/32.jpg",mutualConnections:8,location:"San Francisco, CA"},{id:3,name:"Sarah Johnson",title:"Marketing Director at Twitter",image:"https://randomuser.me/api/portraits/women/68.jpg",mutualConnections:15,location:"Austin, TX"},{id:4,name:"Michael Brown",title:"Data Scientist at IBM",image:"https://randomuser.me/api/portraits/men/75.jpg",mutualConnections:6,location:"Boston, MA"},{id:5,name:"Emily Wilson",title:"Senior Software Engineer at Netflix",image:"https://randomuser.me/api/portraits/women/33.jpg",mutualConnections:12,location:"San Francisco, CA"},{id:6,name:"Jason Lee",title:"Product Manager at Dropbox",image:"https://randomuser.me/api/portraits/men/52.jpg",mutualConnections:8,location:"New York, NY"},{id:7,name:"Rachel Green",title:"UX Designer at Adobe",image:"https://randomuser.me/api/portraits/women/79.jpg",mutualConnections:15,location:"Austin, TX"},{id:8,name:"Mark Thompson",title:"Data Scientist at IBM",image:"https://randomuser.me/api/portraits/men/45.jpg",mutualConnections:6,location:"Boston, MA"}],ei=[{id:13,name:"Laura Smith",title:"Content Strategist at Adobe",image:"https://randomuser.me/api/portraits/women/54.jpg",mutualConnections:4,date:"2 days ago",location:"Denver, CO"},{id:14,name:"Daniel Jackson",title:"UI Designer at Figma",image:"https://randomuser.me/api/portraits/men/71.jpg",mutualConnections:3,date:"1 week ago",location:"Seattle, WA"}],ri={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},oi={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},ni={initial:{boxShadow:"0 0 0 rgba(88, 86, 214, 0)"},animate:{boxShadow:"0 0 15px rgba(88, 86, 214, 0.4)",transition:{duration:1.5,repeat:1/0,repeatType:"reverse"}}};return(0,d.jsxs)(c,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(g,{style:{top:"10%",left:"20%",animationDelay:"0s"}}),(0,d.jsx)(g,{style:{top:"25%",right:"15%",animationDelay:"0.5s"}}),(0,d.jsx)(g,{style:{bottom:"30%",left:"15%",animationDelay:"1s"}}),(0,d.jsx)(g,{style:{bottom:"15%",right:"25%",animationDelay:"1.5s"}}),(0,d.jsx)(g,{style:{top:"50%",left:"50%",animationDelay:"2s"}}),(0,d.jsx)(m,{style:{top:"15%",left:"30%",width:"20%",transform:"rotate(30deg)"}}),(0,d.jsx)(m,{style:{top:"30%",right:"25%",width:"15%",transform:"rotate(-45deg)"}}),(0,d.jsx)(m,{style:{bottom:"40%",left:"20%",width:"30%",transform:"rotate(-20deg)"}}),(0,d.jsx)(m,{style:{bottom:"20%",right:"30%",width:"25%",transform:"rotate(60deg)"}})]}),(0,d.jsxs)(x,{children:[(0,d.jsxs)(h,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(l.nVN,{style:{marginRight:"10px"}}),"My Network"]}),(0,d.jsxs)(b,{children:[(0,d.jsx)(v,{children:(0,d.jsx)(l.KSO,{})}),(0,d.jsx)(y,{type:"text",placeholder:"Search connections...",value:e,onChange:i=>o(i.target.value)})]}),(0,d.jsxs)(f,{onClick:()=>s(!t),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,d.jsx)(l.YsJ,{}),(0,d.jsx)("span",{children:"Filters"})]})]}),(0,d.jsx)(n.N,{children:t&&(0,d.jsxs)(w,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:[(0,d.jsxs)(j,{children:[(0,d.jsx)(k,{children:"Location"}),(0,d.jsxs)(A,{children:[(0,d.jsx)("option",{value:"",children:"All Locations"}),(0,d.jsx)("option",{value:"San Francisco, CA",children:"San Francisco, CA"}),(0,d.jsx)("option",{value:"New York, NY",children:"New York, NY"}),(0,d.jsx)("option",{value:"Austin, TX",children:"Austin, TX"})]})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)(k,{children:"Industry"}),(0,d.jsxs)(A,{children:[(0,d.jsx)("option",{value:"",children:"All Industries"}),(0,d.jsx)("option",{value:"Technology",children:"Technology"}),(0,d.jsx)("option",{value:"Design",children:"Design"}),(0,d.jsx)("option",{value:"Marketing",children:"Marketing"})]})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)(k,{children:"Connection"}),(0,d.jsxs)(A,{children:[(0,d.jsx)("option",{value:"",children:"All Connections"}),(0,d.jsx)("option",{value:"1st",children:"1st Connections"}),(0,d.jsx)("option",{value:"2nd",children:"2nd Connections"}),(0,d.jsx)("option",{value:"3rd",children:"3rd+ Connections"})]})]}),(0,d.jsx)(C,{whileHover:{scale:1.05,boxShadow:"0 0 15px rgba(88, 86, 214, 0.5)"},whileTap:{scale:.95},children:"Apply Filters"})]})}),(0,d.jsxs)(S,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.4,delay:.3},children:[(0,d.jsxs)(P,{active:"connections"===i,onClick:()=>a("connections"),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.05)"},whileTap:{scale:.95},children:[(0,d.jsx)(l.x$1,{style:{marginRight:"8px"}}),"Connections (",ai.length,")"]}),(0,d.jsxs)(P,{active:"invitations"===i,onClick:()=>a("invitations"),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.05)"},whileTap:{scale:.95},children:[(0,d.jsx)(l.NPy,{style:{marginRight:"8px"}}),"Invitations (",ei.length,")"]}),(0,d.jsxs)(P,{active:"suggestions"===i,onClick:()=>a("suggestions"),whileHover:{backgroundColor:"rgba(255, 255, 255, 0.05)"},whileTap:{scale:.95},children:[(0,d.jsx)(l.e9S,{style:{marginRight:"8px"}}),"People You May Know"]})]}),(0,d.jsxs)(n.N,{mode:"wait",children:["connections"===i&&(0,d.jsx)(D,{variants:ri,initial:"hidden",animate:Z?"visible":"hidden",exit:{opacity:0,y:10},children:ai.map((i=>(0,d.jsxs)(z,{variants:oi,whileHover:{y:-10,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,d.jsxs)(M,{children:[(0,d.jsx)(N,{src:i.image,alt:i.name,variants:ni,initial:"initial",animate:"animate"}),(0,d.jsx)(H,{"aria-label":"Remove connection",whileHover:{scale:1.2,backgroundColor:"rgba(255, 82, 82, 0.1)"},whileTap:{scale:.9},children:(0,d.jsx)(l.QCr,{})})]}),(0,d.jsxs)(Y,{children:[(0,d.jsx)(R,{to:`/profile/${i.id}`,whileHover:{color:"#5856d6"},children:i.name}),(0,d.jsxs)(F,{children:[(0,d.jsx)(l._yv,{}),(0,d.jsx)("span",{children:i.title})]}),(0,d.jsxs)(B,{children:[(0,d.jsx)(l.vq8,{}),(0,d.jsx)("span",{children:i.location})]}),(0,d.jsxs)(J,{children:[i.mutualConnections," mutual connections"]})]}),(0,d.jsx)(L,{to:`/messages/${i.id}`,whileHover:{backgroundColor:"rgba(88, 86, 214, 0.1)",color:"#5856d6"},whileTap:{scale:.98},children:"Message"})]},i.id)))},"connections"),"invitations"===i&&(0,d.jsx)(X,{variants:ri,initial:"hidden",animate:Z?"visible":"hidden",exit:{opacity:0,y:10},children:ei.map((i=>(0,d.jsxs)(E,{variants:oi,whileHover:{y:-5,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,d.jsxs)(q,{children:[(0,d.jsx)(N,{src:i.image,alt:i.name,variants:ni,initial:"initial",animate:"animate"}),(0,d.jsxs)(U,{children:[(0,d.jsx)(G,{children:i.name}),(0,d.jsx)(K,{children:i.title}),(0,d.jsxs)(Q,{children:[(0,d.jsx)(l.vq8,{}),(0,d.jsx)("span",{children:i.location})]}),(0,d.jsxs)(V,{children:[(0,d.jsxs)("span",{children:[i.mutualConnections," mutual connections"]}),(0,d.jsxs)("span",{children:["Received ",i.date]})]})]})]}),(0,d.jsxs)(O,{children:[(0,d.jsx)(W,{whileHover:{scale:1.05,boxShadow:"0 0 15px rgba(88, 86, 214, 0.5)"},whileTap:{scale:.95},children:"Accept"}),(0,d.jsx)(_,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Ignore"})]})]},i.id)))},"invitations"),"suggestions"===i&&(0,d.jsx)(T,{variants:ri,initial:"hidden",animate:Z?"visible":"hidden",exit:{opacity:0,y:10},children:[{id:9,name:"Sophia Martinez",title:"Frontend Developer at Airbnb",image:"https://randomuser.me/api/portraits/women/12.jpg",mutualConnections:11,location:"Seattle, WA"},{id:10,name:"Brian Johnson",title:"Marketing Director at Shopify",image:"https://randomuser.me/api/portraits/men/36.jpg",mutualConnections:9,location:"Chicago, IL"},{id:11,name:"Jessica Williams",title:"Product Manager at Uber",image:"https://randomuser.me/api/portraits/women/24.jpg",mutualConnections:7,location:"Los Angeles, CA"},{id:12,name:"Robert Davis",title:"Backend Developer at Stripe",image:"https://randomuser.me/api/portraits/men/15.jpg",mutualConnections:5,location:"Portland, OR"}].map((i=>(0,d.jsxs)(z,{variants:oi,whileHover:{y:-10,boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",borderColor:"rgba(88, 86, 214, 0.3)"},children:[(0,d.jsxs)(M,{children:[(0,d.jsx)(N,{src:i.image,alt:i.name,variants:ni,initial:"initial",animate:"animate"}),(0,d.jsx)(I,{"aria-label":"Dismiss suggestion",whileHover:{scale:1.2,backgroundColor:"rgba(255, 82, 82, 0.1)"},whileTap:{scale:.9},children:(0,d.jsx)(l.QCr,{})})]}),(0,d.jsxs)(Y,{children:[(0,d.jsx)(R,{to:`/profile/${i.id}`,whileHover:{color:"#5856d6"},children:i.name}),(0,d.jsxs)(F,{children:[(0,d.jsx)(l._yv,{}),(0,d.jsx)("span",{children:i.title})]}),(0,d.jsxs)(B,{children:[(0,d.jsx)(l.vq8,{}),(0,d.jsx)("span",{children:i.location})]}),(0,d.jsxs)(J,{children:[i.mutualConnections," mutual connections"]})]}),(0,d.jsxs)($,{whileHover:{scale:1.05,backgroundColor:"rgba(88, 86, 214, 0.2)"},whileTap:{scale:.95},children:[(0,d.jsx)(l.NPy,{}),(0,d.jsx)("span",{children:"Connect"})]})]},i.id)))},"suggestions")]})]})]})}}}]);
//# sourceMappingURL=21.9c9e7146.chunk.js.map