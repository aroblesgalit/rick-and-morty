import{g as $,_ as B}from"./CharacterCard.a6bad7d5.js";import{_ as L}from"./nuxt-link.5bb4a02a.js";import{s as P,a as S,w as T,h as q,b as c,e as l,F as D,r as E,u as e,t as g,i as f,j as x,k as y,l as I,o,c as j,m as w}from"./entry.aad0f3cf.js";import{u as A}from"./characters.f804d04b.js";const F={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"},R={class:"flex justify-end items-center gap-x-4 my-6"},M={class:"flex gap-x-2"},O={key:0},Q={key:1},U={__name:"[page]",async setup(z){let n,u;const p=A(),{addCharacterToList:v,addPage:C}=p,{charactersList:b,pages:_}=P(p),{page:a}=S().params,k=$`
    query getCharacters($page: Int) {
        characters(page: $page) {
            info {
                count
                pages
            },
            results {
                id
                name
                image
                species
                status
                gender
                origin {
                    name
                }
                location {
                    name
                }
                episode {
                    name
                    air_date
                }
            }
        }
    }
`;let s=parseInt(a),N={page:s},r,d;if(console.log("page: ",a),console.log("pages:",_),_.includes(a)){for(let t=s*20-19;t<=s*20;t++)r.push(b.find(i=>i.id==t));console.log("Data exists. Populating page with existing data.")}else{const{data:t}=([n,u]=T(()=>I(k,N)),n=await n,u(),n);if(r=t._rawValue.characters.results,d=t._rawValue.characters.info,r.forEach(i=>v(a,i)),C(a),console.log("Data does NOT exist. Populating page with new data."),!t)throw q({status:404,statusMessage:"Characters not found",fatal:!0})}return(t,i)=>{const V=B,m=L;return o(),c("div",null,[l("div",F,[(o(!0),c(D,null,E(e(r),h=>(o(),c("div",null,[(o(),j(V,{character:h,key:h.id},null,8,["character"]))]))),256))]),l("div",R,[l("div",null,"Showing "+g(20*e(s)-19)+"-"+g(20*e(s)-19+e(r).length-1)+" of "+g(e(d).count),1),l("div",M,[e(a)>1?(o(),c("div",O,[f(m,{to:`/page/${e(s)-1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:x(()=>[w("Prev")]),_:1},8,["to"])])):y("",!0),e(a)<e(d).pages?(o(),c("div",Q,[f(m,{to:`/page/${e(s)+1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:x(()=>[w("Next")]),_:1},8,["to"])])):y("",!0)])])])}}};export{U as default};
