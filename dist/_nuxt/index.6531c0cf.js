import{g as d,_ as g}from"./CharacterCard.003b406a.js";import{_ as m}from"./nuxt-link.c263b9ef.js";import{g as p,h,c as a,a as t,F as x,r as f,u as o,t as y,i as n,j as v,l as w,o as r,b as C}from"./entry.a4ae6de0.js";const N={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"},b={class:"flex justify-end items-center gap-x-4 my-6"},k={class:"flex gap-x-2"},F={__name:"index",async setup(q){let e,c;const i=d`
    query getCharacters() {
        characters() {
            info {
                count
                pages
            },
            results {
                id
                name
                image
                species
            }
        }
    }
`,{data:s}=([e,c]=p(()=>w(i)),e=await e,c(),e);if(!s)throw h({status:404,statusMessage:"Characters not found",fatal:!0});return(B,V)=>{const l=g,_=m;return r(),a("div",null,[t("div",N,[(r(!0),a(x,null,f(o(s).characters.results,u=>(r(),a("div",null,[n(l,{character:u},null,8,["character"])]))),256))]),t("div",b,[t("div",null,"Showing 1-20 of "+y(o(s).characters.info.count),1),t("div",k,[t("div",null,[n(_,{to:"/page/2",class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:v(()=>[C("Next")]),_:1})])])])])}}};export{F as default};
