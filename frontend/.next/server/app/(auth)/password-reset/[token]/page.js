(()=>{var e={};e.id=92,e.ids=[92],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},4393:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=s(7096),a=s(6132),i=s(7284),o=s.n(i),n=s(2564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let d=["",{children:["(auth)",{children:["password-reset",{children:["[token]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2489)),"/home/rado/personal/turizmo/frontend/src/app/(auth)/password-reset/[token]/page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,7011)),"/home/rado/personal/turizmo/frontend/src/app/(auth)/layout.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,4553)),"/home/rado/personal/turizmo/frontend/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,220)),"/home/rado/personal/turizmo/frontend/src/app/not-found.js"]}],c=["/home/rado/personal/turizmo/frontend/src/app/(auth)/password-reset/[token]/page.js"],u="/(auth)/password-reset/[token]/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/password-reset/[token]/page",pathname:"/password-reset/[token]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3231:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3579,23)),Promise.resolve().then(s.t.bind(s,619,23)),Promise.resolve().then(s.t.bind(s,1459,23)),Promise.resolve().then(s.t.bind(s,3456,23)),Promise.resolve().then(s.t.bind(s,847,23)),Promise.resolve().then(s.t.bind(s,7303,23))},4413:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,7490,23))},151:(e,t,s)=>{Promise.resolve().then(s.bind(s,7591))},5649:()=>{},5303:()=>{},6272:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({status:e,className:t,...s})=>r.jsx(r.Fragment,{children:e&&r.jsx("div",{className:`${t} font-medium text-sm text-green-600`,...s,children:e})})},7591:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(3854),a=s(6726),i=s(3032),o=s(1724),n=s(3341),l=s(2990),d=s(4218),c=s(1018),u=s(6272);let m=()=>{let e=(0,c.useSearchParams)(),{resetPassword:t}=(0,l.a)({middleware:"guest"}),[s,m]=(0,d.useState)(""),[p,h]=(0,d.useState)(""),[x,g]=(0,d.useState)(""),[f,v]=(0,d.useState)([]),[w,C]=(0,d.useState)(null);return(0,d.useEffect)(()=>{m(e.get("email"))},[e.get("email")]),(0,r.jsxs)(r.Fragment,{children:[r.jsx(u.Z,{className:"mb-4",status:w}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t({email:s,password:p,password_confirmation:x,setErrors:v,setStatus:C})},children:[(0,r.jsxs)("div",{children:[r.jsx(n.Z,{htmlFor:"email",children:"Email"}),r.jsx(i.Z,{id:"email",type:"email",value:s,className:"block mt-1 w-full",onChange:e=>m(e.target.value),required:!0,autoFocus:!0}),r.jsx(o.Z,{messages:f.email,className:"mt-2"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[r.jsx(n.Z,{htmlFor:"password",children:"Password"}),r.jsx(i.Z,{id:"password",type:"password",value:p,className:"block mt-1 w-full",onChange:e=>h(e.target.value),required:!0}),r.jsx(o.Z,{messages:f.password,className:"mt-2"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[r.jsx(n.Z,{htmlFor:"passwordConfirmation",children:"Confirm Password"}),r.jsx(i.Z,{id:"passwordConfirmation",type:"password",value:x,className:"block mt-1 w-full",onChange:e=>g(e.target.value),required:!0}),r.jsx(o.Z,{messages:f.password_confirmation,className:"mt-2"})]}),r.jsx("div",{className:"flex items-center justify-end mt-4",children:r.jsx(a.Z,{children:"Reset Password"})})]})]})}},6726:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({type:e="submit",className:t,...s})=>r.jsx("button",{type:e,className:`${t} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`,...s})},3032:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({disabled:e=!1,className:t,...s})=>r.jsx("input",{disabled:e,className:`${t} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,...s})},1724:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({messages:e=[],className:t=""})=>r.jsx(r.Fragment,{children:e.length>0&&r.jsx(r.Fragment,{children:e.map((e,s)=>r.jsx("p",{className:`${t} text-sm text-red-600`,children:e},s))})})},3341:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(3854);let a=({className:e,children:t,...s})=>r.jsx("label",{className:`${e} block font-medium text-sm text-gray-700`,...s,children:t})},2990:(e,t,s)=>{"use strict";s.d(t,{a:()=>d});var r=s(9335),a=s(6575),i=s.n(a);let o=i().create({baseURL:"https://api-dev.turizmo.pro",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});var n=s(4218),l=s(1018);let d=({middleware:e,redirectIfAuthenticated:t}={})=>{let s=(0,l.useRouter)(),a=(0,l.useParams)(),{data:i,error:d,mutate:c}=(0,r.ZP)("/api/user",()=>o.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),u=()=>o.get("/sanctum/csrf-cookie"),m=async({setErrors:e,...t})=>{await u(),e([]),o.post("/register",t).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},p=async({setErrors:e,setStatus:t,...s})=>{await u(),e([]),t(null),o.post("/login",s).then(()=>c()).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},h=async({setErrors:e,setStatus:t,email:s})=>{await u(),e([]),t(null),o.post("/forgot-password",{email:s}).then(e=>t(e.data.status)).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},x=async({setErrors:e,setStatus:t,...r})=>{await u(),e([]),t(null),o.post("/reset-password",{token:a.token,...r}).then(e=>s.push("/login?reset="+btoa(e.data.status))).catch(t=>{if(422!==t.response.status)throw t;e(t.response.data.errors)})},g=async()=>{d||await o.post("/logout").then(()=>c()),window.location.pathname="/login"};return(0,n.useEffect)(()=>{"guest"===e&&t&&i&&s.push(t),"/verify-email"===window.location.pathname&&i?.email_verified_at&&s.push(t),"auth"===e&&d&&g()},[i,d]),{user:i,register:m,login:p,forgotPassword:h,resetPassword:x,resendEmailVerification:({setStatus:e})=>{o.post("/email/verification-notification").then(t=>e(t.data.status))},logout:g}}},2300:(e,t,s)=>{"use strict";let{createProxy:r}=s(5153);e.exports=r("/home/rado/personal/turizmo/frontend/node_modules/next/dist/client/link.js")},4353:(e,t,s)=>{"use strict";e.exports=s(2300)},7011:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>l});var r=s(4656),a=s(4353),i=s.n(a);let o=({logo:e,children:t})=>(0,r.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[r.jsx("div",{children:e}),r.jsx("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:t})]}),n=e=>r.jsx("svg",{viewBox:"0 0 316 316",xmlns:"http://www.w3.org/2000/svg",...e,children:r.jsx("path",{d:"M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"})}),l={title:"Laravel"},d=({children:e})=>r.jsx("div",{children:r.jsx("div",{className:"font-sans text-gray-900 antialiased",children:r.jsx(o,{logo:r.jsx(i(),{href:"/",children:r.jsx(n,{className:"w-20 h-20 fill-current text-gray-500"})}),children:e})})})},2489:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>l});var r=s(5153);let a=(0,r.createProxy)(String.raw`/home/rado/personal/turizmo/frontend/src/app/(auth)/password-reset/[token]/page.js`),{__esModule:i,$$typeof:o}=a,n=a.default,l=n},4553:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(4656);s(833);let a={title:"Laravel"},i=({children:e})=>r.jsx("html",{lang:"en",children:r.jsx("body",{className:"antialiased",children:e})})},220:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(4656);let a=()=>r.jsx("div",{className:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0",children:r.jsx("div",{className:"max-w-xl mx-auto sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex items-center pt-8 sm:justify-start sm:pt-0",children:[r.jsx("div",{className:"px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider",children:"404"}),r.jsx("div",{className:"ml-4 text-lg text-gray-500 uppercase tracking-wider",children:"Not Found"})]})})})},833:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[84,858],()=>s(4393));module.exports=r})();