import{s as Te,x as X}from"../chunks/scheduler.Cu_nLO_j.js";import{S as ye,i as De,s as r,e as a,v as Ie,z as Ye,d as l,f as n,c as A,a as p,k as f,w as ze,l as e,g as M,h as s,x as Be,q as Ce,o as We,y as Ge}from"../chunks/index.BqxeUPIv.js";import{T as Qe,c as Ee,g as Ue,H as Le}from"../chunks/ThemeSwitcher.Ccd5X2BC.js";import{K as Ve,M as Se,T as Ze}from"../chunks/KarateRed.BXzpB1ZV.js";import{K as He}from"../chunks/KamizaScroll.CsD5bfKd.js";import{P as we,Z as Fe}from"../chunks/Package.CKyYzW78.js";const Oe=""+new URL("../assets/Note.CzBy5R3q.avif",import.meta.url).href,Ke=""+new URL("../assets/DojoScroll.m8D4h82-.svg",import.meta.url).href,ke=""+new URL("../assets/Abacus.BzZcobUH.avif",import.meta.url).href,Ne=""+new URL("../assets/DojoLight.CI4TMwaQ.avif",import.meta.url).href,Je=""+new URL("../assets/DojoDark.CBEk9bnV.avif",import.meta.url).href,Re=""+new URL("../assets/TatamiDark.DLcwvEI5.avif",import.meta.url).href,Xe=""+new URL("../assets/TatamiLight.Cxs5uu0y.avif",import.meta.url).href,Pe="data:image/avif;base64,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",qe="data:image/avif;base64,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",{document:Me}=Ue;function _e(L){let T,h,m,d,oe=`<img src="${Le}" class="max-w-full max-h-[20vh] w-auto h-auto mt-2" alt="dojo node header with trees and the logo"/>`,P,E,y,V,o,D,re=`A user-friendly and visually pleasing dashboard for monitoring your Taiko node, proposer, or
		prover.`,q,I,ne="Get real-time insights with ease, from anywhere in the world.",_,u,Y,ie=`<a href="http://dashboard.dojonode.xyz" target="_blank"><span><span class="text-[#5CAA80] font-bold">dojo</span> <img src="${Ke}" loading="lazy" class="icon-big svelte-1h6jasj" alt="dojo flag"/></span></a> <div class="card text-left mt-8 mb-2 max-w-[20rem] svelte-1h6jasj"><h1 class="font-bold">node dashboard</h1> <h2 class="-mt-2">the main training area</h2> <p class="mt-3 card-subbody svelte-1h6jasj">view the progress and health of your node using our visual dashboard</p> <div class="flex flex-col items-start mt-6 card-subbody svelte-1h6jasj"><span>made for:</span> <div class="flex flex-row items-start"><img src="${qe}" class="icon-small mr-2 svelte-1h6jasj" alt="red karate uniform icon"/> <span class="">node operators</span></div> <div class="flex flex-row items-start"><img src="${we}" class="icon-small mr-2 svelte-1h6jasj" alt="red karate uniform icon"/> <span class="">proposers</span></div> <div class="flex flex-row items-start"><img src="${ke}" class="icon-small mr-2 svelte-1h6jasj" alt="red karate uniform icon"/> <span class="">provers</span></div></div></div>`,$,x,g,ce,S,ee,z,me,se,B,de="get to know your node in 3 easy steps",te,C,he=`<div class="flex md:flex-row flex-col items-start"><div class="text-left"><div class="flex items-center my-6"><img src="${Ve}" class="icon mr-4 svelte-1h6jasj" alt="red karate uniform icon"/> <div class="flex flex-col items-start"><span class="card-bold font-bold">enter the dojo</span> <span>to view the dashboard</span></div></div> <div class="flex items-center my-6"><img src="${Pe}" class="icon mr-4 svelte-1h6jasj" alt="red karate uniform icon"/> <div class="flex flex-col items-start"><span class="card-bold font-bold">click the satellite icon</span> <span>to change your settings</span></div></div> <div class="flex items-center my-6"><img src="${Se}" class="icon mr-4 svelte-1h6jasj" alt="red karate uniform icon"/> <div class="flex flex-col items-start"><span class="card-bold font-bold">enter your node’s IP address</span> <span>and let the dashboard do the rest</span></div></div></div> <div class="flex items-start text-left my-6 md:max-w-[20vw]"><img src="${Oe}" class="icon mr-4 svelte-1h6jasj" alt="red karate uniform icon"/> <div class="flex flex-col items-start"><span class="card-bold font-bold">bonus - get the full experience:</span> <span class="text-left md:max-w-[15vw]">deploy our Docker app to access system metrics, and enjoy a bonus self-hosted dashboard!</span></div></div></div>`,ae,W,ve='<a href="http://dashboard.dojonode.xyz" target="_blank" class="button svelte-1h6jasj">start monitoring</a> <a href="https://github.com/dojonode" target="_blank" class="button svelte-1h6jasj">visit our github</a>',Z,G,j,Q,pe=`<a href="/tatami"><span><span class="text-[#5CAA80] font-bold">tatami</span> <img src="${Ze}" class="icon-big svelte-1h6jasj" alt="tatami flag"/></span></a> <div class="card text-left mt-8 mb-2 max-w-[20rem] svelte-1h6jasj"><h1 class="font-bold">prover market</h1> <h2 class="-mt-2">specialized competition</h2> <p class="mt-3 card-subbody svelte-1h6jasj">see current provers who have volunteered for proposers, or submit your own</p> <div class="flex flex-col items-start mt-6 card-subbody svelte-1h6jasj"><span>made for:</span> <div class="flex flex-row items-start"><img src="${we}" class="icon-small mr-2 svelte-1h6jasj" alt="red karate uniform icon"/> <span class="">proposers</span></div> <div class="flex flex-row items-start"><img src="${ke}" class="icon-small mr-2 svelte-1h6jasj" alt="red karate uniform icon"/> <span class="">provers</span></div></div></div>`,Ae,b,v,fe,H,le,w,ue,F,k,xe=`<div class="flex md:flex-row flex-col items-center mt-16 gap-16 mb-24"><div class="flex flex-row items-center gap-8"><div class="card text-left mt-8 mb-2 w-64 max-w-[20rem] svelte-1h6jasj"><h1 class="font-bold">blockchain education</h1> <h2 class="-mt-2">a sitting area for discussion</h2> <p class="mt-3 card-subbody svelte-1h6jasj">explore the blockchain, crypto fundamentals, and the importance of node operating</p></div> <a href="/za"><span class="block icon-big svelte-1h6jasj"><span class="text-[#5CAA80] font-bold">za</span> <img src="${Fe}" class="icon-big svelte-1h6jasj" alt="tatami flag"/></span></a></div> <div class="flex flex-row items-center gap-8"><a href="/kamiza"><span class="block icon-big svelte-1h6jasj"><span class="text-[#5CAA80] font-bold">Kamiza</span> <img src="${He}" class="icon-big svelte-1h6jasj" alt="kamiza flag"/></span></a> <div class="card text-left mt-8 mb-2 w-56 max-w-[20rem] svelte-1h6jasj"><h1 class="font-bold">about us</h1> <h2 class="-mt-2">highest seat for instructors</h2> <p class="mt-3 card-subbody svelte-1h6jasj">learn about the team behind Dojo Node, and what lead us to building everything</p></div></div></div>`,U;return y=new Qe({}),{c(){T=r(),h=a("header"),m=a("span"),d=a("a"),d.innerHTML=oe,P=r(),E=a("div"),Ie(y.$$.fragment),V=r(),o=a("section"),D=a("h1"),D.textContent=re,q=r(),I=a("h2"),I.textContent=ne,_=r(),u=a("div"),Y=a("div"),Y.innerHTML=ie,$=r(),x=a("div"),g=a("img"),ee=r(),z=a("img"),se=r(),B=a("h1"),B.textContent=de,te=r(),C=a("div"),C.innerHTML=he,ae=r(),W=a("div"),W.innerHTML=ve,Z=r(),G=a("section"),j=a("div"),Q=a("div"),Q.innerHTML=pe,Ae=r(),b=a("div"),v=a("img"),le=r(),w=a("img"),F=r(),k=a("section"),k.innerHTML=xe,this.h()},l(t){Ye("svelte-1694fvg",Me.head).forEach(l),T=n(t),h=A(t,"HEADER",{class:!0});var ge=p(h);m=A(ge,"SPAN",{});var O=p(m);d=A(O,"A",{href:!0,"data-svelte-h":!0}),f(d)!=="svelte-1agkrsh"&&(d.innerHTML=oe),P=n(O),E=A(O,"DIV",{class:!0});var je=p(E);ze(y.$$.fragment,je),je.forEach(l),O.forEach(l),ge.forEach(l),V=n(t),o=A(t,"SECTION",{class:!0});var c=p(o);D=A(c,"H1",{class:!0,"data-svelte-h":!0}),f(D)!=="svelte-1mem7vr"&&(D.textContent=re),q=n(c),I=A(c,"H2",{class:!0,"data-svelte-h":!0}),f(I)!=="svelte-1g7nfe9"&&(I.textContent=ne),_=n(c),u=A(c,"DIV",{class:!0});var K=p(u);Y=A(K,"DIV",{class:!0,"data-svelte-h":!0}),f(Y)!=="svelte-mhh77m"&&(Y.innerHTML=ie),$=n(K),x=A(K,"DIV",{class:!0});var N=p(x);g=A(N,"IMG",{src:!0,class:!0,alt:!0}),ee=n(N),z=A(N,"IMG",{src:!0,class:!0,alt:!0}),N.forEach(l),K.forEach(l),se=n(c),B=A(c,"H1",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-1818f7h"&&(B.textContent=de),te=n(c),C=A(c,"DIV",{class:!0,"data-svelte-h":!0}),f(C)!=="svelte-y5d9np"&&(C.innerHTML=he),ae=n(c),W=A(c,"DIV",{class:!0,"data-svelte-h":!0}),f(W)!=="svelte-89p7pe"&&(W.innerHTML=ve),c.forEach(l),Z=n(t),G=A(t,"SECTION",{class:!0});var be=p(G);j=A(be,"DIV",{class:!0});var J=p(j);Q=A(J,"DIV",{class:!0,"data-svelte-h":!0}),f(Q)!=="svelte-dz6qt6"&&(Q.innerHTML=pe),Ae=n(J),b=A(J,"DIV",{class:!0});var R=p(b);v=A(R,"IMG",{src:!0,loading:!0,class:!0,alt:!0}),le=n(R),w=A(R,"IMG",{src:!0,loading:!0,class:!0,alt:!0}),R.forEach(l),J.forEach(l),be.forEach(l),F=n(t),k=A(t,"SECTION",{class:!0,"data-svelte-h":!0}),f(k)!=="svelte-wf3aa0"&&(k.innerHTML=xe),this.h()},h(){Me.title="dojo node",e(d,"href","/shomen"),e(E,"class","w-[60px] ml-auto mr-8 lg:mb-12 md:mb-4 mb-2"),e(h,"class","flex flex-col items-center justify-center w-[90%] m-auto"),e(D,"class","text-[#5CAA80] text-2xl text-balance"),e(I,"class","mt-2 text-[#E53325] text-base"),e(Y,"class","flex flex-col items-center"),X(g.src,ce=Ne)||e(g,"src",ce),e(g,"class",S="md:w-[350px] w-[250px] absolute top-16 left-4 "+(L[0]==="paper"?"z-10":"z-0")+" svelte-1h6jasj"),e(g,"alt","dojo dashboard thumbnail in light mode"),X(z.src,me=Je)||e(z,"src",me),e(z,"class","md:w-[350px] w-[250px] absolute top-28 left-28 svelte-1h6jasj"),e(z,"alt","dojo dashboard thumbnail in dark mode"),e(x,"class","stacked-thumbnails svelte-1h6jasj"),e(u,"class","flex md:flex-row flex-col items-center mt-16 gap-16"),e(B,"class","text-[#5CAA80] mt-16 text-2xl mb-4"),e(C,"class","card svelte-1h6jasj"),e(W,"class","mt-12 flex md:flex-row flex-col sm:gap-16 gap-5"),e(o,"class","svelte-1h6jasj"),e(Q,"class","flex flex-col items-center"),X(v.src,fe=Xe)||e(v,"src",fe),e(v,"loading","lazy"),e(v,"class",H="md:w-[350px] w-[250px] absolute top-16 left-4 "+(L[0]==="paper"?"z-10":"z-0")+" svelte-1h6jasj"),e(v,"alt","tatami provermarket thumbnail in light mode"),X(w.src,ue=Re)||e(w,"src",ue),e(w,"loading","lazy"),e(w,"class","md:w-[350px] w-[250px] absolute top-28 left-28 svelte-1h6jasj"),e(w,"alt","tatami provermarket thumbnail in dark mode"),e(b,"class","stacked-thumbnails svelte-1h6jasj"),e(j,"class","flex md:flex-row flex-col items-center mt-16 gap-16 mb-24"),e(G,"class","svelte-1h6jasj"),e(k,"class","svelte-1h6jasj")},m(t,i){M(t,T,i),M(t,h,i),s(h,m),s(m,d),s(m,P),s(m,E),Be(y,E,null),M(t,V,i),M(t,o,i),s(o,D),s(o,q),s(o,I),s(o,_),s(o,u),s(u,Y),s(u,$),s(u,x),s(x,g),s(x,ee),s(x,z),s(o,se),s(o,B),s(o,te),s(o,C),s(o,ae),s(o,W),M(t,Z,i),M(t,G,i),s(G,j),s(j,Q),s(j,Ae),s(j,b),s(b,v),s(b,le),s(b,w),M(t,F,i),M(t,k,i),U=!0},p(t,[i]){(!U||i&1&&S!==(S="md:w-[350px] w-[250px] absolute top-16 left-4 "+(t[0]==="paper"?"z-10":"z-0")+" svelte-1h6jasj"))&&e(g,"class",S),(!U||i&1&&H!==(H="md:w-[350px] w-[250px] absolute top-16 left-4 "+(t[0]==="paper"?"z-10":"z-0")+" svelte-1h6jasj"))&&e(v,"class",H)},i(t){U||(Ce(y.$$.fragment,t),U=!0)},o(t){We(y.$$.fragment,t),U=!1},d(t){t&&(l(T),l(h),l(V),l(o),l(Z),l(G),l(F),l(k)),Ge(y)}}}function $e(L,T,h){let m="";return Ee.subscribe(d=>{document.body.setAttribute("data-theme",d),h(0,m=d)}),[m]}class os extends ye{constructor(T){super(),De(this,T,$e,_e,Te,{})}}export{os as component};
