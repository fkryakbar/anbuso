import{j as a,Y as w,a as u,y as f}from"./app-DCYrID-D.js";import{A as v}from"./DashboardLayout-Clq2tWuZ.js";import{t as y}from"./helper-TBU9DuW1.js";import g from"./Interpretasi-N0X_nR5h.js";import"./InputError-CAHX9Ggl.js";import"./InputLabel-65NIkodh.js";import"./TextInput-B9dRleYz.js";import"./sweetalert2.all-DxUAMuwL.js";function I({paketSoalMultipleChoice:n,validityMultipleChoice:r,filteredStudentsMultipleChoice:p,reliabilitasMultipleChoice:d,tingkatKesulitanMultipleChoice:o,dayaPembedaMultipleChoice:l,paketSoalEssay:m,validityEssay:c,filteredStudentsEssay:N,reliabilitasEssay:x,tingkatKesulitanEssay:h,dayaPembedaEssay:j}){var b,k;return a.jsxs(v,{children:[a.jsx(w,{title:"Analisis"}),a.jsx("div",{className:"text-sm breadcrumbs",children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsxs(u,{href:route("analisis"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Analisis"]})}),a.jsx("li",{children:a.jsxs("a",{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Analisis Butir Soal"]})})]})}),a.jsxs("div",{className:"p-5 bg-white rounded-md shadow-sm w-full",children:[a.jsxs("div",{className:"flex gap-3 justify-between items-center",children:[a.jsxs("div",{className:"flex gap-3 items-center",children:[a.jsx("div",{className:"w-[60px]",children:a.jsx("img",{src:"/static/analysis.png",alt:"logo",width:"100%"})}),a.jsxs("div",{className:"block",children:[a.jsx("p",{className:"lg:text-xl text-lg font-semibold text-slate-600",children:n.title}),a.jsx("div",{className:"flex justify-between items-center",children:a.jsx("p",{className:"text-xs text-slate-400",children:y(n.created_at)})})]})]}),a.jsx("div",{children:a.jsxs("a",{href:route("download_analisis",{slug:n.slug}),className:"btn btn-sm bg-blue-500 hover:bg-blue-900 text-white",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"})}),"Unduh Analisis"]})})]}),a.jsx("h1",{className:"text-gray-500 font-semibold text-xl mt-4",children:"Analisis"})]}),a.jsx("div",{className:"mt-5 justify-end flex",children:a.jsx("button",{onClick:()=>{f.reload({only:["students"]})},className:"btn btn-sm bg-white",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})})})}),a.jsxs("div",{role:"tablist",className:"tabs tabs-lifted mt-5 lg:tabs-lg",children:[a.jsx(u,{role:"tab",href:route("summary",{slug:n.slug}),className:"tab",children:"Penskoran"}),a.jsx(u,{role:"tab",href:route("detail",{slug:n.slug}),className:"tab tab-active",children:"Analisis Butir Soal"})]}),a.jsxs("div",{className:"flex flex-col gap-3 bg-white p-5 border-l-[1px] border-r-[1px] border-b-[1px] overflow-x-auto",children:[a.jsxs("div",{className:"flex flex-col gap-3 p-3 border-[1px] overflow-x-auto   mt-5",children:[a.jsx("h1",{className:"text-center text-2xl font-bold text-gray-700",children:"Pilihan Ganda"}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("h1",{className:"text-xl font-semibold text-gray-700",children:"Validitas dan Tingkat Kesulitan Butir Soal"}),a.jsx("button",{onClick:()=>document.getElementById("validitas").showModal(),className:"btn btn-sm bg-white",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"})})}),a.jsxs(g,{id:"validitas",title:"Interpretasi Validitas dan Tingkat Kesulitan Butir Soal",children:[a.jsx("h1",{className:"font-bold text-lg",children:"1. Validitas"}),a.jsxs("div",{className:"ml-4",children:[a.jsx("h2",{className:"font-semibold",children:"Pengertian"}),a.jsx("p",{className:"text-justify indent-10",children:"Validitas adalah ukuran yang menunjukkan sejauh mana suatu tes atau instrumen pengukuran mampu mengukur apa yang seharusnya diukur. Dalam konteks soal pilihan ganda, validitas menunjukkan sejauh mana soal-soal tersebut mampu mengukur pengetahuan atau kemampuan yang ingin diukur."}),a.jsx("h2",{className:"font-semibold",children:"Implikasi Soal Tidak Valid"}),a.jsx("p",{className:"text-justify indent-10",children:"Jika soal tidak valid, hasil tes tidak dapat dipercaya karena tidak mengukur apa yang seharusnya diukur. Misalnya, jika sebuah soal matematika tidak valid, bisa jadi soal tersebut tidak mengukur kemampuan matematika siswa tetapi mengukur kemampuan membaca atau pengetahuan umum."}),a.jsx("h2",{className:"font-semibold",children:"Soal yang Valid"}),a.jsx("p",{className:"text-justify indent-10",children:"Soal yang valid adalah soal yang benar-benar mengukur kompetensi atau kemampuan yang diharapkan. Soal ini memberikan gambaran yang akurat tentang kemampuan siswa dalam bidang yang diuji."})]}),a.jsx("h1",{className:"font-bold text-lg mt-5",children:"2. Tingkat Kesulitan"}),a.jsxs("div",{className:"ml-4",children:[a.jsx("h2",{className:"font-semibold",children:"Pengertian"}),a.jsx("p",{className:"text-justify indent-10",children:"Tingkat kesulitan adalah ukuran yang menunjukkan seberapa sulit atau mudahnya suatu soal bagi kelompok responden yang diuji. Tingkat kesulitan biasanya diukur dalam bentuk persentase atau proporsi siswa yang menjawab soal tersebut dengan benar."}),a.jsx("h2",{className:"font-semibold",children:"Kategori Tingkat Kesulitan"}),a.jsxs("ul",{className:"list-disc ml-5",children:[a.jsx("li",{children:"Sangat Mudah: Jika lebih dari 90% siswa dapat menjawab soal dengan benar."}),a.jsx("li",{children:"Mudah: Jika lebih dari 60-90% siswa dapat menjawab soal dengan benar."}),a.jsx("li",{children:"Sedang: Jika 40-60% siswa dapat menjawab soal dengan benar."}),a.jsx("li",{children:"Sulit: Jika 20-40% siswa dapat menjawab soal dengan benar."}),a.jsx("li",{children:"Sangat Sulit: Jika kurang dari 20% siswa dapat menjawab soal dengan benar."})]}),a.jsx("h2",{className:"font-semibold",children:"Implikasi"}),a.jsx("p",{className:"text-justify indent-10",children:"Soal yang terlalu mudah atau terlalu sulit tidak memberikan informasi yang cukup tentang kemampuan siswa. Idealnya, soal-soal dalam tes memiliki tingkat kesulitan yang bervariasi untuk mendapatkan gambaran kemampuan siswa yang lebih akurat."})]})]})]}),r?a.jsx(a.Fragment,{children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"table table-xs border-[1px] min-w-[1000px]",children:[a.jsxs("thead",{children:[a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{}),a.jsx("th",{className:"text-center font-semibold text-black text-lg",colSpan:n.questions&&n.questions.length,children:"Butir Soal"})]}),a.jsxs("tr",{children:[a.jsx("th",{className:"text-center font-semibold text-black text-lg",children:"No"}),a.jsx("th",{className:"font-semibold text-black text-lg",children:"Nama Siswa"}),n.questions&&n.questions.length>0?n.questions.map((e,s)=>a.jsx("th",{className:"text-center text-black text-lg",children:s+1},s)):null,a.jsx("th",{className:"text-center font-semibold text-black text-lg",children:"Total Benar"})]})]}),a.jsxs("tbody",{children:[p.map((e,s)=>a.jsxs("tr",{children:[a.jsx("th",{className:"text-center",children:s+1}),a.jsx("th",{children:e.name}),e.answers&&e.answers.length>0?e.answers.map((t,i)=>a.jsx("td",{className:`text-center ${t.score==1?"text-green-500":"text-red-500"} font-semibold`,children:t.score},i)):null,a.jsx("td",{className:"text-center",children:r.trueAnswerTotalByStudent[s]})]},s)),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsx("td",{children:"Korelitas"}),r.questionsValidity.map((e,s)=>a.jsx("td",{className:"text-center",children:e.correlationValue||e.correlationValue==0?e.correlationValue:"Null"},s))]}),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsxs("td",{children:["Nilai Validitas",a.jsxs("p",{children:["rTabel = ",a.jsx("span",{className:"font-semibold",children:r.rTable})]})]}),r.questionsValidity.map((e,s)=>a.jsx("td",{className:"text-center",children:a.jsx("div",{className:`${e.correlationValue==null||e.correlationValue==0?"bg-gray-300 text-black":e.validity?"bg-green-500 text-white":"bg-red-500 text-white"} rounded-lg font-semibold p-2 w-fit mx-auto`,children:e.correlationValue==null||e.correlationValue==0?e.validity:e.validity?"Valid":"Tidak Valid"})},s))]}),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsx("td",{children:"Tingkat Kesulitan"}),o==null?void 0:o.map((e,s)=>a.jsxs("td",{className:"text-center",children:[a.jsx("p",{className:"font-semibold",children:e.category}),a.jsx("p",{children:e.value})]},s))]})]})]})})}):a.jsxs("div",{className:"mt-5",children:[a.jsx("img",{src:"/static/question-mark.svg",alt:"",className:"max-w-[300px] mx-auto"}),a.jsx("h2",{className:"text-center font-semibold text-gray-500",children:"Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis"})]}),a.jsx("hr",{className:"border-[1px] mt-5"}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("h1",{className:"text-xl font-semibold text-gray-700",children:"Reliabilitas Soal"}),a.jsx("button",{onClick:()=>document.getElementById("reliabilitas").showModal(),className:"btn btn-sm bg-white",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"})})}),a.jsx(g,{id:"reliabilitas",title:"Interpretasi Reliabilitas Soal",children:a.jsxs("div",{className:"ml-4",children:[a.jsx("h2",{className:"font-semibold",children:"Pengertian"}),a.jsx("p",{className:"text-justify indent-10",children:"Reliabilitas adalah ukuran yang menunjukkan sejauh mana hasil pengukuran konsisten atau stabil ketika pengukuran dilakukan berulang kali dalam kondisi yang sama. Reliabilitas yang tinggi berarti hasil tes dapat diandalkan dan konsisten dari waktu ke waktu."}),a.jsx("h2",{className:"font-semibold",children:"Implikasi Reliabilitas Rendah"}),a.jsx("p",{className:"text-justify indent-10",children:"Jika tes memiliki reliabilitas yang rendah, hasil tes dapat bervariasi secara signifikan setiap kali tes diulang, meskipun kondisi tes tetap sama. Hal ini membuat hasil tes tidak dapat diandalkan sebagai indikator kemampuan siswa."}),a.jsx("h2",{className:"font-semibold",children:"Reliabilitas yang Tinggi"}),a.jsx("p",{className:"text-justify indent-10",children:"Tes dengan reliabilitas yang tinggi memberikan hasil yang konsisten, artinya jika siswa yang sama mengikuti tes yang sama dalam kondisi yang sama, hasilnya akan serupa."})]})})]}),d?a.jsx(a.Fragment,{children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("div",{className:"border-[1px] flex p-5 rounded-lg min-w-[1000px]",children:[a.jsxs("div",{className:"basis-[15%] flex flex-col gap-2",children:[a.jsx("h1",{className:"font-semibold",children:"rHitung"}),a.jsx("h1",{className:"font-semibold",children:"rTabel"}),a.jsx("h1",{className:"font-semibold",children:"Reliabilitas"})]}),a.jsxs("div",{className:"basis-[85%] flex flex-col gap-2",children:[a.jsxs("h1",{children:[": ",d.rHitung]}),a.jsxs("h1",{children:[": ",d.rTable]}),a.jsxs("h1",{children:[": ",a.jsx("span",{className:`p-2 rounded-md text-white font-semibold text-xs ${d.reliabilitas?"bg-green-500":"bg-red-500"}`,children:d.reliabilitas?"Reliabilitas Tinggi":"Reliabilitas Rendah"})]})]})]})})}):a.jsxs("div",{className:"mt-5",children:[a.jsx("img",{src:"/static/question-mark.svg",alt:"",className:"max-w-[300px] mx-auto"}),a.jsx("h2",{className:"text-center font-semibold text-gray-500",children:"Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis"})]}),a.jsx("hr",{className:"border-[1px] mt-5"}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("h1",{className:"text-xl font-semibold text-gray-700",children:"Daya Pembeda"}),a.jsx("button",{onClick:()=>document.getElementById("dayaPembeda").showModal(),className:"btn btn-sm bg-white",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"})})}),a.jsx(g,{id:"dayaPembeda",title:"Interpretasi Daya Pembeda",children:a.jsxs("div",{className:"ml-4",children:[a.jsx("h2",{className:"font-semibold",children:"Pengertian"}),a.jsx("p",{className:"text-justify indent-10",children:"Daya pembeda adalah kemampuan suatu soal untuk membedakan antara siswa yang memiliki kemampuan tinggi dan siswa yang memiliki kemampuan rendah. Daya pembeda diukur dengan melihat perbedaan proporsi siswa dengan kemampuan tinggi yang menjawab benar dan siswa dengan kemampuan rendah yang menjawab benar."}),a.jsx("h2",{className:"font-semibold",children:"Kategori Daya Pembeda"}),a.jsxs("ul",{className:"list-disc ml-5",children:[a.jsx("li",{children:"Sangat Baik: Jika soal dapat dengan jelas membedakan siswa yang berkemampuan tinggi dan rendah."}),a.jsx("li",{children:"Baik: Jika soal dapat membedakan siswa yang berkemampuan tinggi dan rendah."}),a.jsx("li",{children:"Cukup: Jika soal hanya dapat sedikit membedakan siswa yang berkemampuan tinggi dan rendah."}),a.jsx("li",{children:"Kurang Baik: Jika soal tidak dapat membedakan siswa yang berkemampuan tinggi dan rendah atau jika kedua kelompok sama-sama menjawab benar atau salah."})]}),a.jsx("h2",{className:"font-semibold",children:"Implikasi"}),a.jsx("p",{className:"text-justify indent-10",children:"Soal dengan daya pembeda yang baik akan memberikan informasi yang lebih jelas tentang kemampuan individu siswa. Jika daya pembeda rendah, soal tersebut tidak efektif dalam menilai perbedaan kemampuan siswa."}),a.jsx("h2",{className:"font-semibold",children:"Catatan"}),a.jsx("p",{className:"text-justify indent-10",children:"Perhitungan dilakukan dengan mengukur maksimal 30 data siswa. Perhitungan dilakukan dengan mengurutkan siswa dari skor menjawab terbanyak sampai yang terkecil. Kemudian, siswa akan dibagi menjadi Upper Group (Warna Hijau) dan Lower Group (Warna kuning). Jika jumlah siswa ganjil maka siswa yang berada diantara Upper Group dan Lower Group (Warna Merah muda) tidak diikutkan didalam perhitungan."})]})})]}),l?a.jsx(a.Fragment,{children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"table border-[1px] min-w-[1000px]",children:[a.jsxs("thead",{children:[a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{}),a.jsx("th",{className:"text-center font-semibold text-black text-lg",colSpan:n.questions&&n.questions.length,children:"Butir Soal"})]}),a.jsxs("tr",{children:[a.jsx("th",{className:"text-center font-semibold text-black text-lg",children:"No"}),a.jsx("th",{className:"font-semibold text-black text-lg",children:"Nama Siswa"}),n.questions&&n.questions.length>0?n.questions.map((e,s)=>a.jsx("th",{className:"text-center text-black text-lg",children:s+1},s)):null,a.jsx("th",{className:"text-center font-semibold text-black text-lg",children:"Total Benar"})]})]}),a.jsxs("tbody",{children:[l.upperGroupStudents.map((e,s)=>a.jsxs("tr",{className:"bg-green-200",children:[a.jsx("th",{className:"text-center",children:s+1}),a.jsx("th",{children:e.name}),e.answers&&e.answers.length>0?e.answers.map((t,i)=>a.jsx("td",{className:`text-center ${t.score==1?"text-green-500":"text-red-500"} font-semibold`,children:t.score},i)):null,a.jsx("td",{className:"text-center",children:e.trueAnswer?e.trueAnswer:null})]},s)),(b=l.middleGroupStudents)==null?void 0:b.map((e,s)=>a.jsxs("tr",{className:"bg-red-100",children:[a.jsx("th",{className:"text-center",children:l.upperGroupStudents.length+s+1}),a.jsx("th",{children:e.name}),e.answers&&e.answers.length>0?e.answers.map((t,i)=>a.jsx("td",{className:`text-center ${t.score==1?"text-green-500":"text-red-500"} font-semibold`,children:t.score},i)):null,a.jsx("td",{className:"text-center",children:e.trueAnswer?e.trueAnswer:null})]},s)),(k=l.lowerGroupStudents)==null?void 0:k.map((e,s)=>a.jsxs("tr",{className:"bg-amber-200",children:[l.middleGroupStudents?a.jsx("th",{className:"text-center",children:l.upperGroupStudents.length+l.middleGroupStudents.length+s+1}):a.jsx("th",{className:"text-center",children:l.upperGroupStudents.length+s+1}),a.jsx("th",{children:e.name}),e.answers&&e.answers.length>0?e.answers.map((t,i)=>a.jsx("td",{className:`text-center ${t.score==1?"text-green-500":"text-red-500"} font-semibold`,children:t.score},i)):null,a.jsx("td",{className:"text-center",children:e.trueAnswer?e.trueAnswer:0})]},s)),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsx("td",{children:"Daya Pembeda"}),l.dayaPembeda.map((e,s)=>a.jsxs("td",{className:"text-center",children:[a.jsx("p",{className:"font-semibold",children:e.category}),a.jsx("p",{children:e.value})]},s))]})]})]})})}):a.jsxs("div",{className:"mt-5",children:[a.jsx("img",{src:"/static/question-mark.svg",alt:"",className:"max-w-[300px] mx-auto"}),a.jsx("h2",{className:"text-center font-semibold text-gray-500",children:"Minimal 5 dan Maksimal 30 Siswa yang hanya bisa dilakukan analisis"})]})]}),a.jsxs("div",{className:"flex flex-col gap-3 p-3 border-[1px] overflow-x-auto   mt-5",children:[a.jsx("h1",{className:"text-center text-2xl font-bold text-gray-700",children:"Esai"}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("h1",{className:"text-xl font-semibold text-gray-700",children:"Validitas dan Tingkat Kesulitan Butir Soal"}),a.jsx("button",{onClick:()=>document.getElementById("validitas").showModal(),className:"btn btn-sm bg-white",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"})})})]}),c?a.jsx(a.Fragment,{children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"table table-xs border-[1px] min-w-[1000px]",children:[a.jsxs("thead",{children:[a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{}),a.jsx("th",{className:"text-center font-semibold text-black text-lg",colSpan:m.questions&&m.questions.length,children:"Butir Soal"})]}),a.jsxs("tr",{children:[a.jsx("th",{className:"text-center font-semibold text-black text-lg",children:"No"}),a.jsx("th",{className:"font-semibold text-black text-lg",children:"Nama Siswa"}),m.questions&&m.questions.length>0?m.questions.map((e,s)=>a.jsx("th",{className:"text-center text-black text-lg",children:s+1},s)):null,a.jsx("th",{className:"text-center font-semibold text-black text-lg",children:"Total Poin"})]})]}),a.jsxs("tbody",{children:[N.map((e,s)=>a.jsxs("tr",{children:[a.jsx("th",{className:"text-center",children:s+1}),a.jsx("th",{children:e.name}),e.answers&&e.answers.length>0?e.answers.map((t,i)=>a.jsx("td",{className:`text-center ${t.score>=1?"text-green-500":"text-red-500"} font-semibold`,children:t.score},i)):null,a.jsx("td",{className:"text-center",children:c.trueAnswerTotalByStudent[s]})]},s)),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsx("td",{children:"Korelitas"}),c.questionsValidity.map((e,s)=>a.jsx("td",{className:"text-center",children:e.correlationValue||e.correlationValue==0?e.correlationValue:"Null"},s))]}),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsxs("td",{children:["Nilai Validitas",a.jsxs("p",{children:["rTabel = ",a.jsx("span",{className:"font-semibold",children:c.rTable})]})]}),c.questionsValidity.map((e,s)=>a.jsx("td",{className:"text-center",children:a.jsx("div",{className:`${e.correlationValue==null||e.correlationValue==0?"bg-gray-300 text-black":e.validity?"bg-green-500 text-white":"bg-red-500 text-white"} rounded-lg font-semibold p-2 w-fit mx-auto`,children:e.correlationValue==null||e.correlationValue==0?e.validity:e.validity?"Valid":"Tidak Valid"})},s))]}),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsx("td",{children:"Tingkat Kesulitan"}),h==null?void 0:h.map((e,s)=>a.jsxs("td",{className:"text-center",children:[a.jsx("p",{className:"font-semibold",children:e.category}),a.jsx("p",{children:e.value})]},s))]}),a.jsxs("tr",{children:[a.jsx("td",{}),a.jsx("td",{children:"daya Pembeda"}),j==null?void 0:j.map((e,s)=>a.jsxs("td",{className:"text-center",children:[a.jsx("p",{className:"font-semibold",children:e.category}),a.jsx("p",{children:e.value})]},s))]})]})]})})}):a.jsxs("div",{className:"mt-5",children:[a.jsx("img",{src:"/static/question-mark.svg",alt:"",className:"max-w-[300px] mx-auto"}),a.jsx("h2",{className:"text-center font-semibold text-gray-500",children:"Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis"})]}),a.jsx("hr",{className:"border-[1px] mt-5"}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("h1",{className:"text-xl font-semibold text-gray-700",children:"Reliabilitas Soal"}),a.jsx("button",{onClick:()=>document.getElementById("reliabilitas").showModal(),className:"btn btn-sm bg-white",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"})})})]}),x?a.jsx(a.Fragment,{children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("div",{className:"border-[1px] flex p-5 rounded-lg min-w-[1000px]",children:[a.jsxs("div",{className:"basis-[15%] flex flex-col gap-2",children:[a.jsx("h1",{className:"font-semibold",children:"rHitung"}),a.jsx("h1",{className:"font-semibold",children:"rTabel"}),a.jsx("h1",{className:"font-semibold",children:"Reliabilitas"})]}),a.jsxs("div",{className:"basis-[85%] flex flex-col gap-2",children:[a.jsxs("h1",{children:[": ",x.rHitung]}),a.jsxs("h1",{children:[": ",x.rTable]}),a.jsxs("h1",{children:[": ",a.jsx("span",{className:`p-2 rounded-md text-white font-semibold text-xs ${x.reliabilitas?"bg-green-500":"bg-red-500"}`,children:x.reliabilitas?"Reliabilitas Tinggi":"Reliabilitas Rendah"})]})]})]})})}):a.jsxs("div",{className:"mt-5",children:[a.jsx("img",{src:"/static/question-mark.svg",alt:"",className:"max-w-[300px] mx-auto"}),a.jsx("h2",{className:"text-center font-semibold text-gray-500",children:"Minimal ada 5 siswa yang sudah selesai agar bisa dilakukan analisis"})]})]})]})]})}export{I as default};
