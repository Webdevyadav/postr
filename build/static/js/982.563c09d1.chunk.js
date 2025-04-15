"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[982],{5982:(e,t,i)=>{i.r(t),i.d(t,{default:()=>X});var r=i(5043),a=i(5464),o=i(6759),s=i(5475),n=i(2774),d=i(579);const p=(0,a.Ay)(o.P.div)`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: #0c0c14;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
`,l=a.Ay.div`
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
`,c=a.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,g=a.Ay.header`
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
`,x=a.Ay.h1`
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
`,m=a.Ay.p`
  font-size: 1.2rem;
  margin: 10px 0 0;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,b=a.Ay.div`
  position: relative;
  max-width: 600px;
  margin: 30px 0;
`,h=a.Ay.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
`,f=a.Ay.input`
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
`,u=a.Ay.div`
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
`,y=a.Ay.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${e=>e.active?"rgba(88, 86, 214, 0.2)":"rgba(255, 255, 255, 0.05)"};
  border: 1px solid ${e=>e.active?"rgba(88, 86, 214, 0.3)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 50px;
  color: ${e=>e.active?"#fff":"rgba(255, 255, 255, 0.7)"};
  font-size: 0.95rem;
  font-weight: ${e=>e.active?"500":"400"};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  svg {
    color: ${e=>e.active?"#a55eea":"rgba(255, 255, 255, 0.5)"};
    font-size: 1rem;
  }
  
  &:hover {
    background: ${e=>e.active?"rgba(88, 86, 214, 0.25)":"rgba(255, 255, 255, 0.08)"};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
`,w=(0,a.Ay)(o.P.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,v=(0,a.Ay)((0,o.P)(s.N_))`
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
`,j=a.Ay.div`
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
`,k=a.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(12, 12, 20, 0.2);
  z-index: 1;
`,A=a.Ay.h3`
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
`,z=a.Ay.div`
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
`,C=a.Ay.div`
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
`,S=a.Ay.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,P=a.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`,I=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  
  svg {
    color: rgba(88, 86, 214, 0.7);
    font-size: 0.9rem;
  }
`,W=a.Ay.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
  flex: 1;
`,D=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`,$=a.Ay.span`
  background: rgba(88, 86, 214, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(88, 86, 214, 0.2);
`,T=a.Ay.div`
  margin-top: auto;
`,q=a.Ay.button`
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
`,B=a.Ay.div`
  background: rgba(20, 20, 30, 0.5);
  border-radius: 16px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
`,F=a.Ay.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: #a55eea;
  }
`,U=(0,a.Ay)(o.P.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`,E=(0,a.Ay)(o.P.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,H=a.Ay.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: rgba(88, 86, 214, 0.7);
    font-size: 0.9rem;
  }
`,N=a.Ay.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  border-radius: 20px;
`,R=(0,a.Ay)(o.P.button)`
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
`,X=()=>{const[e,t]=(0,r.useState)(""),[i,a]=(0,r.useState)("all"),o=[{id:1,name:"UX/UI Designers Connect",members:8742,posts:347,image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"A community for UX/UI designers to share work, get feedback, and discuss design trends.",tags:["Design","UX","UI","Product"],featured:!0,hot:!0},{id:2,name:"Data Science Experts",members:12453,posts:521,image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Discuss the latest in data science, machine learning, AI, and analytics with fellow professionals.",tags:["Data Science","ML","AI","Analytics"],featured:!0,hot:!1},{id:3,name:"Frontend Developers Hub",members:15782,posts:683,image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Stay up-to-date with the latest frontend frameworks, tools, and best practices.",tags:["JavaScript","React","CSS","Web Dev"],featured:!1,hot:!0},{id:4,name:"Product Managers Network",members:7521,posts:298,image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Connect with product managers to share strategies, tools, and career advice.",tags:["Product","Strategy","Management"],featured:!1,hot:!1},{id:5,name:"Startup Founders Circle",members:5382,posts:214,image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"A supportive community for startup founders to network, share experiences, and get advice.",tags:["Startups","Entrepreneurship","Business"],featured:!0,hot:!0},{id:6,name:"Women in Tech",members:9436,posts:421,image:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Empowering women in technology through networking, mentorship, and career development.",tags:["Women","Diversity","Tech","Career"],featured:!0,hot:!1},{id:7,name:"Blockchain Innovators",members:6835,posts:312,image:"https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Explore blockchain technology, cryptocurrencies, and decentralized applications.",tags:["Blockchain","Crypto","Web3","DeFi"],featured:!1,hot:!0},{id:8,name:"Remote Work Professionals",members:11289,posts:487,image:"https://cdn-talent-wp.arc.dev/wp-content/uploads/2024/07/Blog-Banner-23-Top-Sites-to-Find-Remote-Work-in-2024.png",description:"Tips, tools, and strategies for successful remote work and distributed teams.",tags:["Remote","WFH","Productivity","Teams"],featured:!0,hot:!0}].filter((e=>!("featured"===i&&!e.featured)&&!("hot"===i&&!e.hot))),X={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},Y={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return(0,d.jsxs)(p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,d.jsx)(l,{}),(0,d.jsxs)(c,{children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(x,{children:"Explore Communities"}),(0,d.jsx)(m,{children:"Connect with like-minded professionals in your field"}),(0,d.jsxs)(b,{children:[(0,d.jsx)(h,{children:(0,d.jsx)(n.KSO,{})}),(0,d.jsx)(f,{type:"text",placeholder:"Search communities...",value:e,onChange:e=>t(e.target.value)})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(y,{active:"all"===i,onClick:()=>a("all"),children:"All Communities"}),(0,d.jsxs)(y,{active:"featured"===i,onClick:()=>a("featured"),children:[(0,d.jsx)(n.gt3,{}),(0,d.jsx)("span",{children:"Featured"})]}),(0,d.jsxs)(y,{active:"hot"===i,onClick:()=>a("hot"),children:[(0,d.jsx)(n.Itl,{}),(0,d.jsx)("span",{children:"Hot"})]})]})]}),(0,d.jsx)(w,{variants:X,initial:"hidden",animate:"visible",children:o.map((e=>(0,d.jsxs)(v,{variants:Y,to:`/communities/${e.id}`,children:[(0,d.jsxs)(j,{style:{backgroundImage:`url(${e.image})`},children:[(0,d.jsx)(k,{}),e.featured&&(0,d.jsxs)(z,{children:[(0,d.jsx)(n.gt3,{})," Featured"]}),e.hot&&(0,d.jsxs)(C,{children:[(0,d.jsx)(n.Itl,{})," Hot"]}),(0,d.jsx)(A,{children:e.name})]}),(0,d.jsxs)(S,{children:[(0,d.jsxs)(P,{children:[(0,d.jsxs)(I,{children:[(0,d.jsx)(n.YXz,{}),(0,d.jsxs)("span",{children:[e.members.toLocaleString()," members"]})]}),(0,d.jsxs)(I,{children:[(0,d.jsx)(n.uN,{}),(0,d.jsxs)("span",{children:[e.posts," posts this week"]})]})]}),(0,d.jsx)(W,{children:e.description}),(0,d.jsx)(D,{children:e.tags.map(((e,t)=>(0,d.jsx)($,{children:e},t)))}),(0,d.jsx)(T,{children:(0,d.jsxs)(q,{as:s.N_,to:`/communities/${e.id}`,children:[(0,d.jsx)("span",{children:"Join Group"}),(0,d.jsx)(n.Z0P,{})]})})]})]},e.id)))}),(0,d.jsxs)(B,{children:[(0,d.jsxs)(F,{children:[(0,d.jsx)(n.Itl,{}),(0,d.jsx)("span",{children:"Trending Topics"})]}),(0,d.jsx)(U,{variants:X,initial:"hidden",animate:"visible",children:[{name:"Artificial Intelligence",posts:2583},{name:"Remote Work",posts:1872},{name:"Web3",posts:1654},{name:"Career Growth",posts:1422},{name:"Work-Life Balance",posts:1235},{name:"Salary Negotiation",posts:987},{name:"Tech Interviews",posts:854},{name:"Side Projects",posts:721}].map(((e,t)=>(0,d.jsxs)(E,{variants:Y,children:[(0,d.jsxs)(H,{children:[(0,d.jsx)(n.BuZ,{}),(0,d.jsx)("span",{children:e.name})]}),(0,d.jsxs)(N,{children:[e.posts," posts"]})]},t)))}),(0,d.jsxs)(R,{variants:Y,children:[(0,d.jsx)("span",{children:"Create Community"}),(0,d.jsx)(n.Z0P,{})]})]})]})]})}}}]);
//# sourceMappingURL=982.563c09d1.chunk.js.map