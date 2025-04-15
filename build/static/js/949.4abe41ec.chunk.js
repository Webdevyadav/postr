"use strict";(self.webpackChunkpostr=self.webpackChunkpostr||[]).push([[949],{3414:(e,t,i)=>{i.d(t,{A:()=>m});var r=i(5043),a=i(6540),o=i(698),n=i(9408),s=i(579);const d={primary:new n.Color("#5856d6"),secondary:new n.Color("#34aadc"),accent:new n.Color("#5ac8fa"),highlight:new n.Color("#ff2d55")},l=e=>{let{position:t,size:i,color:n,pulseSpeed:l,pulseStrength:c,isHighlighted:p,onClick:m}=e;const g=(0,r.useRef)(),h=i,{scale:x}=(0,o.zh)({scale:p?1.8:1,config:{tension:150,friction:20}});return(0,a.F)((e=>{let{clock:t}=e;if(g.current){const e=t.getElapsedTime(),i=Math.sin(e*l)*c+1;g.current.scale.setScalar(h*i)}})),(0,s.jsxs)(o.CS.mesh,{ref:g,position:t,scale:x.to((e=>[e*h,e*h,e*h])),onClick:m,children:[(0,s.jsx)("sphereGeometry",{args:[1,16,16]}),(0,s.jsx)("meshStandardMaterial",{color:p?d.highlight:n,roughness:.3,metalness:.8,emissive:p?d.highlight:n,emissiveIntensity:p?.7:.4})]})},c=e=>{let{startPosition:t,endPosition:i,isHighlighted:o}=e;const d=(0,r.useRef)(),l=[t,i],c=(new n.BufferGeometry).setFromPoints(l);return(0,a.F)((e=>{let{clock:t}=e;if(d.current&&o){const e=t.getElapsedTime();d.current.material.opacity=.2*Math.sin(3*e)+.8}})),(0,s.jsx)("line",{ref:d,geometry:c,children:(0,s.jsx)("lineBasicMaterial",{color:o?"#ff2d55":"#5856d6",transparent:!0,opacity:o?.8:.2,linewidth:1})})},p=e=>{let{startPos:t,endPos:i,speed:o,color:d}=e;const l=(0,r.useRef)(),[c,p]=(0,r.useState)(0);(new n.Vector3).subVectors(i,t).normalize();return(0,a.F)((e=>{let{clock:r}=e;if(l.current){p((e=>{const t=e+.01*o;return t>1?0:t}));const e=(new n.Vector3).lerpVectors(t,i,c);l.current.position.copy(e)}})),0===c?null:(0,s.jsxs)("mesh",{ref:l,scale:[.02,.02,.02],children:[(0,s.jsx)("sphereGeometry",{args:[1,8,8]}),(0,s.jsx)("meshBasicMaterial",{color:d,transparent:!0,opacity:.8})]})},m=()=>{const e=(0,r.useRef)(),[t]=(0,r.useState)((()=>(e=>{const t=[];for(let i=0;i<e;i++){const r=Math.acos(2*i/e-1),a=Math.sqrt(e*Math.PI)*r,o=2+1*Math.random(),s=o*Math.sin(r)*Math.cos(a),l=o*Math.sin(r)*Math.sin(a),c=o*Math.cos(r);t.push({id:i,position:new n.Vector3(s,l,c),size:.04+.05*Math.random(),color:Math.random()>.8?d.highlight:Math.random()>.5?d.secondary:d.primary,pulseSpeed:.5+Math.random(),pulseStrength:.1+.3*Math.random(),connections:[]})}return t.forEach((e=>{const i=2+Math.floor(4*Math.random());for(let r=0;r<i;r++){let i;do{i=Math.floor(Math.random()*t.length)}while(i===e.id||e.connections.includes(i));e.connections.push(i),Math.random()>.5&&t[i].connections.push(e.id)}})),t})(25))),[i,o]=(0,r.useState)(null),[m,g]=(0,r.useState)([]);(0,a.F)((i=>{let{clock:r}=i;if(e.current){const t=r.getElapsedTime();e.current.rotation.y=.1*t,e.current.rotation.x=.2*Math.sin(.05*t)}if(Math.random()<.02){const e=Math.floor(Math.random()*t.length);if(t[e].connections.length>0){const i=Math.floor(Math.random()*t[e].connections.length),r=t[e].connections[i];g((t=>t.length>20?[...t.slice(1),{id:Date.now(),source:e,target:r,speed:.5+Math.random(),color:Math.random()>.7?"#ff2d55":"#5ac8fa"}]:[...t,{id:Date.now(),source:e,target:r,speed:.5+Math.random(),color:Math.random()>.7?"#ff2d55":"#5ac8fa"}]))}}}));return(0,s.jsxs)("group",{ref:e,children:[t.map((e=>e.connections.map((r=>(0,s.jsx)(c,{startPosition:e.position,endPosition:t[r].position,isHighlighted:i===e.id||i===r},`${e.id}-${r}`))))),t.map((e=>(0,s.jsx)(l,{position:e.position,size:e.size,color:e.color,pulseSpeed:e.pulseSpeed,pulseStrength:e.pulseStrength,isHighlighted:i===e.id,onClick:()=>{return t=e.id,void o(i===t?null:t);var t}},e.id))),m.map((e=>(0,s.jsx)(p,{startPos:t[e.source].position,endPos:t[e.target].position,speed:e.speed,color:e.color},e.id)))]})}},8949:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ct});var r=i(5043),a=i(5475),o=i(5464),n=i(9166),s=i(5781),d=i(6759),l=i(1985),c=i(5843),p=i(6028),m=i(2585),g=i(5747),h=i(9156),x=i(1297),u=i(5493),f=i(579);const b=(0,o.Ay)(d.P.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`,v=(0,o.Ay)(d.P.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: ${e=>e.background||"var(--gradient-1)"};
    z-index: 0;
    border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
  }
`,y=o.Ay.div`
  padding: var(--spacing-lg);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,w=(0,o.Ay)(a.N_)`
  display: block;
  z-index: 1;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,j=o.Ay.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid var(--surface);
  margin-bottom: var(--spacing-md);
  object-fit: cover;
  z-index: 1;
`,k=o.Ay.div`
  z-index: 1;
`,A=o.Ay.h3`
  margin-bottom: var(--spacing-xs);
  font-size: 1.2rem;
  color: var(--on-background);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`,z=o.Ay.p`
  color: var(--on-surface);
  font-size: 0.9rem;
`,M=o.Ay.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,S=o.Ay.p`
  color: var(--on-surface);
  font-size: 0.9rem;
  
  strong {
    color: var(--on-background);
  }
`,C=(0,o.Ay)(a.N_)`
  padding: 8px 16px;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(88, 86, 214, 0.2);
    color: var(--primary);
  }
`,P=e=>{let{isVisible:t}=e;const i={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5,ease:"easeOut"}}};return(0,f.jsx)(b,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:t?"visible":"hidden",children:[{id:"me",name:"Alex Morgan",title:"Product Designer at Google",image:"https://randomuser.me/api/portraits/women/44.jpg",connections:2378,background:"linear-gradient(135deg, #4158D0, #C850C0)"},{id:"me",name:"David Chen",title:"Software Engineer at Meta",image:"https://randomuser.me/api/portraits/men/32.jpg",connections:1642,background:"linear-gradient(135deg, #0093E9, #80D0C7)"},{id:"me",name:"Sarah Johnson",title:"Marketing Director at Twitter",image:"https://randomuser.me/api/portraits/women/68.jpg",connections:987,background:"linear-gradient(135deg, #8BC6EC, #9599E2)"},{id:"me",name:"Michael Brown",title:"Data Scientist at Amazon",image:"https://randomuser.me/api/portraits/men/75.jpg",connections:1245,background:"linear-gradient(135deg, #FCCF31, #F55555)"}].map((e=>(0,f.jsx)(a.N_,{to:`/profile/${e.id}`,style:{textDecoration:"none"},children:(0,f.jsxs)(v,{variants:i,background:e.background,children:[(0,f.jsxs)(y,{children:[(0,f.jsx)(w,{to:`/profile/${e.id}`,children:(0,f.jsx)(j,{src:e.image,alt:e.name})}),(0,f.jsxs)(k,{children:[(0,f.jsx)(A,{children:e.name}),(0,f.jsx)(z,{children:e.title})]})]}),(0,f.jsxs)(M,{children:[(0,f.jsxs)(S,{children:[(0,f.jsx)("strong",{children:e.connections.toLocaleString()})," connections"]}),(0,f.jsx)(C,{to:`/profile/${e.id}`,children:"View Profile"})]})]})},e.id)))})};var $=i(2774);const D=(0,o.Ay)(d.P.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
`,F=(0,o.Ay)(d.P.div)`
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
`,E=o.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`,N=o.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-md);
  margin-right: var(--spacing-md);
  background-color: white;
  padding: 5px;
  object-fit: contain;
`,L=o.Ay.div`
  flex: 1;
`,R=o.Ay.h3`
  font-size: 1.2rem;
  color: var(--on-background);
  margin-bottom: 4px;
`,T=o.Ay.p`
  color: var(--on-surface);
  font-size: 0.9rem;
`,B=o.Ay.button`
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
`,I=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`,V=o.Ay.div`
  display: flex;
  align-items: center;
  color: var(--on-surface);
  font-size: 0.9rem;
  
  svg {
    margin-right: 6px;
    color: var(--primary);
  }
`,O=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: var(--spacing-md);
`,Y=o.Ay.span`
  background-color: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
`,U=o.Ay.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`,G=(0,o.Ay)(a.N_)`
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
`,W=(0,o.Ay)(a.N_)`
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
`,X=(0,o.Ay)(a.N_)`
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
`,_=o.Ay.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  transform: rotate(-45deg);
  margin-left: 8px;
`,H=e=>{let{isVisible:t}=e;const i={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5,ease:"easeOut"}}};return(0,f.jsxs)(D,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},initial:"hidden",animate:t?"visible":"hidden",children:[[{id:1,title:"Senior UX Designer",company:"Amazon",logo:"https://logo.clearbit.com/amazon.com",location:"New York, NY (Remote)",salary:"$120k - $150k",type:"Full-time",posted:"2 days ago",tags:["UX Design","Figma","User Research"]},{id:2,title:"Frontend Developer",company:"Spotify",logo:"https://logo.clearbit.com/spotify.com",location:"Remote",salary:"$95k - $120k",type:"Full-time",posted:"3 days ago",tags:["React","TypeScript","CSS"]},{id:3,title:"Data Scientist",company:"Tesla",logo:"https://logo.clearbit.com/tesla.com",location:"Austin, TX",salary:"$130k - $160k",type:"Full-time",posted:"1 week ago",tags:["Python","Machine Learning","SQL"]},{id:4,title:"Product Manager",company:"Airbnb",logo:"https://logo.clearbit.com/airbnb.com",location:"San Francisco, CA (Hybrid)",salary:"$140k - $180k",type:"Full-time",posted:"5 days ago",tags:["Product Strategy","Agile","Analytics"]}].map((e=>(0,f.jsxs)(F,{variants:i,children:[(0,f.jsxs)(E,{children:[(0,f.jsx)(N,{src:e.logo,alt:`${e.company} logo`}),(0,f.jsxs)(L,{children:[(0,f.jsx)(R,{children:e.title}),(0,f.jsx)(T,{children:e.company})]}),(0,f.jsx)(B,{"aria-label":"Save job",children:(0,f.jsx)($.U$b,{})})]}),(0,f.jsxs)(I,{children:[(0,f.jsxs)(V,{children:[(0,f.jsx)($.vq8,{}),(0,f.jsx)("span",{children:e.location})]}),(0,f.jsxs)(V,{children:[(0,f.jsx)($.Tsk,{}),(0,f.jsx)("span",{children:e.salary})]}),(0,f.jsxs)(V,{children:[(0,f.jsx)($.w_X,{}),(0,f.jsxs)("span",{children:["Posted ",e.posted]})]})]}),(0,f.jsx)(O,{children:e.tags.map(((e,t)=>(0,f.jsx)(Y,{children:e},t)))}),(0,f.jsxs)(U,{children:[(0,f.jsx)(G,{to:`/jobs/${e.id}`,children:"Apply Now"}),(0,f.jsx)(W,{to:`/jobs/${e.id}`,children:"View Details"})]})]},e.id))),(0,f.jsxs)(X,{to:"/jobs",children:["View All Job Opportunities",(0,f.jsx)(_,{})]})]})},J=(0,o.Ay)(d.P.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,q=(0,o.Ay)((0,d.P)(a.N_))`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(255, 255, 255, 0.1);
    
    img {
      transform: scale(1.05);
    }
  }
`,Q=o.Ay.div`
  position: relative;
  height: 160px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`,Z=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(18, 18, 20, 0.3), rgba(18, 18, 20, 0.8));
