import{g as B,_ as L}from"./CharacterCard.6db4338e.js";import{_ as P}from"./nuxt-link.09527c01.js";import{s as S,a as q,w as D,h as E,b as n,e as d,F as I,r as j,u as e,t as u,i as f,j as x,k as v,l as A,o,c as F,m as y}from"./entry.d6d07401.js";import{u as R}from"./characters.2ef3ae02.js";const M={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"},O={class:"flex justify-end items-center gap-x-4 my-6"},Q={class:"flex gap-x-2"},z={key:0},G={key:1},X={__name:"[page]",async setup(H){let i,g;const p=R(),{addCharacterToList:w,addPage:C,setTotalChars:b}=p,{charactersList:k,pages:_,totalChars:N}=S(p),{page:a}=q().params,V=B`
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
`;let s=parseInt(a),T={page:s},r=[],c={};if(console.log("page: ",a),console.log("pages:",_.value),_.value.includes(a)){for(let t=s*20-19;t<=s*20;t++)r.push(k.value.find(l=>l.id==t));c=N.value,console.log("Data exists. Populating page with existing data.")}else{const{data:t}=([i,g]=D(()=>A(V,T)),i=await i,g(),i);if(r=t._rawValue.characters.results,c=t._rawValue.characters.info,b(c),r.forEach(l=>w(a,l)),C(a),console.log("Data does NOT exist. Populating page with new data."),!t)throw E({status:404,statusMessage:"Characters not found",fatal:!0})}return(t,l)=>{const $=L,h=P;return o(),n("div",null,[d("div",M,[(o(!0),n(I,null,j(e(r),m=>(o(),n("div",null,[(o(),F($,{character:m,key:m.id},null,8,["character"]))]))),256))]),d("div",O,[d("div",null,"Showing "+u(20*e(s)-19)+"-"+u(20*e(s)-19+e(r).length-1)+" of "+u(e(c).count),1),d("div",Q,[e(a)>1?(o(),n("div",z,[f(h,{to:`/page/${e(s)-1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:x(()=>[y("Prev")]),_:1},8,["to"])])):v("",!0),e(a)<e(c).pages?(o(),n("div",G,[f(h,{to:`/page/${e(s)+1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:x(()=>[y("Next")]),_:1},8,["to"])])):v("",!0)])])])}}};export{X as default};
