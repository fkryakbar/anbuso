import{W as i,j as e,Y as m,a as x}from"./app-BpQuL6I1.js";import{I as l}from"./InputError-CYykKwmp.js";import{G as u}from"./GuestExamLayout-BD9lVESq.js";function j({paketSoal:s}){const{data:c,setData:r,errors:n,post:o,processing:a}=i({name:"",grade:""}),d=t=>{t.preventDefault(),o(route("student-register",{slug:s.slug}))};return e.jsxs(u,{children:[e.jsx(m,{title:"Exam Mode"}),e.jsxs("div",{className:"p-8 shadow-lg rounded-xl text-center bg-white mx-4 max-w-[400px]",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline text-purple-500 h-6 w-6 ",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),e.jsx("h1",{className:"text-3xl font-bold text-purple-400",children:[s.title]}),e.jsx("h3",{className:"text-1xl font-semibold text-gray-500",children:"Computer Based Test"}),s.accept_responses?e.jsxs("form",{onSubmit:d,method:"post",autoComplete:"off",autoCorrect:"off",children:[e.jsxs("div",{className:"text-center pt-3",children:[e.jsx("input",{type:"text",placeholder:"Nama",name:"name",className:"input w-full  input-bordered mt-3",onChange:t=>{r("name",t.target.value)},disabled:a}),e.jsx(l,{message:n.name}),e.jsx("input",{type:"text",placeholder:"Kelas",name:"grade",className:"input w-full  input-bordered mt-3",onChange:t=>{r("grade",t.target.value)},disabled:a}),e.jsx(l,{message:n.grade})]}),e.jsx("button",{type:"submit",className:"btn bg-purple-400 border-none hover:bg-purple-700 text-white mt-3",disabled:a,children:"Mulai Kerjakan"})]}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"/static/access-denied.svg",alt:"access-denied",className:"w-full mx-auto"}),e.jsx("p",{className:"text-center font-semibold text-gray-600",children:"Test Telah ditutup"}),e.jsx(x,{href:"/",className:"btn btn-sm bg-red-400 hover:bg-red-700 text-white",children:"Keluar"})]})]})]})}export{j as default};