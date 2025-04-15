"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[900],{1297:(e,i,t)=>{t.d(i,{n:()=>s});var n=t(5043),a=t(6540),r=t(9408);const s=n.forwardRef(((e,i)=>{let{children:t,enabled:s=!0,speed:o=1,rotationIntensity:d=1,floatIntensity:l=1,floatingRange:c=[-.1,.1],autoInvalidate:h=!1,...x}=e;const m=n.useRef(null);n.useImperativeHandle(i,(()=>m.current),[]);const p=n.useRef(1e4*Math.random());return(0,a.F)((e=>{var i,t;if(!s||0===o)return;h&&e.invalidate();const n=p.current+e.clock.elapsedTime;m.current.rotation.x=Math.cos(n/4*o)/8*d,m.current.rotation.y=Math.sin(n/4*o)/8*d,m.current.rotation.z=Math.sin(n/4*o)/20*d;let a=Math.sin(n/4*o)/10;a=r.MathUtils.mapLinear(a,-.1,.1,null!==(i=null==c?void 0:c[0])&&void 0!==i?i:-.1,null!==(t=null==c?void 0:c[1])&&void 0!==t?t:.1),m.current.position.y=a*l,m.current.updateMatrix()})),n.createElement("group",x,n.createElement("group",{ref:m,matrixAutoUpdate:!1},t))}))},1900:(e,i,t)=>{t.r(i),t.d(i,{default:()=>y});t(5043);var n=t(5475),a=t(5464),r=t(6759),s=t(1985),o=t(1297),d=t(579);const l=()=>(0,d.jsxs)("group",{children:[(0,d.jsx)(o.n,{speed:1.5,rotationIntensity:.4,floatIntensity:.4,children:(0,d.jsxs)("mesh",{position:[0,0,0],children:[(0,d.jsx)("torusGeometry",{args:[1,.3,16,32]}),(0,d.jsx)("meshStandardMaterial",{color:"#5856d6",emissive:"#5856d6",emissiveIntensity:.2})]})}),(0,d.jsx)(o.n,{speed:2,rotationIntensity:.5,floatIntensity:.5,position:[2,-1,-2],children:(0,d.jsxs)("mesh",{children:[(0,d.jsx)("boxGeometry",{args:[.8,.8,.8]}),(0,d.jsx)("meshStandardMaterial",{color:"#34aadc",emissive:"#34aadc",emissiveIntensity:.2})]})}),(0,d.jsx)(o.n,{speed:2.5,rotationIntensity:.6,floatIntensity:.6,position:[-2,1,-1],children:(0,d.jsxs)("mesh",{children:[(0,d.jsx)("icosahedronGeometry",{args:[.7,0]}),(0,d.jsx)("meshStandardMaterial",{color:"#5ac8fa",emissive:"#5ac8fa",emissiveIntensity:.2})]})})]}),c=(0,a.Ay)(r.P.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background-color: var(--background);
`,h=a.Ay.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`,x=a.Ay.div`
  flex: 1;
  padding-right: var(--spacing-xxl);
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-top: var(--spacing-xl);
  }
`,m=(0,a.Ay)(r.P.h1)`
  font-size: 8rem;
  font-weight: 800;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1;
  
  @media (max-width: 576px) {
    font-size: 6rem;
  }
`,p=(0,a.Ay)(r.P.h2)`
  font-size: 2.5rem;
  color: var(--on-background);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`,g=(0,a.Ay)(r.P.p)`
  font-size: 1.1rem;
  color: var(--on-surface);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,v=(0,a.Ay)(n.N_)`
  display: inline-block;
  padding: 12px 24px;
  background: var(--gradient-1);
  color: white;
  font-weight: var(--font-weight-semibold);
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(88, 86, 214, 0.4);
  }
`,u=(0,a.Ay)(r.P.div)`
  flex: 1;
  height: 400px;
`,y=()=>{const e={initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5}}};return(0,d.jsx)(c,{variants:{initial:{opacity:0},animate:{opacity:1,transition:{delayChildren:.3,staggerChildren:.2}}},initial:"initial",animate:"animate",children:(0,d.jsxs)(h,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(m,{variants:e,children:"404"}),(0,d.jsx)(p,{variants:e,children:"Page Not Found"}),(0,d.jsx)(g,{variants:e,children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}),(0,d.jsx)(r.P.div,{variants:e,children:(0,d.jsx)(v,{to:"/",children:"Back to Home"})})]}),(0,d.jsx)(u,{variants:e,children:(0,d.jsxs)(s.Hl,{camera:{position:[0,0,5],fov:50},children:[(0,d.jsx)("ambientLight",{intensity:.5}),(0,d.jsx)("pointLight",{position:[10,10,10],intensity:1}),(0,d.jsx)(l,{})]})})]})})}}}]);
//# sourceMappingURL=900.afffe6f7.chunk.js.map