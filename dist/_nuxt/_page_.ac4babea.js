import{g as B,_ as L}from"./CharacterCard.5b1fc036.js";import{_ as P}from"./nuxt-link.bb94c341.js";import{s as S,u as q,w as D,d as E,c as n,a as d,F as I,r as j,b as e,t as u,e as m,f,g as x,h as A,o,i as F,j as v}from"./entry.206ffc0d.js";import{u as R}from"./characters.5f8b05fe.js";const M={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"},O={class:"flex justify-end items-center gap-x-4 my-6"},Q={class:"flex gap-x-2"},z={key:0},G={key:1},X={__name:"[page]",async setup(H){let i,g;const p=R(),{addCharacterToList:y,addPage:w,setTotalChars:C}=p,{charactersList:b,pages:k,totalChars:N}=S(p),{page:s}=q().params,V=B`
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
`;let a=parseInt(s),T={page:a},r=[],c={};if(k.value.includes(s)){for(let t=a*20-19;t<=a*20;t++)r.push(b.value.find(l=>l.id==t));c=N.value,console.log("Data exists. Populating page with existing data.")}else{const{data:t}=([i,g]=D(()=>A(V,T)),i=await i,g(),i);if(r=t._rawValue.characters.results,c=t._rawValue.characters.info,C(c),r.forEach(l=>y(s,l)),w(s),console.log("Data does NOT exist. Populating page with new data."),!t)throw E({status:404,statusMessage:"Characters not found",fatal:!0})}return(t,l)=>{const $=L,_=P;return o(),n("div",null,[d("div",M,[(o(!0),n(I,null,j(e(r),h=>(o(),n("div",null,[(o(),F($,{character:h,key:h.id},null,8,["character"]))]))),256))]),d("div",O,[d("div",null,"Showing "+u(20*e(a)-19)+"-"+u(20*e(a)-19+e(r).length-1)+" of "+u(e(c).count),1),d("div",Q,[e(s)>1?(o(),n("div",z,[m(_,{to:`/page/${e(a)-1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:f(()=>[v("Prev")]),_:1},8,["to"])])):x("",!0),e(s)<e(c).pages?(o(),n("div",G,[m(_,{to:`/page/${e(a)+1}`,class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:f(()=>[v("Next")]),_:1},8,["to"])])):x("",!0)])])])}}};export{X as default};
