"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[545864],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},152647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"Show Proc Action",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/open-api/fe-http/show-proc-action",id:"version-2.1/admin-manual/open-api/fe-http/show-proc-action",title:"Show Proc Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/fe-http/show-proc-action.md",sourceDirName:"admin-manual/open-api/fe-http",slug:"/admin-manual/open-api/fe-http/show-proc-action",permalink:"/zh-CN/docs/admin-manual/open-api/fe-http/show-proc-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Show Proc Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Show Meta Info Action",permalink:"/zh-CN/docs/admin-manual/open-api/fe-http/show-meta-info-action"},next:{title:"Show Runtime Info Action",permalink:"/zh-CN/docs/admin-manual/open-api/fe-http/show-runtime-info-action"}},l={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/show_proc")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6 PROC \u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"path"),(0,a.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684 Proc Path\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"forward"),(0,a.yg)("p",{parentName:"li"},"  \u662f\u5426\u8f6c\u53d1\u7ed9 Master FE \u6267\u884c"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        proc infos ...\n    ],\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b ",(0,a.yg)("inlineCode",{parentName:"p"},"/statistic")," \u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/show_proc?path=/statistic\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        ["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n        ["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n        ["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n    ],\n    "count": 0\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8f6c\u53d1\u5230 Master \u6267\u884c"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/show_proc?path=/statistic&forward=true\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        ["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n        ["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n        ["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n    ],\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);