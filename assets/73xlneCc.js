import{_ as A}from"./Du9JSvRn.js";import{_ as B}from"./D7Ojm59P.js";import{_ as C}from"./CNwY0-5l.js";import{r as m,k as $,l as N,g as D,h as s,o as d,c as i,a as e,t as _,b as n,w as x,F as P,m as H,n as g,q as f,S as T,d as z,j as E,s as F,v as M}from"./CSY2zyk_.js";import{_ as j}from"./DCCKIDqt.js";import{_ as q}from"./C2ztTWA2.js";import{H as I}from"./Dog2zgWk.js";import"./C0tAbxY2.js";import"./r-MGCOzV.js";const L={key:0},G={class:"text-2xl font-semibold my-4"},R={class:"flex justify-between mb-3"},J={class:"flex gap-4"},K={key:0,class:"relative overflow-x-auto shadow-md sm:rounded-lg"},O={class:"w-full text-sm text-left text-gray-500"},Q=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Phone "),e("th",{scope:"col",class:"px-6 py-3"}," Institute "),e("th",{scope:"col",class:"px-6 py-3"}," Batch "),e("th",{scope:"col",class:"px-6 py-3"}," Address "),e("th",null," Action ")])],-1),W={scope:"row",class:"px-6 py-4 font-medium whitespace-nowrap"},X={class:"px-6 py-4"},Y={class:"px-6 py-4"},Z={class:"px-6 py-4"},tt={class:"px-6 py-4"},et={key:0},ot={class:"mt-5"},st={key:1},ht={__name:"students",setup(at){const{$axios:b}=E(),l=m(null),p=m(1),r=m(""),c=m(""),u=m(50),y=async()=>{try{const a={};r.value&&(a.search=r.value),u.value&&(a.limit=u.value),p.value&&(a.page=p.value),c.value&&c.value!=="All"&&(a.batch=c.value);const{data:o}=await b.get("/auth/users",{params:a});l.value=o.users}catch(a){console.log(a.message)}};$([c,u,p],()=>{y()}),N(r,()=>{y()},1e3);const w=async a=>{let o=prompt("Enter password");if(o)try{const{data:h}=await b.post("/auth/admin/signup",{user:a,password:o});F().add({title:"Admin created successfully"})}catch(h){console.log(h.message)}};return D(()=>{y()}),(a,o)=>{const h=A,v=B,V=C,k=M,U=j,S=q;return s(l)?(d(),i("div",L,[e("h1",G," Users - Total "+_(s(l).totalDocs)+" Students ",1),e("div",R,[n(v,{label:"Search"},{default:x(()=>[n(h,{modelValue:s(r),"onUpdate:modelValue":o[0]||(o[0]=t=>f(r)?r.value=t:null),placeholder:"Search"},null,8,["modelValue"])]),_:1}),e("div",J,[n(v,{label:"Per Page"},{default:x(()=>[n(V,{options:[10,50,100,500,s(l).totalDocs],modelValue:s(u),"onUpdate:modelValue":o[1]||(o[1]=t=>f(u)?u.value=t:null),placeholder:"Per page"},null,8,["options","modelValue"])]),_:1}),n(v,{label:"Batch"},{default:x(()=>[n(V,{options:["All",...s(I)],modelValue:s(c),"onUpdate:modelValue":o[2]||(o[2]=t=>f(c)?c.value=t:null),placeholder:"HSC Batch"},null,8,["options","modelValue"])]),_:1})])]),s(l)&&s(l).docs?(d(),i("div",K,[e("table",O,[Q,e("tbody",null,[(d(!0),i(P,null,H(s(l).docs,t=>(d(),i("tr",{key:t._id,class:"border-b"},[e("th",W,_(t.name),1),e("td",X,_(t.phone),1),e("td",Y,_(t.institute),1),e("td",Z,_(t.batch),1),e("td",tt,[t.address||t.district||t.upazila?(d(),i("div",et,_(`${t.upazila?t.upazila:""} ${t.address} ${t.district}`),1)):g("",!0)]),e("td",null,[a.$userStore.role=="superadmin"?(d(),T(k,{key:0,onClick:lt=>w(t._id)},{default:x(()=>[z(" Make Admin ")]),_:2},1032,["onClick"])):g("",!0)])]))),128))])])])):g("",!0),e("div",ot,[n(U,{class:"mx-auto",modelValue:s(p),"onUpdate:modelValue":o[3]||(o[3]=t=>f(p)?p.value=t:null),"page-count":s(l).limit,total:s(l).totalDocs},null,8,["modelValue","page-count","total"])])])):(d(),i("div",st,[n(S)]))}}};export{ht as default};
