import{q as r,j as e,Y as d,a as t,y as c}from"./app-B065Lfi7.js";import{A as x}from"./DashboardLayout-By0e_gIg.js";import h from"./CreateForm-BTEyfS3u.js";import{S as n}from"./sweetalert2.all-CYZLJGPH.js";import{t as m,c as u}from"./helper-DXYUX4wC.js";import"./TextInput-9FbbTTYm.js";import"./InputLabel-laeDCnnx.js";import"./PrimaryButton-CwMCM91v.js";function N({paketSoal:l}){r().props;const i=s=>{n.fire({title:"Apakah anda yakin?",text:"Paket soal yang dihapus tidak akan bisa dipulihkan",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Batal",confirmButtonText:"Hapus!"}).then(a=>{a.isConfirmed&&c.get(`/dashboard/paket-soal/${s}/delete`,{},{onSuccess:()=>{n.fire({title:"Dihapus",text:"Paket Soal berhasil dihapus",icon:"success"})}})})};return e.jsx(e.Fragment,{children:e.jsxs(x,{children:[e.jsx(d,{title:"Paket Soal"}),e.jsx("div",{className:"text-sm breadcrumbs",children:e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("a",{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Paket Soal"]})})})}),e.jsxs("div",{className:"p-5 bg-white rounded-md shadow-sm flex items-center justify-between w-full",children:[e.jsx("h1",{className:"text-gray-500 font-semibold text-xl",children:"Paket Soal"}),e.jsxs("button",{className:"btn text-white hover:bg-purple-800 bg-purple-500",onClick:()=>document.getElementById("create").showModal(),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),"Buat"]}),e.jsx(h,{})]}),e.jsx("div",{className:"flex flex-col gap-3 mt-5",children:l.length>0?l.map((s,a)=>e.jsxs("div",{className:"flex gap-3 border-[1px] p-3 rounded-lg hover:bg-slate-50 bg-white",children:[e.jsx("div",{className:"lg:basis-[4%] basis-[15%]",children:e.jsx("img",{src:"/static/kuis.png",alt:"logo",width:"100%"})}),e.jsxs("div",{className:"block lg:basis-[96%] basis-[75%]",children:[e.jsx(t,{href:`/dashboard/paket-soal/${s.slug}`,children:e.jsx("p",{className:"lg:text-xl text-lg font-semibold text-slate-600",children:s.title})}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"text-xs text-slate-400",children:m(s.created_at)}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(t,{href:route("exam",{slug:s.slug}),target:"_blank",className:"btn lg:btn-sm btn-xs bg-purple-400 text-white hover:bg-purple-700",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e.jsx("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"})})}),e.jsxs("div",{className:"dropdown dropdown-end",children:[e.jsx("div",{tabIndex:0,role:"button",className:"btn lg:btn-sm btn-xs bg-slate-50",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e.jsx("path",{fillRule:"evenodd",d:"M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",clipRule:"evenodd"})})}),e.jsxs("ul",{tabIndex:0,className:"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",children:[e.jsx("li",{children:e.jsxs("button",{onClick:o=>{u(route("exam",{slug:s.slug}))},children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:[e.jsx("path",{fillRule:"evenodd",d:"M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"})]}),"Copy Link"]})}),e.jsx("li",{children:e.jsxs("button",{onClick:o=>{i(s.slug)},className:"text-red-500",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e.jsx("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"})}),"Hapus"]})})]})]})]})]})]})]},a)):e.jsxs("div",{className:"mt-10",children:[e.jsx("img",{src:"/static/empty.svg",className:"w-[300px] mx-auto",alt:""}),e.jsx("p",{className:"text-center text-gray-500 font-semibold",children:"Belum ada paket soal"})]})})]})})}export{N as default};
