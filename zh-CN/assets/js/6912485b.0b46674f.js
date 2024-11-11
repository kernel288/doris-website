"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16260],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},587831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"REPEAT",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/repeat",id:"sql-manual/sql-functions/string-functions/repeat",title:"REPEAT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/repeat.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/repeat",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/repeat",draft:!1,tags:[],version:"current",frontMatter:{title:"REPEAT",language:"zh-CN"},sidebar:"docs",previous:{title:"INITCAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/initcap"},next:{title:"REVERSE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/reverse"}},s={},c=[{value:"repeat",id:"repeat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"repeat"},"repeat"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR repeat(VARCHAR str, INT count)")),(0,a.yg)("p",null,"\u5c06\u5b57\u7b26\u4e32 str \u91cd\u590d count \u6b21\u8f93\u51fa\uff0ccount \u5c0f\u4e8e1\u65f6\u8fd4\u56de\u7a7a\u4e32\uff0cstr\uff0ccount \u4efb\u4e00\u4e3aNULL\u65f6\uff0c\u8fd4\u56de NULL"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"repeat \u51fd\u6570\u9ed8\u8ba4\u6700\u591a\u91cd\u590d 10000 \u6b21\uff0c\u53ef\u901a\u8fc7\u4f1a\u8bdd\u53d8\u91cf\u8c03\u6574\u9650\u5236\u3002"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"set repeat_max_num = 20000\n"))),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT repeat(\"a\", 3);\n+----------------+\n| repeat('a', 3) |\n+----------------+\n| aaa            |\n+----------------+\n\nmysql> SELECT repeat(\"a\", -1);\n+-----------------+\n| repeat('a', -1) |\n+-----------------+\n|                 |\n+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REPEAT\n")))}d.isMDXComponent=!0}}]);