`,K=o.Ay.h3`
  position: absolute;
  bottom: var(--spacing-md);
  left: var(--spacing-md);
  right: var(--spacing-md);
  color: var(--on-background);
  font-size: 1.2rem;
  font-weight: var(--font-weight-semibold);
  margin: 0;
  z-index: 1;
`,ee=o.Ay.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  flex: 1;
`,te=o.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  color: var(--on-surface);
  font-size: 0.85rem;
`,ie=o.Ay.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 6px;
    color: var(--primary);
  }
`,re=o.Ay.p`
  color: var(--on-surface);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  flex: 1;
`,ae=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--spacing-md);
`,oe=o.Ay.span`
  background-color: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  padding: 4px 8px;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: var(--font-weight-medium);
`,ne=o.Ay.div`
  margin-top: auto;
`,se=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  background-color: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  svg {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background-color: rgba(88, 86, 214, 0.2);
    
    svg {
      transform: translateX(3px);
    }
  }
`,de=(0,o.Ay)(a.N_)`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: var(--spacing-md);
  color: var(--primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  margin-top: var(--spacing-md);
  
  svg {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    text-decoration: underline;
    
    svg {
      transform: translateX(3px);
    }
  }
`,le=e=>{let{isVisible:t}=e;const i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return(0,f.jsxs)(J,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:t?"visible":"hidden",children:[[{id:1,name:"UX/UI Designers Connect",members:8742,posts:347,image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"A community for UX/UI designers to share work, get feedback, and discuss design trends.",tags:["Design","UX","UI","Product"]},{id:2,name:"Data Science Experts",members:12453,posts:521,image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Discuss the latest in data science, machine learning, AI, and analytics with fellow professionals.",tags:["Data Science","ML","AI","Analytics"]},{id:3,name:"Frontend Developers Hub",members:15782,posts:683,image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Stay up-to-date with the latest frontend frameworks, tools, and best practices.",tags:["JavaScript","React","CSS","Web Dev"]},{id:4,name:"Product Managers Network",members:7521,posts:298,image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Connect with product managers to share strategies, tools, and career advice.",tags:["Product","Strategy","Management"]},{id:5,name:"Startup Founders Circle",members:5382,posts:214,image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"A supportive community for startup founders to network, share experiences, and get advice.",tags:["Startups","Entrepreneurship","Business"]},{id:6,name:"Women in Tech",members:9436,posts:421,image:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",description:"Empowering women in technology through networking, mentorship, and career development.",tags:["Women","Diversity","Tech","Career"]}].map((e=>(0,f.jsxs)(q,{variants:i,to:`/communities/${e.id}`,children:[(0,f.jsxs)(Q,{style:{backgroundImage:`url(${e.image})`},children:[(0,f.jsx)(Z,{}),(0,f.jsx)(K,{children:e.name})]}),(0,f.jsxs)(ee,{children:[(0,f.jsxs)(te,{children:[(0,f.jsxs)(ie,{children:[(0,f.jsx)($.YXz,{}),(0,f.jsxs)("span",{children:[e.members.toLocaleString()," members"]})]}),(0,f.jsx)(ie,{children:(0,f.jsxs)("span",{children:[e.posts," posts this week"]})})]}),(0,f.jsx)(re,{children:e.description}),(0,f.jsx)(ae,{children:e.tags.map(((e,t)=>(0,f.jsx)(oe,{children:e},t)))}),(0,f.jsx)(ne,{children:(0,f.jsxs)(se,{children:[(0,f.jsx)("span",{children:"Join Group"}),(0,f.jsx)($.Z0P,{})]})})]})]},e.id))),(0,f.jsxs)(de,{to:"/communities",children:["Explore All Communities",(0,f.jsx)($.Z0P,{})]})]})},ce=(0,o.Ay)(d.P.div)`
  max-width: 1200px;
  margin: 0 auto;
`,pe=o.Ay.h3`
  text-align: center;
  color: var(--on-surface);
  font-size: 1.1rem;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-xl);
`,me=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`,ge=(0,o.Ay)(d.P.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(255, 255, 255, 0.1);
  }
`,he=o.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`,xe=o.Ay.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary);
`,ue=o.Ay.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--on-surface);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--error);
  }
