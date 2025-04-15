"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[903],{3903:(e,r,i)=>{i.r(r),i.d(r,{default:()=>U});var t=i(5043),a=i(5464),o=i(6759),n=i(2774),s=i(579);const d=(0,a.Ay)(o.P.div)`
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
`,p=a.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,x=a.Ay.header`
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
`,c=a.Ay.h1`
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
`,h=a.Ay.div`
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
`,g=a.Ay.div`
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
`,b=a.Ay.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`,u=a.Ay.div`
  position: absolute;
  left: 34px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`,m=a.Ay.input`
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
`,f=a.Ay.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>e.selected?"rgba(88, 86, 214, 0.1)":"transparent"};
  border-left: 3px solid ${e=>e.selected?"#5856d6":"transparent"};
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${e=>e.selected?"0":"20px"};
    width: ${e=>e.selected?"100%":"calc(100% - 40px)"};
    height: 1px;
    background: rgba(255, 255, 255, 0.05);
  }
`,w=a.Ay.div`
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
`,y=a.Ay.span`
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4CAF50;
  border: 2px solid #0c0c14;
  box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.3);
`,v=a.Ay.div`
  flex: 1;
  min-width: 0;
`,j=a.Ay.div`
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 5px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=a.Ay.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,A=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 60px;
`,S=a.Ay.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 5px;
`,M=a.Ay.div`
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
`,z=a.Ay.div`
  background: rgba(20, 20, 30, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(10px);
`,I=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(30, 30, 45, 0.6);
`,Y=a.Ay.div`
  display: flex;
  align-items: center;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
  }
`,T=a.Ay.div`
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
`,C=a.Ay.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`,H=a.Ay.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin-right: 6px;
`,$=a.Ay.div`
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
`,L=a.Ay.div`
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
`,D=a.Ay.div`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: ${e=>e.isSender?"18px 18px 4px 18px":"18px 18px 18px 4px"};
  background: ${e=>e.isSender?"linear-gradient(135deg, rgba(88, 86, 214, 0.8) 0%, rgba(165, 94, 234, 0.8) 100%)":"rgba(255, 255, 255, 0.05)"};
  color: ${e=>e.isSender?"#fff":"rgba(255, 255, 255, 0.9)"};
  align-self: ${e=>e.isSender?"flex-end":"flex-start"};
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`,P=a.Ay.div`
  font-size: 0.7rem;
  color: ${e=>e.isSender?"rgba(255, 255, 255, 0.7)":"rgba(255, 255, 255, 0.5)"};
  margin-top: 5px;
  text-align: right;
`,W=a.Ay.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3px;
`,F=a.Ay.form`
  padding: 15px 20px;
  background: rgba(30, 30, 45, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 15px;
`,B=a.Ay.div`
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
`,J=a.Ay.input`
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
`,O=a.Ay.button`
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
`,G=(0,a.Ay)(o.P.button)`
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
`,K=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`,E=a.Ay.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: rgba(88, 86, 214, 0.3);
`,N=a.Ay.div`
  font-size: 1.1rem;
  margin-bottom: 10px;
`,R=a.Ay.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  max-width: 300px;
  line-height: 1.5;
