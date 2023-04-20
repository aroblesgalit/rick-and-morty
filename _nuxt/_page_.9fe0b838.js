import{g as $,_ as B}from"./CharacterCard.6d647ee0.js";import{_ as L}from"./nuxt-link.8c6d20f4.js";import{s as P,a as S,w as T,h as q,b as c,e as l,F as D,r as E,u as e,t as g,i as h,j as f,k as x,l as I,o,c as j,m as y}from"./entry.ddb917fa.js";import{u as A}from"./characters.a650c48e.js";const F={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"},R={class:"flex justify-end items-center gap-x-4 my-6"},M={class:"flex gap-x-2"},O={key:0},Q={key:1},U={__name:"[page]",async setup(z){let n,u;const p=A(),{addCharacterToList:w,addPage:v}=p,{charactersList:C,pages:b}=P(p),{page:s}=S().params,k=$`
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
`;let a=parseInt(s),N={page:a},r,d;if(s in b){for(let t=a*20-19;t<=a*20;t++)r.push(C.find(i=>i.id==t));console.log("Data exists. Populating page with existing data.")}else{const{data:t}=([n,u]=T(()=>I(k,N)),n=await n,u(),n);if(r=t._rawValue.characters.results,d=t._rawValue.characters.info,r.forEach(i=>w(s,i)),v(s),console.log("Data does NOT exist. Populating page with new data."),!t)throw q({status:404,statusMessage:"Characters not found",fatal:!0})}return(t,i)=>{const V=B,_=L;return o(),c("div",null,[l("div",F,[(o(!0),c(D,null,E(e(r),m=>(o(),c("div",null,[(o(),j(V,{character:m,key:m.id},null,8,["character"]))]))),256))]),l("div",R,[l("div",null,"Showing "+g(20*e(a)-19)+"-"+g(20*e(a)-19+e(r).length-1)+" of "+g(e(d).count),1),l("div",M,[e(s)>1?(o(),c("div",O,[h(_,{to:`/page/${e(a)-1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:f(()=>[y("Prev")]),_:1},8,["to"])])):x("",!0),e(s)<e(d).pages?(o(),c("div",Q,[h(_,{to:`/page/${e(a)+1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:f(()=>[y("Next")]),_:1},8,["to"])])):x("",!0)])])])}}};export{U as default};