`,fe=o.Ay.div`
  margin-bottom: var(--spacing-md);
  flex: 1;
`,be=(0,o.Ay)(a.N_)`
  display: block;
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--on-background);
  margin-bottom: 6px;
  text-decoration: none;
  
  &:hover {
    color: var(--primary);
    text-decoration: underline;
  }
`,ve=o.Ay.div`
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
`,ye=o.Ay.div`
  color: var(--on-surface);
  font-size: 0.85rem;
  margin-bottom: 6px;
`,we=o.Ay.div`
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
`,je=o.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 0;
  width: 100%;
  background: rgba(88, 86, 214, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(88, 86, 214, 0.2);
  }
`,ke=(0,o.Ay)(a.N_)`
  display: block;
  text-align: center;
  padding: var(--spacing-md);
  margin-top: var(--spacing-xl);
  color: var(--primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,Ae=e=>{let{isVisible:t}=e;const i={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}};return(0,f.jsxs)(ce,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:t?"visible":"hidden",children:[(0,f.jsx)(pe,{children:"People you may know based on your profile and network"}),(0,f.jsx)(me,{children:[{id:1,name:"Emily Wilson",title:"Senior Software Engineer at Netflix",image:"https://randomuser.me/api/portraits/women/33.jpg",mutualConnections:12,location:"San Francisco, CA"},{id:2,name:"Jason Lee",title:"Product Manager at Dropbox",image:"https://randomuser.me/api/portraits/men/52.jpg",mutualConnections:8,location:"New York, NY"},{id:3,name:"Rachel Green",title:"UX Designer at Adobe",image:"https://randomuser.me/api/portraits/women/79.jpg",mutualConnections:15,location:"Austin, TX"},{id:4,name:"Mark Thompson",title:"Data Scientist at IBM",image:"https://randomuser.me/api/portraits/men/45.jpg",mutualConnections:6,location:"Boston, MA"},{id:5,name:"Sophia Martinez",title:"Frontend Developer at Airbnb",image:"https://randomuser.me/api/portraits/women/12.jpg",mutualConnections:11,location:"Seattle, WA"},{id:6,name:"Brian Johnson",title:"Marketing Director at Shopify",image:"https://randomuser.me/api/portraits/men/36.jpg",mutualConnections:9,location:"Chicago, IL"}].map((e=>(0,f.jsxs)(ge,{variants:i,children:[(0,f.jsxs)(he,{children:[(0,f.jsx)(xe,{src:e.image,alt:e.name}),(0,f.jsx)(ue,{"aria-label":"Dismiss suggestion",children:(0,f.jsx)($.QCr,{})})]}),(0,f.jsxs)(fe,{children:[(0,f.jsx)(be,{to:`/profile/${e.id}`,children:e.name}),(0,f.jsxs)(ve,{children:[(0,f.jsx)($._yv,{}),(0,f.jsx)("span",{children:e.title})]}),(0,f.jsx)(ye,{children:e.location}),(0,f.jsxs)(we,{children:[e.mutualConnections," mutual connections"]})]}),(0,f.jsxs)(je,{children:[(0,f.jsx)($.NPy,{}),(0,f.jsx)("span",{children:"Connect"})]})]},e.id)))}),(0,f.jsx)(ke,{to:"/network",children:"View All Suggestions"})]})};var ze=i(6540),Me=i(2528),Se=i(3724),Ce=i(9408),Pe=i(8892),$e=i(1053),De=i(688);function Fe(e){let{count:t=20}=e;const i=(0,r.useRef)(),a=(0,r.useRef)([]),o=(0,r.useRef)(Array.from({length:t},(()=>({position:new Ce.Vector3(150*(Math.random()-.5),150*(Math.random()-.5),150*(Math.random()-.5)),velocity:new Ce.Vector3(.8*(Math.random()-.5),.8*(Math.random()-.5),.8*(Math.random()-.5)).normalize().multiplyScalar(.5+1.5*Math.random()),size:.5+1*Math.random(),active:!1,timeToActivate:50*Math.random(),lifespan:2+3*Math.random()}))));return r.useEffect((()=>{a.current=o.current.map((()=>{const e=new Ce.BufferGeometry,t=new Float32Array(60);for(let i=0;i<20;i++)t[3*i]=0,t[3*i+1]=0,t[3*i+2]=0;e.setAttribute("position",new Ce.BufferAttribute(t,3));return{geometry:e,material:new Ce.LineBasicMaterial({color:new Ce.Color(8965375),transparent:!0,opacity:.8,blending:Ce.AdditiveBlending}),positions:t,active:!1}}))}),[]),(0,ze.F)((e=>{let{clock:t}=e;const i=t.getElapsedTime();o.current.forEach(((e,t)=>{if(!e.active&&i>e.timeToActivate&&(e.active=!0,e.startTime=i,e.position.set(150*(Math.random()-.5),150*(Math.random()-.5),150*(Math.random()-.5)),e.velocity.set(2*(Math.random()-.5),2*(Math.random()-.5),2*(Math.random()-.5)).normalize().multiplyScalar(.5+1.5*Math.random())),e.active){if(i-e.startTime>e.lifespan)return e.active=!1,void(e.timeToActivate=i+10*Math.random());e.position.add(e.velocity);const r=a.current[t],o=r.positions;for(let e=o.length/3-1;e>0;e--)o[3*e]=o[3*(e-1)],o[3*e+1]=o[3*(e-1)+1],o[3*e+2]=o[3*(e-1)+2];o[0]=e.position.x,o[1]=e.position.y,o[2]=e.position.z,r.geometry.attributes.position.needsUpdate=!0}}))})),(0,f.jsx)("group",{ref:i,children:a.current.map(((e,t)=>(0,f.jsx)("line",{geometry:e.geometry,material:e.material},t)))})}function Ee(e){let{count:t=5e3}=e;const i=(0,r.useRef)(),{positions:a,colors:o,sizes:n}=function(e,t){const i=new Float32Array(3*e),r=new Float32Array(3*e),a=new Float32Array(e);for(let o=0;o<e;o++){const e=3*o;i[e]=(Math.random()-.5)*t,i[e+1]=(Math.random()-.5)*t,i[e+2]=(Math.random()-.5)*t;const n=new Ce.Color,s=Math.random();s>.8?n.setHSL(.6,1,.9):s>.6?n.setHSL(.75,1,.9):s>.4?n.setRGB(1,1,1):s>.2?n.setHSL(.5,1,.9):n.setHSL(.15,.8,.8),r[e]=n.r,r[e+1]=n.g,r[e+2]=n.b,a[o]=1.5*Math.random()+.5}return{positions:i,colors:r,sizes:a}}(t,100);return(0,ze.F)((e=>{let{clock:t}=e;const r=t.getElapsedTime();i.current&&(i.current.rotation.x=.02*r,i.current.rotation.y=.01*r);const a=i.current.geometry.attributes.size.array;for(let i=0;i<a.length;i++)a[i]=Math.max(.5,.5*Math.sin(r+100*i)+1);i.current.geometry.attributes.size.needsUpdate=!0})),(0,f.jsxs)(Me.ON,{ref:i,children:[(0,f.jsxs)("bufferGeometry",{children:[(0,f.jsx)("bufferAttribute",{attach:"attributes-position",count:a.length/3,array:a,itemSize:3}),(0,f.jsx)("bufferAttribute",{attach:"attributes-color",count:o.length/3,array:o,itemSize:3}),(0,f.jsx)("bufferAttribute",{attach:"attributes-size",count:n.length,array:n,itemSize:1})]}),(0,f.jsx)(Se.q,{size:1,sizeAttenuation:!0,transparent:!0,alphaTest:.5,depthWrite:!1,vertexColors:!0})]})}function Ne(){const e=(0,r.useRef)();return(0,ze.F)((t=>{let{clock:i}=t;if(e.current){const t=.1*i.getElapsedTime();e.current.material.uniforms.time.value=t}})),(0,f.jsxs)("mesh",{ref:e,position:[0,0,-50],scale:[100,100,1],children:[(0,f.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,f.jsx)("shaderMaterial",{uniforms:{time:{value:0},color1:{value:new Ce.Color("#5856d6")},color2:{value:new Ce.Color("#34aadc")}},vertexShader:"\n          varying vec2 vUv;\n          void main() {\n            vUv = uv;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n          }\n        ",fragmentShader:"\n          uniform float time;\n          uniform vec3 color1;\n          uniform vec3 color2;\n          varying vec2 vUv;\n          \n          // Simplex noise function from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83\n          vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n          \n          float snoise(vec2 v) {\n            const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n                     -0.577350269189626, 0.024390243902439);\n            vec2 i  = floor(v + dot(v, C.yy));\n            vec2 x0 = v -   i + dot(i, C.xx);\n            vec2 i1;\n            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n            vec4 x12 = x0.xyxy + C.xxzz;\n            x12.xy -= i1;\n            i = mod(i, 289.0);\n            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n            + i.x + vec3(0.0, i1.x, 1.0 ));\n            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n              dot(x12.zw,x12.zw)), 0.0);\n            m = m*m;\n            m = m*m;\n            vec3 x = 2.0 * fract(p * C.www) - 1.0;\n            vec3 h = abs(x) - 0.5;\n            vec3 ox = floor(x + 0.5);\n            vec3 a0 = x - ox;\n            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n            vec3 g;\n            g.x  = a0.x  * x0.x  + h.x  * x0.y;\n            g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n            return 130.0 * dot(m, g);\n          }\n          \n          void main() {\n            // Create a slowly moving nebula effect\n            vec2 p = vUv * 4.0;\n            float noise = snoise(p + time * 0.1) * 0.5 + 0.5;\n            noise += snoise(p * 2.0 + time * 0.2) * 0.25 + 0.25;\n            noise += snoise(p * 4.0 + time * 0.3) * 0.125 + 0.125;\n            noise /= 1.875;\n            \n            // Mix colors based on noise\n            vec3 color = mix(color1, color2, noise);\n            \n            // Add some variation in brightness\n            float brightness = snoise(p * 0.5 + time * 0.05) * 0.5 + 0.5;\n            brightness = pow(brightness, 2.0) * 0.4;\n            \n            // Final color with opacity for a subtle effect\n            gl_FragColor = vec4(color, brightness * 0.15);\n          }\n        ",transparent:!0,blending:Ce.AdditiveBlending,depthWrite:!1})]})}function Le(){const{gl:e,scene:t,camera:i,size:a}=(0,ze.D)(),o=(0,r.useRef)();return(0,ze.F)((()=>{o.current&&o.current.render()}),1),(0,f.jsxs)("effectComposer",{ref:o,args:[e],children:[(0,f.jsx)("renderPass",{attachArray:"passes",scene:t,camera:i}),(0,f.jsx)("unrealBloomPass",{attachArray:"passes",args:[new Ce.Vector2(a.width,a.height),1.8,.4,.85]})]})}(0,ze.e)({EffectComposer:Pe.s,RenderPass:$e.A,UnrealBloomPass:De.C});const Re=function(){return(0,f.jsxs)(l.Hl,{camera:{position:[0,0,1],fov:75},children:[(0,f.jsx)("color",{attach:"background",args:["#050510"]}),(0,f.jsx)("fog",{attach:"fog",args:["#050510",50,200]}),(0,f.jsx)("ambientLight",{intensity:.2}),(0,f.jsx)(Ne,{}),(0,f.jsx)(Ee,{count:6e3}),(0,f.jsx)(Fe,{count:15}),(0,f.jsx)(Le,{})]})};i(3414);const Te=()=>(0,f.jsx)(r.Suspense,{fallback:null,children:(0,f.jsx)(p.OH,{preset:"sunset",blur:.8})}),Be=()=>(0,f.jsx)(m.iy,{args:[1,100,200],scale:3.5,children:(0,f.jsx)(g.I,{color:"#5856d6",attach:"material",distort:.6,speed:2.5,roughness:.1,metalness:.2})}),Ie=o.Ay.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: linear-gradient(135deg, #0f0f13 0%, #17171d 100%);
`,Ve=o.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`,Oe=o.Ay.section`
  position: relative;
  display: flex;
  align-items: center;
  height: 680px; /* Slightly increased height */
  background: #000000;
  overflow: visible; /* Changed from hidden to allow for overlap */
  padding-top: 90px; /* Increased padding for better spacing from navbar */
  margin-bottom: 0; /* Remove margin to allow sections to flow together */
  z-index: 1; /* Ensure it's above the SpaceBackground */
  
  &::after {
    content: "";
    position: absolute;
    bottom: -30px; /* Extend beyond the section for seamless transition */
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, rgba(15, 15, 19, 1) 20%, transparent);
    z-index: 2;
  }
  
  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
    min-height: 800px;
    padding-bottom: 80px;
  }
  
  @media (max-width: 576px) {
    min-height: 700px;
  }
