import{D as s,S as a,i as e,s as t,e as r,t as l,c,a as i,g as n,d as o,b as h,E as v,f,F as g,k as u,G as p,n as d,H as m,I as $,J as b,K as E,L as _,M as A,j as I,m as x,o as M,x as j,u as k,v as z,N as D,O as w,P as S,Q as y}from"../chunks/vendor-8ff3792d.js";/* empty css                                                     */const G={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};var L="/_app/assets/github-logo-0ac96ec2.svg";function H(s,a,e){const t=s.slice();return t[2]=a[e],t}function T(s){let a,e,t,u,p=s[2].title+"";return{c(){a=r("li"),e=r("a"),t=l(p),this.h()},l(s){a=c(s,"LI",{class:!0});var r=i(a);e=c(r,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var l=i(e);t=n(l,p),l.forEach(o),r.forEach(o),this.h()},h(){h(e,"sveltekit:prefetch",""),h(e,"href",u=s[2].path),h(e,"class","svelte-nu2t2i"),h(a,"class","svelte-nu2t2i"),v(a,"active",s[0].path===s[2].path)},m(s,r){f(s,a,r),g(a,e),g(e,t)},p(s,e){3&e&&v(a,"active",s[0].path===s[2].path)},d(s){s&&o(a)}}}function V(s){let a,e,t,l,n,v,_,A,I,x,M,j,k,z,D,w,S,y,G,V=s[1],q=[];for(let r=0;r<V.length;r+=1)q[r]=T(H(s,V,r));return{c(){a=r("header"),e=r("div"),t=r("a"),l=r("img"),v=u(),_=r("nav"),A=p("svg"),I=p("path"),x=u(),M=r("ul");for(let s=0;s<q.length;s+=1)q[s].c();j=u(),k=p("svg"),z=p("path"),D=u(),w=r("div"),S=r("a"),y=r("img"),this.h()},l(s){a=c(s,"HEADER",{class:!0});var r=i(a);e=c(r,"DIV",{class:!0});var n=i(e);t=c(n,"A",{href:!0,class:!0});var h=i(t);l=c(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(o),n.forEach(o),v=d(r),_=c(r,"NAV",{class:!0});var f=i(_);A=m(f,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var g=i(A);I=m(g,"path",{d:!0,class:!0}),i(I).forEach(o),g.forEach(o),x=d(f),M=c(f,"UL",{class:!0});var u=i(M);for(let a=0;a<q.length;a+=1)q[a].l(u);u.forEach(o),j=d(f),k=m(f,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var p=i(k);z=m(p,"path",{d:!0,class:!0}),i(z).forEach(o),p.forEach(o),f.forEach(o),D=d(r),w=c(r,"DIV",{class:!0});var $=i(w);S=c($,"A",{href:!0,class:!0});var b=i(S);y=c(b,"IMG",{src:!0,alt:!0,class:!0}),b.forEach(o),$.forEach(o),r.forEach(o),this.h()},h(){$(l.src,n="/_app/assets/svelte-logo-87df40b8.svg")||h(l,"src","/_app/assets/svelte-logo-87df40b8.svg"),h(l,"alt","SvelteKit"),h(l,"class","svelte-nu2t2i"),h(t,"href","https://kit.svelte.dev"),h(t,"class","svelte-nu2t2i"),h(e,"class","corner svelte-nu2t2i"),h(I,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),h(I,"class","svelte-nu2t2i"),h(A,"viewBox","0 0 2 3"),h(A,"aria-hidden","true"),h(A,"class","svelte-nu2t2i"),h(M,"class","svelte-nu2t2i"),h(z,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),h(z,"class","svelte-nu2t2i"),h(k,"viewBox","0 0 2 3"),h(k,"aria-hidden","true"),h(k,"class","svelte-nu2t2i"),h(_,"class","svelte-nu2t2i"),$(y.src,G=L)||h(y,"src","/_app/assets/github-logo-0ac96ec2.svg"),h(y,"alt","GitHub"),h(y,"class","svelte-nu2t2i"),h(S,"href","https://github.com/Travja"),h(S,"class","svelte-nu2t2i"),h(w,"class","corner svelte-nu2t2i"),h(a,"class","svelte-nu2t2i")},m(s,r){f(s,a,r),g(a,e),g(e,t),g(t,l),g(a,v),g(a,_),g(_,A),g(A,I),g(_,x),g(_,M);for(let a=0;a<q.length;a+=1)q[a].m(M,null);g(_,j),g(_,k),g(k,z),g(a,D),g(a,w),g(w,S),g(S,y)},p(s,[a]){if(3&a){let e;for(V=s[1],e=0;e<V.length;e+=1){const t=H(s,V,e);q[e]?q[e].p(t,a):(q[e]=T(t),q[e].c(),q[e].m(M,null))}for(;e<q.length;e+=1)q[e].d(1);q.length=V.length}},i:b,o:b,d(s){s&&o(a),E(q,s)}}}function q(s,a,e){let t;_(s,G,(s=>e(0,t=s)));return[t,[{path:"/",title:"Home"},{path:"/bugs",title:"Bug Tracker"},{path:"/about",title:"About"}]]}class B extends a{constructor(s){super(),e(this,s,q,V,t,{})}}function C(s){let a,e,t,v,u,p;return{c(){a=r("a"),e=r("img"),v=l(" Join my "),u=r("span"),p=l("Discord"),this.h()},l(s){a=c(s,"A",{href:!0,style:!0,class:!0});var t=i(a);e=c(t,"IMG",{src:!0,class:!0,alt:!0}),v=n(t," Join my "),u=c(t,"SPAN",{class:!0});var r=i(u);p=n(r,"Discord"),r.forEach(o),t.forEach(o),this.h()},h(){$(e.src,t="/_app/assets/discord-e345a15d.svg")||h(e,"src","/_app/assets/discord-e345a15d.svg"),h(e,"class","discord svelte-18i8r50"),h(e,"alt","Discord"),h(u,"class","highlight svelte-18i8r50"),h(a,"href","https://discord.gg/VwrK3jj"),A(a,"--font-size",s[0]+"em"),A(a,"--img-size",1.2*s[0]+"em"),h(a,"class","svelte-18i8r50")},m(s,t){f(s,a,t),g(a,e),g(a,v),g(a,u),g(u,p)},p(s,[e]){1&e&&A(a,"--font-size",s[0]+"em"),1&e&&A(a,"--img-size",1.2*s[0]+"em")},i:b,o:b,d(s){s&&o(a)}}}function N(s,a,e){let{fontSize:t}=a;return s.$$set=s=>{"fontSize"in s&&e(0,t=s.fontSize)},[t]}class F extends a{constructor(s){super(),e(this,s,N,C,t,{fontSize:0})}}function J(s){let a,e,t,v,p,m,E,_,A,D,w,S,y,G,H,T;return S=new F({props:{fontSize:"1"}}),{c(){a=r("footer"),e=r("hr"),t=u(),v=r("div"),p=r("a"),m=r("img"),_=u(),A=r("a"),D=l("Contact Me!"),w=u(),I(S.$$.fragment),y=u(),G=r("div"),H=l("© 2021 Travja"),this.h()},l(s){a=c(s,"FOOTER",{class:!0});var r=i(a);e=c(r,"HR",{}),t=d(r),v=c(r,"DIV",{class:!0});var l=i(v);p=c(l,"A",{class:!0,href:!0});var h=i(p);m=c(h,"IMG",{src:!0,alt:!0}),h.forEach(o),_=d(l),A=c(l,"A",{href:!0,class:!0});var f=i(A);D=n(f,"Contact Me!"),f.forEach(o),w=d(l),x(S.$$.fragment,l),l.forEach(o),y=d(r),G=c(r,"DIV",{class:!0});var g=i(G);H=n(g,"© 2021 Travja"),g.forEach(o),r.forEach(o),this.h()},h(){$(m.src,E=L)||h(m,"src","/_app/assets/github-logo-0ac96ec2.svg"),h(m,"alt","GitHub"),h(p,"class","no-background svelte-gqn6ig"),h(p,"href","https://github.com/Travja"),h(A,"href","#"),h(A,"class","svelte-gqn6ig"),h(v,"class","links svelte-gqn6ig"),h(G,"class","copy svelte-gqn6ig"),h(a,"class","svelte-gqn6ig")},m(s,r){f(s,a,r),g(a,e),g(a,t),g(a,v),g(v,p),g(p,m),g(v,_),g(v,A),g(A,D),g(v,w),M(S,v,null),g(a,y),g(a,G),g(G,H),T=!0},p:b,i(s){T||(j(S.$$.fragment,s),T=!0)},o(s){k(S.$$.fragment,s),T=!1},d(s){s&&o(a),z(S)}}}class K extends a{constructor(s){super(),e(this,s,null,J,t,{})}}function O(s){let a,e,t,l,n,v;a=new B({});const g=s[1].default,p=D(g,s,s[0],null);return n=new K({}),{c(){I(a.$$.fragment),e=u(),t=r("main"),p&&p.c(),l=u(),I(n.$$.fragment),this.h()},l(s){x(a.$$.fragment,s),e=d(s),t=c(s,"MAIN",{class:!0});var r=i(t);p&&p.l(r),r.forEach(o),l=d(s),x(n.$$.fragment,s),this.h()},h(){h(t,"class","svelte-eycadd")},m(s,r){M(a,s,r),f(s,e,r),f(s,t,r),p&&p.m(t,null),f(s,l,r),M(n,s,r),v=!0},p(s,[a]){p&&p.p&&(!v||1&a)&&w(p,g,s,s[0],v?y(g,s[0],a,null):S(s[0]),null)},i(s){v||(j(a.$$.fragment,s),j(p,s),j(n.$$.fragment,s),v=!0)},o(s){k(a.$$.fragment,s),k(p,s),k(n.$$.fragment,s),v=!1},d(s){z(a,s),s&&o(e),s&&o(t),p&&p.d(s),s&&o(l),z(n,s)}}}function R(s,a,e){let{$$slots:t={},$$scope:r}=a;return s.$$set=s=>{"$$scope"in s&&e(0,r=s.$$scope)},[r,t]}class P extends a{constructor(s){super(),e(this,s,R,O,t,{})}}export{P as default};
