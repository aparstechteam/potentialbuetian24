import{_ as q}from"./CsjKXX-p.js";import{_ as Y,r as u,g as M,o as a,c,b as l,w as f,d as x,t as b,h as r,v as O,ar as j,F as E,m as L,a as v,S as z,n as I,s as w,as as B,V as U,T as A,J as N,G as F,j as G}from"./COAIlViX.js";const J=window.setInterval,Q={class:"fixed__timer"},K={__name:"ExamTimer",props:{end_time:{type:Number,required:!0}},setup(C){const y=C,k=u(0),t=u(0),d=u(0),m=()=>{let o=new Date(y.end_time).getTime(),g=J(()=>{let _=new Date().getTime(),e=o-_;k.value=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),t.value=Math.floor(e%(1e3*60*60)/(1e3*60)),d.value=Math.floor(e%(1e3*60)/1e3),e<0&&clearInterval(g)},1e3)};M(()=>{m()});const s=o=>o<10?`0${o}`:o;return(o,g)=>{const _=O;return a(),c("div",Q,[l(_,{color:"black",size:"lg"},{default:f(()=>[x(b(s(r(k)))+" : "+b(s(r(t)))+" : "+b(s(r(d))),1)]),_:1})])}}},P=Y(K,[["__scopeId","data-v-5b7b9e72"]]),R={key:0,class:"max-w-2xl mx-auto pb-10 ns"},X=["innerHTML"],W={class:"flex gap-3 my-2 flex-wrap"},Z={class:"mt-3 space-y-2 z-10"},ee=["onClick"],te={class:"text-center"},se={key:1},re={__name:"questions",setup(C){const{$axios:y,$userStore:k}=G(),t=u(null),d=u(!1),m=u(null),s=j("timer",null),o=async()=>{try{if(d.value){w().add({type:"success",icon:"i-heroicons-check-circle",title:"Submitted",description:"You answers have been submitted successfully",life:3e3}),B("/");return}const e=t.value.filter(n=>n.selected).map(n=>({q:n._id,a:n.selected}));clearTimeout(s.value),y.post("/exam/submit",{answers:e}),s.value=null,w().add({type:"success",icon:"i-heroicons-check-circle",title:"Submitted",description:"Your answers have been submitted successfully",life:3e3})}catch{let n="https://script.google.com/macros/s/AKfycbyk1GskHMYpHLy4zfDXqDw7UHoHC2VBEpauNKxTpuyvuO1EODEML62_lFkmqYGcOwefyA/exec?sheet=1aCnj8xBYF_6IlEUw8E4tR0E7e-G8aakNReOCP1BOlew";const p=t.value.filter(i=>i.selected).map(i=>({q:i._id,a:i.selected})),T={roll:$userSore.user._id,name:$userSore.user.name,attempt:1,score:0,college:$userSore.user.institute,duration:new Date().toLocaleString(),submission:JSON.stringify(p)};fetch(n,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(T)}),w().add({type:"success",icon:"i-heroicons-check-circle",title:"Submitted",description:"Your answers have been submitted successfully",life:3e3})}B("/")},g=async()=>{const{data:e}=await y.get("/exam");if(s.value&&clearTimeout(s.value),e.not_started){w().add({type:"error",icon:"i-heroicons-x-circle",title:"Error",description:"Exam has not started yet",life:3e3}),B("/");return}t.value=e.questions,m.value=e.end_time,d.value=e.participated,s.value=setTimeout(()=>{o()},m.value-new Date().getTime())};M(()=>{g()});const _=(e,n)=>{t.value[e].selected=n};return(e,n)=>{const p=q,T=O,i=U("Vue3Lottie"),$=P,V=A("katex");return a(),c(E,null,[r(t)?(a(),c("div",R,[(a(!0),c(E,null,L(r(t),(S,h)=>(a(),c("div",{key:h,class:N(["p-5 mx-auto my-3 relative text-lg border border-gray-300 rounded-md shadow-lg bg-white kalpurush",{"stop-events":r(t)[h].selected}])},[v("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:S.question},null,8,X),v("div",W,[l(p,null,{default:f(()=>[x(" Q no. "+b(h+1),1)]),_:2},1024),l(p,{color:"sky"},{default:f(()=>[x(b(S.subject),1)]),_:2},1024),l(p,{color:"orange"},{default:f(()=>[x(" 10 Marks")]),_:1})]),v("div",Z,[(a(!0),c(E,null,L(S.options,(D,H)=>(a(),c("div",{key:H,class:N(["flex items-center transition hover:scale-105 duration-200 hover:border-green-300 cursor-pointer p-2 border rounded-md",{"border-2 border-green-500":r(t)[h].selected==D._id}]),onClick:oe=>_(h,D._id)},[F(v("div",null,null,512),[[V,D.option_text]])],10,ee))),128))])],2))),128)),v("div",te,[l(T,{size:"lg",onClick:o},{default:f(()=>[x(" Submit ")]),_:1})])])):(a(),c("div",se,[l(i,{animationLink:"https://lottie.host/633bd0cd-943c-451d-a93f-1907c3280856/jlTQkXgHrw.json",height:"300px",width:"300px"})])),r(t)?(a(),z($,{key:2,end_time:r(m)},null,8,["end_time"])):I("",!0)],64)}}};export{re as default};