`,Ye=o.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--spacing-lg);
  max-width: 550px; /* Slightly increased for better text layout */
  z-index: 2;
  margin-left: calc((100% - 1200px) / 2);
  
  @media (max-width: 1200px) {
    margin-left: var(--spacing-lg);
  }
  
  @media (max-width: 992px) {
    padding: var(--spacing-xl) var(--spacing-lg);
    text-align: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  
  @media (max-width: 576px) {
    padding: var(--spacing-lg);
  }
`,Ue=o.Ay.p`
  color: var(--primary);
  font-weight: var(--font-weight-semibold);
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(88, 86, 214, 0.3));
`,Ge=o.Ay.h1`
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  background: linear-gradient(90deg, #ffffff, #b3b2f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #5856d6, #8f8cf7);
    border-radius: 3px;
  }
  
  @media (max-width: 992px) {
    font-size: 2.5rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`,We=o.Ay.p`
  font-size: 1.2rem;
  color: var(--on-surface);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,Xe=o.Ay.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  z-index: 2;
  
  @media (max-width: 992px) {
    height: 450px;
    max-width: 100%;
    margin-top: 30px;
  }
  
  @media (max-width: 576px) {
    height: 350px;
  }
`,_e=(0,o.Ay)(d.P.div)`
  position: absolute;
  bottom: 40px; /* Increased from 30px for better spacing */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--on-surface);
  font-size: 14px;
  cursor: pointer;
  
  span {
    margin-bottom: 8px;
  }
`,He=o.Ay.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  filter: drop-shadow(0 0 5px rgba(88, 86, 214, 0.5));
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`,Je=o.Ay.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  margin: 0; /* Remove top margin from first section */
  margin-top: ${e=>e.first?"-50px":"60px"}; /* Overlap with hero section if first */
  background-color: ${e=>e.alternate?"rgba(30, 30, 36, 0.7)":"rgba(18, 18, 24, 0.5)"};
  border-radius: 24px; /* More rounded corners for futuristic look */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: ${e=>e.first?"3":"1"}; /* Ensure the first section is above the hero gradient */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(88, 86, 214, 0.3), transparent);
    animation: glowLine 8s infinite linear;
  }
  
  @keyframes glowLine {
    0% {
      left: -50%;
    }
    100% {
      left: 100%;
    }
  }
`,qe=(0,o.Ay)(d.P.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
`,Qe=o.Ay.h2`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #ffffff, #c4c3f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #5856d6, #8f8cf7);
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`,Ze=o.Ay.p`
  font-size: 1.1rem;
  color: var(--on-surface);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,Ke=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`,et=(0,o.Ay)(d.P.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: var(--spacing-xl);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(88, 86, 214, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(88, 86, 214, 0.2);
  }
`,tt=o.Ay.div`
  font-size: 48px;
  margin-bottom: var(--spacing-md);
  color: #5856d6;
  background: linear-gradient(135deg, #5856d6, #8f8cf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(88, 86, 214, 0.3));
`,it=o.Ay.h3`
  font-size: 1.5rem;
  color: var(--on-background);
  margin-bottom: var(--spacing-sm);
`,rt=o.Ay.p`
  color: var(--on-surface);
  line-height: 1.6;
`,at=o.Ay.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  margin-top: 80px; /* Increased spacing */
  margin-bottom: 80px; /* Increased spacing */
  background: linear-gradient(135deg, rgba(30, 30, 36, 0.7) 0%, rgba(18, 18, 24, 0.7) 100%);
  text-align: center;
  border-radius: 24px; /* More rounded corners */
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(88, 86, 214, 0.2), transparent 70%);
    z-index: -1;
  }
