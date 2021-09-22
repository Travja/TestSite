import{S as t,i as e,s as a,e as o,k as s,c as n,a as l,n as d,d as r,b as c,E as i,f as u,F as h,T as m,U as f,V as p,W as v,X as g,Y as b,Z as x,_ as E,t as j,R as w,g as T,$ as y,w as q,x as _,u as k,a0 as M,a1 as O,r as U,a2 as F,J as N}from"../../chunks/vendor-8ff3792d.js";function R(t,{pending:e,error:a,result:o}){let s;async function n(n){const l=s={};n.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(r){if(!a)throw r;a(null,r,t)}}return t.addEventListener("submit",n),{destroy(){t.removeEventListener("submit",n)}}}function D(t,e,a){const o=t.slice();return o[6]=e[a],o[7]=e,o[8]=a,o}function I(t,e){let a,j,w,T,y,q,_,k,U,F,D,I,B,P,V,$,L,S,A,C,H,J,W,X,Y,Z,z,G,K=N;function Q(...t){return e[3](e[6],e[7],e[8],...t)}function tt(){return e[4](e[6],e[7],e[8])}function et(){return e[5](e[6])}return{key:t,first:null,c(){a=o("div"),j=o("form"),w=o("input"),y=s(),q=o("button"),F=s(),D=o("form"),I=o("input"),P=s(),V=o("button"),L=s(),S=o("form"),A=o("button"),W=s(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);j=n(e,"FORM",{action:!0,method:!0});var o=l(j);w=n(o,"INPUT",{type:!0,name:!0,class:!0}),y=d(o),q=n(o,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(r),o.forEach(r),F=d(e),D=n(e,"FORM",{class:!0,action:!0,method:!0});var s=l(D);I=n(s,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),P=d(s),V=n(s,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),s.forEach(r),L=d(e),S=n(e,"FORM",{action:!0,method:!0});var c=l(S);A=n(c,"BUTTON",{class:!0,"aria-label":!0}),l(A).forEach(r),c.forEach(r),W=d(e),e.forEach(r),this.h()},h(){c(w,"type","hidden"),c(w,"name","done"),w.value=T=e[6].done?"":"true",c(w,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",_="Mark todo as "+(e[6].done?"not done":"done")),c(j,"action",k="/todos/"+e[6].uid+".json?_method=patch"),c(j,"method","post"),c(I,"aria-label","Edit todo"),c(I,"type","text"),c(I,"name","text"),I.value=B=e[6].text,c(I,"class","svelte-dmxqmd"),c(V,"class","save svelte-dmxqmd"),c(V,"aria-label","Save todo"),c(D,"class","text svelte-dmxqmd"),c(D,"action",$="/todos/"+e[6].uid+".json?_method=patch"),c(D,"method","post"),c(A,"class","delete svelte-dmxqmd"),c(A,"aria-label","Delete todo"),A.disabled=C=e[6].pending_delete,c(S,"action",H="/todos/"+e[6].uid+".json?_method=delete"),c(S,"method","post"),c(a,"class","todo svelte-dmxqmd"),i(a,"done",e[6].done),this.first=a},m(t,o){u(t,a,o),h(a,j),h(j,w),h(j,y),h(j,q),h(a,F),h(a,D),h(D,I),h(D,P),h(D,V),h(a,L),h(a,S),h(S,A),h(a,W),Z=!0,z||(G=[m(U=R.call(null,j,{pending:Q,result:e[1]})),m(R.call(null,D,{result:e[1]})),m(J=R.call(null,S,{pending:tt,result:et}))],z=!0)},p(t,o){e=t,(!Z||1&o&&T!==(T=e[6].done?"":"true"))&&(w.value=T),(!Z||1&o&&_!==(_="Mark todo as "+(e[6].done?"not done":"done")))&&c(q,"aria-label",_),(!Z||1&o&&k!==(k="/todos/"+e[6].uid+".json?_method=patch"))&&c(j,"action",k),U&&f(U.update)&&1&o&&U.update.call(null,{pending:Q,result:e[1]}),(!Z||1&o&&B!==(B=e[6].text)&&I.value!==B)&&(I.value=B),(!Z||1&o&&$!==($="/todos/"+e[6].uid+".json?_method=patch"))&&c(D,"action",$),(!Z||1&o&&C!==(C=e[6].pending_delete))&&(A.disabled=C),(!Z||1&o&&H!==(H="/todos/"+e[6].uid+".json?_method=delete"))&&c(S,"action",H),J&&f(J.update)&&1&o&&J.update.call(null,{pending:tt,result:et}),1&o&&i(a,"done",e[6].done)},r(){Y=a.getBoundingClientRect()},f(){p(a),K(),v(a,Y)},a(){K(),K=g(a,Y,M,{duration:200})},i(t){Z||(t&&b((()=>{X||(X=x(a,O,{start:.7},!0)),X.run(1)})),Z=!0)},o(t){t&&(X||(X=x(a,O,{start:.7},!1)),X.run(0)),Z=!1},d(t){t&&r(a),t&&X&&X.end(),z=!1,E(G)}}}function B(t){let e,a,i,p,v,g,b,x,E,M,O,N,B=[],P=new Map,V=t[0];const $=t=>t[6].uid;for(let o=0;o<V.length;o+=1){let e=D(t,V,o),a=$(e);P.set(a,B[o]=I(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),p=j("Todos"),v=s(),g=o("form"),b=o("input"),E=s();for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){w('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),a=n(t,"DIV",{class:!0});var o=l(a);i=n(o,"H1",{});var s=l(i);p=T(s,"Todos"),s.forEach(r),v=d(o),g=n(o,"FORM",{class:!0,action:!0,method:!0});var c=l(g);b=n(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),E=d(o);for(let e=0;e<B.length;e+=1)B[e].l(o);o.forEach(r),this.h()},h(){document.title="Todos",c(b,"name","text"),c(b,"aria-label","Add todo"),c(b,"placeholder","+ tap to add a todo"),c(b,"class","svelte-dmxqmd"),c(g,"class","new svelte-dmxqmd"),c(g,"action","/todos.json"),c(g,"method","post"),c(a,"class","todos svelte-dmxqmd")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,p),h(a,v),h(a,g),h(g,b),h(a,E);for(let t=0;t<B.length;t+=1)B[t].m(a,null);M=!0,O||(N=m(x=R.call(null,g,{result:t[2]})),O=!0)},p(t,[e]){if(x&&f(x.update)&&1&e&&x.update.call(null,{result:t[2]}),3&e){V=t[0],U();for(let t=0;t<B.length;t+=1)B[t].r();B=y(B,e,$,1,t,V,P,a,F,I,null,D);for(let t=0;t<B.length;t+=1)B[t].a();q()}},i(t){if(!M){for(let t=0;t<V.length;t+=1)_(B[t]);M=!0}},o(t){for(let e=0;e<B.length;e+=1)k(B[e]);M=!1},d(t){t&&r(e),t&&r(a);for(let e=0;e<B.length;e+=1)B[e].d();O=!1,N()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function V(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,n)=>{a(0,e[s].done=!!n.get("done"),o)},(t,e,s)=>a(0,e[s].pending_delete=!0,o),t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}class $ extends t{constructor(t){super(),e(this,t,V,B,a,{todos:0})}}export{$ as default,P as load};
