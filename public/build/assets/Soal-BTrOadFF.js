import{j as e,Y as i,a as t,y as d}from"./app-B065Lfi7.js";import{A as c}from"./DashboardLayout-By0e_gIg.js";import{t as r,c as m}from"./helper-DXYUX4wC.js";import x from"./Settings-D_sUKk-O.js";import h from"./CreateSoalForm-SSD_M1Yx.js";import{S as n}from"./sweetalert2.all-CYZLJGPH.js";import"./TextInput-9FbbTTYm.js";import"./InputLabel-laeDCnnx.js";import"./PrimaryButton-CwMCM91v.js";import"./RichEditor-DIeatQqp.js";function _({paketSoal:l}){const o=s=>{n.fire({title:"Apakah anda yakin?",text:"Soal yang dihapus tidak akan bisa dipulihkan",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Batal",confirmButtonText:"Hapus!"}).then(a=>{a.isConfirmed&&d.get(route("delete-question",{paket_soal_slug:l.slug,slug:s}),{},{onSuccess:()=>{n.fire({title:"Dihapus",text:"Soal berhasil dihapus",icon:"success"})}})})};return e.jsxs(c,{children:[e.jsx(i,{title:l.title}),e.jsx("div",{className:"text-sm breadcrumbs",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(t,{href:"/dashboard/paket-soal",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Paket Soal"]})}),e.jsxs("li",{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Soal"]})]})}),e.jsxs("div",{className:"bg-white p-3 rounded-md shadow mt-3 w-full",children:[e.jsxs("div",{className:"flex gap-3 p-3",children:[e.jsx("div",{className:"lg:basis-[4%] basis-[15%]",children:e.jsx("img",{src:"/static/kuis.png",alt:"logo",width:"100%"})}),e.jsxs("div",{className:"block lg:basis-[96%] basis-[75%]",children:[e.jsx("div",{children:e.jsx("p",{className:"text-lg font-semibold text-slate-600",children:l.title})}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("p",{className:"text-xs text-slate-400",children:r(l.created_at)})})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-700  inline m-2",children:"Soal"}),e.jsxs("div",{className:"flex gap-2 flex-wrap justify-end",children:[e.jsxs("button",{onClick:()=>document.getElementById("settings").showModal(),className:"btn rounded-md btn-sm text-slate-600 font-weight-bol ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e.jsx("path",{fillRule:"evenodd",d:"M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",clipRule:"evenodd"})}),"Pengaturan"]}),e.jsx(x,{paketSoal:l}),e.jsxs("button",{onClick:()=>{document.getElementById("create-soal-form").showModal()},className:"btn rounded-md btn-sm  text-white font-weight-bol bg-green-400 hover:bg-green-600",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"})}),"Buat Soal"]}),e.jsx(h,{paketSoal:l}),e.jsxs("button",{onClick:s=>{m(route("exam",{slug:l.slug}))},className:"btn btn-sm text-slate-500",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:[e.jsx("path",{fillRule:"evenodd",d:"M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"})]}),"Copy Link"]}),e.jsxs(t,{href:route("exam",{slug:l.slug}),target:"_blank",className:"btn btn-sm bg-purple-400 text-white hover:bg-purple-700",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e.jsx("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"})}),"Buka"]})]})]})]}),e.jsx("div",{className:"mx-auto max-w-[700px]",children:l.questions&&l.questions.length>0?l.questions.map((s,a)=>e.jsxs("div",{className:"mt-3 bg-white p-5 shadow rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-600",children:["Soal Nomor ",a+1]}),e.jsx("span",{className:"text-xs text-gray-600",children:r(s.created_at)})]}),e.jsxs("div",{className:"dropdown dropdown-end",children:[e.jsx("label",{tabIndex:0,className:"btn btn-sm bg-green-400 border-none hover:bg-green-700 m-1 text-white",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"})})}),e.jsxs("ul",{tabIndex:0,className:"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52",children:[e.jsx("li",{children:e.jsxs(t,{href:route("edit-soal-page",{paket_soal_slug:l.slug,slug:s.slug}),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})}),"Edit Soal"]})}),e.jsx("li",{children:e.jsxs("button",{onClick:u=>{o(s.slug)},className:"text-red-500",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:e.jsx("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"})}),"Hapus Soal"]})})]})]})]}),e.jsx("div",{className:"mt-5",dangerouslySetInnerHTML:{__html:s.content}}),e.jsxs("div",{className:"mt-3",children:[s.option_a&&e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{type:"radio",className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300",defaultValue:"a"}),e.jsxs("label",{className:`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] ${s.answer_key=="a"?"bg-green-400":""}`,htmlFor:"a",children:["A. ",s.option_a]}),e.jsx("br",{})]}),s.option_b&&e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{type:"radio",className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300",defaultValue:"b"}),e.jsxs("label",{className:`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] ${s.answer_key=="b"?"bg-green-400":""}`,htmlFor:"b",children:["B. ",s.option_b]}),e.jsx("br",{})]}),s.option_c&&e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{type:"radio",className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300",defaultValue:"c"}),e.jsxs("label",{className:`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] ${s.answer_key=="c"?"bg-green-400":""}`,htmlFor:"c",children:["C. ",s.option_c]}),e.jsx("br",{})]}),s.option_d&&e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{type:"radio",className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300",defaultValue:"d"}),e.jsxs("label",{className:`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] ${s.answer_key=="d"?"bg-green-400":""}`,htmlFor:"d",children:["D. ",s.option_d]}),e.jsx("br",{})]}),s.option_e&&e.jsxs("div",{className:"flex mb-4",children:[e.jsx("input",{type:"radio",className:"peer/answer hidden h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300",defaultValue:"e"}),e.jsxs("label",{className:`text-sm font-medium text-gray-900 ml-2 block w-full py-3 px-2 rounded-md border-[1px] ${s.answer_key=="e"?"bg-green-400":""}`,htmlFor:"e",children:["E. ",s.option_e]}),e.jsx("br",{})]})]})]},a)):e.jsxs("div",{className:"mt-10",children:[e.jsx("img",{src:"/static/empty.svg",className:"w-[300px] mx-auto",alt:""}),e.jsx("p",{className:"text-center text-gray-500 font-semibold",children:"Belum ada soal"})]})})]})}export{_ as default};
