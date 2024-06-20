import{r as f,j as e,D as B,Y as $,y as S,b as _}from"./app-ClWa7v5y.js";import{L}from"./katex.min-BvAtDIMy.js";import{S as y}from"./sweetalert2.all-Vrhamy60.js";function Q({children:a,paketSoal:d,nextQuestion:t,prevQuestion:m,questionIndex:o,questionTotal:c,student:i,changeQuestion:n,questions:x}){const[b,h]=f.useState(!1);return e.jsxs("div",{className:"bg-gray-100",children:[e.jsxs("nav",{className:"bg-white p-3 px-5 flex items-center shadow-md",children:[e.jsx("div",{className:"flex items-center gap-2 mr-2",children:e.jsx("button",{className:"lg:hidden",onClick:p=>h(!0),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})}),e.jsxs("div",{className:"flex items-center basis-[100%]",children:[e.jsxs("div",{className:"basis-[15%] hidden lg:block",children:[e.jsx("h1",{className:"text-purple-400 text-2xl font-bold ",children:"CBT"}),e.jsx("p",{className:"text-xs font-semibold text-gray-600",children:"Computer Based Test"})]}),e.jsx("div",{className:"basis-[85%] flex lg:justify-center justify-end items-center",children:e.jsxs("div",{className:"text-center text-gray-600",children:[e.jsx("p",{className:"text-xs",children:"Nomor Soal"}),e.jsx("h1",{className:"font-bold text-sm",children:o+1})]})})]})]}),e.jsxs("div",{className:"flex",children:[e.jsxs("aside",{className:`bg-white min-h-screen shadow-md fixed top-0 ${b?"left-0":"left-[-250px]"} w-[250px] pt-5 transition-all lg:hidden z-20`,children:[e.jsxs("div",{className:"flex ml-5 items-center justify-between mr-5 mb-5",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-purple-400 text-2xl font-bold ",children:"CBT"}),e.jsx("p",{className:"text-xs font-semibold text-gray-600",children:"Computer Based Test"})]}),e.jsx("button",{onClick:p=>h(!1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),e.jsx(v,{student:i,paketSoal:d,questionTotal:c,changeQuestion:n,questionIndex:o,questions:x})]}),e.jsx("aside",{className:"lg:basis-[15%] bg-white min-h-screen shadow-md pt-5 hidden lg:block",children:e.jsx(v,{student:i,paketSoal:d,questionTotal:c,changeQuestion:n,questionIndex:o,questions:x})}),e.jsx("div",{onClick:p=>h(!1),className:`fixed inset-0 z-10 items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${b?"flex":"hidden"} min-h-screen`}),e.jsxs("div",{className:"lg:basis-[85%] w-full relative",children:[e.jsx("main",{className:"p-5",children:a}),e.jsxs("div",{className:"flex gap-2 fixed bottom-0 w-full bg-white p-3 lg:justify-start justify-center",children:[e.jsxs("button",{type:"button",onClick:m,className:"btn bg-purple-400 hover:bg-purple-800 text-white text-sm",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"})}),"Sebelumnya"]}),e.jsxs("button",{type:"button",onClick:t,className:"btn bg-purple-400 hover:bg-purple-800 text-white text-sm",children:["Selanjutnya",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"})})]})]})]})]})]})}function v({changeQuestion:a,student:d,paketSoal:t,questionTotal:m,questionIndex:o,questions:c}){const i=[];if(m&&c)for(let n=0;n<m;n++)i.push(e.jsx("button",{onClick:x=>a(n),type:"button",className:`p-2 rounded border-[1px] hover:bg-amber-500 hover:text-white font-semibold text-gray-600 transition-all ${o==n?"bg-amber-500 text-white":""} ${c[n].answer?"bg-purple-500 text-white":""}`,children:n+1},n));return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"ml-5 mb-5 mr-5",children:[e.jsxs("div",{className:"border-gray-300 border-[1px] p-2 rounded-lg text-center",children:[e.jsx("h1",{className:"font-bold text-gray-600",children:d.name}),e.jsxs("h1",{className:"text-gray-600 text-xs",children:["Kelas ",d.grade]})]}),e.jsxs("div",{className:"border-gray-300 border-[1px] p-2 rounded-lg text-center mt-5",children:[e.jsx("h1",{className:"font-bold text-gray-600",children:t.title}),e.jsx("hr",{className:"my-2"}),e.jsx("div",{className:"grid grid-cols-4 gap-1",children:i})]})]})})}function I({paketSoal:a,student:d}){const[t,m]=f.useState(a.questions),o=t==null?void 0:t.length,[c,i]=B({questionIndex:0}),[n,x]=f.useState(c.questionIndex);f.useState();const b=()=>{x(s=>{if(s+1==o)return(t==null?void 0:t.filter(u=>u.answer==null)).length>0?(y.fire({title:"Belum Selesai",text:"Masih ada soal yang belum terjawab.",icon:"warning"}),s):(y.fire({title:"Yakin Sudah Selesai?",text:"Setelah selesai jawaban tidak bisa dirubah",icon:"success",showCancelButton:!0,confirmButtonText:"Selesai",cancelButtonText:"Batal"}).then(u=>{u.isConfirmed&&S.get(route("finished-exam",{slug:a.slug}))}),s);const l=s+1;return i({questionIndex:l}),l})},h=()=>{x(s=>{if(s==0)return s;const l=s-1;return i({questionIndex:l}),l})},p=s=>{x(s),i({questionIndex:s})},g=(s,l,r)=>{const u={question_slug:r,answer:s,result:!1};s==l&&(u.result=!0),_.post(route("save_answer",{slug:a.slug}),u).then(w=>{if(t){const j=t.find(N=>N.slug==r),C=t.findIndex(N=>N.slug==r);j&&(j.answer=w.data.answer);const k=t;k[C]=j,m(k)}}).catch(w=>{y.fire({title:"ERROR",text:"Terjadi kesalahan",icon:"error"}),console.log(w)})};return e.jsxs(Q,{changeQuestion:p,paketSoal:a,questions:t,nextQuestion:b,prevQuestion:h,questionIndex:n,questionTotal:o,student:d.session,children:[e.jsx($,{title:`${a.title} | Exam Mode`}),t&&t.length>0?t.map((s,l)=>e.jsxs("div",{className:`mb-[100px] max-w-[500px] mx-auto ${n==l?"":"hidden"}`,children:[e.jsx("div",{className:"mt-5",children:e.jsx(L,{children:s.content})}),e.jsxs("div",{className:"mt-5",children:[s.option_a?e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{onChange:r=>{g("a",s.answer_key,s.slug),r.target.checked},defaultChecked:s.answer?s.answer.answer=="a":!1,type:"radio",name:s.slug,id:`${s.slug}-a`,className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"}),e.jsxs("label",{className:"text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer",htmlFor:`${s.slug}-a`,children:["A. ",s.option_a]}),e.jsx("br",{})]}):null,s.option_b?e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{onChange:r=>{g("b",s.answer_key,s.slug),r.target.checked},defaultChecked:s.answer?s.answer.answer=="b":!1,type:"radio",name:s.slug,id:`${s.slug}-b`,className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"}),e.jsxs("label",{className:"text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer",htmlFor:`${s.slug}-b`,children:["B. ",s.option_b]}),e.jsx("br",{})]}):null,s.option_c?e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{onChange:r=>{g("c",s.answer_key,s.slug),r.target.checked},defaultChecked:s.answer?s.answer.answer=="c":!1,type:"radio",name:s.slug,id:`${s.slug}-c`,className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"}),e.jsxs("label",{className:"text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer",htmlFor:`${s.slug}-c`,children:["C. ",s.option_c]}),e.jsx("br",{})]}):null,s.option_d?e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{onChange:r=>{g("d",s.answer_key,s.slug),r.target.checked},defaultChecked:s.answer?s.answer.answer=="d":!1,type:"radio",name:s.slug,id:`${s.slug}-d`,className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"}),e.jsxs("label",{className:"text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer",htmlFor:`${s.slug}-d`,children:["D. ",s.option_d]}),e.jsx("br",{})]}):null,s.option_e?e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{onChange:r=>{g("e",s.answer_key,s.slug),r.target.checked},defaultChecked:s.answer?s.answer.answer=="e":!1,type:"radio",name:s.slug,id:`${s.slug}-e`,className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"}),e.jsxs("label",{className:"text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] peer-checked/answer:bg-blue-200 cursor-pointer",htmlFor:`${s.slug}-e`,children:["E. ",s.option_e]}),e.jsx("br",{})]}):null]})]},l)):null]})}export{I as default};
