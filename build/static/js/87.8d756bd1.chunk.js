"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[87],{4087:(e,r,i)=>{i.r(r),i.d(r,{default:()=>se});var t=i(5043),o=i(3216),a=i(5475),s=i(5464),n=i(6759),d=i(2774),p=i(579);const l=(0,s.Ay)(n.P.div)`
  width: 100%;
  min-height: 100vh;
  background-color: #0c0c14;
  color: #fff;
  position: relative;
  overflow: hidden;
`,g=s.Ay.div`
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
`,c=s.Ay.div`
  height: 240px;
  background-size: cover;
  background-position: center;
  position: relative;
`,m=s.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(12, 12, 20, 0.4), rgba(12, 12, 20, 0.8));
`,x=(0,s.Ay)(a.N_)`
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
`,h=s.Ay.div`
  max-width: 1200px;
  margin: -80px auto 0;
  padding: 0 20px 80px;
  position: relative;
  z-index: 2;
`,u=s.Ay.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,b=s.Ay.div`
  position: relative;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,f=s.Ay.img`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  object-fit: cover;
  border: 4px solid #0c0c14;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
`,y=s.Ay.div`
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
`,j=s.Ay.div`
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
`,w=s.Ay.div`
  margin-top: 10px;
`,v=s.Ay.h1`
  font-size: 1.8rem;
  margin: 0 0 10px;
  font-weight: 700;
  color: #fff;
`,k=s.Ay.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`,A=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  svg {
    color: var(--primary);
  }
`,z=s.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,F=s.Ay.span`
  padding: 5px 10px;
  background: rgba(88, 86, 214, 0.15);
  border: 1px solid rgba(88, 86, 214, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
`,W=s.Ay.div`
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
`,C=s.Ay.button`
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
  
  background: ${e=>e.joined?"rgba(88, 86, 214, 0.2)":"linear-gradient(135deg, #5856d6, #a55eea)"};
  
  color: ${e=>e.joined?"var(--primary)":"white"};
  
  border: ${e=>e.joined?"1px solid rgba(88, 86, 214, 0.4)":"none"};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.joined?"0 5px 15px rgba(88, 86, 214, 0.2)":"0 5px 15px rgba(88, 86, 214, 0.4)"};
  }
`,U=s.Ay.div`
  display: flex;
  gap: 10px;
`,S=s.Ay.button`
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
`,D=(0,s.Ay)(S)`
  &:hover {
    background: rgba(88, 86, 214, 0.2);
  }
`,I=(0,s.Ay)(S)``,P=(0,s.Ay)(S)``,R=s.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
`,B=s.Ay.section`
  background: rgba(30, 30, 40, 0.3);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`,X=s.Ay.h2`
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
`,$=s.Ay.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`,J=s.Ay.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(88, 86, 214, 0) 0%,
    rgba(88, 86, 214, 0.3) 50%,
    rgba(88, 86, 214, 0) 100%
  );
  margin: 30px 0;
`,N=s.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`,T=(0,s.Ay)(a.N_)`
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
`,q=s.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid var(--primary);
`,G=s.Ay.div``,H=s.Ay.h3`
  font-size: 1rem;
  margin: 0 0 5px;
  color: white;
`,L=s.Ay.p`
  font-size: 0.8rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
`,Y=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,E=s.Ay.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,M=s.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`,Q=(0,s.Ay)(a.N_)`
  display: flex;
  align-items: center;
  text-decoration: none;
`,Z=s.Ay.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`,_=s.Ay.div``,K=s.Ay.h4`
  font-size: 0.9rem;
  margin: 0 0 3px;
  color: white;
`,V=s.Ay.p`
  font-size: 0.75rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
`,O=s.Ay.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
`,ee=s.Ay.p`
  margin: 0 0 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`,re=s.Ay.img`
  width: 100%;
  max-height: 300px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 15px;