`,U=()=>{const[e,r]=(0,t.useState)(0),[i,a]=(0,t.useState)(""),o=[{id:1,name:"Alex Morgan",image:"https://randomuser.me/api/portraits/women/44.jpg",lastMessage:"Thanks for connecting! Would love to discuss the project further.",time:"2:30 PM",unread:2,status:"online"},{id:2,name:"David Chen",image:"https://randomuser.me/api/portraits/men/32.jpg",lastMessage:"What do you think about the new design?",time:"Yesterday",unread:0,status:"offline"},{id:3,name:"Sarah Johnson",image:"https://randomuser.me/api/portraits/women/68.jpg",lastMessage:"Let me know when you are available for a call.",time:"Monday",unread:1,status:"online"},{id:4,name:"Michael Brown",image:"https://randomuser.me/api/portraits/men/75.jpg",lastMessage:"I have shared the document with you. Lets discuss tomorrow.",time:"Last week",unread:0,status:"offline"}];return(0,s.jsxs)(d,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,s.jsx)(l,{}),(0,s.jsxs)(p,{children:[(0,s.jsx)(x,{children:(0,s.jsx)(c,{children:"Messages"})}),(0,s.jsxs)(h,{children:[(0,s.jsxs)(g,{children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(u,{children:(0,s.jsx)(n.KSO,{})}),(0,s.jsx)(m,{type:"text",placeholder:"Search messages..."})]}),o.map(((i,t)=>(0,s.jsxs)(f,{selected:e===t,onClick:()=>r(t),children:[(0,s.jsxs)(w,{children:[(0,s.jsx)("img",{src:i.image,alt:i.name}),"online"===i.status&&(0,s.jsx)(y,{})]}),(0,s.jsxs)(v,{children:[(0,s.jsx)(j,{children:i.name}),(0,s.jsx)(k,{children:i.lastMessage})]}),(0,s.jsxs)(A,{children:[(0,s.jsx)(S,{children:i.time}),i.unread>0&&(0,s.jsx)(M,{children:i.unread})]})]},i.id)))]}),(0,s.jsx)(z,{children:null!==e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(I,{children:[(0,s.jsxs)(Y,{children:[(0,s.jsx)("img",{src:o[e].image,alt:o[e].name}),(0,s.jsxs)("div",{children:[(0,s.jsx)(T,{children:o[e].name}),(0,s.jsx)(C,{children:"online"===o[e].status?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{}),(0,s.jsx)("span",{children:"Online"})]}):"Offline"})]})]}),(0,s.jsx)($,{children:(0,s.jsx)(n.HFM,{})})]}),(0,s.jsx)(L,{children:[{id:1,messages:[{id:1,sender:"Alex Morgan",text:"Hi there! I saw your profile and I think your experience would be a great fit for a project I am working on.",time:"10:30 AM",isSender:!1},{id:2,sender:"You",text:"Hey Alex! Thanks for reaching out. I would love to hear more about the project.",time:"10:45 AM",isSender:!0},{id:3,sender:"Alex Morgan",text:"Great! It is a web application for a fintech startup. We need someone with your React skills to help us build the dashboard.",time:"11:00 AM",isSender:!1},{id:4,sender:"You",text:"That sounds interesting! Do you have any documentation or wireframes I could look at?",time:"11:15 AM",isSender:!0},{id:5,sender:"Alex Morgan",text:"Yes, I will share the project brief and wireframes with you. Would you be available for a call tomorrow to discuss the details?",time:"11:30 AM",isSender:!1},{id:6,sender:"You",text:"Definitely! I am free tomorrow afternoon. How does 2 PM sound?",time:"11:45 AM",isSender:!0},{id:7,sender:"Alex Morgan",text:"Perfect! I will send you a calendar invite. Thanks for connecting! I would love to discuss the project further.",time:"2:30 PM",isSender:!1}]},{id:2,messages:[{id:1,sender:"David Chen",text:"Hey, have you had a chance to look at the design mockups I sent?",time:"Yesterday",isSender:!1},{id:2,sender:"You",text:"Yes, I reviewed them this morning. The UI looks clean and intuitive.",time:"Yesterday",isSender:!0},{id:3,sender:"David Chen",text:"Thanks! I was thinking of making some changes to the navigation. What do you think about the new design?",time:"Yesterday",isSender:!1}]},{id:3,messages:[{id:1,sender:"Sarah Johnson",text:"Hi there! I am organizing a panel discussion on women in tech next month and would love to have you as a speaker.",time:"Monday",isSender:!1},{id:2,sender:"You",text:"That sounds amazing! I would be honored to participate.",time:"Monday",isSender:!0},{id:3,sender:"Sarah Johnson",text:"Great! Let me know when you are available for a call to discuss the details.",time:"Monday",isSender:!1}]},{id:4,messages:[{id:1,sender:"Michael Brown",text:"Hi, I have been looking at your portfolio and I am impressed with your data visualization work.",time:"Last week",isSender:!1},{id:2,sender:"You",text:"Thank you, Michael! That is one of my favorite areas to work in.",time:"Last week",isSender:!0},{id:3,sender:"Michael Brown",text:"Would you be interested in collaborating on a project? I have shared the document with you. Let us discuss tomorrow.",time:"Last week",isSender:!1}]}][e].messages.map((e=>(0,s.jsxs)(D,{isSender:e.isSender,children:[!e.isSender&&(0,s.jsx)(W,{children:e.sender}),(0,s.jsx)("div",{children:e.text}),(0,s.jsx)(P,{isSender:e.isSender,children:e.time})]},e.id)))}),(0,s.jsxs)(F,{onSubmit:e=>{e.preventDefault(),i.trim()&&(console.log("Sending message:",i),a(""))},children:[(0,s.jsxs)(B,{children:[(0,s.jsx)(O,{type:"button",children:(0,s.jsx)(n.EHs,{})}),(0,s.jsx)(J,{type:"text",placeholder:"Type a message...",value:i,onChange:e=>a(e.target.value)}),(0,s.jsx)(O,{type:"button",children:(0,s.jsx)(n.Ky9,{})})]}),(0,s.jsx)(G,{type:"submit",disabled:!i.trim(),whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,s.jsx)(n.Cer,{})})]})]}):(0,s.jsxs)(K,{children:[(0,s.jsx)(E,{children:(0,s.jsx)(n.uN,{})}),(0,s.jsx)(N,{children:"Select a conversation to start chatting"}),(0,s.jsx)(R,{children:"Your messages will appear here. Start a new conversation or select an existing one to get started."})]})})]})]})]})}}}]);
//# sourceMappingURL=903.22cca811.chunk.js.map