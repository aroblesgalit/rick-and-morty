import{g as u,_ as g}from"./CharacterCard.5b1fc036.js";import{_ as m}from"./nuxt-link.bb94c341.js";import{w as p,d as h,c as a,a as e,F as x,r as f,b as o,t as y,e as n,f as v,h as w,o as r,j as C}from"./entry.206ffc0d.js";const N={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"},b={class:"flex justify-end items-center gap-x-4 my-6"},k={class:"flex gap-x-2"},F={__name:"index",async setup(q){let t,c;const i=u`
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
`,{data:s}=([t,c]=p(()=>w(i)),t=await t,c(),t);if(!s)throw h({status:404,statusMessage:"Characters not found",fatal:!0});return(B,V)=>{const l=g,_=m;return r(),a("div",null,[e("div",N,[(r(!0),a(x,null,f(o(s).characters.results,d=>(r(),a("div",null,[n(l,{character:d},null,8,["character"])]))),256))]),e("div",b,[e("div",null,"Showing 1-20 of "+y(o(s).characters.info.count),1),e("div",k,[e("div",null,[n(_,{to:"/page/2",class:"rounded bg-[#00b5cc] text-white px-2 py-1 hover:bg-[#e89ac7] text-sm"},{default:v(()=>[C("Next")]),_:1})])])])])}}};export{F as default};
