(function(){"use strict";var t={9195:function(t,e,n){var i=n(9242),o=n(3396);function r(t,e,n,i,r,c){const u=(0,o.up)("active-element"),l=(0,o.up)("knowledge-base");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{"topic-title":r.activeTopic&&r.activeTopic.title,text:r.activeTopic&&r.activeTopic.fullText},null,8,["topic-title","text"]),(0,o.Wm)(l)])}var c={data(){return{topics:[{id:"basics",title:"The Basics",description:"Core Vue basics you have to know",fullText:"Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!"},{id:"components",title:"Components",description:"Components are a core concept for building Vue UIs and apps",fullText:"With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces."}],activeTopic:null}},provide(){return{topics:this.topics,selectTopic:this.activateTopic}},methods:{activateTopic(t){this.activeTopic=this.topics.find((e=>e.id===t))}}},u=n(89);const l=(0,u.Z)(c,[["render",r]]);var s=l,a=n(7139);function p(t,e,n,i,r,c){return(0,o.wg)(),(0,o.iD)("section",null,[(0,o._)("h2",null,(0,a.zw)(n.topicTitle),1),(0,o._)("p",null,(0,a.zw)(n.text),1)])}var d={props:["topicTitle","text"]};const f=(0,u.Z)(d,[["render",p]]);var v=f;const h=(0,o._)("h2",null,"Select a Topic",-1);function m(t,e,n,i,r,c){const u=(0,o.up)("knowledge-grid");return(0,o.wg)(),(0,o.iD)("section",null,[h,(0,o.Wm)(u)])}var g={};const w=(0,u.Z)(g,[["render",m]]);var b=w;function T(t,e,n,i,r,c){return(0,o.wg)(),(0,o.iD)("li",null,[(0,o._)("h3",null,(0,a.zw)(n.topicName),1),(0,o._)("p",null,(0,a.zw)(n.description),1),(0,o._)("button",{onClick:e[0]||(e[0]=t=>c.selectTopic(n.id))},"Learn More")])}var k={inject:["selectTopic"],props:["id","topicName","description"]};const y=(0,u.Z)(k,[["render",T]]);var x=y;function O(t,e,n,i,r,c){const u=(0,o.up)("knowledge-element");return(0,o.wg)(),(0,o.iD)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.topics,(t=>((0,o.wg)(),(0,o.j4)(u,{key:t.id,id:t.id,"topic-name":t.title,description:t.description},null,8,["id","topic-name","description"])))),128))])}var _={inject:["topics"]};const j=(0,u.Z)(_,[["render",O]]);var D=j;const C=(0,i.ri)(s);C.component("active-element",v),C.component("knowledge-base",b),C.component("knowledge-element",x),C.component("knowledge-grid",D),C.mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var c=1/0;for(a=0;a<t.length;a++){i=t[a][0],o=t[a][1],r=t[a][2];for(var u=!0,l=0;l<i.length;l++)(!1&r||c>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(u=!1,r<c&&(c=r));if(u){t.splice(a--,1);var s=o();void 0!==s&&(e=s)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,c=i[0],u=i[1],l=i[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var a=l(n)}for(e&&e(i);s<c.length;s++)r=c[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(a)},i=self["webpackChunkvue_scopes"]=self["webpackChunkvue_scopes"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9195)}));i=n.O(i)})();
//# sourceMappingURL=app.5d1edbc0.js.map