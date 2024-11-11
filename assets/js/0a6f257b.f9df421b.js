"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[794502],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||l;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},900141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const l={title:"TO_IPV6_OR_NULL",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv6-or-null",id:"version-2.1/sql-manual/sql-functions/ip-functions/to-ipv6-or-null",title:"TO_IPV6_OR_NULL",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/ip-functions/to-ipv6-or-null.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv6-or-null",permalink:"/docs/sql-manual/sql-functions/ip-functions/to-ipv6-or-null",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TO_IPV6_OR_NULL",language:"en"},sidebar:"docs",previous:{title:"TO_IPV6_OR_DEFAULT",permalink:"/docs/sql-manual/sql-functions/ip-functions/to-ipv6-or-default"},next:{title:"cosine_distance",permalink:"/docs/sql-manual/sql-functions/distance-functions/cosine-distance"}},s={},c=[{value:"TO_IPV6_OR_NULL",id:"to_ipv6_or_null",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_ipv6_or_null"},"TO_IPV6_OR_NULL"),(0,o.yg)("p",null,"TO_IPV6_OR_NULL"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"IPV6 TO_IPV6_OR_NULL(STRING ipv6_str)")),(0,o.yg)("p",null,"Same as to_ipv6, but if the IPv6 address has an invalid format, it returns NULL."),(0,o.yg)("h4",{id:"notice"},"Notice"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"If input is NULL, return NULL.")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select to_ipv6_or_null('.');\n+----------------------+\n| to_ipv6_or_null('.') |\n+----------------------+\n| NULL                 |\n+----------------------+\n\nmysql> select to_ipv6_or_null(NULL);\n+-----------------------+\n| to_ipv6_or_null(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("p",null,"TO_IPV6_OR_NULL, IP"))}f.isMDXComponent=!0}}]);