import{s as $e,x as se,n as je,r as nt}from"../chunks/scheduler.Cu_nLO_j.js";import{S as et,i as tt,e as i,s as x,t as ue,c as m,a as v,k as de,f as E,d as c,b as pe,l as r,g as z,h as a,j as ve,v as Ae,z as ot,w as De,x as Me,A as Oe,B as he,C as ct,q as te,o as ie,p as st,y as Pe,n as Re,r as lt,E as it}from"../chunks/index.DOWJvM5h.js";import{T as mt,c as ft,g as ut,H as dt}from"../chunks/ThemeSwitcher.S_09n8aQ.js";import{C as pt}from"../chunks/pocketbase.es.BMXKqRQ_.js";import{K as ht,T as vt}from"../chunks/KarateRed.xd_S-qV1.js";import{T as rt,S as _t}from"../chunks/Submit.DDUZhCJM.js";import{M as wt}from"../chunks/Map.mIm7yNXk.js";/* empty css                                                         */function qe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const Fe="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20288%20288'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%239a989e;%20stroke-width:%200px;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m4.57,226.06C38.27,158.63,71.93,91.29,105.74,23.66c15.76-31.54,60.75-31.54,76.52,0l101.17,202.41c14.22,28.46-6.46,61.94-38.26,61.94H42.83c-31.8,0-52.48-33.48-38.26-61.94Z'/%3e%3c/svg%3e",Ze="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20288%20288'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23f2a99d;%20stroke-width:%200px;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m4.57,226.06C38.27,158.63,71.93,91.29,105.74,23.66c15.76-31.54,60.75-31.54,76.52,0l101.17,202.41c14.22,28.46-6.46,61.94-38.26,61.94H42.83c-31.8,0-52.48-33.48-38.26-61.94Z'/%3e%3c/svg%3e",gt=""+new URL("../assets/KarateBlue.CqdpdrOE.avif",import.meta.url).href,bt=""+new URL("../assets/KaratePink.DPKpILLM.avif",import.meta.url).href,xt=""+new URL("../assets/KarateGreen.CpfLj3yD.avif",import.meta.url).href,Et=""+new URL("../assets/KarateYellow.DGpzy_ao.avif",import.meta.url).href;function It(n){let t,l,e,s="prover",d,f,p,u,w,P,I,ae,q,T,C,A="min proof fee",V,D,Z=n[0].minimumGas+"",_,h,F,N,K,j,Y,k,H,J="address",Q,O,W=n[0].url+"",R;return{c(){t=i("div"),l=i("div"),e=i("h3"),e.textContent=s,d=x(),f=i("img"),u=x(),w=i("div"),P=i("div"),I=i("img"),q=x(),T=i("div"),C=i("p"),C.textContent=A,V=x(),D=i("p"),_=ue(Z),h=ue(" wei"),F=x(),N=i("div"),K=i("img"),Y=x(),k=i("div"),H=i("p"),H.textContent=J,Q=x(),O=i("p"),R=ue(W),this.h()},l(y){t=m(y,"DIV",{class:!0});var M=v(t);l=m(M,"DIV",{class:!0});var ne=v(l);e=m(ne,"H3",{class:!0,"data-svelte-h":!0}),de(e)!=="svelte-1cfb05m"&&(e.textContent=s),d=E(ne),f=m(ne,"IMG",{src:!0,alt:!0}),ne.forEach(c),u=E(M),w=m(M,"DIV",{class:!0});var le=v(w);P=m(le,"DIV",{class:!0});var S=v(P);I=m(S,"IMG",{src:!0,class:!0,alt:!0}),q=E(S),T=m(S,"DIV",{class:!0});var X=v(T);C=m(X,"P",{class:!0,"data-svelte-h":!0}),de(C)!=="svelte-1nwsy8z"&&(C.textContent=A),V=E(X),D=m(X,"P",{class:!0});var re=v(D);_=pe(re,Z),h=pe(re," wei"),re.forEach(c),X.forEach(c),S.forEach(c),F=E(le),N=m(le,"DIV",{class:!0});var $=v(N);K=m($,"IMG",{src:!0,class:!0,alt:!0}),Y=E($),k=m($,"DIV",{class:!0});var U=v(k);H=m(U,"P",{class:!0,"data-svelte-h":!0}),de(H)!=="svelte-hrpp7l"&&(H.textContent=J),Q=E(U),O=m(U,"P",{class:!0});var B=v(O);R=pe(B,W),B.forEach(c),U.forEach(c),$.forEach(c),le.forEach(c),M.forEach(c),this.h()},h(){r(e,"class","modal-title font-bold text-xl text-[#E53325]"),se(f.src,p=n[1])||r(f,"src",p),r(f,"alt","icon"),r(l,"class","w-[85px]"),se(I.src,ae=rt)||r(I,"src",ae),r(I,"class","icon-small w-8 mr-2"),r(I,"alt","red karate uniform icon"),r(C,"class",""),r(D,"class","text-[hsl(var(--twc-cardSubBodyColor))]"),r(T,"class","flex flex-col text-left"),r(P,"class","flex flex-row items-center"),se(K.src,j=wt)||r(K,"src",j),r(K,"class","icon-small w-8 mr-2"),r(K,"alt","red karate uniform icon"),r(H,"class",""),r(O,"class","truncate text-[hsl(var(--twc-cardSubBodyColor))]"),r(k,"class","flex flex-col text-left"),r(N,"class","flex flex-row items-center"),r(w,"class","flex flex-col items-start mt-4 w-[150px] ml-auto card-subbody overflow-clip gap-2"),r(t,"class","modal shadow-md flex content-between items-center justify-around flex-row svelte-1023zh")},m(y,M){z(y,t,M),a(t,l),a(l,e),a(l,d),a(l,f),a(t,u),a(t,w),a(w,P),a(P,I),a(P,q),a(P,T),a(T,C),a(T,V),a(T,D),a(D,_),a(D,h),a(w,F),a(w,N),a(N,K),a(N,Y),a(N,k),a(k,H),a(k,Q),a(k,O),a(O,R)},p(y,[M]){M&2&&!se(f.src,p=y[1])&&r(f,"src",p),M&1&&Z!==(Z=y[0].minimumGas+"")&&ve(_,Z),M&1&&W!==(W=y[0].url+"")&&ve(R,W)},i:je,o:je,d(y){y&&c(t)}}}function Ct(n,t,l){let{endpoint:e}=t,s;n.$$set=d=>{"endpoint"in d&&l(0,e=d.endpoint)};{const d=Math.floor(Math.random()*10);d===0?l(1,s=ht):d>=1&&d<=2?l(1,s=xt):d>=3&&d<=4?l(1,s=Et):d>=5&&d<=6?l(1,s=gt):l(1,s=bt)}return[e,s]}class at extends et{constructor(t){super(),tt(this,t,Ct,It,$e,{endpoint:0})}}const kt=""+new URL("../assets/CheckMark.CZlts7nq.avif",import.meta.url).href,yt=""+new URL("../assets/Copy.ApILFNa4.avif",import.meta.url).href,{document:Te}=ut;function Ye(n,t,l){const e=n.slice();return e[18]=t[l],e}function Je(n){let t,l;return{c(){t=i("span"),l=ue(n[2]),this.h()},l(e){t=m(e,"SPAN",{class:!0});var s=v(t);l=pe(s,n[2]),s.forEach(c),this.h()},h(){r(t,"class","text-[#E53325] text-sm mb-3 md:mt-2 -mt-2")},m(e,s){z(e,t,s),a(t,l)},p(e,s){s&4&&ve(l,e[2])},d(e){e&&c(t)}}}function Qe(n){let t,l;return{c(){t=i("span"),l=ue(n[3]),this.h()},l(e){t=m(e,"SPAN",{class:!0});var s=v(t);l=pe(s,n[3]),s.forEach(c),this.h()},h(){r(t,"class","text-[#5CAA80] text-sm mb-3 md:mt-2 -mt-2")},m(e,s){z(e,t,s),a(t,l)},p(e,s){s&8&&ve(l,e[3])},d(e){e&&c(t)}}}function Tt(n){let t,l;return{c(){t=i("img"),this.h()},l(e){t=m(e,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){se(t.src,l=yt)||r(t,"src",l),r(t,"class","w-8 md:mb-2"),r(t,"alt","red karate uniform icon")},m(e,s){z(e,t,s)},d(e){e&&c(t)}}}function At(n){let t,l;return{c(){t=i("img"),this.h()},l(e){t=m(e,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){se(t.src,l=kt)||r(t,"src",l),r(t,"class","w-8 md:mb-2"),r(t,"alt","check mark icon")},m(e,s){z(e,t,s)},d(e){e&&c(t)}}}function We(n){let t,l,e=qe(n[0]),s=[];for(let f=0;f<e.length;f+=1)s[f]=Xe(Ye(n,e,f));const d=f=>ie(s[f],1,1,()=>{s[f]=null});return{c(){for(let f=0;f<s.length;f+=1)s[f].c();t=Re()},l(f){for(let p=0;p<s.length;p+=1)s[p].l(f);t=Re()},m(f,p){for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(f,p);z(f,t,p),l=!0},p(f,p){if(p&1){e=qe(f[0]);let u;for(u=0;u<e.length;u+=1){const w=Ye(f,e,u);s[u]?(s[u].p(w,p),te(s[u],1)):(s[u]=Xe(w),s[u].c(),te(s[u],1),s[u].m(t.parentNode,t))}for(lt(),u=e.length;u<s.length;u+=1)d(u);st()}},i(f){if(!l){for(let p=0;p<e.length;p+=1)te(s[p]);l=!0}},o(f){s=s.filter(Boolean);for(let p=0;p<s.length;p+=1)ie(s[p]);l=!1},d(f){f&&c(t),it(s,f)}}}function Xe(n){let t,l;return t=new at({props:{endpoint:n[18]}}),{c(){Ae(t.$$.fragment)},l(e){De(t.$$.fragment,e)},m(e,s){Me(t,e,s),l=!0},p(e,s){const d={};s&1&&(d.endpoint=e[18]),t.$set(d)},i(e){l||(te(t.$$.fragment,e),l=!0)},o(e){ie(t.$$.fragment,e),l=!1},d(e){Pe(t,e)}}}function Dt(n){let t,l,e,s,d,f=`<img src="${dt}" class="max-w-full max-h-[20vh] w-auto h-auto mt-2" alt="dojo node header with trees and the logo"/>`,p,u,w,P,I,ae=`<div class="mx-auto relative"><span><span class="text-[#5CAA80] font-bold">tatami</span> <img src="${vt}" class="icon-big m-auto svelte-z3ie61" alt="tatami flag"/></span> <div class="card md:absolute md:top-0 md:left-36 w-max text-balance md:text-left mt-8 mb-2 max-w-[20rem] svelte-z3ie61"><h1 class="font-bold">taiko prover market</h1> <h2 class="-mt-2">specialized competition</h2></div></div>`,q,T,C,A,V,D,Z=`<img src="${_t}" class="w-8 mb-2" alt="submit postal icon"/> <span class="hidden md:block">submit endpoint</span>`,_,h,F,N,K,j,Y,k,H,J,Q=n[6]?"copied!":"copy All",O,W,R,y,M,ne,le,S,X,re,$,U,B,_e,me,oe,ce,ye,Ge;w=new mt({});let G=n[2]!=""&&Je(n),L=n[3]!=""&&Qe(n);function Le(o,g){return o[6]?At:Tt}let we=Le(n),ee=we(n),b=n[0].length>0&&We(n);return oe=new at({props:{endpoint:n[10]}}),{c(){t=i("meta"),l=x(),e=i("header"),s=i("span"),d=i("a"),d.innerHTML=f,p=x(),u=i("div"),Ae(w.$$.fragment),P=x(),I=i("section"),I.innerHTML=ae,q=x(),T=i("section"),C=i("div"),A=i("div"),V=i("div"),D=i("button"),D.innerHTML=Z,_=x(),h=i("input"),F=x(),G&&G.c(),N=x(),L&&L.c(),K=x(),j=i("div"),Y=i("div"),k=i("button"),ee.c(),H=x(),J=i("span"),O=ue(Q),W=x(),R=i("div"),y=i("button"),M=i("img"),le=x(),S=i("img"),$=x(),U=i("section"),B=i("div"),b&&b.c(),_e=x(),me=i("div"),Ae(oe.$$.fragment),this.h()},l(o){const g=ot("svelte-100kyiq",Te.head);t=m(g,"META",{name:!0,content:!0}),g.forEach(c),l=E(o),e=m(o,"HEADER",{class:!0});var Se=v(e);s=m(Se,"SPAN",{});var ge=v(s);d=m(ge,"A",{href:!0,"data-svelte-h":!0}),de(d)!=="svelte-1agkrsh"&&(d.innerHTML=f),p=E(ge),u=m(ge,"DIV",{class:!0});var Ve=v(u);De(w.$$.fragment,Ve),Ve.forEach(c),ge.forEach(c),Se.forEach(c),P=E(o),I=m(o,"SECTION",{class:!0,"data-svelte-h":!0}),de(I)!=="svelte-pdul06"&&(I.innerHTML=ae),q=E(o),T=m(o,"SECTION",{class:!0});var ze=v(T);C=m(ze,"DIV",{class:!0});var be=v(C);A=m(be,"DIV",{class:!0});var fe=v(A);V=m(fe,"DIV",{class:!0});var xe=v(V);D=m(xe,"BUTTON",{class:!0,"data-svelte-h":!0}),de(D)!=="svelte-qmi3f5"&&(D.innerHTML=Z),_=E(xe),h=m(xe,"INPUT",{class:!0,type:!0}),xe.forEach(c),F=E(fe),G&&G.l(fe),N=E(fe),L&&L.l(fe),fe.forEach(c),K=E(be),j=m(be,"DIV",{class:!0});var Ee=v(j);Y=m(Ee,"DIV",{});var Ne=v(Y);k=m(Ne,"BUTTON",{class:!0});var Ie=v(k);ee.l(Ie),H=E(Ie),J=m(Ie,"SPAN",{class:!0});var Be=v(J);O=pe(Be,Q),Be.forEach(c),Ie.forEach(c),Ne.forEach(c),W=E(Ee),R=m(Ee,"DIV",{class:!0});var He=v(R);y=m(He,"BUTTON",{class:!0});var Ce=v(y);M=m(Ce,"IMG",{src:!0,class:!0,alt:!0}),le=E(Ce),S=m(Ce,"IMG",{src:!0,class:!0,alt:!0}),Ce.forEach(c),He.forEach(c),Ee.forEach(c),be.forEach(c),ze.forEach(c),$=E(o),U=m(o,"SECTION",{class:!0});var Ue=v(U);B=m(Ue,"DIV",{id:!0,class:!0});var ke=v(B);b&&b.l(ke),_e=E(ke),me=m(ke,"DIV",{class:!0});var Ke=v(me);De(oe.$$.fragment,Ke),Ke.forEach(c),ke.forEach(c),Ue.forEach(c),this.h()},h(){Te.title="prover market page",r(t,"name","description"),r(t,"content","TODO:"),r(d,"href","/shomen"),r(u,"class","w-[60px] ml-auto mr-8 lg:mb-6 md:mb-4 mb-2"),r(e,"class","flex justify-center w-[90%] m-auto"),r(I,"class","svelte-z3ie61"),r(D,"class","flex flex-col items-center md:mb-6"),r(h,"class","shadow appearance-none rounded-full text-[hsl(var(--twc-cardSubBodyColor))] bg-[hsl(var(--twc-inputAccentColor))] w-full px-3 focus:outline-none focus:shadow-outline leading-none"),r(h,"type","text"),r(V,"class","flex md:flex-col w-full md:w-auto flex-row-reverse md:items-center items-start"),r(A,"class","flex flex-col"),r(J,"class","hidden md:block"),r(k,"class","flex flex-col items-center md:mb-6"),se(M.src,ne=rt)||r(M,"src",ne),r(M,"class","w-6 mr-2"),r(M,"alt","ticket icon"),se(S.src,X=n[5]==="minimumGas"?Ze:Fe)||r(S,"src",X),r(S,"class",re="w-4 mr-2 sorting-arrow "+(n[4]&&n[5]==="minimumGas"?"rotate-180":"")+" svelte-z3ie61"),r(S,"alt","sorting arrow icon"),r(y,"class","flex w-[65px] items-center bg-[hsl(var(--twc-inputAccentColor))] rounded-full p-2"),r(R,"class","flex gap-2"),r(j,"class","flex md:flex-col items-center w-full md:w-auto justify-between"),r(C,"class","flex md:flex-row flex-col max-w-[820px] w-full justify-around items-center"),r(T,"class","svelte-z3ie61"),r(me,"class","invisible h-5"),r(B,"id","cards"),r(B,"class","max-w-[920px] mt-4 flex flex-wrap justify-center overflow-y-clip"),r(U,"class","svelte-z3ie61")},m(o,g){a(Te.head,t),z(o,l,g),z(o,e,g),a(e,s),a(s,d),a(s,p),a(s,u),Me(w,u,null),z(o,P,g),z(o,I,g),z(o,q,g),z(o,T,g),a(T,C),a(C,A),a(A,V),a(V,D),a(V,_),a(V,h),Oe(h,n[1]),a(A,F),G&&G.m(A,null),a(A,N),L&&L.m(A,null),a(C,K),a(C,j),a(j,Y),a(Y,k),ee.m(k,null),a(k,H),a(k,J),a(J,O),a(j,W),a(j,R),a(R,y),a(y,M),a(y,le),a(y,S),z(o,$,g),z(o,U,g),a(U,B),b&&b.m(B,null),a(B,_e),a(B,me),Me(oe,me,null),ce=!0,ye||(Ge=[he(D,"click",n[7]),he(h,"submit",ct(n[7])),he(h,"input",n[11]),he(k,"click",n[8]),he(y,"click",n[12])],ye=!0)},p(o,[g]){g&2&&h.value!==o[1]&&Oe(h,o[1]),o[2]!=""?G?G.p(o,g):(G=Je(o),G.c(),G.m(A,N)):G&&(G.d(1),G=null),o[3]!=""?L?L.p(o,g):(L=Qe(o),L.c(),L.m(A,null)):L&&(L.d(1),L=null),we!==(we=Le(o))&&(ee.d(1),ee=we(o),ee&&(ee.c(),ee.m(k,H))),(!ce||g&64)&&Q!==(Q=o[6]?"copied!":"copy All")&&ve(O,Q),(!ce||g&32&&!se(S.src,X=o[5]==="minimumGas"?Ze:Fe))&&r(S,"src",X),(!ce||g&48&&re!==(re="w-4 mr-2 sorting-arrow "+(o[4]&&o[5]==="minimumGas"?"rotate-180":"")+" svelte-z3ie61"))&&r(S,"class",re),o[0].length>0?b?(b.p(o,g),g&1&&te(b,1)):(b=We(o),b.c(),te(b,1),b.m(B,_e)):b&&(lt(),ie(b,1,1,()=>{b=null}),st())},i(o){ce||(te(w.$$.fragment,o),te(b),te(oe.$$.fragment,o),ce=!0)},o(o){ie(w.$$.fragment,o),ie(b),ie(oe.$$.fragment,o),ce=!1},d(o){o&&(c(l),c(e),c(P),c(I),c(q),c(T),c($),c(U)),c(t),Pe(w),G&&G.d(),L&&L.d(),ee.d(),b&&b.d(),Pe(oe),ye=!1,nt(Ge)}}}function Mt(n,t,l){let e=[],s="",d="",f="",p=!0,u="minimumGas",w=!1;const P=new pt("https://provers.dojonode.xyz");async function I(){l(0,e=await P.send("/validProvers",{})),e.sort((_,h)=>h.minimumGas-_.minimumGas)}I();async function ae(){try{if(s==="")return;if(l(2,d=""),l(1,s=s.replace(/\/+$/,"")),q(s)){l(2,d="endpoint already exists!");return}await P.collection("prover_endpoints").create({url:s}),I(),l(1,s=""),l(3,f="endpoint successfully added!")}catch(_){console.error(_),l(2,d="endpoint is not valid or reachable!")}}function q(_){return e.find(h=>h.url===_)!==void 0}function T(){let _=e.map(h=>h.url).join(",");if(navigator.clipboard)navigator.clipboard.writeText(_).then(()=>C()).catch(function(){console.error("could not copy to clipboard!")});else{const h=document.createElement("textarea");h.value=_,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),C()}}function C(){l(6,w=!0),setTimeout(()=>{l(6,w=!1)},3e3)}function A(_){u===_?l(4,p=!p):(l(5,u=_),l(4,p=!0)),l(0,e=[...e].sort((h,F)=>p?F[_]-h[_]:h[_]-F[_]))}ft.subscribe(_=>{document.body.setAttribute("data-theme",_)});let V={url:"https://example.com/api",minimumProofFee:10};function D(){s=this.value,l(1,s)}return[e,s,d,f,p,u,w,ae,T,A,V,D,()=>A("minimumGas")]}class Ht extends et{constructor(t){super(),tt(this,t,Mt,Dt,$e,{})}}export{Ht as component};
