import{j as s,Y as t,a}from"./app-tdqPSSlD.js";import{A as i}from"./DashboardLayout-CHGxUdFM.js";import{t as r}from"./helper-C7oM38Di.js";import"./sweetalert2.all-BkyFbtJE.js";function o({paketSoal:e,validity:l}){return console.log(l),s.jsxs(i,{children:[s.jsx(t,{title:"Analisis"}),s.jsx("div",{className:"text-sm breadcrumbs",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsxs(a,{href:route("analisis"),children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Analisis"]})}),s.jsx("li",{children:s.jsxs("a",{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Analisis Butir Soal"]})})]})}),s.jsxs("div",{className:"p-5 bg-white rounded-md shadow-sm w-full",children:[s.jsxs("div",{className:"flex gap-3 p-3",children:[s.jsx("div",{className:"lg:basis-[4%] basis-[15%]",children:s.jsx("img",{src:"/static/analysis.png",alt:"logo",width:"100%"})}),s.jsxs("div",{className:"block ",children:[s.jsx("p",{className:"lg:text-xl text-lg font-semibold text-slate-600",children:e.title}),s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("p",{className:"text-xs text-slate-400",children:r(e.created_at)})})]})]}),s.jsx("h1",{className:"text-gray-500 font-semibold text-xl mt-4",children:"Analisis"})]}),s.jsxs("div",{role:"tablist",className:"tabs tabs-lifted mt-5 lg:tabs-lg",children:[s.jsx(a,{role:"tab",href:route("summary",{slug:e.slug}),className:"tab",children:"Penskoran"}),s.jsx(a,{role:"tab",href:route("detail",{slug:e.slug}),className:"tab tab-active",children:"Analisis Butir Soal"})]}),s.jsx("div",{className:"flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px]",children:l?s.jsx(s.Fragment,{}):s.jsxs("div",{className:"mt-5",children:[s.jsx("img",{src:"/static/question-mark.svg",alt:"",className:"max-w-[300px] mx-auto"}),s.jsx("h2",{className:"text-center font-semibold text-gray-500",children:"Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis"})]})})]})}export{o as default};