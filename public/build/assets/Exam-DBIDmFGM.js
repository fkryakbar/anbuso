import{r as j,j as e,Y as g}from"./app-DS1yqMKh.js";function u({children:i,paketSoal:a,nextQuestion:s,prevQuestion:c,questionIndex:l,questionTotal:r,student:t,changeQuestion:d}){const[m,o]=j.useState(!1);return e.jsxs("div",{className:"bg-gray-100",children:[e.jsxs("nav",{className:"bg-white p-3 px-5 flex items-center shadow-md",children:[e.jsx("div",{className:"flex items-center gap-2 mr-2",children:e.jsx("button",{className:"lg:hidden",onClick:h=>o(!0),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})}),e.jsxs("div",{className:"flex items-center basis-[100%]",children:[e.jsxs("div",{className:"basis-[15%] hidden lg:block",children:[e.jsx("h1",{className:"text-purple-400 text-2xl font-bold ",children:"CBT"}),e.jsx("p",{className:"text-xs font-semibold text-gray-600",children:"Computer Based Test"})]}),e.jsx("div",{className:"basis-[85%] flex lg:justify-center justify-end items-center",children:e.jsxs("div",{className:"text-center text-gray-600",children:[e.jsx("p",{className:"text-xs",children:"Nomor Soal"}),e.jsx("h1",{className:"font-bold text-sm",children:l+1})]})})]})]}),e.jsxs("div",{className:"flex",children:[e.jsxs("aside",{className:`bg-white min-h-screen shadow-md fixed top-0 ${m?"left-0":"left-[-250px]"} w-[250px] pt-5 transition-all lg:hidden z-20`,children:[e.jsxs("div",{className:"flex ml-5 items-center justify-between mr-5 mb-5",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-purple-400 text-2xl font-bold ",children:"CBT"}),e.jsx("p",{className:"text-xs font-semibold text-gray-600",children:"Computer Based Test"})]}),e.jsx("button",{onClick:h=>o(!1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),e.jsx(p,{student:t,paketSoal:a,questionTotal:r,changeQuestion:d,questionIndex:l})]}),e.jsx("aside",{className:"lg:basis-[15%] bg-white min-h-screen shadow-md pt-5 hidden lg:block",children:e.jsx(p,{student:t,paketSoal:a,questionTotal:r,changeQuestion:d,questionIndex:l})}),e.jsx("div",{onClick:h=>o(!1),className:`fixed inset-0 z-10 items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${m?"flex":"hidden"} min-h-screen`}),e.jsxs("div",{className:"lg:basis-[85%] w-full relative",children:[e.jsx("main",{className:"p-5",children:i}),e.jsxs("div",{className:"flex gap-2 fixed bottom-0 w-full bg-white p-3 lg:justify-start justify-center",children:[e.jsxs("button",{type:"button",onClick:c,className:"btn bg-purple-400 hover:bg-purple-800 text-white text-sm",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"})}),"Sebelumnya"]}),e.jsxs("button",{type:"button",onClick:s,className:"btn bg-purple-400 hover:bg-purple-800 text-white text-sm",children:["Selanjutnya",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"})})]})]})]})]})]})}function p({changeQuestion:i,student:a,paketSoal:s,questionTotal:c,questionIndex:l}){const r=[];if(c)for(let t=0;t<c;t++)r.push(e.jsx("button",{onClick:d=>i(t),type:"button",className:`p-2 rounded border-[1px] hover:bg-purple-500 hover:text-white font-semibold text-gray-600 transition-all ${l==t?"bg-purple-500 text-white":""}`,children:t+1},t));return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"ml-5 mb-5 mr-5",children:[e.jsxs("div",{className:"border-gray-300 border-[1px] p-2 rounded-lg text-center",children:[e.jsx("h1",{className:"font-bold text-gray-600",children:a.name}),e.jsxs("h1",{className:"text-gray-600 text-xs",children:["Kelas ",a.grade]})]}),e.jsxs("div",{className:"border-gray-300 border-[1px] p-2 rounded-lg text-center mt-5",children:[e.jsx("h1",{className:"font-bold text-gray-600",children:s.title}),e.jsx("hr",{className:"my-2"}),e.jsx("div",{className:"grid grid-cols-4 gap-1",children:r})]})]})})}function f({paketSoal:i,student:a}){const s=i.questions,c=s==null?void 0:s.length,[l,r]=j.useState(s==null?void 0:s[0]),[t,d]=j.useState(0),m=()=>{d(n=>{if(n+1==c)return n;const x=n+1;return r(s==null?void 0:s[x]),x})},o=()=>{d(n=>{if(n==0)return n;const x=n-1;return r(s==null?void 0:s[x]),x})},h=n=>{d(n),r(s==null?void 0:s[n])};return e.jsxs(u,{changeQuestion:h,paketSoal:i,nextQuestion:m,prevQuestion:o,questionIndex:t,questionTotal:c,student:a.session,children:[e.jsx(g,{title:`${i.title} | Exam Mode`}),l?e.jsx("div",{children:e.jsx("div",{className:"mt-5",dangerouslySetInnerHTML:{__html:l==null?void 0:l.content}})}):null]})}export{f as default};
