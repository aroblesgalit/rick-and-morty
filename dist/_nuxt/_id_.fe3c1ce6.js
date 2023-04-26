import{u as m}from"./characters.02b7df33.js";import{_ as f,s as h,o as n,c as i,a as s,u as e,t as a,b as c,F as b,r as x,p as g,d as v,e as k,w as I,f as S}from"./entry.a4ae6de0.js";const r=o=>(g("data-v-1d6c3f59"),o=o(),v(),o),w={class:"flex flex-col md:flex-row gap-4 mt-4"},y={class:"basis-full md:basis-1/2"},C=["src","alt"],B={class:"char-details basis-full md:basis-1/2 relative p-4 pl-0"},D={class:"text-5xl font-black text-[#f0e14a]"},$={class:"text-2xl mb-4 font-bold text-gray-500"},E={class:"mb-1"},F=r(()=>s("span",{class:"font-bold"},"Status:",-1)),G={class:"mb-1"},L=r(()=>s("span",{class:"font-bold"},"Gender:",-1)),N={class:"mb-1"},R=r(()=>s("span",{class:"font-bold"},"Origin:",-1)),T={class:"mb-1"},V=r(()=>s("span",{class:"font-bold"},"Location:",-1)),M=r(()=>s("span",{class:"font-semibold"},"Episodes:",-1)),O={__name:"CharacterInfo",props:["id"],setup(o){const{id:l}=o,_=m(),{setCharacterDetail:d}=_,{characterDetail:t}=h(_);return d(l),(u,q)=>(n(),i("div",w,[s("div",y,[s("img",{class:"md:w-full rounded-lg",src:e(t).image,alt:e(t).name},null,8,C)]),s("div",B,[s("h2",D,a(e(t).name),1),s("p",$,a(e(t).species),1),s("p",E,[F,c(" "+a(e(t).status),1)]),s("p",G,[L,c(" "+a(e(t).gender),1)]),s("p",N,[R,c(" "+a(e(t).origin.name),1)]),s("p",T,[V,c(" "+a(e(t).location.name),1)]),s("p",null,[M,c(),(n(!0),i(b,null,x(e(t).episode,p=>(n(),i("span",null,a(p.name+" ("+p.air_date+"), "),1))),256))])])]))}},j=f(O,[["__scopeId","data-v-1d6c3f59"]]),H={__name:"[id]",setup(o){const{id:l}=k().params;return(_,d)=>{const t=j;return n(),i("div",null,[s("a",{class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm",href:"",onClick:d[0]||(d[0]=I(u=>_.$router.back(),["prevent"]))},"Go back"),(n(),S(t,{id:e(l),key:e(l)},null,8,["id"]))])}}};export{H as default};
