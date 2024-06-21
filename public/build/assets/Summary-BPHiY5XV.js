import{r as f,j as s,Y as N,a as i,y as j}from"./app-tdqPSSlD.js";import{A as k}from"./DashboardLayout-CHGxUdFM.js";import{t as g}from"./helper-C7oM38Di.js";import{S as u}from"./sweetalert2.all-BkyFbtJE.js";import y from"./ScoreDetail-unmTy6NH.js";function D({paketSoal:l,students:t}){const[p,b]=f.useState(null),w=()=>{j.reload({only:["students"]})},v=e=>{u.fire({title:"Apakah anda yakin?",text:"Siswa yang dihapus tidak akan bisa dipulihkan",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Batal",confirmButtonText:"Hapus!"}).then(a=>{a.isConfirmed&&j.delete(route("delete_student",{slug:l.slug,u_id:e}),{onSuccess:()=>{u.fire({title:"Berhasil",text:"Siswa berhasil dihapus",icon:"success"})}})})},r=e=>{document.getElementById("scoreDetail").showModal(),t.forEach(a=>{a.u_id==e&&a.answers&&b(a.answers)})};return s.jsxs(k,{children:[s.jsx(N,{title:"Analisis"}),s.jsx(y,{answers:p}),s.jsx("div",{className:"text-sm breadcrumbs",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsxs(i,{href:route("analisis"),children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Analisis"]})}),s.jsx("li",{children:s.jsxs("a",{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Penskoran"]})})]})}),s.jsxs("div",{className:"p-5 bg-white rounded-md shadow-sm w-full",children:[s.jsxs("div",{className:"flex gap-3 p-3",children:[s.jsx("div",{className:"lg:basis-[4%] basis-[15%]",children:s.jsx("img",{src:"/static/analysis.png",alt:"logo",width:"100%"})}),s.jsxs("div",{className:"block ",children:[s.jsx("p",{className:"lg:text-xl text-lg font-semibold text-slate-600",children:l.title}),s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("p",{className:"text-xs text-slate-400",children:g(l.created_at)})})]})]}),s.jsx("h1",{className:"text-gray-500 font-semibold text-xl mt-4",children:"Analisis"})]}),s.jsx("div",{className:"mt-5 justify-end flex",children:s.jsx("button",{onClick:w,className:"btn btn-sm bg-white",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})})})}),s.jsxs("div",{role:"tablist",className:"tabs tabs-lifted mt-5 lg:tabs-lg",children:[s.jsx(i,{role:"tab",href:route("summary",{slug:l.slug}),className:"tab  tab-active",children:"Penskoran"}),s.jsx(i,{role:"tab",href:route("detail",{slug:l.slug}),className:"tab",children:"Analisis Butir Soal"})]}),s.jsx("div",{className:"flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px] overflow-x-auto",children:t&&t.length>0?t.map((e,a)=>{var n,c,o,d,x,m,h;return s.jsxs("div",{className:"flex gap-3 border-[1px] p-3 rounded-lg hover:bg-slate-50 min-w-[600px] cursor-pointer",children:[s.jsx("div",{className:"lg:basis-[5%] basis-[15%]",children:s.jsx("div",{className:"bg-green-400 w-full h-full rounded-lg flex items-center justify-center font-bold text-white text-lg",children:(n=e.result)==null?void 0:n.score})}),s.jsx("div",{className:"block lg:basis-[95%] basis-[75%]",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{onClick:()=>r(e.u_id),className:"basis-[20%]",children:[s.jsx("p",{className:"text-lg font-semibold text-slate-600",children:e.name}),s.jsxs("p",{className:"text-sm text-slate-600",children:["Kelas ",e.grade]}),s.jsx("div",{className:"flex items-center gap-3 mt-2",children:s.jsx("p",{className:"text-xs text-slate-400",children:g(e.created_at)})})]}),s.jsxs("div",{onClick:()=>r(e.u_id),className:"basis-[65%]",children:[s.jsxs("p",{className:"text-center",children:[(c=e.result)==null?void 0:c.progress," %"]}),s.jsx("progress",{className:`progress ${((o=e.result)==null?void 0:o.progress)==100?"progress-success":"progress-warning "}`,value:(d=e.result)==null?void 0:d.progress,max:100}),s.jsxs("p",{className:"text-center text-xs text-slate-500",children:[(x=e.result)==null?void 0:x.answeredTotal," dari ",(m=e.result)==null?void 0:m.questionTotal," Soal Selesai"]})]}),s.jsxs("div",{onClick:()=>r(e.u_id),className:"basis-[10%]",children:[s.jsx("p",{className:"text-center text-xs text-slate-500",children:"Hasil Akhir"}),s.jsx("p",{className:"text-center text-slate-500 font-bold",children:(h=e.result)==null?void 0:h.score})]}),s.jsx("div",{className:"basis-[5%]",children:s.jsx("button",{className:"text-red-500 btn bg-white shadow-none border-none",onClick:()=>v(e.u_id),children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:s.jsx("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"})})})})]})})]},a)}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"mt-10",children:[s.jsx("img",{src:"/static/empty.svg",className:"w-[300px] mx-auto",alt:""}),s.jsx("p",{className:"text-center text-gray-500 font-semibold",children:"Belum ada Siswa yang menjawab"})]})})})]})}export{D as default};
