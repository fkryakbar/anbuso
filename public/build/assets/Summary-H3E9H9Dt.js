import{r as o,j as s,Y as k,a as x,y}from"./app-B3kbXsrf.js";import{A as B}from"./DashboardLayout-Cv3rxoJv.js";import{p,t as b}from"./helper-B3VTX5A-.js";import{S as f}from"./sweetalert2.all-DPQUgWUp.js";import _ from"./ScoreDetail-u1p6MDY8.js";import"./InputError-8c6X6kfF.js";import"./InputLabel-Dr8CXnP6.js";import"./TextInput-BdFIYumV.js";function M({paketSoal:t,students:w}){const[r,m]=o.useState(),[v,h]=o.useState(null),N=e=>{f.fire({title:"Apakah anda yakin?",text:"Siswa yang dihapus tidak akan bisa dipulihkan",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Batal",confirmButtonText:"Hapus!"}).then(a=>{a.isConfirmed&&y.delete(route("delete_student",{slug:t.slug,u_id:e}),{onSuccess:()=>{f.fire({title:"Berhasil",text:"Siswa berhasil dihapus",icon:"success"})}})})},d=e=>{document.getElementById("scoreDetail").showModal(),r==null||r.forEach(a=>{a.u_id==e&&a.answers&&h(a.answers)})};return o.useEffect(()=>{m(w)},[]),o.useEffect(()=>{const e=p.subscribe(`Penskoran.${t.slug}`);return e.bind("PenskoranEvent",a=>{m(i=>{if(i){let l=[...i];const n=l.findIndex(c=>c.u_id===a.student.u_id);return n!==-1?l[n]=a.student:l.push(a.student),a.student.answers&&h(a.student.answers),l}return i})}),()=>{e.unbind("PenskoranEvent"),p.unsubscribe(`Penskoran.${t.slug}`)}},[]),s.jsxs(B,{children:[s.jsx(k,{title:"Analisis"}),s.jsx(_,{answers:v,questions:t.questions}),s.jsx("div",{className:"text-sm breadcrumbs",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsxs(x,{href:route("analisis"),children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Analisis"]})}),s.jsx("li",{children:s.jsxs("a",{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Penskoran"]})})]})}),s.jsxs("div",{className:"p-5 bg-white rounded-md shadow-sm w-full",children:[s.jsxs("div",{className:"flex gap-3 p-3",children:[s.jsx("div",{className:"lg:basis-[4%] basis-[15%]",children:s.jsx("img",{src:"/static/analysis.png",alt:"logo",width:"100%"})}),s.jsxs("div",{className:"block ",children:[s.jsx("p",{className:"lg:text-xl text-lg font-semibold text-slate-600",children:t.title}),s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("p",{className:"text-xs text-slate-400",children:b(t.created_at)})})]})]}),s.jsx("h1",{className:"text-gray-500 font-semibold text-xl mt-4",children:"Analisis"})]}),s.jsxs("div",{role:"tablist",className:"tabs tabs-lifted mt-5 lg:tabs-lg",children:[s.jsx(x,{role:"tab",href:route("summary",{slug:t.slug}),className:"tab  tab-active",children:"Penskoran"}),s.jsx(x,{role:"tab",href:route("detail",{slug:t.slug}),className:"tab",children:"Analisis Butir Soal"})]}),s.jsx("div",{className:"flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px] ",children:r&&r.length>0?r.map((e,a)=>{var i,l,n,c,u,g,j;return s.jsxs("div",{className:"flex gap-3 border-[1px] p-3 rounded-lg hover:bg-slate-50 min-w-[600px] cursor-pointer",children:[s.jsx("div",{className:"lg:basis-[5%] basis-[15%]",children:s.jsx("div",{className:"bg-green-400 w-full h-full rounded-lg flex items-center justify-center font-bold text-white text-lg",children:(i=e.result)==null?void 0:i.score})}),s.jsx("div",{className:"block lg:basis-[95%] basis-[75%]",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{onClick:()=>d(e.u_id),className:"basis-[20%]",children:[s.jsx("p",{className:"text-lg font-semibold text-slate-600",children:e.name}),s.jsxs("p",{className:"text-sm text-slate-600",children:["Kelas ",e.grade]}),s.jsx("div",{className:"flex items-center gap-3 mt-2",children:s.jsx("p",{className:"text-xs text-slate-400",children:b(e.created_at)})})]}),s.jsxs("div",{onClick:()=>d(e.u_id),className:"basis-[65%]",children:[s.jsxs("p",{className:"text-center",children:[(l=e.result)==null?void 0:l.progress," %"]}),s.jsx("progress",{className:`progress ${((n=e.result)==null?void 0:n.progress)==100?"progress-success":"progress-warning "}`,value:(c=e.result)==null?void 0:c.progress,max:100}),s.jsxs("p",{className:"text-center text-xs text-slate-500",children:[(u=e.result)==null?void 0:u.answeredTotal," dari ",(g=e.result)==null?void 0:g.questionTotal," Soal Selesai"]})]}),s.jsxs("div",{onClick:()=>d(e.u_id),className:"basis-[10%]",children:[s.jsx("p",{className:"text-center text-xs text-slate-500",children:"Hasil Akhir"}),s.jsx("p",{className:"text-center text-slate-500 font-bold",children:(j=e.result)==null?void 0:j.score})]}),s.jsx("div",{className:"basis-[5%]",children:s.jsx("button",{className:"text-red-500 btn bg-white shadow-none border-none",onClick:()=>N(e.u_id),children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:s.jsx("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"})})})})]})})]},a)}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"mt-10",children:[s.jsx("img",{src:"/static/empty.svg",className:"w-[300px] mx-auto",alt:""}),s.jsx("p",{className:"text-center text-gray-500 font-semibold",children:"Belum ada Siswa yang menjawab"})]})})})]})}export{M as default};