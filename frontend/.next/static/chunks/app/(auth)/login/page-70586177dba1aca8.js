(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{6774:function(e,t,s){Promise.resolve().then(s.bind(s,8032))},7118:function(e,t,s){"use strict";var a=s(7437);t.Z=e=>{let{status:t,className:s,...r}=e;return(0,a.jsx)(a.Fragment,{children:t&&(0,a.jsx)("div",{className:"".concat(s," font-medium text-sm text-green-600"),...r,children:t})})}},8032:function(e,t,s){"use strict";s.r(t);var a=s(7437),r=s(3540),n=s(5830),i=s(4956),o=s(3042),c=s(1396),l=s.n(c),u=s(7930),d=s(2265),m=s(4033),h=s(7118);t.default=()=>{let e=(0,m.useRouter)(),{login:t}=(0,u.a)({middleware:"guest",redirectIfAuthenticated:"/jobs"}),[s,c]=(0,d.useState)(""),[p,f]=(0,d.useState)(""),[g,x]=(0,d.useState)(!1),[w,b]=(0,d.useState)([]),[v,y]=(0,d.useState)(null);(0,d.useEffect)(()=>{var t;(null===(t=e.reset)||void 0===t?void 0:t.length)>0&&0===w.length?y(atob(e.reset)):y(null)});let j=async e=>{e.preventDefault(),t({email:s,password:p,remember:g,setErrors:b,setStatus:y})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{className:"mb-4",status:v}),(0,a.jsxs)("form",{onSubmit:j,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(o.Z,{htmlFor:"email",children:"Email"}),(0,a.jsx)(n.Z,{id:"email",type:"email",value:s,className:"block mt-1 w-full",onChange:e=>c(e.target.value),required:!0,autoFocus:!0}),(0,a.jsx)(i.Z,{messages:w.email,className:"mt-2"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(o.Z,{htmlFor:"password",children:"Password"}),(0,a.jsx)(n.Z,{id:"password",type:"password",value:p,className:"block mt-1 w-full",onChange:e=>f(e.target.value),required:!0,autoComplete:"current-password"}),(0,a.jsx)(i.Z,{messages:w.password,className:"mt-2"})]}),(0,a.jsx)("div",{className:"block mt-4",children:(0,a.jsxs)("label",{htmlFor:"remember_me",className:"inline-flex items-center",children:[(0,a.jsx)("input",{id:"remember_me",type:"checkbox",name:"remember",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:e=>x(e.target.checked)}),(0,a.jsx)("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),(0,a.jsxs)("div",{className:"flex items-center justify-end mt-4",children:[(0,a.jsx)(l(),{href:"/forgot-password",className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Forgot your password?"}),(0,a.jsx)(r.Z,{className:"ml-3",children:"Login"})]})]})]})}},3540:function(e,t,s){"use strict";var a=s(7437);t.Z=e=>{let{type:t="submit",className:s,...r}=e;return(0,a.jsx)("button",{type:t,className:"".concat(s," inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"),...r})}},5830:function(e,t,s){"use strict";var a=s(7437);t.Z=e=>{let{disabled:t=!1,className:s,...r}=e;return(0,a.jsx)("input",{disabled:t,className:"".concat(s," rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"),...r})}},4956:function(e,t,s){"use strict";var a=s(7437);t.Z=e=>{let{messages:t=[],className:s=""}=e;return(0,a.jsx)(a.Fragment,{children:t.length>0&&(0,a.jsx)(a.Fragment,{children:t.map((e,t)=>(0,a.jsx)("p",{className:"".concat(s," text-sm text-red-600"),children:e},t))})})}},3042:function(e,t,s){"use strict";var a=s(7437);t.Z=e=>{let{className:t,children:s,...r}=e;return(0,a.jsx)("label",{className:"".concat(t," block font-medium text-sm text-gray-700"),...r,children:s})}},7930:function(e,t,s){"use strict";s.d(t,{a:function(){return o}});var a=s(6487),r=s(6952),n=s(2265),i=s(4033);let o=function(){let{middleware:e,redirectIfAuthenticated:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=(0,i.useRouter)(),o=(0,i.useParams)(),{data:c,error:l,mutate:u}=(0,a.ZP)("/api/user",()=>r.Z.get("/api/user").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),{data:d,mutate:m}=(0,a.ZP)((null==c?void 0:c.is_company)?"/api/company/me":"/api/worker/me",()=>r.Z.get((null==c?void 0:c.is_company)?"/api/company/me":"/api/worker/me").then(e=>e.data).catch(e=>{if(409!==e.response.status)throw e;s.push("/verify-email")})),h=()=>r.Z.get("/sanctum/csrf-cookie"),p=async e=>{let{setErrors:t,...s}=e;await h(),t([]),r.Z.post("/register",s).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},f=async e=>{let{setErrors:t,setStatus:s,...a}=e;await h(),t([]),s(null),r.Z.post("/login",a).then(()=>u()).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},g=async e=>{let{setErrors:t,setStatus:s,email:a}=e;await h(),t([]),s(null),r.Z.post("/forgot-password",{email:a}).then(e=>s(e.data.status)).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},x=async e=>{let{setErrors:t,setStatus:a,...n}=e;await h(),t([]),a(null),r.Z.post("/reset-password",{token:o.token,...n}).then(e=>s.push("/login?reset="+btoa(e.data.status))).catch(e=>{if(422!==e.response.status)throw e;t(e.response.data.errors)})},w=async()=>{l||await r.Z.post("/logout").then(()=>u()),window.location.pathname="/login"};return(0,n.useEffect)(()=>{"guest"===e&&t&&c&&s.push(t),"/verify-email"===window.location.pathname&&(null==c?void 0:c.email_verified_at)&&s.push(t),"auth"===e&&l&&w()},[c,l]),{user:c,register:p,login:f,forgotPassword:g,resetPassword:x,resendEmailVerification:e=>{let{setStatus:t}=e;r.Z.post("/email/verification-notification").then(e=>t(e.data.status))},logout:w,userDetails:d,mutateUserDetails:m}}},6952:function(e,t,s){"use strict";var a=s(1630),r=s.n(a);let n=r().create({baseURL:"https://api-dev.turizmo.pro",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0,withXSRFToken:!0});t.Z=n},1396:function(e,t,s){e.exports=s(8326)}},function(e){e.O(0,[530,326,971,472,744],function(){return e(e.s=6774)}),_N_E=e.O()}]);