`,ie=s.Ay.div`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`,te=s.Ay.button`
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
`,oe=s.Ay.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,ae=s.Ay.div`
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
`,se=()=>{const{id:e}=(0,o.g)(),[r,i]=(0,t.useState)(null),[a,s]=(0,t.useState)(!0),[n,S]=(0,t.useState)(!1),[se,ne]=(0,t.useState)(!0),de={1:{id:1,name:"UX/UI Designers Connect",members:8742,postCount:347,image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",coverImage:"https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",description:"A community for UX/UI designers to share work, get feedback, and discuss design trends.",longDescription:"Our mission is to connect designers at all stages of their careers, from students to industry veterans. We provide a supportive space for sharing knowledge, getting feedback on work, exploring new trends, and addressing challenges in the UX/UI design field. Join us to expand your network, showcase your portfolio, and grow your design skills.",tags:["Design","UX","UI","Product"],featured:!0,hot:!0,admins:[{id:"emma",name:"Emma Wilson",image:"https://randomuser.me/api/portraits/women/32.jpg",title:"Senior UX Designer at Adobe"}],posts:[{id:101,author:{id:"emma",name:"Emma Wilson",image:"https://randomuser.me/api/portraits/women/32.jpg",title:"Senior UX Designer at Adobe"},content:"Just published a new case study on our redesign process. Check it out and let me know your thoughts!",image:"https://images.bannerbear.com/direct/4mGpW3zwpg0ZK0AxQw/requests/000/059/185/362/P523LdrvK613yy5mY7nypx4jW/0b0b2e0139c27c70412c512a80feb41515c0a91d.jpg",likes:87,comments:23,time:"2 days ago"},{id:102,author:{id:"david",name:"David Chen",image:"https://randomuser.me/api/portraits/men/32.jpg",title:"UI Designer at Figma"},content:"What tools is everyone using for user testing these days? Looking for recommendations for remote testing.",image:null,likes:42,comments:56,time:"3 days ago"}]},8:{id:8,name:"Remote Work Professionals",members:11289,postCount:487,image:"https://cdn-talent-wp.arc.dev/wp-content/uploads/2024/07/Blog-Banner-23-Top-Sites-to-Find-Remote-Work-in-2024.png",coverImage:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",description:"Tips, tools, and strategies for successful remote work and distributed teams.",longDescription:"Remote Work Professionals is a community dedicated to supporting professionals who work remotely or manage distributed teams. We share best practices, remote work tools, home office setups, work-life balance strategies, and ways to maintain team culture across distances. Whether you are a seasoned remote worker or just starting your remote journey, this community offers resources to help you thrive.",tags:["Remote","WFH","Productivity","Teams"],featured:!0,hot:!0,admins:[{id:"sarah",name:"Sarah Johnson",image:"https://randomuser.me/api/portraits/women/68.jpg",title:"Head of Remote at GitLab"}],posts:[{id:201,author:{id:"sarah",name:"Sarah Johnson",image:"https://randomuser.me/api/portraits/women/68.jpg",title:"Head of Remote at GitLab"},content:"We just released our annual remote work report! Some fascinating trends on how companies are adapting to distributed workforces.",image:"https://images.unsplash.com/photo-1591382696684-38c427c7547a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",likes:134,comments:41,time:"1 day ago"},{id:202,author:{id:"michael",name:"Michael Brown",image:"https://randomuser.me/api/portraits/men/75.jpg",title:"Remote Team Manager at Buffer"},content:"What's your favorite async communication tool? We're evaluating some new options for our team.",image:null,likes:89,comments:67,time:"4 days ago"}]}};(0,t.useEffect)((()=>{s(!0);const r=setTimeout((()=>{i(de[e]),s(!1)}),800);return()=>clearTimeout(r)}),[e]);return a||!r?(0,p.jsx)(oe,{children:(0,p.jsx)(ae,{})}):(0,p.jsxs)(l,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,p.jsx)(g,{}),(0,p.jsxs)(c,{style:{backgroundImage:`url(${r.coverImage})`},children:[(0,p.jsx)(m,{}),(0,p.jsx)(x,{to:"/communities",children:(0,p.jsx)(d.QVr,{})})]}),(0,p.jsxs)(h,{children:[(0,p.jsxs)(u,{children:[(0,p.jsxs)(b,{children:[(0,p.jsx)(f,{src:r.image,alt:r.name}),r.featured&&(0,p.jsxs)(y,{children:[(0,p.jsx)(d.gt3,{})," Featured"]}),r.hot&&(0,p.jsxs)(j,{children:[(0,p.jsx)(d.Itl,{})," Hot"]})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(v,{children:r.name}),(0,p.jsxs)(k,{children:[(0,p.jsxs)(A,{children:[(0,p.jsx)(d.YXz,{}),(0,p.jsxs)("span",{children:[r.members.toLocaleString()," members"]})]}),(0,p.jsxs)(A,{children:[(0,p.jsx)(d.uN,{}),(0,p.jsxs)("span",{children:[r.postCount," posts this week"]})]})]}),(0,p.jsx)(z,{children:r.tags.map(((e,r)=>(0,p.jsx)(F,{children:e},r)))})]}),(0,p.jsxs)(W,{children:[(0,p.jsx)(C,{joined:n,onClick:()=>{S(!n)},children:n?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.BAG,{}),(0,p.jsx)("span",{children:"Joined"})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.NPy,{}),(0,p.jsx)("span",{children:"Join Group"})]})}),(0,p.jsxs)(U,{children:[(0,p.jsx)(D,{onClick:()=>{ne(!se)},children:se?(0,p.jsx)(d.jNV,{}):(0,p.jsx)(d.CzP,{})}),(0,p.jsx)(I,{children:(0,p.jsx)(d.Zzu,{})}),(0,p.jsx)(P,{children:(0,p.jsx)(d.HFM,{})})]})]})]}),(0,p.jsx)(R,{children:(0,p.jsxs)(B,{children:[(0,p.jsx)(X,{children:"About"}),(0,p.jsx)($,{children:r.longDescription}),(0,p.jsx)(J,{}),(0,p.jsx)(X,{children:"Admins"}),(0,p.jsx)(N,{children:r.admins.map((e=>(0,p.jsxs)(T,{to:`/profile/${e.id}`,children:[(0,p.jsx)(q,{src:e.image,alt:e.name}),(0,p.jsxs)(G,{children:[(0,p.jsx)(H,{children:e.name}),(0,p.jsx)(L,{children:e.title})]})]},e.id)))}),(0,p.jsx)(J,{}),(0,p.jsx)(X,{children:"Recent Posts"}),(0,p.jsx)(Y,{children:r.posts.map((e=>(0,p.jsxs)(E,{children:[(0,p.jsxs)(M,{children:[(0,p.jsxs)(Q,{to:`/profile/${e.author.id}`,children:[(0,p.jsx)(Z,{src:e.author.image,alt:e.author.name}),(0,p.jsxs)(_,{children:[(0,p.jsx)(K,{children:e.author.name}),(0,p.jsx)(V,{children:e.author.title})]})]}),(0,p.jsx)(O,{children:e.time})]}),(0,p.jsx)(ee,{children:e.content}),e.image&&(0,p.jsx)(re,{src:e.image,alt:"Post"}),(0,p.jsxs)(ie,{children:[(0,p.jsxs)(te,{children:[(0,p.jsx)(d.U2A,{}),(0,p.jsx)("span",{children:e.likes})]}),(0,p.jsxs)(te,{children:[(0,p.jsx)(d.j1Q,{}),(0,p.jsx)("span",{children:e.comments})]}),(0,p.jsx)(te,{children:(0,p.jsx)(d.Zzu,{})})]})]},e.id)))})]})})]})]})}}}]);
//# sourceMappingURL=87.8d756bd1.chunk.js.map