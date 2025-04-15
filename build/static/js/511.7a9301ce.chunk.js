"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[511],{9511:(e,r,i)=>{i.r(r),i.d(r,{default:()=>J});var a=i(5043),t=i(5464),n=i(6759),o=i(5475),s=i(2774),d=i(579);const c=(0,t.Ay)(n.P.div)`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: #0c0c14;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
`,l=t.Ay.div`
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
`,p=t.Ay.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,g=t.Ay.header`
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
`,x=t.Ay.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 20px;
  background: linear-gradient(135deg, #5856d6 0%, #a55eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(88, 86, 214, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,b=t.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`,h=t.Ay.button`
  padding: 8px 16px;
  background: ${e=>e.active?"rgba(88, 86, 214, 0.2)":"rgba(255, 255, 255, 0.05)"};
  border: 1px solid ${e=>e.active?"rgba(88, 86, 214, 0.3)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 20px;
  color: ${e=>e.active?"#fff":"rgba(255, 255, 255, 0.7)"};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"rgba(88, 86, 214, 0.25)":"rgba(255, 255, 255, 0.08)"};
    transform: translateY(-2px);
  }
`,m=(0,t.Ay)(n.P.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,u=(0,t.Ay)(n.P.div)`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: ${e=>e.read?"rgba(20, 20, 30, 0.5)":"rgba(88, 86, 214, 0.05)"};
  border: 1px solid ${e=>e.read?"rgba(255, 255, 255, 0.05)":"rgba(88, 86, 214, 0.1)"};
  border-radius: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: ${e=>e.read?"rgba(255, 255, 255, 0.1)":"rgba(88, 86, 214, 0.2)"};
  }
`,f=t.Ay.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background: ${e=>e.background};
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`,y=t.Ay.div`
  flex: 1;
`,j=(0,t.Ay)(o.N_)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 5px;
`,v=t.Ay.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,k=t.Ay.span`
  font-weight: 600;
  color: #fff;
  font-size: 0.95rem;
`,w=t.Ay.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.9rem;
`,A=t.Ay.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  display: block;
  margin-top: 5px;
`,z=t.Ay.div`
  display: flex;
  gap: 8px;
  margin-left: 15px;
`,C=t.Ay.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`,$=t.Ay.div`
  text-align: center;
  padding: 60px 20px;
  background: rgba(20, 20, 30, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`,Y=t.Ay.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(88, 86, 214, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: rgba(88, 86, 214, 0.7);
  font-size: 1.5rem;
`,N=t.Ay.h3`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 0 10px;
`,M=t.Ay.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  max-width: 300px;
  margin: 0 auto;
`,J=()=>{const[e,r]=(0,a.useState)("all"),i=[{id:1,type:"connection",user:{name:"Emma Wilson",image:"https://randomuser.me/api/portraits/women/32.jpg",id:"emma"},content:"accepted your connection request",time:"2 hours ago",read:!1},{id:2,type:"message",user:{name:"Jason Lee",image:"https://randomuser.me/api/portraits/men/45.jpg",id:"jason"},content:"sent you a message",time:"5 hours ago",read:!1},{id:3,type:"job",user:{name:"Tesla",image:"https://logo.clearbit.com/tesla.com",id:"tesla"},content:"Your job application was viewed",time:"Yesterday",read:!0},{id:4,type:"community",user:{name:"UX/UI Designers Connect",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",id:"1"},content:"Your post received 25 likes",time:"2 days ago",read:!0},{id:5,type:"like",user:{name:"Sarah Johnson",image:"https://randomuser.me/api/portraits/women/68.jpg",id:"sarah"},content:"liked your comment",time:"3 days ago",read:!0}],t="all"===e?i:i.filter((r=>r.type===e)),n=e=>{switch(e){case"connection":return(0,d.jsx)(s.x$1,{});case"message":return(0,d.jsx)(s.j1Q,{});case"like":return(0,d.jsx)(s.Mbv,{});case"community":return(0,d.jsx)(s.YXz,{});case"job":return(0,d.jsx)(s._yv,{});default:return(0,d.jsx)(s.jNV,{})}},o=e=>{switch(e){case"connection":default:return"linear-gradient(135deg, #5856d6, #a55eea)";case"message":return"linear-gradient(135deg, #36d1dc, #5b86e5)";case"like":return"linear-gradient(135deg, #ff6b6b, #ff8e8e)";case"community":return"linear-gradient(135deg, #4facfe, #00f2fe)";case"job":return"linear-gradient(135deg, #43e97b, #38f9d7)"}},J={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.4}}};return(0,d.jsxs)(c,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,d.jsx)(l,{}),(0,d.jsxs)(p,{children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(x,{children:"Notifications"}),(0,d.jsxs)(b,{children:[(0,d.jsx)(h,{active:"all"===e,onClick:()=>r("all"),children:"All"}),(0,d.jsx)(h,{active:"connection"===e,onClick:()=>r("connection"),children:"Connections"}),(0,d.jsx)(h,{active:"message"===e,onClick:()=>r("message"),children:"Messages"}),(0,d.jsx)(h,{active:"job"===e,onClick:()=>r("job"),children:"Jobs"})]})]}),(0,d.jsx)(m,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}}},initial:"hidden",animate:"visible",children:t.map((e=>(0,d.jsxs)(u,{read:e.read,variants:J,children:[(0,d.jsx)(f,{background:o(e.type),children:n(e.type)}),(0,d.jsxs)(y,{children:[(0,d.jsxs)(j,{to:`/profile/${e.user.id}`,children:[(0,d.jsx)(v,{children:(0,d.jsx)("img",{src:e.user.image,alt:e.user.name})}),(0,d.jsx)(k,{children:e.user.name})]}),(0,d.jsx)(w,{children:e.content}),(0,d.jsx)(A,{children:e.time})]}),(0,d.jsxs)(z,{children:[!e.read&&(0,d.jsx)(C,{children:(0,d.jsx)(s.CMH,{})}),(0,d.jsx)(C,{children:(0,d.jsx)(s.HFM,{})})]})]},e.id)))}),0===t.length&&(0,d.jsxs)($,{children:[(0,d.jsx)(Y,{children:(0,d.jsx)(s.jNV,{})}),(0,d.jsx)(N,{children:"No notifications to display"}),(0,d.jsx)(M,{children:"When you have new notifications, they will appear here."})]})]})]})}}}]);
//# sourceMappingURL=511.7a9301ce.chunk.js.map