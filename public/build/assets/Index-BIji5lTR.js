import{W as m,j as e,Y as u}from"./app-ClWa7v5y.js";import{I as n}from"./InputError-CFsX40DQ.js";import{G as x}from"./GuestExamLayout-DDqE6qBV.js";function g({paketSoal:a}){const{data:l,setData:r,errors:o,post:d,processing:s}=m({name:"",grade:""}),i=t=>{t.preventDefault(),console.log(l),d(route("student-register",{slug:a.slug}))};return e.jsxs(x,{children:[e.jsx(u,{title:"Exam Mode"}),e.jsxs("div",{className:"p-8 shadow-lg rounded-xl text-center bg-white mx-4 max-w-[400px]",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline text-purple-500 h-6 w-6 ",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),e.jsx("h1",{className:"text-3xl font-bold text-purple-400",children:[a.title]}),e.jsx("h3",{className:"text-1xl font-semibold text-gray-500",children:"Computer Based Test"}),e.jsxs("form",{onSubmit:i,method:"post",autoComplete:"off",autoCorrect:"off",children:[e.jsxs("div",{className:"text-center pt-3",children:[e.jsx("input",{type:"text",placeholder:"Nama",name:"name",className:"input w-full  input-bordered mt-3",onChange:t=>{r("name",t.target.value)},disabled:s}),e.jsx(n,{message:o.name}),e.jsx("input",{type:"text",placeholder:"Kelas",name:"grade",className:"input w-full  input-bordered mt-3",onChange:t=>{r("grade",t.target.value)},disabled:s}),e.jsx(n,{message:o.grade})]}),e.jsx("button",{type:"submit",className:"btn bg-purple-400 border-none hover:bg-purple-700 text-white mt-3",disabled:s,children:"Mulai Kerjakan"})]})]})]})}export{g as default};