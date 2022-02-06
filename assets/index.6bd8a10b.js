var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var D=(t,a,r)=>a in t?X(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,y=(t,a)=>{for(var r in a||(a={}))$.call(a,r)&&D(t,r,a[r]);if(k)for(var r of k(a))F.call(a,r)&&D(t,r,a[r]);return t},w=(t,a)=>Z(t,ee(a));var B=(t,a)=>{var r={};for(var s in t)$.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&k)for(var s of k(t))a.indexOf(s)<0&&F.call(t,s)&&(r[s]=t[s]);return r};import{r as c,a as V,j as A,c as I,R as z,u as L,I as M,b as te,t as S,d as re,e as se,S as ae,B as ne,f as oe,A as ie,n as le,l as ce,G as de,g as ue,M as me,h as _,i as he,k as pe,m as fe,L as xe,o as ge,p as be,T as ve,q as Ne,s as R,v as ye,w as we}from"./vendor.44a32360.js";const Se=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};Se();const Ie=(t,a={})=>{const[r,s]=c.exports.useState({data:null,error:null,isLoading:!1}),n=c.exports.useCallback(()=>{s(o=>w(y({},o),{isLoading:!0})),V.post(t,a).then(o=>{s({data:o.data,isLoading:!1,error:null})}).catch(o=>{s({data:null,isLoading:!1,error:o})})},[t,a]);return[r,n]},e=A.exports.jsx,i=A.exports.jsxs,N=A.exports.Fragment;function f(u){var d=u,{onClick:t,children:a,outline:r,base:s,className:n,disabled:o,withIcon:l,bordered:m}=d,p=B(d,["onClick","children","outline","base","className","disabled","withIcon","bordered"]);const b=I("px-10 py-2 font-medium border-2 tracking-wider duration-150",{"text-white hover:shadow-lg border-blue-400 bg-blue-400 drop-shadow-md rounded":s,"bg-transparent border-transparent drop-shadow-none text-blue-400 hover:text-blue-600":r,"flex justify-center items-center gap-2":l,"border-blue-400 border-2 rounded text-blue-400 font-bold mt-6 hover:text-blue-500 hover:border-blue-500":m});return e("button",w(y({},p),{onClick:t,className:`${b} ${n}`,disabled:o,children:a}))}function P({className:t}){return e("div",{className:`${t} flex justify-center`,children:e("div",{className:"dot-elastic"})})}function C({isOpen:t,actions:a,title:r,message:s,content:n}){return e("div",{children:i(z,{isOpen:t,htmlOpenClassName:"overflow-y-hidden",contentLabel:"New room created",className:"max-w-2xl mx-auto bg-white rounded-lg shadow-md fixed bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 max-w-[500px]",overlayClassName:"fixed top-0 bottom-0 right-0 left-0 bg-gray-200 bg-gray-200/[.7]",children:[i("div",{className:"px-4",children:[r&&e("h2",{className:"text-2xl font-bold text-gray-700 mt-2",children:r}),s&&e("p",{className:"mt-4 text-lg text-gray-500",children:s})]}),n,e("div",{className:"bg-gray-300 h-px mt-6"}),e("div",{className:"flex justify-end",children:a})]})})}function Ce({isOpen:t,setIsShown:a,roomId:r,loading:s}){const n=L(),o=`${window.location.origin}/plan-that-shit/${r}`;return e(C,{isOpen:t,title:"Room created!",message:"Your room link created, now send it to all of your team members to invite them. Also, you might want to save it for the future.",content:s?e(P,{className:"mt-6 py-2"}):i("div",{className:"relative mt-6",onClick:()=>{S.promise(navigator.clipboard.writeText(o),{pending:"Coping...",success:"Copied to clipboard \u{1F44C}",error:"Rejected \u{1F92F}"})},children:[e("div",{className:"py-2 pl-4 pr-8 bg-blue-50 hover:bg-blue-100 text-lg cursor-read overflow-x-auto whitespace-nowrap",children:o}),e("button",{"aria-label":"copy to clipboard",className:"absolute right-2 top-3",children:e(te,{size:22})})]}),actions:i(N,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"CANCEL"}),i(f,{withIcon:!0,outline:!0,onClick:()=>n(`/${r}`),disabled:s,children:["JOIN",e(M,{size:24})]})]})})}const ke="qwertyuiopasdfghjklzxcvbnm",Re=re(ke,12),Ee=()=>Re().match(/.{1,3}/g).join("-");var x="/plan-that-shit/assets/card.f711e6a7.svg";function Ae(){return e("div",{className:"v-area",children:i("ul",{className:"v-circles",children:[e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})})]})})}function Le({value:t,onChange:a}){return e(se,{mask:"aaa-aaa-aaa-aaa",value:t,onChange:a,placeholder:"xxx-xxx-xxx-xxx",children:r=>e("input",w(y({},r),{id:"roomId",className:"w-80 pt-2 pl-1 pr-4 rounded-sm border-b-2 text-lg focus:border-blue-400"}))})}const Me={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:4e3};function Oe({slides:t}){return e("div",{className:"max-w-[500px]",children:e(ae,w(y({},Me),{children:t.map(({img:a,alt:r,descr:s,title:n,key:o}={})=>i("div",{className:"max-w-full text-center",children:[e("img",{src:a,alt:r,className:"h-[300px] w-auto"}),n&&e("h2",{className:"tracking-wider font-semibold text-xl mt-4",children:n}),e("p",{className:"mt-2 w-2/3 mx-auto",children:s})]},o))}))})}var Te="/plan-that-shit/assets/share_link.ea18b4f5.svg",je="/plan-that-shit/assets/speed.43bbe584.svg",$e="/plan-that-shit/assets/graph.17839b1c.svg",Fe="/plan-that-shit/assets/list.0912f6de.svg",De="/plan-that-shit/assets/open-doors.c6a6c302.svg";const Be=[{img:Te,alt:"link",title:"Link for invitation",descr:'Click "Create new room" button in order to get a link and share with whom you want to invite.'},{img:De,alt:"open doors",title:"No account needed",descr:"It`s ease to start. Just create a new room or click on the link and write down your name. Boom... You`re estimating!"},{img:je,alt:"speed tracker",title:"Speed up your estimation flow",descr:"Everyone have rights to vote, reveal and start estimating. Sync up with your team and maximize estimating speed."},{img:$e,alt:"graph",title:"See the comprehensive data for each estimation",descr:"Look at statistics after revealing the points. See the final score of a story and points of each user."},{img:Fe,alt:"List",title:"Each room is saved as well as its history",descr:"Everything is saved to database and will not be deleted. You can see the history of the room as well just by clicking a button, just not lose your link!"}].map((t,a)=>w(y({},t),{key:a+1}));function Ve(){var m;const t=L(),[a,r]=c.exports.useState(!1),[s,n]=c.exports.useState(""),[o,l]=Ie(`https://planning-poker-1479.herokuapp.com/api/room/${Ee()}`);return i(N,{children:[i("div",{className:"flex mt-16",children:[e(Ce,{isOpen:a,setIsShown:r,roomId:(m=o==null?void 0:o.data)==null?void 0:m.roomId,loading:o.isLoading}),i("div",{className:"pl-12 flex flex-col justify-between min-w-1/3",style:{height:"75vh"},children:[i("div",{children:[i("ul",{children:[i("li",{className:"text-3xl font-medium flex items-center gap-4",children:[e(ne,{color:"#2196F3",size:30}),"Play online anywhere with your team"]}),i("li",{className:"text-3xl font-medium mt-8 flex items-center gap-4",children:[e(oe,{color:"#2196F3",size:30}),"Set up room in Seconds"]}),i("li",{className:"text-3xl font-medium mt-8 flex items-center gap-4",children:[e(ie,{color:"#2196F3",size:30}),"Estimate as an Expert"]})]}),e(f,{base:!0,className:"w-80 mt-8 ml-8 text-xl",onClick:()=>{l(),r(!0)},children:"Create New Room"})]}),i("div",{className:"flex flex-col ml-8 mt-20",children:[e("label",{htmlFor:"roomId",className:"text-sm text-gray-500",children:"Already have a room?"}),e(Le,{value:s,onChange:p=>n(p.target.value)}),i(f,{withIcon:!0,base:!0,className:"w-80 mt-2 text-xl",onClick:()=>t(`/${s}`),children:["Join",e(M,{size:24})]})]})]}),e("div",{className:"flex justify-center items-center w-full",children:e(Oe,{slides:Be})})]}),e(Ae,{})]})}const ze="notification",_e="users",Pe="connection",Je="estimation:done",qe="error",Ue="exception",He="room",Ge="join",Ye="estimate",We="reveal",Ke="start",E={JOIN:Ge,ESTIMATE:Ye,REVEAL:We,START:Ke},O={NOTIFICATION:ze,USERS:_e,ROOM:He,ESTIMATION_DONE:Je,CONNECTION:Pe,ERROR:qe,EXCEPTION:Ue};function J({t,title:a,description:r}){return i("div",{className:`${t.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-white shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`,children:[e("div",{className:"flex-1 w-0 p-4",children:e("div",{className:"flex items-start",children:i("div",{className:"ml-3 flex-1",children:[e("p",{className:"text-lg font-medium text-gray-900",children:a}),e("p",{className:"mt-1 text-sm text-gray-500",children:r})]})})}),e("div",{className:"flex border-l border-gray-200",children:e("button",{onClick:()=>S.dismiss(t.id),className:"w-full rounded-none p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:bg-gray-100 focus:outline-none",children:"Close"})})]})}const Qe="https://planning-poker-1479.herokuapp.com",Xe=(t,a)=>{const[r,s]=c.exports.useState([]),[n,o]=c.exports.useState([]),[l,m]=c.exports.useState({}),[p]=c.exports.useState(le(8)),u=c.exports.useRef(null);c.exports.useEffect(()=>{if(!(!a||!t))return u.current=ce(Qe,{transports:["websocket"],query:{roomId:t,username:a,userId:p}}),u.current.on(O.ROOM,h=>{var g;m(h),o(((g=h.currentEstimation)==null?void 0:g.votes)||[])}),u.current.on(O.NOTIFICATION,h=>{S.custom(g=>e(J,{t:g,title:h.title,description:h.description}))}),u.current.on(O.USERS,s),u.current.emit(E.JOIN,{username:a,userId:p}),S.custom(h=>e(J,{t:h,title:"Connected",description:i(N,{children:["Connected to",e("span",{className:"tracking-wider font-medium p-1",children:t}),". Happy planning \u{1F389}"]})})),()=>{u.current.disconnect()}},[t,a]);const d=h=>{u.current.emit(E.ESTIMATE,{points:h,userId:p})},b=()=>{u.current.emit(E.REVEAL,{votes:n,storyName:l.currentEstimation.storyName})},v=(h="Story name...")=>{u.current.emit(E.START,{storyName:h})};return l?{users:r,votes:n,isVoting:l.estimationInProgress,room:l,performEstimation:d,reveal:b,startVoting:v}:{error:"No room was found with this ID."}};function q({children:t,onClick:a,dashed:r,selected:s}){const n=I("planning-card",{"planning-card_dashed":r,"planning-card_selected":s});return e("button",{onClick:a,className:n,children:t})}const Ze=t=>t>0&&t<100;function et({isOpen:t,setIsOpen:a,onSave:r}){const[s,n]=c.exports.useState("");return e(C,{isOpen:t,title:"Create new planning card",message:"You will be able to to use that card after saving to estimate stories in the future.",content:i("form",{id:"points-form",onSubmit:l=>{l.preventDefault(),r(s),n("")},children:[e("div",{className:"px-4 mt-4 flex items-center justify-center h-44 w-36 rounded bg-blue-400 mr-auto ml-auto shadow-md",children:e("input",{value:s,onChange:l=>n(l.target.value),id:"points",type:"number",max:100,min:0,className:"w-full text-8xl font-medium bg-blue-400 text-white"})}),e("label",{htmlFor:"points",className:"text-gray-400 font-semibold block text-center mt-1",children:"Input integer between 0 and 100"})]}),actions:i(N,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"CANCEL"}),i(f,{type:"submit",form:"points-form",withIcon:!0,outline:!0,disabled:!Ze(s),children:["SAVE",e(de,{size:24})]})]})})}const U=(t,a)=>{const[r,s]=c.exports.useState(()=>{const n=localStorage.getItem(t);return n?JSON.parse(n):a});return c.exports.useEffect(()=>{const n=JSON.stringify(r);localStorage.setItem(t,n)},[r]),[r,s]},T=[0,1,2,3,5,8,13];function tt({isVoting:t,estimate:a}){const[r,s]=U("planning-cards",T),[n,o]=c.exports.useState(!1),[l,m]=c.exports.useState(null),p=d=>{if(t){a(d),m(d);return}S.error("Wait till voting begin")};return c.exports.useEffect(()=>{m(null)},[t]),i("div",{className:"mt-4",children:[e(et,{isOpen:n,setIsOpen:o,onSave:d=>(o(!1),r.includes(Number(d))?S.error(`Card with ${d} already exists`):(s(b=>{const v=[...b,Number(d)];return v.sort((h,g)=>h-g),v}),S.success(`Card with ${d} was added`)))}),e("h2",{className:"text-left font-semibold text-xl text-gray-600",children:t?"Choose your card...":"Wait till voting begins"}),i("div",{className:"flex gap-5 mt-2 flex-wrap",children:[Array.from(r).map(d=>e(q,{selected:d===l,onClick:()=>p(d),children:e("span",{className:"text-white text-4xl font-medium",children:d})},d)),e(q,{onClick:()=>o(!0),dashed:!0,children:e("span",{className:"text-blue-400 text-7xl font-medium pb-3",children:"+"})})]}),T.length!==r.length&&i(f,{onClick:()=>s(T),withIcon:!0,bordered:!0,children:["Refresh cards"," ",e(ue,{size:24})]})]})}function rt({name:t,votes:a,isVoting:r}){const s=a.find(({user:o})=>o===t),n=I("border-4 w-full rounded-md border-blue-400 h-full flex items-center justify-center",{"bg-blue-400":s&&r,"bg-blue-400 text-3xl text-white font-bold":!r});return i("div",{className:"flex flex-col justify-center items-center",children:[i("div",{className:n,children:[r&&s&&e(me,{color:"white",size:80}),r&&!s&&e(P,{}),!r&&s&&s.points,!r&&!s&&"?"]}),e("span",{className:"user-name",children:t})]})}function st({users:t,votes:a,isVoting:r,storyName:s}){return i("div",{className:"app-board",children:[e("div",{className:"app-story-block bg-blue-400 rounded-md text-white font-bold text-3xl flex items-center justify-center p-2",children:e("h2",{children:s||"Start voting"})}),t.map(({name:n,id:o})=>e(rt,{name:n,isVoting:r,votes:a},o))]})}const H=t=>/[`@#$%^&*()+\-=\[\]{};':"\\|<>\/~]/.test(t);function at(t){const[a,r]=c.exports.useState({data:null,error:null,isLoading:!1});return[a,()=>(r(n=>w(y({},n),{isLoading:!0})),V.get(t).then(n=>(r({data:n.data,isLoading:!1,error:null}),n.data)).catch(n=>{r({data:null,isLoading:!1,error:n})}))]}function nt({isOpen:t,setIsOpen:a,setUsername:r}){const[s,n]=U("username"," "),[o,l]=c.exports.useState(""),{roomId:m}=_(),[p,u]=at(`https://planning-poker-1479.herokuapp.com/api/room/${m}?username=${s}`);return e(C,{isOpen:t,title:"What's your name?",message:"This name will be shown for all people in the room that you are trying to join. It is required.",content:i("div",{className:"flex flex-col items-center",children:[e("form",{id:"username-form",onSubmit:v=>{if(v.preventDefault(),!s)return l("Name is required.");if(s.length<3)return l("At least 4 characters.");if(s.length>15)return l("No more than 15 characters allowed.");if(H(s))return l("Special characters are not allowed, use only letters and/or numbers.");u().then(h=>{var g;if(h.username)return l(`${(g=h.username)==null?void 0:g.name} already in room, change your name`);r(s),a(!1)})},children:e("input",{className:`w-80 mt-4 rounded-sm border-b-2 text-lg${o?" border-red-400":" focus:border-blue-400"}`,type:"text",value:s,onChange:v=>n(v.target.value),placeholder:"MyName..."})}),e("span",{className:"text-sm text-red-400",children:p.isLoading?"Looking for similar name inside the room...":o})]}),actions:i(f,{type:"submit",form:"username-form",autoFocus:!0,withIcon:!0,base:!0,className:"w-full rounded-none rounded-b-lg hover:text-gray-200 text-xl",children:["Join",e(M,{size:24})]})})}function ot({isOpen:t,setIsOpen:a,startVoting:r}){const[s,n]=c.exports.useState(""),[o,l]=c.exports.useState("");return e(C,{isOpen:t,title:"Story name",message:"Provide the next story name to vote for.",content:i("div",{className:"flex flex-col items-center py-4 px-16",children:[e("form",{id:"name-form",onSubmit:u=>{if(u.preventDefault(),!s)return l("Name is required.");if(s.length<3)return l("At least 4 characters.");if(s.length>50)return l("No more than 50 characters allowed.");if(H(s))return l("Special characters are not allowed, use only letters and/or numbers.");r(s),n(""),a(!1)},children:e("input",{className:`w-80 mt-4 rounded-sm border-b-2 text-lg${o?" border-red-400":" focus:border-blue-400"}`,type:"text",value:s,onChange:u=>n(u.target.value),placeholder:"Story Name..."})}),e("span",{className:"text-sm text-red-400",children:o})]}),actions:i(N,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"Cancel"}),e(f,{type:"submit",form:"name-form",withIcon:!0,outline:!0,children:"Start Voting"})]})})}function it({reveal:t,startVoting:a,isVoting:r}){const[s,n]=c.exports.useState(!1);return i(N,{children:[e(ot,{isOpen:s,setIsOpen:n,startVoting:a}),r?e(f,{bordered:!0,onClick:t,className:"w-1/2 mx-auto",children:"REVEAL"}):e(f,{bordered:!0,onClick:()=>n(!0),className:"w-1/2 mx-auto",children:"Start Voting"})]})}function lt({isOpen:t,setIsOpen:a,reveal:r}){return e(C,{isOpen:t,title:i("span",{className:"flex items-center gap-2 text-yellow-500",children:[e(he,{size:28})," ","Not everyone voted"]}),message:"Be aware, not everyone voted. Their estimates will not be taken into account and will be represented as '?' - question mark.",actions:i(N,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"Cancel"}),e(f,{outline:!0,onClick:()=>{a(!1),r()},children:"Reveal anyway"})]})})}function ct({votes:t,storyName:a,_id:r}={}){return i("div",{className:"mt-2 p-2 border-2 border-blue-400 rounded",children:[e("h3",{className:"text-lg font-bold",children:a}),t.length?t.map(({user:s,points:n})=>i("p",{className:"px-4 mt-2 grid grid-cols-2",children:[s,":"," ",e("span",{className:"rounded-lg text-white font-bold bg-blue-400 ml-2 py-1 px-2 justify-self-start",children:n})]},s)):e("p",{className:"px-4 mt-2 text-center",children:"No votes for this story"}),e("div",{className:"p-1 mt-1"})]},r)}function dt({room:t}){var o,l;const[a,r]=c.exports.useState(!1),s=I("side-menu",{"side-menu--active":a}),n=I("side-menu__content",{"side-menu__content--active":a});return t?i(N,{children:[e(f,{className:"absolute top-16 right-14 py-1 px-1 text-blue-400 border-blue-400 rounded",onClick:()=>r(!0),children:e(pe,{size:24})}),i("aside",{className:s,children:[e("div",{className:"side-menu__overlay",onClick:()=>r(!1)}),i("div",{className:n,children:[e("h2",{className:"text-center text-blue-400 font-bold text-xl",children:"ROOM info"}),i("p",{className:"text-center my-1 text-sm",children:["(Created on"," ",new Date(t.createdAt).toLocaleDateString(),")"]}),i("p",{className:"mt-4",children:["Room id:"," ",e("span",{className:"bg-gray-100 rounded p-1 font-semibold tracking-wider",children:t.id})]}),e("h2",{className:"text-center text-blue-400 mt-8 font-bold text-xl",children:"History"}),e("div",{children:((o=t.history)==null?void 0:o.length)?(l=t.history)==null?void 0:l.map(m=>e(ct,{_id:m._id,votes:m.votes,storyName:m.storyName})):e("p",{className:"text-center tracking-wider text-lg mt-2",children:"No history was found for this room."})})]})]})]}):null}function ut(){var j;const t=L(),{roomId:a}=_(),[r,s]=c.exports.useState(!0),[n,o]=c.exports.useState(!1),[l,m]=c.exports.useState(""),{room:p,users:u,votes:d,isVoting:b,performEstimation:v,reveal:h,startVoting:g,error:Y}=Xe(a,l);if(Y)return t("/not-found"),null;const W=()=>u.every(({name:K})=>d.some(Q=>Q.user===K))?h():o(!0);return i(N,{children:[i("div",{className:"px-10 py-10 flex flex-col justify-between height-screen",children:[e(st,{storyName:(j=p==null?void 0:p.currentEstimation)==null?void 0:j.storyName,users:u,isVoting:b,votes:d}),e(it,{reveal:W,startVoting:g,isVoting:b}),e(tt,{isVoting:b,estimate:v})]}),e(dt,{room:p}),e(nt,{isOpen:r,setIsOpen:s,setUsername:m}),e(lt,{isOpen:n,setIsOpen:o,reveal:h})]})}var mt="/plan-that-shit/assets/sadface.482226c5.gif";function G(){return i("div",{className:"flex flex-col items-center justify-center",children:[i("div",{children:[e("img",{className:"h-80 ml-auto mr-auto",src:mt,alt:"sad computer"}),i("code",{className:"font-semibold text-gray-700 text-2xl",children:["{ status: 500,",e("br",{}),'message: "Server Error" }']})]}),e("p",{className:"text-gray-500 mt-6",children:"This is a bad request. Please try again later."})]})}const ht=t=>fe(t).format("h:mm:ss A. MMM D");function pt({className:t}){const[a,r]=c.exports.useState(Date.now());return c.exports.useEffect(()=>{const s=setInterval(()=>r(Date.now()),1e3);return()=>clearInterval(s)}),e("span",{className:t,children:ht(new Date(a))})}function ft(){return i("div",{className:"shadow-lg px-12 py-2 flex justify-between items-center bg-white",children:[e(xe,{to:"/",className:"text-4xl text-blue-400 font-bold",children:"Plan That Shit"}),i("div",{className:"flex items-center gap-4",children:[e(pt,{className:"text-gray-400 font-semibold"}),e("button",{children:e(ge,{color:"gray",size:30})})]})]})}function xt(){return i(be,{basename:"/plan-that-shit",children:[e(ve,{position:"bottom-right"}),e(ft,{}),i(Ne,{children:[e(R,{exact:!0,path:"/",element:e(Ve,{})}),e(R,{exact:!0,path:"/:roomId",element:e(ut,{})}),e(R,{path:"/not-found",element:e(G,{})}),e(R,{path:"*",element:e(G,{})})]})]})}z.setAppElement("#root");ye.render(e(we.StrictMode,{children:e(xt,{})}),document.getElementById("root"));