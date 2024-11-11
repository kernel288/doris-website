"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[593429],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,d=p["".concat(i,".").concat(y)]||p[y]||f[y]||o;return n?t.createElement(d,s(s({ref:r},c),{},{components:n})):t.createElement(d,s({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},993892:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=n(58168),a=(n(296540),n(15680));const o={title:"parse_url",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/parse_url",id:"version-1.2/sql-manual/sql-functions/string-functions/parse_url",title:"parse_url",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/parse_url.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/parse_url",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/parse_url",draft:!1,tags:[],version:"1.2",frontMatter:{title:"parse_url",language:"zh-CN"},sidebar:"docs",previous:{title:"money_format",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/money_format"},next:{title:"convert_to",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/convert_to"}},i={},u=[{value:"parse_url",id:"parse_url",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"parse_url"},"parse_url"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR  parse_url(VARCHAR url, VARCHAR  name)")),(0,a.yg)("p",null,"\u5728url\u89e3\u6790\u51faname\u5bf9\u5e94\u7684\u5b57\u6bb5\uff0cname\u53ef\u9009\u9879\u4e3a\uff1a'PROTOCOL', 'HOST', 'PATH', 'REF', 'AUTHORITY', 'FILE', 'USERINFO', 'PORT', 'QUERY'\uff0c\u5c06\u7ed3\u679c\u8fd4\u56de\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT parse_url ('https://doris.apache.org/', 'HOST');\n+------------------------------------------------+\n| parse_url('https://doris.apache.org/', 'HOST') |\n+------------------------------------------------+\n| doris.apache.org                               |\n+------------------------------------------------+\n")),(0,a.yg)("p",null,"\u5982\u679c\u60f3\u83b7\u53d6 QUERY \u4e2d\u7684\u7279\u5b9a\u53c2\u6570\uff0c\u53ef\u4f7f\u7528",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/extract_url_parameter"},"extract_url_parameter"),"\u3002"),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"PARSE URL\n")))}f.isMDXComponent=!0}}]);