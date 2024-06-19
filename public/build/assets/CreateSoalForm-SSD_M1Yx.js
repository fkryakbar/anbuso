import{W as h,j as e}from"./app-B065Lfi7.js";import{I as c,T as l}from"./TextInput-9FbbTTYm.js";import{P as x}from"./PrimaryButton-CwMCM91v.js";import g from"./RichEditor-DIeatQqp.js";function f({paketSoal:d}){const{data:a,processing:o,errors:n,setData:t,post:m,recentlySuccessful:r,progress:i,reset:p}=h({content:"",option_a:"",option_b:"",option_c:"",option_d:"",option_e:"",answer_key:""}),u=s=>{s.preventDefault(),console.log(a),m(route("create-question",{slug:d.slug}),{onSuccess:()=>{p("content","option_a","option_b","option_c","option_d","option_e","answer_key")}})};return e.jsx(e.Fragment,{children:e.jsx("dialog",{id:"create-soal-form",className:"modal",children:e.jsxs("div",{className:"modal-box max-w-[1000px] min-h-[700px]",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"})}),e.jsx("h3",{className:"font-bold text-lg",children:"Buat Soal"}),r&&e.jsxs("div",{role:"alert",className:"alert alert-success mb-5 mt-5",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{children:"Berhasil dibuat"})]}),e.jsxs("form",{onSubmit:u,autoComplete:"off",autoCorrect:"off",className:"mt-5",children:[e.jsx(g,{setData:t,value:a.content,trigger:r}),e.jsx(c,{message:n.content,className:"mt-2"}),e.jsx(l,{placeholder:"A.",className:"mt-3",onChange:s=>t("option_a",s.target.value),value:a.option_a,disabled:o}),e.jsx(l,{placeholder:"B.",className:"mt-3",onChange:s=>t("option_b",s.target.value),value:a.option_b,disabled:o}),e.jsx(l,{placeholder:"C.",className:"mt-3",onChange:s=>t("option_c",s.target.value),value:a.option_c,disabled:o}),e.jsx(l,{placeholder:"D.",className:"mt-3",onChange:s=>t("option_d",s.target.value),value:a.option_d,disabled:o}),e.jsx(l,{placeholder:"E.",className:"mt-3",onChange:s=>t("option_e",s.target.value),value:a.option_e,disabled:o}),e.jsxs("select",{className:"select select-bordered w-full mt-4",value:a.answer_key,onChange:s=>{t("answer_key",s.target.value)},disabled:o,children:[e.jsx("option",{disabled:!0,value:"",children:"Kunci Jawaban"}),e.jsx("option",{value:"a",children:"A"}),e.jsx("option",{value:"b",children:"B"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"d",children:"D"}),e.jsx("option",{value:"e",children:"E"})]}),e.jsx(c,{message:n.answer_key,className:"mt-2"}),i?e.jsx("progress",{className:"progress progress-success w-full",value:i.percentage,max:"100"}):null,e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(x,{className:"ms-4",disabled:o,children:"Buat Soal"})})]})]})})})}export{f as default};
