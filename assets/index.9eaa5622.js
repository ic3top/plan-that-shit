var W=Object.defineProperty,G=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var B=(t,a,s)=>a in t?W(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,C=(t,a)=>{for(var s in a||(a={}))L.call(a,s)&&B(t,s,a[s]);if(S)for(var s of S(a))F.call(a,s)&&B(t,s,a[s]);return t},I=(t,a)=>G(t,Y(a));var V=(t,a)=>{var s={};for(var r in t)L.call(t,r)&&a.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&S)for(var r of S(t))a.indexOf(r)<0&&F.call(t,r)&&(s[r]=t[r]);return s};import{r as c,a as K,j as E,c as k,R as z,u as P,I as A,b as Q,t as w,d as X,e as Z,B as ee,f as te,A as re,n as se,l as ae,G as ne,g as oe,M as le,h as ie,i as ce,k as de,L as ue,m as me,o as he,T as pe,p as xe,q as O,s as fe,v as ge}from"./vendor.fb0ff79b.js";const be=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};be();const Ne=(t,a={})=>{const[s,r]=c.exports.useState({data:null,error:null,isLoading:!1}),n=c.exports.useCallback(()=>{r(o=>I(C({},o),{isLoading:!0})),K.post(t,a).then(o=>{r({data:o.data,isLoading:!1,error:null})}).catch(o=>{r({data:null,isLoading:!1,error:o})})},[t,a]);return[s,n]},e=E.exports.jsx,l=E.exports.jsxs,g=E.exports.Fragment,f=u=>{var d=u,{onClick:t,children:a,outline:s,base:r,className:n,disabled:o,withIcon:i,bordered:m}=d,p=V(d,["onClick","children","outline","base","className","disabled","withIcon","bordered"]);const N=k("px-10 py-2 font-medium border-2 tracking-wider duration-150",{"text-white hover:shadow-lg border-blue-400 bg-blue-400 drop-shadow-md rounded":r,"bg-transparent border-transparent drop-shadow-none text-blue-400 hover:text-blue-600":s,"flex justify-center items-center gap-2":i,"border-blue-400 border-2 rounded text-blue-400 font-bold mt-6 hover:text-blue-500 hover:border-blue-500":m});return e("button",I(C({},p),{onClick:t,className:N+" "+n,disabled:o,children:a}))};const $=({className:t})=>e("div",{className:t+" flex justify-center",children:e("div",{className:"dot-elastic"})}),y=({isOpen:t,actions:a,title:s,message:r,content:n})=>e("div",{children:l(z,{isOpen:t,contentLabel:"New room created",className:"max-w-2xl mx-auto bg-white rounded-lg shadow-md absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 max-w-[500px]",overlayClassName:"absolute top-0 bottom-0 right-0 left-0 bg-gray-200 bg-gray-200/[.7]",children:[l("div",{className:"px-4",children:[s&&e("h2",{className:"text-2xl font-bold text-gray-700 mt-2",children:s}),r&&e("p",{className:"mt-4 text-lg text-gray-500",children:r})]}),n,e("div",{className:"bg-gray-300 h-px mt-6"}),e("div",{className:"flex justify-end",children:a})]})}),ve=({isOpen:t,setIsShown:a,roomId:s,loading:r})=>{const n=P(),o=()=>{w.promise(navigator.clipboard.writeText(i),{pending:"Coping...",success:"Copied to clipboard \u{1F44C}",error:"Rejected \u{1F92F}"})},i=window.location.origin+"/plan-that-shit/"+s;return e(y,{isOpen:t,title:"Room created!",message:"Your room link created, now send it to all of your team members to invite them. Also, you might want to save it for the future.",content:r?e($,{className:"mt-6 py-2"}):l("div",{className:"relative mt-6",onClick:o,children:[e("div",{className:"py-2 pl-4 pr-8 bg-blue-50 hover:bg-blue-100 text-lg cursor-read overflow-x-auto whitespace-nowrap",children:i}),e("button",{"aria-label":"copy to clipboard",className:"absolute right-2 top-3",children:e(Q,{size:22})})]}),actions:l(g,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"CANCEL"}),l(f,{withIcon:!0,outline:!0,onClick:()=>n("/"+s),disabled:r,children:["JOIN ",e(A,{size:24})]})]})})},we="qwertyuiopasdfghjklzxcvbnm",ye=X(we,12),Se=()=>ye().match(/.{1,3}/g).join("-");var x="/plan-that-shit/assets/card.f711e6a7.svg";const Ce=()=>e("div",{className:"v-area",children:l("ul",{className:"v-circles",children:[e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})}),e("li",{children:e("img",{src:x,alt:"card"})})]})}),Ie=({value:t,onChange:a})=>e(Z,{mask:"aaa-aaa-aaa-aaa",value:t,onChange:a,placeholder:"xxx-xxx-xxx-xxx",children:s=>e("input",I(C({},s),{id:"roomId",className:"w-80 pt-2 pl-1 pr-4 rounded-sm border-b-2 text-lg focus:border-blue-400"}))}),Re=()=>{var m;const t=P(),[a,s]=c.exports.useState(!1),[r,n]=c.exports.useState(""),[o,i]=Ne(`https://planning-poker-1479.herokuapp.com/api/room/${Se()}`);return l(g,{children:[l("div",{children:[e(ve,{isOpen:a,setIsShown:s,roomId:(m=o==null?void 0:o.data)==null?void 0:m.roomId,loading:o.isLoading}),l("div",{className:"mt-16 pl-12 flex flex-col justify-between",style:{height:"75vh"},children:[l("div",{children:[l("ul",{children:[l("li",{className:"text-3xl font-medium flex items-center gap-4",children:[e(ee,{color:"#2196F3",size:30}),"Play online anywhere with your team"]}),l("li",{className:"text-3xl font-medium mt-8 flex items-center gap-4",children:[e(te,{color:"#2196F3",size:30}),"Set up room in Seconds"]}),l("li",{className:"text-3xl font-medium mt-8 flex items-center gap-4",children:[e(re,{color:"#2196F3",size:30}),"Estimate as an Expert"]})]}),e(f,{base:!0,className:"w-80 mt-8 ml-8 text-xl",onClick:()=>{i(),s(!0)},children:"Create New Room"})]}),l("div",{className:"flex flex-col ml-8 mt-20",children:[e("label",{htmlFor:"roomId",className:"text-sm text-gray-500",children:"Already have a room?"}),e(Ie,{value:r,onChange:p=>n(p.target.value)}),l(f,{withIcon:!0,base:!0,className:"w-80 mt-2 text-xl",onClick:()=>t(`/${r}`),children:["Join ",e(A,{size:24})]})]})]})]}),e(Ce,{})]})},Ee="notification",ke="users",Ae="connection",Oe="estimation:done",Me="error",Te="exception",je="room",Le="join",Fe="estimate",Be="reveal",Ve="start",R={JOIN:Le,ESTIMATE:Fe,REVEAL:Be,START:Ve},M={NOTIFICATION:Ee,USERS:ke,ROOM:je,ESTIMATION_DONE:Oe,CONNECTION:Ae,ERROR:Me,EXCEPTION:Te},q=({t,title:a,description:s})=>l("div",{className:`${t.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-white shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`,children:[e("div",{className:"flex-1 w-0 p-4",children:e("div",{className:"flex items-start",children:l("div",{className:"ml-3 flex-1",children:[e("p",{className:"text-lg font-medium text-gray-900",children:a}),e("p",{className:"mt-1 text-sm text-gray-500",children:s})]})})}),e("div",{className:"flex border-l border-gray-200",children:e("button",{onClick:()=>w.dismiss(t.id),className:"w-full rounded-none p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:bg-gray-100 focus:outline-none",children:"Close"})})]}),ze="https://planning-poker-1479.herokuapp.com",Pe=(t,a)=>{const[s,r]=c.exports.useState([]),[n,o]=c.exports.useState([]),[i,m]=c.exports.useState({}),[p]=c.exports.useState(se(8)),u=c.exports.useRef(null);c.exports.useEffect(()=>{if(!(!a||!t))return u.current=ae(ze,{transports:["websocket"],query:{roomId:t,username:a,userId:p}}),u.current.on(M.ROOM,h=>{var b;m(h),o(((b=h.currentEstimation)==null?void 0:b.votes)||[]),console.log({useRoom:h})}),u.current.on(M.NOTIFICATION,h=>{w.custom(b=>e(q,{t:b,title:h.title,description:h.description}))}),u.current.on(M.USERS,r),u.current.emit(R.JOIN,{username:a,userId:p}),w.custom(h=>e(q,{t:h,title:"Connected",description:l(g,{children:["Connected to",e("span",{className:"tracking-wider font-medium p-1",children:t}),". Happy planning \u{1F389}"]})})),()=>{u.current.disconnect()}},[t,a]);const d=h=>{u.current.emit(R.ESTIMATE,{points:h,userId:p})},N=()=>{console.log({votes:n}),u.current.emit(R.REVEAL,{votes:n,storyName:u.current.storyName})},v=(h="Story name...")=>{u.current.emit(R.START,{storyName:h}),u.current.storyName=h};return{users:s,votes:n,isVoting:i.estimationInProgress,room:i,performEstimation:d,reveal:N,startVoting:v}};const D=({children:t,onClick:a,dashed:s,selected:r})=>{const n=k("planning-card",{"planning-card_dashed":s,"planning-card_selected":r});return e("button",{onClick:a,className:n,children:t})},$e=t=>t>0&&t<100,qe=({isOpen:t,setIsOpen:a,onSave:s})=>{const[r,n]=c.exports.useState("");return e(y,{isOpen:t,title:"Create new planning card",message:"You will be able to to use that card after saving to estimate stories in the future.",content:l(g,{children:[e("div",{className:"px-4 mt-4 flex items-center justify-center h-44 w-36 rounded bg-blue-400 mr-auto ml-auto shadow-md",children:e("input",{value:r,onChange:o=>n(o.target.value),id:"points",type:"number",max:100,min:0,className:"w-full text-8xl font-medium bg-blue-400 text-white"})}),e("label",{htmlFor:"points",className:"text-gray-400 font-semibold block text-center mt-1",children:"Input integer between 0 and 100"})]}),actions:l(g,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"CANCEL"}),l(f,{withIcon:!0,outline:!0,disabled:!$e(r),onClick:()=>s(r),children:["SAVE ",e(ne,{size:24})]})]})})},U=(t,a)=>{const[s,r]=c.exports.useState(()=>{const n=localStorage.getItem(t);return n?JSON.parse(n):a});return c.exports.useEffect(()=>{const n=JSON.stringify(s);localStorage.setItem(t,n)},[s]),[s,r]},T=[0,1,2,3,5,8,13],De=({isVoting:t,estimate:a})=>{const[s,r]=U("planning-cards",T),[n,o]=c.exports.useState(!1),[i,m]=c.exports.useState(null),p=d=>{if(t){a(d),m(d);return}w.error("Wait till voting begin")};return c.exports.useEffect(()=>{m(null)},[t]),l("div",{className:"mt-4",children:[e(qe,{isOpen:n,setIsOpen:o,onSave:d=>{if(o(!1),s.includes(Number(d)))return w.error(`Card with ${d} already exists`);r(N=>{const v=[...N,Number(d)];return v.sort((h,b)=>h-b),v}),w.success(`Card with ${d} was added`)}}),e("h2",{className:"text-left font-semibold text-xl text-gray-600",children:t?"Choose your card...":"Wait till voting begins"}),l("div",{className:"flex gap-5 mt-2 flex-wrap",children:[Array.from(s).map(d=>e(D,{selected:d===i,onClick:()=>p(d),children:e("span",{className:"text-white text-4xl font-medium",children:d})},d)),e(D,{onClick:()=>o(!0),dashed:!0,children:e("span",{className:"text-blue-400 text-7xl font-medium pb-3",children:"+"})})]}),T.length!==s.length&&l(f,{onClick:()=>r(T),withIcon:!0,bordered:!0,children:["Refresh cards ",e(oe,{size:24})]})]})};const Ue=({name:t,votes:a,isVoting:s})=>{const r=a.find(({user:o})=>o===t);console.log(r);const n=k("border-4 w-full rounded-md border-blue-400 h-full flex items-center justify-center",{"bg-blue-400":r&&s,"bg-blue-400 text-3xl text-white font-bold":!s});return l("div",{className:"flex flex-col justify-center items-center",children:[l("div",{className:n,children:[s&&r&&e(le,{color:"white",size:80}),s&&!r&&e($,{}),!s&&r&&r.points,!s&&!r&&"?"]}),e("span",{className:"user-name",children:t})]})},Je=({users:t,votes:a,isVoting:s,storyName:r})=>e(g,{children:l("div",{className:"app-board",children:[e("div",{className:"app-story-block bg-blue-400 rounded-md text-white font-bold text-3xl flex items-center justify-center p-2",children:e("h2",{children:r||"Start voting"})}),t.map(({name:n,id:o})=>e(Ue,{name:n,isVoting:s,votes:a},o))]})}),J=t=>/[`@#$%^&*()+\-=\[\]{};':"\\|<>\/~]/.test(t),_e=({isOpen:t,setIsOpen:a,setUsername:s})=>{const[r,n]=U("username"," "),[o,i]=c.exports.useState(""),m=()=>{if(!r)return i("Name is required.");if(r.length<3)return i("At least 4 characters.");if(r.length>15)return i("No more than 15 characters allowed.");if(J(r))return i("Special characters are not allowed, use only letters and/or numbers.");s(r),a(!1)};return e(y,{isOpen:t,title:"What's your name?",message:"This name will be shown for all people in the room that you are trying to join. It is required.",content:l("div",{className:"flex flex-col items-center",children:[e("input",{className:"w-80 mt-4 rounded-sm border-b-2 text-lg"+(o?" border-red-400":" focus:border-blue-400"),type:"text",value:r,onChange:u=>n(u.target.value),placeholder:"MyName..."}),e("span",{className:"text-sm text-red-400",children:o})]}),actions:l(f,{autoFocus:!0,withIcon:!0,base:!0,className:"w-full rounded-none rounded-b-lg hover:text-gray-200 text-xl",onClick:m,children:["Join ",e(A,{size:24})]})})},He=({isOpen:t,setIsOpen:a,startVoting:s})=>{const[r,n]=c.exports.useState(""),[o,i]=c.exports.useState(""),m=o?" border-red-400":" focus:border-blue-400",p=()=>{if(!r)return i("Name is required.");if(r.length<3)return i("At least 4 characters.");if(r.length>50)return i("No more than 50 characters allowed.");if(J(r))return i("Special characters are not allowed, use only letters and/or numbers.");s(r),a(!1)};return e(y,{isOpen:t,title:"Story name",message:"Provide the next story name to vote for.",content:l("div",{className:"flex flex-col items-center py-4 px-16",children:[e("input",{className:"w-80 mt-4 rounded-sm border-b-2 text-lg"+m,type:"text",value:r,onChange:u=>n(u.target.value),placeholder:"Story Name..."}),e("span",{className:"text-sm text-red-400",children:o})]}),actions:l(g,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"Cancel"}),e(f,{withIcon:!0,outline:!0,onClick:p,children:"Start Voting"})]})})},We=({reveal:t,startVoting:a,isVoting:s})=>{const[r,n]=c.exports.useState(!1);return l(g,{children:[e(He,{isOpen:r,setIsOpen:n,startVoting:a}),s?e(f,{bordered:!0,onClick:t,className:"w-1/2 mx-auto",children:"REVEAL"}):e(f,{bordered:!0,onClick:()=>n(!0),className:"w-1/2 mx-auto",children:"Start Voting"})]})},Ge=({isOpen:t,setIsOpen:a,reveal:s})=>e(y,{isOpen:t,title:l("span",{className:"flex gap-4 text-yellow-500",children:[e(ie,{size:28})," Awareness"]}),message:"Be aware, not everyone voted. Their estimates will not be taken into account and will be represented as '?' - question mark.",actions:l(g,{children:[e(f,{outline:!0,onClick:()=>a(!1),children:"Cancel"}),e(f,{outline:!0,onClick:()=>{a(!1),s()},children:"Reveal anyway"})]})}),Ye=()=>{var j;const{roomId:t}=ce(),[a,s]=c.exports.useState(!0),[r,n]=c.exports.useState(!1),[o,i]=c.exports.useState(""),{room:m,users:p,votes:u,isVoting:d,performEstimation:N,reveal:v,startVoting:h}=Pe(t,o),b=()=>{if(!p.every(({name:_})=>u.some(H=>H.user===_)))return n(!0);v()};return l("div",{className:"px-10 py-10 flex flex-col justify-between height-screen",children:[e(Je,{storyName:(j=m==null?void 0:m.currentEstimation)==null?void 0:j.storyName,users:p,isVoting:d,votes:u}),e(We,{reveal:b,startVoting:h,isVoting:d}),e(De,{isVoting:d,estimate:N}),e(_e,{isOpen:a,setIsOpen:s,setUsername:i}),e(Ge,{isOpen:r,setIsOpen:n,reveal:v})]})};var Ke="/plan-that-shit/assets/sadface.482226c5.gif";const Qe=()=>l("div",{className:"flex flex-col items-center justify-center",children:[l("div",{children:[e("img",{className:"h-80 ml-auto mr-auto",src:Ke,alt:"sad computer"}),l("code",{className:"font-semibold text-gray-700 text-2xl",children:["{ status: 500,",e("br",{}),'message: "Server Error" }']})]}),e("p",{className:"text-gray-500 mt-6",children:"This is a bad request. Please try again later."})]}),Xe=t=>de(t).format("h:mm:ss A. MMM D"),Ze=({className:t})=>{const[a,s]=c.exports.useState(Date.now());return c.exports.useEffect(()=>{const r=setInterval(()=>s(Date.now()),1e3);return()=>clearInterval(r)}),e("span",{className:t,children:Xe(new Date(a))})},et=()=>l("div",{className:"shadow-lg px-12 py-2 flex justify-between items-center bg-white",children:[e(ue,{to:"/",className:"text-4xl text-blue-400 font-bold",children:"Plan That Shit"}),l("div",{className:"flex items-center gap-4",children:[e(Ze,{className:"text-gray-400 font-semibold"}),e("button",{children:e(me,{color:"gray",size:30})})]})]});function tt(){return l(he,{basename:"/plan-that-shit",children:[e(pe,{position:"bottom-right"}),e(et,{}),l(xe,{children:[e(O,{exact:!0,path:"/",element:e(Re,{})}),e(O,{exact:!0,path:"/:roomId",element:e(Ye,{})}),e(O,{path:"*",element:e(Qe,{})})]})]})}z.setAppElement("#root");fe.render(e(ge.StrictMode,{children:e(tt,{})}),document.getElementById("root"));
