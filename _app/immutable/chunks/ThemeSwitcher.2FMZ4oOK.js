import{s as B,n as L,r as K,c as N}from"./scheduler.Cu_nLO_j.js";import{S as O,i as V,e as d,s as $,c as h,a as b,k as C,f as H,d as f,l as c,z as k,g as x,h as u,A as M}from"./index.BaQeyhHX.js";import{w as A}from"./index.DLvjjSaA.js";const G=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,J=""+new URL("../assets/Header.CH_nWUIM.avif",import.meta.url).href,Q=""+new URL("../assets/KarateRed.sUACsY4H.avif",import.meta.url).href,ee=""+new URL("../assets/TatamiScroll.XZ3fl9x8.svg",import.meta.url).href,te=""+new URL("../assets/Map.Coe76TIk.avif",import.meta.url).href;function y(e,t){try{localStorage.setItem(e,t)}catch(s){console.error(`Error setting "${e}" in localStorage:`,s)}}function E(e){try{return localStorage.getItem(e)}catch(t){return console.error(`Error getting "${e}" from localStorage:`,t),null}}const W=""+new URL("../assets/DarkMode.CS-gbWRt.avif",import.meta.url).href,Z=""+new URL("../assets/CremeMode.Dw5MiBZ_.avif",import.meta.url).href;function j(e){let t,s,a,p=`<img src="${Z}" alt="creme/paper mode icon"/>`,v,l,_=`<img src="${W}" alt="dark mode icon"/>`,w,i,m,g,I,D;return{c(){t=d("div"),s=d("div"),a=d("button"),a.innerHTML=p,v=$(),l=d("button"),l.innerHTML=_,w=$(),i=d("button"),m=d("div"),this.h()},l(o){t=h(o,"DIV",{class:!0});var n=b(t);s=h(n,"DIV",{class:!0});var T=b(s);a=h(T,"BUTTON",{class:!0,"data-svelte-h":!0}),C(a)!=="svelte-1asekna"&&(a.innerHTML=p),v=H(T),l=h(T,"BUTTON",{class:!0,"data-svelte-h":!0}),C(l)!=="svelte-1d715wd"&&(l.innerHTML=_),T.forEach(f),w=H(n),i=h(n,"BUTTON",{class:!0});var U=b(i);m=h(U,"DIV",{class:!0,style:!0}),b(m).forEach(f),U.forEach(f),n.forEach(f),this.h()},h(){c(a,"class","theme svelte-17atlnp"),k(a,"active",e[0]===r.Paper),c(l,"class","theme svelte-17atlnp"),k(l,"active",e[0]===r.Dark),c(s,"class","mt-2 inline-flex"),c(m,"class","pill-fill svelte-17atlnp"),c(m,"style",g=`left: ${e[0]===r.Paper?"0%":"50%"}`),c(i,"class","pill-indicator svelte-17atlnp"),c(t,"class","flex flex-col justify-between items-center")},m(o,n){x(o,t,n),u(t,s),u(s,a),u(s,v),u(s,l),u(t,w),u(t,i),u(i,m),I||(D=[M(a,"click",e[1]),M(l,"click",e[2]),M(i,"click",q)],I=!0)},p(o,[n]){n&1&&k(a,"active",o[0]===r.Paper),n&1&&k(l,"active",o[0]===r.Dark),n&1&&g!==(g=`left: ${o[0]===r.Paper?"0%":"50%"}`)&&c(m,"style",g)},i:L,o:L,d(o){o&&f(t),I=!1,K(D)}}}const r={Dark:"dark",Paper:"paper"};let P=E("theme");const S=A(P||r.Paper);function R(e){S.set(e),y("theme",e)}function q(){let e=E("theme")===r.Paper?r.Dark:r.Paper;S.set(e),y("theme",e)}function z(e,t,s){let a,p=L;return N(e,S,_=>s(0,a=_)),e.$$.on_destroy.push(()=>p()),[a,()=>R(r.Paper),()=>R(r.Dark)]}class ae extends O{constructor(t){super(),V(this,t,z,j,B,{})}}export{J as H,Q as K,te as M,ae as T,ee as a,S as c,G as g};
