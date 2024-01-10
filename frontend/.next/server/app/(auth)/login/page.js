(()=>{var e={};e.id=665,e.ids=[665],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7930:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=s(7096),a=s(6132),i=s(7284),n=s.n(i),o=s(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(auth)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2629)),"/home/rado/personal/turizmo/frontend/src/app/(auth)/login/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,1935)),"/home/rado/personal/turizmo/frontend/src/app/(auth)/layout.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,4553)),"/home/rado/personal/turizmo/frontend/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,220)),"/home/rado/personal/turizmo/frontend/src/app/not-found.js"]}],c=["/home/rado/personal/turizmo/frontend/src/app/(auth)/login/page.js"],u="/(auth)/login/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3231:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3579,23)),Promise.resolve().then(s.t.bind(s,619,23)),Promise.resolve().then(s.t.bind(s,1459,23)),Promise.resolve().then(s.t.bind(s,3456,23)),Promise.resolve().then(s.t.bind(s,847,23)),Promise.resolve().then(s.t.bind(s,7303,23))},643:(e,t,s)=>{Promise.resolve().then(s.bind(s,7876))},5649:()=>{},5303:()=>{},5548:(e,t,s)=>{"use strict";e.exports=s(7490)},6272:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({status:e,className:t,...s})=>r.jsx(r.Fragment,{children:e&&r.jsx("div",{className:`${t} font-medium text-sm text-green-600`,...s,children:e})})},7876:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(3854),a=s(6726),i=s(3032),n=s(1724),o=s(3341),l=s(5548),d=s.n(l),c=s(2990),u=s(4218),m=s(1018),p=s(6272);let h=()=>{let e=(0,m.useRouter)(),{login:t}=(0,c.a)({middleware:"guest",redirectIfAuthenticated:"/dashboard"}),[s,l]=(0,u.useState)(""),[h,x]=(0,u.useState)(""),[g,f]=(0,u.useState)(!1),[v,b]=(0,u.useState)([]),[y,j]=(0,u.useState)(null);(0,u.useEffect)(()=>{e.reset?.length>0&&0===v.length?j(atob(e.reset)):j(null)});let w=async e=>{e.preventDefault(),t({email:s,password:h,remember:g,setErrors:b,setStatus:j})};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(p.Z,{className:"mb-4",status:y}),(0,r.jsxs)("form",{onSubmit:w,children:[(0,r.jsxs)("div",{children:[r.jsx(o.Z,{htmlFor:"email",children:"Email"}),r.jsx(i.Z,{id:"email",type:"email",value:s,className:"block mt-1 w-full",onChange:e=>l(e.target.value),required:!0,autoFocus:!0}),r.jsx(n.Z,{messages:v.email,className:"mt-2"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[r.jsx(o.Z,{htmlFor:"password",children:"Password"}),r.jsx(i.Z,{id:"password",type:"password",value:h,className:"block mt-1 w-full",onChange:e=>x(e.target.value),required:!0,autoComplete:"current-password"}),r.jsx(n.Z,{messages:v.password,className:"mt-2"})]}),r.jsx("div",{className:"block mt-4",children:(0,r.jsxs)("label",{htmlFor:"remember_me",className:"inline-flex items-center",children:[r.jsx("input",{id:"remember_me",type:"checkbox",name:"remember",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:e=>f(e.target.checked)}),r.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),(0,r.jsxs)("div",{className:"flex items-center justify-end mt-4",children:[r.jsx(d(),{href:"/forgot-password",className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Forgot your password?"}),r.jsx(a.Z,{className:"ml-3",children:"Login"})]})]})]})}},6726:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({type:e="submit",className:t,...s})=>r.jsx("button",{type:e,className:`${t} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...s})},3032:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({disabled:e=!1,className:t,...s})=>r.jsx("input",{disabled:e,className:`${t} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,...s})},1724:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({messages:e=[],className:t=""})=>r.jsx(r.Fragment,{children:e.length>0&&r.jsx(r.Fragment,{children:e.map((e,s)=>r.jsx("p",{className:`${t} text-sm text-red-600`,children:e},s))})})},3341:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({className:e,children:t,...s})=>r.jsx("label",{className:`${e} block font-medium text-sm text-gray-700`,...s,children:t})},2990:(e,t,s)=>{"use strict";s.d(t,{a:()=>d});var r=s(9335),a=s(6575),i=s.n(a);let n=i().create({baseURL:"http://localhost:8000",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});var o=s(4218),l=s(1018);let d=({middleware:e,redirectIfAuthenticated:t}={})=>{let s=(0,l.useRouter)(),a=(0,l.useParams)(),{data:i,error:d,mutate:c}=(0,r.ZP)("/api/user",()=>n.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),u=()=>n.get("/sanctum/csrf-cookie"),m=async({setErrors:e,...t})=>{await u(),e([]),n.post("/register",t).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},p=async({setErrors:e,setStatus:t,...s})=>{await u(),e([]),t(null),n.post("/login",s).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},h=async({setErrors:e,setStatus:t,email:s})=>{await u(),e([]),t(null),n.post("/forgot-password",{email:s}).then(e=>t(e.data.status)).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},x=async({setErrors:e,setStatus:t,...r})=>{await u(),e([]),t(null),n.post("/reset-password",{token:a.token,...r}).then(e=>s.push("/login?reset="+btoa(e.data.status))).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},g=async()=>{d||await n.post("/logout").then(()=>c()),window.location.pathname="/login"};return(0,o.useEffect)(()=>{"guest"===e&&t&&i&&s.push(t),"/verify-email"===window.location.pathname&&i?.email_verified_at&&s.push(t),"auth"===e&&d&&g()},[i,d]),{user:i,register:m,login:p,forgotPassword:h,resetPassword:x,resendEmailVerification:({setStatus:e})=>{n.post("/email/verification-notification").then(t=>e(t.data.status))},logout:g}}},1935:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(4656);let a={title:"Laravel"},i=({children:e})=>r.jsx("div",{children:r.jsx("div",{className:"font-sans text-gray-900 antialiased",children:r.jsx("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:r.jsx("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:e})})})})},2629:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var r=s(5153);let a=(0,r.createProxy)(String.raw`/home/rado/personal/turizmo/frontend/src/app/(auth)/login/page.js`),{__esModule:i,$$typeof:n}=a,o=a.default,l=o},4553:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(4656);s(833);let a={title:"Laravel"},i=({children:e})=>r.jsx("html",{lang:"en",children:r.jsx("body",{className:"antialiased",children:e})})},220:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(4656);let a=()=>r.jsx("div",{className:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0",children:r.jsx("div",{className:"max-w-xl mx-auto sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex items-center pt-8 sm:justify-start sm:pt-0",children:[r.jsx("div",{className:"px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider",children:"404"}),r.jsx("div",{className:"ml-4 text-lg text-gray-500 uppercase tracking-wider",children:"Not Found"})]})})})},833:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[84,443,490],()=>s(7930));module.exports=r})();