`,ot=o.Ay.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: var(--spacing-xl);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(88, 86, 214, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: subtle-pulse 4s infinite alternate;
  
  @keyframes subtle-pulse {
    0% {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(88, 86, 214, 0.1);
    }
    100% {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 25px rgba(88, 86, 214, 0.3);
    }
  }
`,nt=o.Ay.h2`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #ffffff, #b3b2f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`,st=o.Ay.p`
  font-size: 1.1rem;
  color: var(--on-surface);
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,dt=(0,o.Ay)(a.N_)`
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(90deg, #5856d6, #8f8cf7);
  color: white;
  font-weight: var(--font-weight-semibold);
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  border: none;
  box-shadow: 0 5px 20px rgba(88, 86, 214, 0.4);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 7px 25px rgba(88, 86, 214, 0.6);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`,lt=o.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${e=>e.$isLoaded&&!e.$isError?1:0};
  transition: opacity 0.7s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  
  canvas {
    object-fit: contain !important;
    max-width: 100% !important;
    max-height: 100% !important;
    transform: scale(0.9);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(88, 86, 214, 0.1) 0%, transparent 70%);
    filter: blur(20px);
    opacity: ${e=>e.$isLoaded?.7:0};
    transition: opacity 1s ease;
    pointer-events: none;
  }
  
  pointer-events: ${e=>e.$isLoaded?"auto":"none"};
`,ct=()=>{const e=(0,r.useRef)(null),{scrollYProgress:t}=(0,n.L)({target:e}),[i,a]=(0,r.useState)(!1),[o,p]=(0,r.useState)(!1),m=(0,s.G)(t,[0,1],[0,-100]),g=(0,s.G)(t,[0,.5],[1,0]),[b,v]=(0,c.Wx)({triggerOnce:!1,threshold:.2}),[y,w]=(0,c.Wx)({triggerOnce:!1,threshold:.1}),[j,k]=(0,c.Wx)({triggerOnce:!1,threshold:.1}),[A,z]=(0,c.Wx)({triggerOnce:!1,threshold:.1}),[M,S]=(0,c.Wx)({triggerOnce:!1,threshold:.1}),[C,$]=(0,c.Wx)({triggerOnce:!1,threshold:.1}),[D,F]=(0,c.Wx)({triggerOnce:!1,threshold:.3}),E={hidden:{opacity:0,y:50},visible:e=>({opacity:1,y:0,transition:{delay:.2*e,duration:.6,ease:"easeOut"}})};return(0,f.jsxs)(Ie,{ref:e,children:[(0,f.jsx)(Ve,{children:(0,f.jsx)(Re,{})}),(0,f.jsxs)(Oe,{ref:b,children:[(0,f.jsx)(Ye,{children:(0,f.jsxs)(d.P.div,{initial:{opacity:0,y:30},animate:v?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.6},children:[(0,f.jsx)(Ue,{children:"Professional Networking Reimagined"}),(0,f.jsx)(Ge,{children:"Connect, Collaborate, and Grow Your Professional Network"}),(0,f.jsx)(We,{children:"Postr is the modern platform for professionals to connect, share insights, and unlock new career opportunities. Build meaningful relationships that propel your career forward."})]})}),(0,f.jsxs)(Xe,{children:[o&&(0,f.jsxs)(l.Hl,{children:[(0,f.jsx)("ambientLight",{intensity:.5}),(0,f.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),(0,f.jsx)(h.h,{global:!0,rotation:[0,0,0],polar:[-Math.PI/4,Math.PI/4],azimuth:[-Math.PI/4,Math.PI/4],config:{mass:2,tension:400},snap:{mass:4,tension:300},children:(0,f.jsx)(x.n,{speed:2,rotationIntensity:.5,floatIntensity:1,children:(0,f.jsx)(Be,{})})}),(0,f.jsx)(Te,{})]}),(0,f.jsx)(lt,{$isLoaded:i,$isError:o,children:(0,f.jsx)(u.A,{scene:"https://prod.spline.design/w6Bcv27rCr6CQ1w7/scene.splinecode",onLoad:()=>{console.log("Spline model loaded successfully"),a(!0)},onError:e=>{console.error("Error loading Spline model:",e),p(!0)}})})]}),(0,f.jsxs)(_e,{style:{y:m,opacity:g},whileHover:{scale:1.1},whileTap:{scale:.9},children:[(0,f.jsx)("span",{children:"Scroll Down"}),(0,f.jsx)(He,{})]})]}),(0,f.jsxs)(Je,{ref:y,first:!0,children:[(0,f.jsxs)(qe,{initial:{opacity:0,y:20},animate:w?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:[(0,f.jsx)(Qe,{children:"Why Professionals Choose Postr"}),(0,f.jsx)(Ze,{children:"Our platform is designed to enhance your professional journey with features that matter."})]}),(0,f.jsx)(Ke,{children:[{id:1,icon:"\ud83d\udcbc",title:"Career Opportunities",description:"Discover job opportunities tailored to your skills and experience. Connect directly with hiring managers and companies."},{id:2,icon:"\ud83d\udd17",title:"Network Expansion",description:"Build and grow your professional network. Connect with industry leaders, peers, and potential mentors."},{id:3,icon:"\ud83d\udcac",title:"Messaging",description:"Seamless communication with your connections. Share ideas, collaborate on projects, and stay in touch."},{id:4,icon:"\ud83d\udc65",title:"Community Groups",description:"Join communities based on your interests and industry. Share knowledge and stay updated with the latest trends."}].map(((e,t)=>(0,f.jsxs)(et,{custom:t,variants:E,initial:"hidden",animate:w?"visible":"hidden",children:[(0,f.jsx)(tt,{children:e.icon}),(0,f.jsx)(it,{children:e.title}),(0,f.jsx)(rt,{children:e.description})]},e.id)))})]}),(0,f.jsxs)(Je,{ref:j,alternate:!0,children:[(0,f.jsxs)(qe,{initial:{opacity:0,y:20},animate:k?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:[(0,f.jsx)(Qe,{children:"Featured Professionals"}),(0,f.jsx)(Ze,{children:"Connect with industry leaders and experts in your field."})]}),(0,f.jsx)(P,{isVisible:k})]}),(0,f.jsxs)(Je,{ref:A,children:[(0,f.jsxs)(qe,{initial:{opacity:0,y:20},animate:z?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:[(0,f.jsx)(Qe,{children:"Trending Job Opportunities"}),(0,f.jsx)(Ze,{children:"Find your next career move with companies that value your skills."})]}),(0,f.jsx)(H,{isVisible:z})]}),(0,f.jsxs)(Je,{ref:M,alternate:!0,children:[(0,f.jsxs)(qe,{initial:{opacity:0,y:20},animate:S?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:[(0,f.jsx)(Qe,{children:"Explore Communities"}),(0,f.jsx)(Ze,{children:"Join groups of like-minded professionals and expand your knowledge."})]}),(0,f.jsx)(le,{isVisible:S})]}),(0,f.jsxs)(Je,{ref:C,children:[(0,f.jsxs)(qe,{initial:{opacity:0,y:20},animate:$?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:[(0,f.jsx)(Qe,{children:"Grow Your Network"}),(0,f.jsx)(Ze,{children:"Connect with professionals who can help accelerate your career growth."})]}),(0,f.jsx)(Ae,{isVisible:$})]}),(0,f.jsx)(at,{ref:D,children:(0,f.jsx)(d.P.div,{initial:{opacity:0,scale:.9},animate:F?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.7},children:(0,f.jsxs)(ot,{children:[(0,f.jsx)(nt,{children:"Ready to transform your professional journey?"}),(0,f.jsx)(st,{children:"Join thousands of professionals who have already discovered the power of Postr for career growth."}),(0,f.jsx)(dt,{to:"/network",children:"Get Started Now"})]})})})]})}}}]);
//# sourceMappingURL=949.4abe41ec.chunk.js.map