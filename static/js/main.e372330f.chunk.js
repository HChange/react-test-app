(this["webpackJsonpreact-test-app"]=this["webpackJsonpreact-test-app"]||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(76),r=n(0),a=n(144),i=n.n(a),s=n(1),o=function(e){var t=e.children,n=Object(r.useRef)(null);return Object(s.jsxs)("h3",{id:t,className:i.a.title,ref:n,onClick:function(){n.current&&Object(c.b)(n.current)},children:[t,Object(s.jsx)("span",{className:i.a.icon,children:"#"})]})}},117:function(e,t,n){e.exports={ellipsis:"ellipsis__26Fs5","marked-content":"marked-content__3cowg","marked-content__copy":"marked-content__copy__K55yV"}},143:function(e,t,n){e.exports={block__content:"block__content__2GD6O"}},144:function(e,t,n){e.exports={ellipsis:"ellipsis__322Eq",title:"title__2ZSyt",icon:"icon__3vdW5"}},169:function(e,t,n){"use strict";n.d(t,"Block",(function(){return o}));n(0);var c=n(143),r=n.n(c),a=n(105),i=n(1),s=n(170);n.o(s,"CodeViewer")&&n.d(t,"CodeViewer",(function(){return s.CodeViewer})),n.o(s,"Marked")&&n.d(t,"Marked",(function(){return s.Marked})),n.o(s,"Page")&&n.d(t,"Page",(function(){return s.Page}));var o=function(e){var t=e.title,n=e.children;return Object(i.jsxs)("div",{className:r.a.block,children:[Object(i.jsx)(a.a,{children:t}),Object(i.jsx)("div",{className:r.a.block__content,children:n})]})}},170:function(e,t){},171:function(e,t,n){"use strict";n.d(t,"Page",(function(){return b}));var c=n(12),r=n(0),a=n(11),i=n(75),s=n(50),o=n.n(s),l=n(76),u=n(44),d=n(1),j=n(172);n.o(j,"Block")&&n.d(t,"Block",(function(){return j.Block})),n.o(j,"CodeViewer")&&n.d(t,"CodeViewer",(function(){return j.CodeViewer})),n.o(j,"Marked")&&n.d(t,"Marked",(function(){return j.Marked}));var b=function(e){var t=Object(a.d)().pathname,n=i.b.filter((function(e){return e.path===t}))[0].name,s=e.children,j=e.title,b=void 0===j?n:j,h=e.backLine,f=void 0===h||h,v=Object(r.useMemo)((function(){return"boolean"===typeof f?u.d:Object(c.a)(Object(c.a)({},u.d),f)}),[f]),O=v.color,m=v.stepx,p=v.stepy,x=v.lineWidth,_=Object(r.useRef)(null),g=Object(r.useRef)(null),w=Object(r.useRef)(null),k=Object(r.useRef)();return Object(r.useEffect)((function(){var e;return g.current&&f&&(e=new ResizeObserver((function(){k.current&&clearTimeout(k.current),setTimeout((function(){if(_.current&&w.current&&g.current){var e=g.current,t=e.clientHeight,n=e.clientWidth;if(t>u.a)return;w.current.style.height="".concat(t,"px"),_.current.style.width="".concat(n*u.b,"px"),_.current.style.height="".concat(t*u.b,"px"),_.current.width=n*u.c,_.current.height=t*u.c,Object(l.a)({canvas:_.current,color:O,stepx:m*u.e,stepy:p*u.e,lineWidth:x})}}),500)}))).observe(g.current),function(){var t,n;null===(t=e)||void 0===t||null===(n=t.disconnect)||void 0===n||n.call(t)}}),[_,g,f,w]),Object(d.jsx)("div",{className:o.a.wrapper,children:Object(d.jsxs)("div",{className:o.a.page,ref:g,children:[f&&Object(d.jsx)("div",{ref:w,className:o.a["canvas-wrapper"],children:Object(d.jsx)("canvas",{ref:_,className:o.a.canvas})}),Object(d.jsxs)("div",{className:o.a["page-content"],children:[Object(d.jsx)("h2",{className:o.a.title,children:b}),Object(d.jsx)("div",{className:o.a.content,children:s}),Object(d.jsx)("div",{className:o.a.footer})]})]})})}},172:function(e,t){},173:function(e,t,n){"use strict";n(76),n(0),n(1)},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(54),r=n(5),a=n(0),i=n(6),s=n.n(i),o=n(64),l=n.n(o),u=n(1),d=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),i=n[0],o=n[1],d=e.render,j=e.code;return Object(u.jsxs)("div",{className:l.a["code-viewer"],children:[Object(u.jsxs)("div",{className:l.a["code-viewer__render"],children:[d,Object(u.jsx)("span",{className:s()(l.a["code-viewer__show-btn"],Object(c.a)({},l.a["code-viewer__show-btn-open"],i)),onClick:function(){return o((function(e){return!e}))},children:i?"\u5173\u95ed\u4ee3\u7801":"\u5c55\u5f00\u4ee3\u7801"})]}),Object(u.jsx)("div",{className:s()(l.a["code-viewer__code"],Object(c.a)({},l.a["code-viewer__code-open"],i)),children:j})]})}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(5),r=n(0),a=n(6),i=n.n(a),s=n(116),o=n.n(s),l=n(78),u=n.n(l),d=n(220),j=n.n(d),b=n(117),h=n.n(b),f=/^[\w\W]*?```([\w\W]*?)```[\w\W]*$/,v=n(1),O=function(e){var t=e.children,n=e.type,a=e.className,s=e.style,l=void 0===s?{}:s,d=e.onCopy,b=Object(r.useState)(""),O=Object(c.a)(b,2),m=O[0],p=O[1],x=Object(r.useState)(""),_=Object(c.a)(x,2),g=_[0],w=_[1],k=Object(r.useState)("\u590d\u5236"),C=Object(c.a)(k,2),y=C[0],N=C[1];Object(r.useEffect)((function(){if(t){var e;p((null===(e=t.match(f))||void 0===e?void 0:e[1])||""),o.a.setOptions({renderer:new o.a.Renderer,highlight:function(e){return'<pre class="hljs"><code>'+u.a.highlightAuto(e,n?[n]:void 0).value+"</code></pre>"},pedantic:!1,gfm:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var c=o()(t);w(c)}}),[t,n]);var S=Object(r.useCallback)((function(e,t){N("\u5df2\u590d\u5236"),setTimeout((function(){N("\u590d\u5236")}),2e3),d&&d(e,t)}),[]);return Object(v.jsx)("div",{className:i()(h.a.marked,{className:a}),style:l,children:Object(v.jsxs)("div",{className:i()(h.a["marked-content"]),children:[g&&Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:g}}),Object(v.jsx)(j.a,{text:m,onCopy:S,children:Object(v.jsx)("span",{className:h.a["marked-content__copy"],children:y})})]})})}},2184:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(217),a=(n(237),n(14)),i=n(114),s=n(75),o=n(58),l=n.n(o),u=n(1),d=function(e){Object(c.useEffect)((function(){if("true"!==Object({NODE_ENV:"production",PUBLIC_URL:"/react-test-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IS_GITHUB:"true"}).REACT_APP_IS_GITHUT){var e=window.location.hash;if(e){var t=document.createElement("a");t.href=e,t.click(),t.remove()}}}),[]);var t,n=Object(c.useMemo)((function(){return i.a}),[]);return Object(u.jsx)("div",{className:l.a.wrapper,children:Object(u.jsxs)(n,{children:[Object(u.jsx)("header",{className:l.a.header,children:Object(u.jsx)("div",{className:l.a.logo,children:"Change Test"})}),Object(u.jsxs)("main",{className:l.a.main,children:[Object(u.jsx)("nav",{className:l.a.nav,children:(t=s.b,Object(u.jsx)("ul",{children:t.map((function(e){var t=e.name,n=e.path;return"/"===n?null:Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:n,className:function(e){return e.isActive?l.a.active:""},children:t})},t)}))}))}),Object(u.jsx)("article",{className:l.a.content,children:e.children})]})]})})};var j=function(){return Object(u.jsx)(a.b,{children:Object(u.jsx)(d,{children:Object(u.jsx)(s.a,{})})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,2190)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},h=document.getElementById("root");Object(r.createRoot)(h).render(Object(u.jsx)(j,{})),b()},237:function(e,t,n){},33:function(e,t,n){"use strict";var c=n(169);n.o(c,"Block")&&n.d(t,"Block",(function(){return c.Block})),n.o(c,"CodeViewer")&&n.d(t,"CodeViewer",(function(){return c.CodeViewer})),n.o(c,"Marked")&&n.d(t,"Marked",(function(){return c.Marked})),n.o(c,"Page")&&n.d(t,"Page",(function(){return c.Page}));var r=n(171);n.o(r,"Block")&&n.d(t,"Block",(function(){return r.Block})),n.o(r,"CodeViewer")&&n.d(t,"CodeViewer",(function(){return r.CodeViewer})),n.o(r,"Marked")&&n.d(t,"Marked",(function(){return r.Marked})),n.o(r,"Page")&&n.d(t,"Page",(function(){return r.Page}));n(105),n(173);var a=n(174);n.d(t,"CodeViewer",(function(){return a.a}));var i=n(216);n.d(t,"Marked",(function(){return i.a}))},44:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s}));var c=2,r=2,a=c/r,i={color:"red",stepx:20,stepy:20,lineWidth:.15},s=8e3},50:function(e,t,n){e.exports={ellipsis:"ellipsis__2Uc9l",wrapper:"wrapper__3y9jD",page:"page__1k_bh","canvas-wrapper":"canvas-wrapper__2oIr1",canvas:"canvas__1HL9K","page-content":"page-content__1cWrh",title:"title__2iGTa",content:"content__5eCjz",footer:"footer__St2N1"}},51:function(e,t,n){e.exports={"virtual-list-wrapper":"virtual-list-wrapper__2_yEZ","virtual-list-phantom":"virtual-list-phantom__28vnd","virtual-list":"virtual-list__3-Cdz","virtual-list-item":"virtual-list-item__zfGx2","virtual-list-item__avatar":"virtual-list-item__avatar__3Gux7","virtual-list-item__content":"virtual-list-item__content__F8Fyt","virtual-list-item__title":"virtual-list-item__title__2XtSX"}},58:function(e,t,n){e.exports={ellipsis:"ellipsis__u-KBO",wrapper:"wrapper__9yhCu",header:"header__6I00W",logo:"logo__idKJh",main:"main__1VS9e",nav:"nav__cM4gq",active:"active__vfSjP",content:"content__1mPkx"}},64:function(e,t,n){e.exports={ellipsis:"ellipsis__1ZCmY","code-viewer":"code-viewer__2677u","code-viewer__render":"code-viewer__render__1ViX4","code-viewer__show-btn":"code-viewer__show-btn__G5BQv","code-viewer__show-btn-open":"code-viewer__show-btn-open__3P1mA","code-viewer__code":"code-viewer__code__3eHnO","code-viewer__code-open":"code-viewer__code-open__1lUmt"}},695:function(e,t,n){},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return ve}));var c=n(0),r=n.n(c),a=n(11),i=n(1),s=function(e){return console.log("render"),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:"\u8fdb\u5ea6\uff1a\u6d41\u6c34\u7ebf\u6d4b\u8bd5..."})})},o=n(218),l=n.n(o),u=n(2189),d=n(2187),j=function(e){var t=e.language,n=e.value;return Object(i.jsx)(u.a,{language:t,style:d.a,children:n})},b="# \u7528\u4e8e\u6d4b\u8bd5 React \u529f\u80fd\u3001\u7279\u6027\u7684\u9879\u76ee\n\n## \u529f\u80fd\u6e05\u5355\n\n- [ ] \u56fd\u9645\u5316\n\n---\n\n- [ ] \u4e3b\u9898\u5207\u6362\n\n---\n\n- [ ] storybook\n\n---\n\n- [ ] \u9996\u9875\u767d\u5c4f\n\n---\n\n- [ ] \u5347\u7ea7\u81f3 react18\n\n## \u95ee\u9898\u6e05\u5355\n\n### git cz \u4e0d\u751f\u6548\n\ncommitizen init cz-conventional-changelog --save --save-exact\n\n### \u8bbe\u7f6e git \u5bf9\u5927\u5c0f\u5199\u611f\u77e5\u654f\u611f\n\ngit config core.ignorecase false\n\n### \u5f53\u60f3\u7ed9 index.html \u6ce8\u5165\u5176\u4ed6\u73af\u5883\u53d8\u91cf\u65f6\n\n\u53ef\u4ee5 `REACT_APP_*`\uff0c\u6216\u8005\u76f4\u63a5\u4fee\u6539 env.js \u7684 getClientEnvironment \u51fd\u6570\n\n### \u7ed9 Window \u6dfb\u52a0\u5c5e\u6027\n\n```javascript\ndeclare interface Window {\n  IS_GITHUB: 'true' | 'false';\n}\n```\n\n### windows \u5168\u5c40\u547d\u4ee4\u6267\u884c\u4e0d\u4e86\uff1f \u5982 yarn\n\nset-ExecutionPolicy RemoteSigned\n",h=n(219),f=n.n(h),v=n(89),O={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6"};function m(e){var t=e.level,n=e.children,c=Object(v.a)(e,["level","children"]);return r.a.createElement(O[t]||O.h1,c,n)}var p=function(e){var t=e.level,n=e.children;if(n&&n.length>0){var c=n[0].props.value;return Object(i.jsxs)(m,{level:"h".concat(t),id:c,children:[Object(i.jsx)("span",{className:"title",children:n}),!1]})}return Object(i.jsx)(i.Fragment,{children:n})},x=n(33),_=function(){return Object(i.jsx)(x.Page,{children:Object(i.jsx)(l.a,{plugins:[f.a],source:b,escapeHtml:!0,renderers:{code:j,heading:p}})})},g=n(221),w=n.n(g),k=n(78),C=n.n(k),y=function(){var e=Object(c.useRef)(null),t=Object(c.useMemo)((function(){return new w.a({html:!0,linkify:!0,typographer:!0,highlight:function(e,t){if(t&&C.a.getLanguage(t))try{return'<pre class="hljs"><code>'+C.a.highlight(t,e,!0).value+"</code></pre>"}catch(n){}return'<pre class="hljs"><code>'+e+"</code></pre>"}})}),[]);return Object(c.useEffect)((function(){if(C.a.highlightAll(),e.current){var n=t.render(b);e.current.innerHTML=n}}),[t,e]),Object(i.jsx)(x.Page,{children:Object(i.jsx)("div",{ref:e})})},N=n(141),S=n.n(N),E=n(14),M=n(30),P=n.n(M),T=n(62),R=function(e){return new Promise((function(e,t){setTimeout((function(){10*Math.random()>0?e({data:[{name:"change",age:23},{name:"ad",age:"22"}],code:"Success"}):t({code:"Failed",msg:"\u8bf7\u6c42\u5931\u8d25\uff01",data:[]})}),3e3)}))},L=Object(E.d)({key:"asyncState1",get:function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.prev=1,e.next=4,R();case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}),V=(Object(E.e)({key:"selectorFamily",get:function(e){return Object(T.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))}}),function(){var e=Object(E.g)(L);return Object(i.jsx)("div",{children:null===e||void 0===e?void 0:e.code})}),W=function(){return Object(i.jsx)(S.a,{message:!0,children:Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(i.Fragment,{children:"\u52a0\u8f7d\u4e2d..."}),children:Object(i.jsx)(V,{})})})},B=Object(E.c)({key:"nameState",default:""}),D=Object(E.d)({key:"countState",get:function(e){return(0,e.get)(B).length}}),F=function(){var e=Object(E.g)(D);return Object(i.jsxs)("div",{children:["\u540d\u5b57\u957f\u5ea6\u4e3a:",e]})},H=n(5),I=n(2188),A=function(){var e=Object(E.f)(B),t=Object(H.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(I.a,{value:n,onChange:function(e){return c(e.target.value)}}),Object(i.jsxs)("div",{children:["\u8f93\u5165\u7684\u540d\u5b57\u662f\uff1a",n]})]})},G=Object(E.d)({key:"asyncState2",get:function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.get,e.next=3,new Promise((function(e,t){setTimeout((function(){10*Math.random()>0?e({data:[{name:"change",age:23},{name:"ad",age:"22"}],code:"Success"}):t({code:"Failed",msg:"\u8bf7\u6c42\u5931\u8d25\uff01",data:[]})}),3e3)}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),U=function(){var e=Object(E.h)(G);switch(e.state){case"hasValue":return Object(i.jsx)("div",{children:e.contents.code});case"loading":return Object(i.jsx)("div",{children:"Loading..."});case"hasError":throw e.contents}},z=Object(E.c)({key:"atomTest",default:0}),K=Object(E.d)({key:"setGetTest",get:function(e){return(0,e.get)(z)/2},set:function(e,t){(0,e.set)(z,t instanceof E.a?t:4*t)}}),q=function(){var e=Object(E.f)(K),t=Object(H.a)(e,2),n=t[0],c=t[1];return Object(i.jsx)("div",{children:Object(i.jsx)(I.a,{onChange:function(e){return c(e.target.value)},value:n})})},J=n(49),X=n(226),Z=n(227),Y=Object(E.c)({key:"todolistState",default:[]}),Q=Object(E.d)({key:"todolistStatsState",get:function(e){var t=(0,e.get)(Y),n=t.length,c=t.filter((function(e){return e.isComplete})).length;return{totalNum:n,totalComplete:c,totalWillComplete:n-c,precentComplete:0===c?0:c/n}}}),$=0;var ee=function(){var e=Object(c.useState)(""),t=Object(H.a)(e,2),n=t[0],r=t[1],a=Object(E.i)(Y);return Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)(I.a,{onChange:function(e){return r(e.target.value)},value:n}),Object(i.jsx)(Z.a,{type:"primary",onClick:function(){n?(a((function(e){return[{id:$++,isComplete:!1,text:n}].concat(Object(J.a)(e))})),r("")):X.a.error({message:"\u8bf7\u8f93\u5165\u6709\u6548\u503c"})},children:"\u6dfb\u52a0"})]})},te=n(12),ne=function(e){var t=e.id,n=e.text,c=e.isComplete,r=Object(E.f)(Y),a=Object(H.a)(r,2),s=a[0],o=a[1];return Object(i.jsxs)("div",{style:{padding:"5px 10px",display:"flex",justifyContent:"space-around",background:"#5a66ff"},children:[Object(i.jsx)("input",{type:"checkbox",value:c,onClick:function(){var e=s.map((function(e){return e.id===t?Object(te.a)(Object(te.a)({},e),{},{isComplete:!e.isComplete}):e}));o(e)}}),Object(i.jsx)("div",{children:n}),Object(i.jsx)("span",{onClick:function(){var e=s.filter((function(e){return e.id!==t}));o(e)},style:{cursor:"pointer"},children:"x"})]})},ce=function(){var e=Object(E.g)(Y);return Object(i.jsx)("div",{children:e.map((function(e){return Object(c.createElement)(ne,Object(te.a)(Object(te.a)({},e),{},{key:e.id}))}))})},re=function(){var e=Object(E.g)(Q),t=e.totalNum,n=e.totalComplete,c=e.totalWillComplete,r=e.precentComplete;return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"\u7edf\u8ba1"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["\u603b\u6570\uff1a",t]}),Object(i.jsxs)("li",{children:["\u5df2\u5b8c\u6210\uff1a",n]}),Object(i.jsxs)("li",{children:["\u5f85\u5b8c\u6210\uff1a",c]}),Object(i.jsxs)("li",{children:["\u5b8c\u6210\u7387\uff1a","".concat(Math.floor(100*r),"%")]})]})]})},ae=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(ee,{}),Object(i.jsx)(ce,{}),Object(i.jsx)(re,{})]})},ie=(n(695),function(){return Object(i.jsx)(x.Page,{children:Object(i.jsxs)("div",{className:"docs",children:[Object(i.jsx)("h1",{children:"Recoil"}),Object(i.jsx)("h2",{children:"\u7b80\u5355\u4f7f\u7528"}),Object(i.jsx)(A,{}),Object(i.jsx)(F,{}),Object(i.jsx)("hr",{}),Object(i.jsx)("h2",{children:"\u5199\u4e00\u4e2aTodoList"}),Object(i.jsx)(ae,{}),Object(i.jsx)("hr",{}),Object(i.jsx)("h2",{children:"\u6765\u4e2a\u5f02\u6b65\u7684"}),Object(i.jsx)(W,{}),Object(i.jsx)("h2",{children:"set get Selector"}),Object(i.jsx)(q,{}),Object(i.jsx)("h2",{children:"Loadable "}),Object(i.jsx)(U,{})]})})}),se=function(){var e=Object(c.useState)(0),t=Object(H.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),o=Object(H.a)(s,2),l=o[0],u=o[1];r.a.useEffect((function(){for(var e=Number(new Date);Number(new Date)-e<=300;);0===n&&a(Math.random())}),[n]),r.a.useLayoutEffect((function(){for(var e=Number(new Date);Number(new Date)-e<=300;);0===l&&u(Math.random())}),[l]);var d=r.a.useCallback((function(){return a(0)}),[]),j=r.a.useCallback((function(){return u(0)}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:["useEffect: ",Object(i.jsx)("button",{onClick:d,children:n})]}),Object(i.jsxs)("div",{children:["useLayoutEffect: ",Object(i.jsx)("button",{onClick:j,children:l})]})]})},oe=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(x.Page,{backLine:{stepx:20,stepy:20},children:Object(i.jsx)(x.Block,{title:"useEffect&useLayoutEffect\u533a\u522b",children:Object(i.jsx)(x.CodeViewer,{render:Object(i.jsx)(se,{}),code:Object(i.jsx)(x.Marked,{children:"\n```JavaScript\nimport React, { useState } from 'react';\n\nconst index = () => {\n  const [count1, setCount1] = useState(0);\n  const [count2, setCount2] = useState(0);\n\n  React.useEffect(() => {\n    // \u8017\u65f6 300 \u6beb\u79d2\u7684\u8ba1\u7b97\n    const start = Number(new Date());\n    while (Number(new Date()) - start <= 300) {\n      continue;\n    }\n    if (count1 === 0) {\n      setCount1(Math.random());\n    }\n  }, [count1]);\n\n  React.useLayoutEffect(() => {\n    // \u8017\u65f6 300 \u6beb\u79d2\u7684\u8ba1\u7b97\n    const start = Number(new Date());\n    while (Number(new Date()) - start <= 300) {\n      continue;\n    }\n    if (count2 === 0) {\n      setCount2(Math.random());\n    }\n  }, [count2]);\n\n  const handleClick1 = React.useCallback(() => setCount1(0), []);\n  const handleClick2 = React.useCallback(() => setCount2(0), []);\n  return (\n    <div>\n      <div>\n        useEffect: <button onClick={handleClick1}>{count1}</button>\n      </div>\n\n      <div>\n        useLayoutEffect: <button onClick={handleClick2}>{count2}</button>\n      </div>\n    </div>\n  );\n};\n\nexport default index;\n\n```\n"})})})})})},le=n(51),ue=n.n(le),de=n(119),je=n.n(de),be=new Array(1e3).fill(!0).map((function(){return{id:je.a.datatype.uuid(),avatar:"https://www.static.hellochange.cn/images/white_bear.gif",title:je.a.name.firstName(),content:je.a.company.companyName()}})),he=function(){var e=Object(c.useState)([]),t=Object(H.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(H.a)(a,2),o=s[0],l=s[1],u=Object(c.useState)(0),d=Object(H.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(0),f=Object(H.a)(h,2),v=f[0],O=f[1],m=Object(c.useRef)(null),p=Object(c.useRef)(null),_=Object(c.useMemo)((function(){return Math.ceil(o/50)}),[o]),g=v+_,w=Object(c.useMemo)((function(){return 50*n.length}),[n]),k=Object(c.useMemo)((function(){return n.slice(v,Math.min(g,n.length))}),[n,v,g]);Object(c.useEffect)((function(){r(be.slice(0,_))}),[_]),Object(c.useEffect)((function(){var e=m.current;e&&l(e.clientHeight)}),[]);var C=Object(c.useCallback)((function(){var e,t,c=null!==(e=null===(t=m.current)||void 0===t?void 0:t.scrollTop)&&void 0!==e?e:0,a=Math.floor(c/50),i=a+_;O(a),i>=n.length&&r(be.slice(0,i+_)),b(c)}),[n,_]);return Object(c.useEffect)((function(){var e=m.current;return C(),e&&e.addEventListener("scroll",C),function(){e&&e.removeEventListener("scroll",C)}}),[C]),Object(i.jsx)(x.Page,{children:Object(i.jsxs)("div",{className:ue.a["virtual-list-wrapper"],ref:m,children:[Object(i.jsx)("div",{className:ue.a["virtual-list-phantom"],style:{height:Math.max(w,o+1)}}),Object(i.jsx)("div",{className:ue.a["virtual-list"],ref:p,style:{transform:"translateY(".concat(j,"px)")},children:k.map((function(e){var t=e.id,n=e.title,c=e.avatar,r=e.content;return Object(i.jsxs)("div",{className:ue.a["virtual-list-item"],children:[Object(i.jsx)("img",{className:ue.a["virtual-list-item__avatar"],src:c,alt:""}),Object(i.jsxs)("div",{className:ue.a["virtual-list-item__content"],children:[Object(i.jsx)("h3",{className:ue.a["virtual-list-item__title"],children:n}),Object(i.jsx)("div",{className:ue.a["virtual-list-item__desc"],children:r})]})]},t)}))})]})})},fe=function(){return Object(i.jsx)(x.Page,{children:Object(i.jsx)("button",{onClick:function(){var e=new XMLHttpRequest;e.open("GET","".concat("https://www.static.hellochange.cn/test/json/asset.json","?timestamp=").concat((new Date).getTime()),!0),e.setRequestHeader("Content-type","application/json"),e.setRequestHeader("Cache-Control","no-cache"),e.responseType="blob",e.onload=function(){if(200===this.status){var e=this.response,t=document.createElement("a");t.download="data.json",t.style.display="none",t.href=URL.createObjectURL(e),document.body.appendChild(t),t.click(),document.body.removeChild(t)}},e.send()},children:"\u4e0b\u8f7d"})})},ve=[{path:"/",element:Object(i.jsx)(a.a,{to:{pathname:"/about"}})},{path:"/about",element:Object(i.jsx)(s,{}),name:"\u5173\u4e8e"},{path:"/test",element:Object(i.jsx)(oe,{}),name:"\u6d4b\u8bd5"},{path:"/markdown",element:Object(i.jsx)(_,{}),name:"Markdown"},{path:"/markdown-it",element:Object(i.jsx)(y,{}),name:"MarkdownIt"},{path:"/recoil",element:Object(i.jsx)(ie,{}),name:"Recoil"},{path:"/virtuallist",element:Object(i.jsx)(he,{}),name:"\u865a\u62df\u957f\u5217\u8868"},{path:"/json-download",element:Object(i.jsx)(fe,{}),name:"Json\u4e0b\u8f7d"}];t.a=function(){return Object(a.g)(ve)}},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var c=function(e){var t=e.canvas,n=e.color,c=e.stepx,r=e.stepy,a=e.lineWidth,i=void 0===a?.15:a,s=t.getContext("2d");if(s.save(),s.fillStyle="transparent",s.fillRect(0,0,s.canvas.width,s.canvas.height),s.lineWidth=i,s.strokeStyle=n,c>0)for(var o=c;o<s.canvas.width;o+=c)s.beginPath(),s.moveTo(o,0),s.lineTo(o,s.canvas.height),s.closePath(),s.stroke();if(r>0)for(var l=r;l<s.canvas.height;l+=r)s.beginPath(),s.moveTo(0,l),s.lineTo(s.canvas.width,l),s.closePath(),s.stroke();s.restore()},r=function(e){e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},[[2184,1,2]]]);
//# sourceMappingURL=main.e372330f.chunk.js.map