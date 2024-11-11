"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[144170],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,m=u["".concat(l,".").concat(p)]||u[p]||f[p]||i;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},613503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"SECONDS_DIFF",language:"zh-CN"},s=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/seconds-diff",id:"version-2.1/sql-manual/sql-functions/date-time-functions/seconds-diff",title:"SECONDS_DIFF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/seconds-diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/seconds-diff",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/seconds-diff",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SECONDS_DIFF",language:"zh-CN"},sidebar:"docs",previous:{title:"SECONDS_ADD",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/seconds-add"},next:{title:"SECONDS_SUB",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/seconds-sub"}},l={},c=[{value:"seconds_diff",id:"seconds_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"seconds_diff"},"seconds_diff"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT seconds_diff(DATETIME enddate, DATETIME startdate)")),(0,o.yg)("p",null,"\u5f00\u59cb\u65f6\u95f4\u5230\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u79d2"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select seconds_diff('2020-12-25 22:00:00','2020-12-25 21:00:00');\n+------------------------------------------------------------+\n| seconds_diff('2020-12-25 22:00:00', '2020-12-25 21:00:00') |\n+------------------------------------------------------------+\n|                                                       3600 |\n+------------------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"seconds_diff\n")))}f.isMDXComponent=!0}}]);