(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a(9),s=a.n(i),r=(a(101),a(102),a(17)),l=a(28),o=a(155),j=a(157),d=a(158),b=a(159),h=a(170),p=a(153),u=a(21),x=a(84),O=a.n(x),m=a(12),g=a(16),f=a(26),v="CHECK_DETAILS",N="WATCH_EPISODE",w="SEARCH_ANIME",k="LOADING",y=function(e,t,a){return{type:N,episode:e,id:t,title:a}},S=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,display:"block"},search:{display:"",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(e.palette.common.white,.25)},marginLeft:0,width:"auto"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(.2),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),searchContainer:{display:"flex",alignItems:"center"},btn:Object(l.a)({marginLeft:e.spacing(1)},e.breakpoints.down("xs"),{display:"none"}),link:{textDecoration:"none"}}}));var C=function(){var e=S(),t=Object(c.useState)(""),a=Object(r.a)(t,2),i=a[0],s=a[1],l=Object(f.b)(),p=Object(m.f)(),u=function(){l({type:k,loading:!0})};return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(o.a,{position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(g.b,{to:"/",className:e.link,children:Object(n.jsx)(d.a,{onClick:u,children:"New"})}),Object(n.jsx)(g.b,{to:"/popular",className:e.link,children:Object(n.jsx)(d.a,{onClick:u,children:"Popular"})}),Object(n.jsx)(b.a,{className:e.title,variant:"h6",noWrap:!0,children:"Senpai - Kouhai"}),Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),l(function(e){return{type:w,search:e}}(i)),s(""),p.push("/search/"+i)},children:Object(n.jsxs)("div",{className:e.searchContainer,children:[Object(n.jsx)("div",{className:e.search,children:Object(n.jsx)(h.a,{placeholder:"Search\u2026",value:i,onChange:function(e){return s(e.target.value)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},required:!0})}),Object(n.jsx)(d.a,{type:"submit",className:e.btn,children:Object(n.jsx)(O.a,{})})]})})]})})})},E=a(42),D=a.n(E),I=a(89),L=a(160);var q=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Loading..."})})},W=Object(p.a)((function(e){return{root:{height:"auto"},title:{padding:"30px"},img:Object(l.a)({height:"auto",maxWidth:"50vw"},e.breakpoints.up("sm"),{maxWidth:"20vw"}),btn:{margin:"5px"},eps:{margin:"20px",padding:"50px",boxShadow:"5px 5px 25px rgba(0,0,0,1)"},link:{textDecoration:"none"}}}));var A=function(){var e=W(),t=Object(c.useState)([]),a=Object(r.a)(t,2),i=a[0],s=a[1],l=Object(c.useState)(!0),o=Object(r.a)(l,2),j=o[0],h=o[1],p=Object(m.g)(),u=Object(m.f)(),x=p.pathname.split("/")[2],O=Object(f.b)(),v=Object(f.c)((function(e){return e.title})),N="https://anime-x.vercel.app/api/details/"+x;Object(c.useEffect)((function(){D.a.get(N).then((function(e){s(e.data.results),h(!1)})).catch((function(e){console.log(e.response.status),e.response.status>=400&&u.push("/error")}))}),[N,u]);var w=Number(i.map((function(e){return e.totalepisode}))),k=function(){for(var e=[],t=w,a=0;t>=1;t--,a++)e[a]=t;return e};return j?Object(n.jsx)(q,{}):Object(n.jsx)(I.a,{square:!0,className:e.root,children:i.map((function(t){return Object(n.jsxs)(L.a,{container:!0,children:[Object(n.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)(I.a,{className:e.eps,children:[Object(n.jsx)("img",{className:e.img,src:t.image,alt:""}),Object(n.jsx)(b.a,{variant:"h6",children:t.title}),Object(n.jsxs)(b.a,{className:e.title,children:["Status: ",t.status]}),Object(n.jsx)(b.a,{children:t.summary})]})}),Object(n.jsx)(L.a,{item:!0,xs:12,sm:5,children:Object(n.jsxs)(I.a,{className:e.eps,children:[Object(n.jsx)(b.a,{className:e.title,variant:"h6",align:"center",children:"Episode List"}),k().map((function(a,c){return Object(n.jsx)(g.b,{to:"/watching/"+p.pathname.split("/")[2]+"/"+a,className:e.link,children:Object(n.jsxs)(d.a,{className:e.btn,variant:"outlined",onClick:function(){return O(y(a,v,t.title))},children:["Episode: ",a]},c)},c)}))]})})]},t.title)}))})},R=a(161),H=a(162),P=a(171),T=a(168),B=a(172),G=a(169),_=Object(p.a)((function(e){return{root:{height:"110vh"},title:{padding:"20px",textTransform:"uppercase"},p:{},btn:{margin:"10px",padding:"10px"},video:Object(l.a)({zIndex:"1",outline:"none",height:"auto",width:"88%"},e.breakpoints.up("sm"),{width:"55%"}),link:{textDecoration:"none"},linkDisabled:{textDecoration:"none",pointerEvents:"none"},box:{display:"flex",justifyContent:"space-around",alignItems:"baseline"},epnav:{marginBottom:e.spacing(2)}}}));var z=function(){var e=_(),t=Object(c.useState)({epdl:{}}),a=Object(r.a)(t,2),i=a[0],s=a[1],l=Object(c.useState)(),o=Object(r.a)(l,2),j=o[0],h=o[1],p=Object(c.useState)(""),u=Object(r.a)(p,2),x=u[0],O=u[1],f=Object(c.useState)(!0),v=Object(r.a)(f,2),N=v[0],w=v[1],k=Object(m.g)(),y=Object(m.f)(),S=k.pathname.split("/"),C=Number(S[3]),E=S[2],L="https://anime-x.vercel.app/api/watching/"+E+"/"+C;Object(c.useEffect)((function(){D.a.get(L).then((function(e){h(e.data.links),O(e.data.links[0]),w(!1);for(var t=[],a=0;a<e.data.links.length;a++){var n=e.data.links[a].split("?")[0].split("/");void 0===n[5]?t.push("original"):t.push(n[5])}s({epdl:t})})).catch((function(e){e.response.status>=400&&y.push("/details/"+E)}))}),[L,y,C,E]);var W=E.split("-").join(" ");return console.log(i.epdl.length),N?Object(n.jsx)(q,{}):Object(n.jsx)(I.a,{square:!0,className:e.root,children:Object(n.jsxs)(I.a,{className:e.p,square:!0,elevation:0,children:[Object(n.jsxs)(R.a,{maxWidth:"sm",children:[Object(n.jsx)(b.a,{className:e.title,variant:"h5",children:W}),Object(n.jsxs)(b.a,{variant:"h6",children:["Episode: ",C]})]}),Object(n.jsx)(I.a,{square:!0,className:e.p,elevation:0,children:Object(n.jsxs)(R.a,{maxWidth:"md",className:e.box,children:[Object(n.jsxs)(H.a,{children:[Object(n.jsx)(P.a,{children:"Quality"}),Object(n.jsx)(T.a,{value:x,onChange:function(e){return O(e.target.value)},children:j.map((function(t,a){return Object(n.jsx)(B.a,{value:t,href:t,variant:"outlined",download:!0,className:e.btn,children:void 0===i.epdl.length?"":void 0===i.epdl[a].split(".")[2]?"original":i.epdl[a].split(".")[2]},a)}))})]}),Object(n.jsx)(G.a,{children:Object(n.jsx)(g.b,{to:"/details/"+E,className:e.link,children:Object(n.jsx)(d.a,{className:e.btn,children:"Episode List"})})})]})}),Object(n.jsxs)(I.a,{square:!0,elevation:0,children:[Object(n.jsx)("video",{src:x,controls:!0,className:e.video}),Object(n.jsxs)(G.a,{className:e.epnav,children:[Object(n.jsx)("span",{children:Object(n.jsx)(g.b,{to:"/watching/"+E+"/"+(C-1),className:1===C?e.linkDisabled:e.link,children:Object(n.jsx)(d.a,{variant:"outlined",className:e.btn,disabled:1===C,children:"Previous"})})}),Object(n.jsx)("span",{children:Object(n.jsx)(g.b,{to:"/watching/"+E+"/"+(C+1),className:e.link,children:Object(n.jsx)(d.a,{variant:"outlined",className:e.btn,children:"Next"})})})]})]}),Object(n.jsxs)(I.a,{square:!0,elevation:0,children:[Object(n.jsx)(b.a,{children:"Download Links"}),j.map((function(t,a){return Object(n.jsx)(d.a,{href:t,variant:"outlined",download:!0,className:e.btn,children:i.epdl[a]},a)}))]})]})})},J=a(163),K=a(164),F=a(165),M=a(166),Q=a(85),U=a.n(Q),V=a(86),X=a.n(V),Y=Object(p.a)({root:{height:"71vh"},gif:{width:"100%"},box:{width:"60%"},cap:{marginTop:"1em"}});var Z=function(){var e=Y();return Object(n.jsx)(R.a,{maxWidth:"md",children:Object(n.jsxs)(I.a,{className:e.root,elevation:0,children:[Object(n.jsx)(G.a,{className:e.box,children:Object(n.jsx)("img",{className:e.gif,src:"https://i.pinimg.com/originals/25/e0/45/25e0450a39f1c01fef9cac41a2da14bb.gif",alt:""})}),Object(n.jsx)(b.a,{variant:"h5",className:e.cap,children:"Sorry nothing found"})]})})},$=Object(p.a)({root:{maxWidth:200,maxHeight:500,boxShadow:"5px 5px 25px #212121"},image:{maxWidth:200,maxHeight:"auto"},title:{padding:"30px"},decor:{textDecoration:"none",color:"white"},paper:{padding:"20px",margin:" 20px",boxShadow:"5px 5px 25px rgba(0,0,0,1)"},ptitle:{paddingBottom:"10px"},box:{textAlign:"right",padding:"20px",marginTop:"10px"},btn:{marginRight:"10px",padding:"10px"}});var ee=function(e){var t=e.page,a=$(),i=Object(c.useState)([]),s=Object(r.a)(i,2),l=s[0],o=s[1],j=Object(c.useState)(!0),h=Object(r.a)(j,2),p=h[0],u=h[1],x=Object(c.useState)(!0),O=Object(r.a)(x,2),N=O[0],w=O[1],k=Object(c.useState)(1),S=Object(r.a)(k,2),C=S[0],E=S[1],W=Object(m.g)(),A=Object(m.f)(),R=Object(f.c)((function(e){return e})),H=Object(f.b)(),P="https://anime-x.vercel.app/api"+("search"===t?"/"+t+"/"+R.search+"/1":"/"+t+"/"+C);Object(c.useEffect)((function(){void 0===R.loading?u(!0):u(R.loading),w(!0),D.a.get(P).then((function(e){o(e.data),u(!1)})).catch((function(e){e.response.status>=400&&A.push("/error")}))}),[P,A,R.loading]),console.log(W.pathname.split("/")[2]);var T=function(){var e=W.pathname.split("/")[2];return Object(n.jsx)(n.Fragment,{children:W.pathname==="/search/"+e?"":Object(n.jsxs)(G.a,{className:a.box,children:[Object(n.jsxs)(d.a,{variant:"outlined",className:a.btn,onClick:function(){return E(C-1)},disabled:1===C,children:[Object(n.jsx)(U.a,{})," Previous"]}),Object(n.jsx)("b",{className:a.btn,children:C}),Object(n.jsxs)(d.a,{variant:"outlined",className:a.btn,onClick:function(){return E(C+1)},children:["Next ",Object(n.jsx)(X.a,{})]})]})})};return p?Object(n.jsx)(q,{}):Object(n.jsxs)(I.a,{elevation:2,square:!0,className:a.ptitle,children:[Object(n.jsx)(G.a,{children:"search"===t?Object(n.jsxs)(b.a,{variant:"h4",className:a.title,children:["Results for ' ",R.search," '"]}):Object(n.jsx)(b.a,{variant:"h4",className:a.title,children:"popular"===t?"Popular":"Newest Episode"})}),Object(n.jsxs)(I.a,{elevation:1,variant:"outlined",className:a.paper,children:[Object(n.jsx)(T,{}),Object(n.jsxs)(L.a,{container:!0,spacing:3,align:"center",children:[0===l.results.length?Object(n.jsx)(Z,{}):"",l.results.map((function(e){return Object(n.jsx)(L.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(J.a,{className:a.root,children:Object(n.jsx)(g.b,{to:"recentlyadded"===t?"/watching/"+e.id+"/"+e.episodenumber:"/details/"+e.id+"/",className:a.decor,children:Object(n.jsxs)(K.a,{onClick:function(){return H("recentlyadded"===t?y(e.episodenumber,e.id,e.title):(a=e.id,{type:v,title:a}));var a},children:[Object(n.jsx)(F.a,{title:e.id,image:N?"https://thumbs.gfycat.com/ShadowyCourageousAztecant-size_restricted.gif":e.image,component:"img",className:a.image,onLoad:function(){return w(!1)}}),Object(n.jsxs)(M.a,{children:[Object(n.jsx)(b.a,{children:e.title}),"recentlyadded"===t?Object(n.jsxs)(b.a,{children:["Episode: ",e.episodenumber]}):""]})]})})})},e.id)}))]}),Object(n.jsx)(T,{})]})]})},te=Object(p.a)((function(e){return{root:{height:"91.5vh"},img:Object(l.a)({padding:"2%",width:"80%"},e.breakpoints.up("sm"),{width:"40%"}),btn:{margin:"20px",padding:"10px"},link:{textDecoration:"none"}}}));var ae=function(){return Object(n.jsxs)(I.a,{square:!0,className:te().root,children:[Object(n.jsx)("img",{className:te().img,src:"https://media1.tenor.com/images/6db6d393f50f2ee9df4058b95f0b21a1/tenor.gif?itemid=13628544",alt:""}),Object(n.jsx)(b.a,{variant:"h4",children:'"Error 404 not found"'}),Object(n.jsx)(g.b,{to:"/",className:te().link,children:Object(n.jsx)(d.a,{className:te().btn,variant:"contained",children:"Go Home"})})]})};var ne=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(C,{}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(ee,{page:"recentlyadded"})}),Object(n.jsx)(m.a,{path:"/popular",children:Object(n.jsx)(ee,{page:"popular"})}),Object(n.jsx)(m.a,{path:"/details",children:Object(n.jsx)(A,{})}),Object(n.jsx)(m.a,{path:"/watching/",children:Object(n.jsx)(z,{})}),Object(n.jsx)(m.a,{path:"/search",children:Object(n.jsx)(ee,{page:"search"})}),Object(n.jsx)(m.a,{path:"/error",children:Object(n.jsx)(ae,{})})]})]})})},ce=a(87),ie=a(167),se=a(53),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{loading:!0}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{state:e,title:t.title};case N:return{state:e,episode:t.episode,id:t.id,title:t.title};case w:return{state:e,search:t.search};case k:return{state:e,loading:t.loading};default:return e}},le=Object(se.b)(re),oe=Object(ce.a)({palette:{type:"dark",primary:{main:"#303030",secondary:"#424242"}}});s.a.render(Object(n.jsx)(f.a,{store:le,children:Object(n.jsx)(ie.a,{theme:oe,children:Object(n.jsx)(ne,{})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.7a05cd58.chunk.js.map