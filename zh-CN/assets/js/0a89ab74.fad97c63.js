"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[957955],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var l=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=l.createContext({}),o=function(e){var a=l.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},u=function(e){var a=o(e.components);return l.createElement(i.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},c=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(t),c=n,d=m["".concat(i,".").concat(c)]||m[c]||y[c]||r;return t?l.createElement(d,g(g({ref:a},u),{},{components:t})):l.createElement(d,g({ref:a},u))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,g=new Array(r);g[0]=c;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[m]="string"==typeof e?e:n,g[1]=p;for(var o=2;o<r;o++)g[o]=t[o];return l.createElement.apply(null,g)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},554604:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>g,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=t(58168),n=(t(296540),t(15680));const r={title:"\u6570\u636e\u7f13\u5b58",language:"zh-CN"},g=void 0,p={unversionedId:"compute-storage-decoupled/file-cache",id:"compute-storage-decoupled/file-cache",title:"\u6570\u636e\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/compute-storage-decoupled/file-cache.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/file-cache",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/file-cache",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8ba1\u7b97\u7ec4\u64cd\u4f5c",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/managing-compute-cluster"},next:{title:"Meta Service API \u53c2\u8003",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/meta-service-api"}},i={},o=[{value:"\u591a\u961f\u5217 LRU",id:"\u591a\u961f\u5217-lru",level:2},{value:"LRU",id:"lru",level:3},{value:"TTL (Time-To-Live)",id:"ttl-time-to-live",level:3},{value:"\u591a\u961f\u5217",id:"\u591a\u961f\u5217",level:3},{value:"\u6dd8\u6c70",id:"\u6dd8\u6c70",level:3},{value:"\u7f13\u5b58\u9884\u70ed",id:"\u7f13\u5b58\u9884\u70ed",level:2},{value:"Compute Group \u6269\u7f29\u5bb9",id:"compute-group-\u6269\u7f29\u5bb9",level:2},{value:"\u7f13\u5b58\u89c2\u6d4b",id:"\u7f13\u5b58\u89c2\u6d4b",level:2},{value:"\u70ed\u70b9\u4fe1\u606f",id:"\u70ed\u70b9\u4fe1\u606f",level:3},{value:"Cache \u7a7a\u95f4\u4ee5\u53ca\u547d\u4e2d\u7387",id:"cache-\u7a7a\u95f4\u4ee5\u53ca\u547d\u4e2d\u7387",level:3},{value:"SQL profile",id:"sql-profile",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u8bbe\u7f6e TTL \u7b56\u7565",id:"\u8bbe\u7f6e-ttl-\u7b56\u7565",level:3},{value:"\u7f13\u5b58\u9884\u70ed",id:"\u7f13\u5b58\u9884\u70ed-1",level:3},{value:"\u5b9e\u8df5\u6848\u4f8b",id:"\u5b9e\u8df5\u6848\u4f8b",level:2}],u={toc:o},m="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,l.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u5728\u5b58\u7b97\u5206\u79bb\u7684\u67b6\u6784\u4e2d\uff0c\u6570\u636e\u88ab\u5b58\u50a8\u5728\u8fdc\u7a0b\u5b58\u50a8\u3002Doris \u6570\u636e\u5e93\u901a\u8fc7\u5229\u7528\u672c\u5730\u786c\u76d8\u4e0a\u7684\u7f13\u5b58\u6765\u52a0\u901f\u6570\u636e\u8bbf\u95ee\uff0c\u5e76\u91c7\u7528\u4e86\u4e00\u79cd\u5148\u8fdb\u7684\u591a\u961f\u5217 LRU\uff08Least Recently Used\uff09\u7b56\u7565\u6765\u9ad8\u6548\u7ba1\u7406\u7f13\u5b58\u7a7a\u95f4\u3002\u8fd9\u79cd\u7b56\u7565\u7279\u522b\u4f18\u5316\u4e86\u7d22\u5f15\u548c\u5143\u6570\u636e\u7684\u8bbf\u95ee\u8def\u5f84\uff0c\u65e8\u5728\u6700\u5927\u5316\u5730\u7f13\u5b58\u7528\u6237\u9891\u7e41\u8bbf\u95ee\u7684\u6570\u636e\u3002\u9488\u5bf9\u591a\u8ba1\u7b97\u7ec4\uff08Compute Group\uff09\u7684\u5e94\u7528\u573a\u666f\uff0cDoris \u8fd8\u63d0\u4f9b\u4e86\u7f13\u5b58\u9884\u70ed\u529f\u80fd\uff0c\u4ee5\u4fbf\u5728\u65b0\u8ba1\u7b97\u7ec4\u5efa\u7acb\u65f6\uff0c\u80fd\u591f\u8fc5\u901f\u52a0\u8f7d\u7279\u5b9a\u6570\u636e\uff08\u5982\u8868\u6216\u5206\u533a\uff09\u5230\u7f13\u5b58\u4e2d\uff0c\u4ece\u800c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"),(0,n.yg)("h2",{id:"\u591a\u961f\u5217-lru"},"\u591a\u961f\u5217 LRU"),(0,n.yg)("h3",{id:"lru"},"LRU"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"LRU \u901a\u8fc7\u7ef4\u62a4\u4e00\u4e2a\u6570\u636e\u8bbf\u95ee\u961f\u5217\u6765\u7ba1\u7406\u7f13\u5b58\u3002\u5f53\u6570\u636e\u88ab\u8bbf\u95ee\u65f6\uff0c\u8be5\u6570\u636e\u4f1a\u88ab\u79fb\u52a8\u5230\u961f\u5217\u7684\u524d\u7aef\u3002\u65b0\u52a0\u5165\u7f13\u5b58\u7684\u6570\u636e\u540c\u6837\u4f1a\u88ab\u7f6e\u4e8e\u961f\u5217\u524d\u7aef\uff0c\u4ee5\u9632\u6b62\u5176\u8fc7\u65e9\u88ab\u6dd8\u6c70\u3002\u5f53\u7f13\u5b58\u7a7a\u95f4\u8fbe\u5230\u4e0a\u9650\u65f6\uff0c\u961f\u5217\u5c3e\u90e8\u7684\u6570\u636e\u5c06\u4f18\u5148\u88ab\u79fb\u9664\u3002")),(0,n.yg)("h3",{id:"ttl-time-to-live"},"TTL (Time-To-Live)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"TTL \u7b56\u7565\u786e\u4fdd\u65b0\u5bfc\u5165\u7684\u6570\u636e\u5728\u7f13\u5b58\u4e2d\u4fdd\u7559\u4e00\u6bb5\u65f6\u95f4\u4e0d\u88ab\u6dd8\u6c70\u3002\u5728\u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u6570\u636e\u5177\u6709\u6700\u9ad8\u4f18\u5148\u7ea7\uff0c\u4e14\u6240\u6709 TTL \u6570\u636e\u4e4b\u95f4\u5730\u4f4d\u5e73\u7b49\u3002\u5f53\u7f13\u5b58\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u7cfb\u7edf\u4f1a\u4f18\u5148\u6dd8\u6c70\u5176\u5b83\u961f\u5217\u4e2d\u7684\u6570\u636e\uff0c\u4ee5\u786e\u4fdd TTL \u6570\u636e\u80fd\u591f\u88ab\u5199\u5165\u7f13\u5b58\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5e94\u7528\u573a\u666f\uff1aTTL \u7b56\u7565\u7279\u522b\u9002\u7528\u4e8e\u5e0c\u671b\u5728\u672c\u5730\u6301\u4e45\u5316\u7684\u5c0f\u89c4\u6a21\u6570\u636e\u8868\u3002\u5bf9\u4e8e\u5e38\u9a7b\u8868\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8f83\u957f\u7684 TTL \u503c\u6765\u4fdd\u62a4\u5176\u6570\u636e\uff1b\u5bf9\u4e8e\u52a8\u6001\u5206\u533a\u7684\u6570\u636e\u8868\uff0c\u53ef\u4ee5\u6839\u636e Hot Partition \u7684\u6d3b\u8dc3\u65f6\u95f4\u8bbe\u5b9a\u76f8\u5e94\u7684 TTL \u503c\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u6ce8\u610f\u4e8b\u9879\uff1a\u76ee\u524d\u7cfb\u7edf\u4e0d\u652f\u6301\u76f4\u63a5\u67e5\u770b TTL \u6570\u636e\u5728\u7f13\u5b58\u4e2d\u7684\u5360\u6bd4\u3002"))),(0,n.yg)("h3",{id:"\u591a\u961f\u5217"},"\u591a\u961f\u5217"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Doris \u91c7\u7528\u57fa\u4e8e LRU \u7684\u591a\u961f\u5217\u7b56\u7565\uff0c\u6839\u636e TTL \u5c5e\u6027\u548c\u6570\u636e\u5c5e\u6027\u5c06\u6570\u636e\u5206\u4e3a\u56db\u7c7b\uff0c\u5e76\u5206\u522b\u7f6e\u4e8e TTL \u961f\u5217\u3001Index \u961f\u5217\u3001NormalData \u961f\u5217\u548c Disposable \u961f\u5217\u4e2d\u3002\u8bbe\u7f6e\u4e86 TTL \u5c5e\u6027\u7684\u6570\u636e\u88ab\u653e\u7f6e\u5230 TTL \u961f\u5217\uff0c\u6ca1\u6709\u8bbe\u7f6e TTL \u5c5e\u6027\u7684\u7d22\u5f15\u6570\u636e\u88ab\u653e\u7f6e\u5230 Index \u961f\u5217\uff0c\u6ca1\u6709\u8bbe\u7f6e TTL \u5c5e\u6027\u7684\u7d22\u5f15\u6570\u636e\u88ab\u653e\u7f6e\u5230 NormalData \u961f\u5217\uff0c\u4e34\u65f6\u4f7f\u7528\u7684\u6570\u636e\u88ab\u653e\u7f6e\u5230 Disposable \u961f\u5217\u4e2d\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5728\u6570\u636e\u8bfb\u53d6\u548c\u5199\u5165\u8fc7\u7a0b\u4e2d\uff0cDoris \u4f1a\u5730\u9009\u62e9\u586b\u5145\u548c\u8bfb\u53d6\u7684\u961f\u5217\uff0c\u4ee5\u6700\u5927\u5316\u7f13\u5b58\u5229\u7528\u7387\u3002\u5177\u4f53\u673a\u5236\u5982\u4e0b\uff1a"))),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,n.yg)("th",{parentName:"tr",align:null},"\u672a\u547d\u4e2d\u65f6\u586b\u5145\u7684\u961f\u5217"),(0,n.yg)("th",{parentName:"tr",align:null},"\u5199\u5165\u6570\u636e\u65f6\u586b\u5145\u7684\u961f\u5217"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},"TTL / Index / NormalData"),(0,n.yg)("td",{parentName:"tr",align:null},"TTL / Index / NormalData")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2"),(0,n.yg)("td",{parentName:"tr",align:null},"TTL / Index / NormalData"),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"schema change"),(0,n.yg)("td",{parentName:"tr",align:null},"Disposable"),(0,n.yg)("td",{parentName:"tr",align:null},"TTL / Index / NormalData")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"compaction"),(0,n.yg)("td",{parentName:"tr",align:null},"Disposable"),(0,n.yg)("td",{parentName:"tr",align:null},"TTL / Index / NormalData")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u9884\u70ed"),(0,n.yg)("td",{parentName:"tr",align:null},"N/A"),(0,n.yg)("td",{parentName:"tr",align:null},"TTL / Index / NormalData")))),(0,n.yg)("h3",{id:"\u6dd8\u6c70"},"\u6dd8\u6c70"),(0,n.yg)("p",null,"\u4e0a\u8ff0\u5404\u7c7b\u578b\u7f13\u5b58\u5171\u540c\u4f7f\u7528\u603b\u7f13\u5b58\u7a7a\u95f4\u3002\u6839\u636e\u91cd\u8981\u7a0b\u5ea6\u7684\u4e0d\u540c\u6211\u4eec\u53ef\u4ee5\u4e3a\u5b83\u4eec\u5212\u5206\u6bd4\u4f8b\u3002\u6bd4\u4f8b\u53ef\u4ee5\u5728 be \u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"p"},"file_cache_path")," \u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\uff1aTTL : Normal : Index : Disposable = 50% :  30% : 10% : 10%\u3002"),(0,n.yg)("p",null,"\u8fd9\u4e9b\u6bd4\u4f8b\u4e0d\u662f\u786c\u6027\u9650\u5236\uff0cDoris \u4f1a\u6839\u636e\u9700\u8981\u52a8\u6001\u8c03\u6574\u4ee5\u5145\u5206\u5229\u7528\u7a7a\u95f4\u6765\u52a0\u901f\u8bbf\u95ee\u3002\u4f8b\u5982\u7528\u6237\u5982\u679c\u4e0d\u4f7f\u7528 TTL \u7c7b\u578b\u7684\u7f13\u5b58\uff0c\u90a3\u4e48\u5176\u5b83\u7c7b\u578b\u53ef\u4ee5\u8d85\u8fc7\u9884\u8bbe\u6bd4\u4f8b\u4f7f\u7528\u539f\u672c\u4e3a TTL \u5206\u914d\u7684\u7a7a\u95f4\u3002"),(0,n.yg)("p",null,"\u7f13\u5b58\u7684\u6dd8\u6c70\u6709\u4e24\u79cd\u89e6\u53d1\u65f6\u673a\uff1a\u5783\u573e\u6e05\u7406\u6216\u8005\u7f13\u5b58\u7a7a\u95f4\u4e0d\u8db3\u3002\u5f53\u7528\u6237\u5220\u9664\u6570\u636e\u65f6\uff0c\u6216\u662f\u5bfc\u5165 compaction \u4efb\u52a1\u7ed3\u675f\u65f6\uff0c\u4f1a\u5f02\u6b65\u5730\u5bf9\u8fc7\u671f\u7684\u7f13\u5b58\u6570\u636e\u8fdb\u884c\u6dd8\u6c70\u3002\u5199\u5165\u7f13\u5b58\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u4f1a\u6309\u7167 Disposable\u3001Normal Data\u3001Index\u3001TTL \u7684\u987a\u5e8f\u6dd8\u6c70\u3002\u4f8b\u5982\uff1a\u5982\u679c\u5199\u5165 Normal Data \u65f6\u7a7a\u95f4\u4e0d\u8db3\uff0c\u90a3\u4e48 Doris \u4f1a\u4f9d\u6b21\u6dd8\u6c70 Disposable\u3001Index\u3001TTL \u7684\u90e8\u5206\u6570\u636e\uff08\u6309\u7167 LRU \u7684\u987a\u5e8f\uff09\u3002\u6ce8\u610f\u6211\u4eec\u4e0d\u4f1a\u5c06\u6dd8\u6c70\u76ee\u6807\u7c7b\u578b\u7684\u6570\u636e\u5168\u90e8\u6dd8\u6c70\u518d\u6dd8\u6c70\u987a\u5e8f\u4e2d\u7684\u4e0b\u4e00\u4e2a\u7c7b\u578b\uff0c\u800c\u662f\u81f3\u5c11\u4f1a\u4fdd\u7559\u4e0a\u8ff0\u6bd4\u4f8b\u7684\u7a7a\u95f4\u4ee5\u8ba9\u5176\u5b83\u7c7b\u578b\u4e5f\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u5982\u679c\u8fd9\u4e2a\u8fc7\u7a0b\u4e0d\u80fd\u6210\u529f\u6dd8\u6c70\u51fa\u8db3\u591f\u7684\u7a7a\u95f4\uff0c\u90a3\u4e48\u5c06\u4f1a\u89e6\u53d1\u81ea\u8eab\u7c7b\u578b\u7684 LRU \u6dd8\u6c70\u3002\u63a5\u7740\u4e0a\u9762\u5199 Normal Data \u65f6\u7a7a\u95f4\u4e0d\u8db3\u4f8b\u5b50\uff0c\u5982\u679c\u4e0d\u80fd\u4ece\u5176\u5b83\u7c7b\u578b\u4e2d\u6dd8\u6c70\u51fa\u8db3\u591f\u7684\u7a7a\u95f4\uff0c\u6b64\u65f6 Normal Data \u5c06\u4ece\u81ea\u8eab\u6309\u7167 LRU \u987a\u5e8f\u6dd8\u6c70\u51fa\u6570\u636e\u3002"),(0,n.yg)("p",null,"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u5bf9\u4e8e\u5e26\u6709\u8fc7\u671f\u65f6\u95f4\u7684 TTL \u961f\u5217\uff0c\u5176\u6570\u636e\u8fc7\u671f\u65f6\u4f1a\u88ab\u79fb\u52a8\u5230 Normal Data \u961f\u5217\uff0c\u4f5c\u4e3a Normal Data \u53c2\u4e0e\u6dd8\u6c70\u3002"),(0,n.yg)("p",null,"\u7279\u522b\u7684\uff0c\u5bf9\u4e8e\u5e26\u6709\u8fc7\u671f\u65f6\u95f4\u7684 TTL \u961f\u5217\uff0c\u5176\u6570\u636e\u8fc7\u671f\u65f6\u4f1a\u88ab\u79fb\u52a8\u5230 Normal Data \u961f\u5217\uff0c\u4f5c\u4e3a Normal Data \u53c2\u4e0e\u6dd8\u6c70\u3002"),(0,n.yg)("h2",{id:"\u7f13\u5b58\u9884\u70ed"},"\u7f13\u5b58\u9884\u70ed"),(0,n.yg)("p",null,"\u5728\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\uff0cDoris \u652f\u6301\u591a\u8ba1\u7b97\u7ec4\u90e8\u7f72\uff0c\u5404\u8ba1\u7b97\u7ec4\u95f4\u5171\u4eab\u6570\u636e\u4f46\u4e0d\u5171\u4eab\u7f13\u5b58\u3002\u65b0\u8ba1\u7b97\u7ec4\u521b\u5efa\u65f6\uff0c\u5176\u7f13\u5b58\u4e3a\u7a7a\uff0c\u53ef\u80fd\u5f71\u54cd\u67e5\u8be2\u6027\u80fd\u3002\u4e3a\u6b64\uff0cDoris \u63d0\u4f9b\u7f13\u5b58\u9884\u70ed\u529f\u80fd\uff0c\u5141\u8bb8\u7528\u6237\u4ece\u8fdc\u7aef\u5b58\u50a8\u4e3b\u52a8\u62c9\u53d6\u6570\u636e\u81f3\u672c\u5730\u7f13\u5b58\u3002\u8be5\u529f\u80fd\u652f\u6301\u4ee5\u4e0b\u4e09\u79cd\u6a21\u5f0f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u8ba1\u7b97\u7ec4\u95f4\u9884\u70ed"),"\uff1a\u5c06\u8ba1\u7b97\u7ec4 A \u7684\u7f13\u5b58\u6570\u636e\u9884\u70ed\u81f3\u8ba1\u7b97\u7ec4 B\u3002Doris \u5b9a\u671f\u6536\u96c6\u5404\u8ba1\u7b97\u7ec4\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u88ab\u8bbf\u95ee\u7684\u8868/\u5206\u533a\u7684\u70ed\u70b9\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u9009\u62e9\u6027\u5730\u9884\u70ed\u67d0\u4e9b\u8868/\u5206\u533a\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u8868\u6570\u636e\u9884\u70ed"),"\uff1a\u6307\u5b9a\u5c06\u8868 A \u7684\u6570\u636e\u9884\u70ed\u81f3\u65b0\u8ba1\u7b97\u7ec4\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u5206\u533a\u6570\u636e\u9884\u70ed"),"\uff1a\u6307\u5b9a\u5c06\u8868 A \u7684\u5206\u533a ",(0,n.yg)("inlineCode",{parentName:"li"},"p1")," \u7684\u6570\u636e\u9884\u70ed\u81f3\u65b0\u8ba1\u7b97\u7ec4\u3002")),(0,n.yg)("h2",{id:"compute-group-\u6269\u7f29\u5bb9"},"Compute Group \u6269\u7f29\u5bb9"),(0,n.yg)("p",null,"Compute Group \u6269\u7f29\u5bb9\u65f6\uff0c\u4e3a\u4e86\u907f\u514d Cache \u6ce2\u52a8\uff0cDoris \u4f1a\u9996\u5148\u5bf9\u53d7\u5f71\u54cd\u7684 Tablet \u91cd\u65b0\u6620\u5c04\u5e76\u9884\u70ed\u6570\u636e\u3002"),(0,n.yg)("h2",{id:"\u7f13\u5b58\u89c2\u6d4b"},"\u7f13\u5b58\u89c2\u6d4b"),(0,n.yg)("h3",{id:"\u70ed\u70b9\u4fe1\u606f"},"\u70ed\u70b9\u4fe1\u606f"),(0,n.yg)("p",null,"Doris \u6bcf 10 \u5206\u949f\u6536\u96c6\u5404\u4e2a\u8ba1\u7b97\u7ec4\u7684\u7f13\u5b58\u70ed\u70b9\u4fe1\u606f\u5230\u5185\u90e8\u7cfb\u7edf\u8868\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW CACHE HOTSPOT '/'")," \u547d\u4ee4\u67e5\u770b\u70ed\u70b9\u4fe1\u606f\u3002"),(0,n.yg)("h3",{id:"cache-\u7a7a\u95f4\u4ee5\u53ca\u547d\u4e2d\u7387"},"Cache \u7a7a\u95f4\u4ee5\u53ca\u547d\u4e2d\u7387"),(0,n.yg)("p",null,"Doris BE \u8282\u70b9\u901a\u8fc7 `curl {be_ip}:{brpc_port}/vars ( brpc_port \u9ed8\u8ba4\u4e3a 8060 ) \u83b7\u53d6 cache \u7edf\u8ba1\u4fe1\u606f\uff0c\u6307\u6807\u9879\u7684\u540d\u79f0\u5f00\u59cb\u4e3a\u78c1\u76d8\u8def\u5f84\u3002"),(0,n.yg)("p",null,'\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\u6307\u6807\u524d\u7f00\u4e3a File Cache \u7684\u8def\u5f84\uff0c\u4f8b\u5982\u524d\u7f00 "',(0,n.yg)("em",{parentName:"p"},"mnt_disk1_gavinchou_debug_doris_cloud_be0_storage_file_cache"),'" \u8868\u793a "/mnt/disk1/gavinchou/debug/doris-cloud/be0_storage_file_cache/"\n\u53bb\u6389\u524d\u7f00\u7684\u90e8\u5206\u4e3a\u7edf\u8ba1\u6307\u6807\uff0c\u6bd4\u5982 "file_cache_cache_size" \u8868\u793a\u5f53\u524d \u8def\u5f84\u7684 File Cache \u5927\u5c0f\u4e3a 26111 \u5b57\u8282'),(0,n.yg)("p",null,"\u4e0b\u8868\u4e3a\u5168\u90e8\u7684\u6307\u6807\u610f\u4e49 (\u4ee5\u4e0b\u8868\u793a size \u5927\u5c0f\u5355\u4f4d\u5747\u4e3a\u5b57\u8282)"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0 (\u4e0d\u5305\u542b\u8def\u5f84\u524d\u7f00)"),(0,n.yg)("th",{parentName:"tr",align:null},"\u8bed\u4e49"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_cache_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d File Cache \u7684\u603b\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_disposable_queue_cache_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d disposable \u961f\u5217\u7684\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_disposable_queue_element_count"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d disposable \u961f\u5217\u91cc\u7684\u5143\u7d20\u4e2a\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_disposable_queue_evict_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece\u542f\u52a8\u5230\u5f53\u524d disposable \u961f\u5217\u603b\u5171\u6dd8\u6c70\u7684\u6570\u636e\u91cf\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_index_queue_cache_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d index \u961f\u5217\u7684\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_index_queue_element_count"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d index \u961f\u5217\u91cc\u7684\u5143\u7d20\u4e2a\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_index_queue_evict_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece\u542f\u52a8\u5230\u5f53\u524d index \u961f\u5217\u603b\u5171\u6dd8\u6c70\u7684\u6570\u636e\u91cf\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_normal_queue_cache_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d normal \u961f\u5217\u7684\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_normal_queue_element_count"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d normal \u961f\u5217\u91cc\u7684\u5143\u7d20\u4e2a\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_normal_queue_evict_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece\u542f\u52a8\u5230\u5f53\u524d normal \u961f\u5217\u603b\u5171\u6dd8\u6c70\u7684\u6570\u636e\u91cf\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_total_evict_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece\u542f\u52a8\u5230\u5f53\u524d\uff0c\u6574\u4e2a File Cache \u603b\u5171\u6dd8\u6c70\u7684\u6570\u636e\u91cf\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_ttl_cache_evict_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece\u542f\u52a8\u5230\u5f53\u524d TTL \u961f\u5217\u603b\u5171\u6dd8\u6c70\u7684\u6570\u636e\u91cf\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_ttl_cache_lru_queue_element_count"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d TTL \u961f\u5217\u91cc\u7684\u5143\u7d20\u4e2a\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_ttl_cache_size"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d TTL \u961f\u5217\u7684\u5927\u5c0f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_evict_by_heat","_","[A]","_","to","_","[B]"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4e3a\u4e86\u5199\u5165 B \u7f13\u5b58\u7c7b\u578b\u7684\u6570\u636e\u800c\u6dd8\u6c70\u7684 A \u7f13\u5b58\u7c7b\u578b\u7684\u6570\u636e\u91cf\uff08\u57fa\u4e8e\u8fc7\u671f\u65f6\u95f4\u7684\u6dd8\u6c70\u65b9\u5f0f\uff09")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_evict_by_size","_","[A]","_","to","_","[B]"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4e3a\u4e86\u5199\u5165 B \u7f13\u5b58\u7c7b\u578b\u7684\u6570\u636e\u800c\u6dd8\u6c70\u7684 A \u7f13\u5b58\u7c7b\u578b\u7684\u6570\u636e\u91cf\uff08\u57fa\u4e8e\u7a7a\u95f4\u7684\u6dd8\u6c70\u65b9\u5f0f\uff09")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"file_cache_evict_by_self_lru","_","[A]"),(0,n.yg)("td",{parentName:"tr",align:null},"A \u7f13\u5b58\u7c7b\u578b\u7684\u6570\u636e\u4e3a\u4e86\u5199\u5165\u65b0\u6570\u636e\u800c\u6dd8\u6c70\u81ea\u8eab\u7684\u6570\u636e\u91cf\uff08\u57fa\u4e8e LRU \u7684\u6dd8\u6c70\u65b9\u5f0f\uff09")))),(0,n.yg)("h3",{id:"sql-profile"},"SQL profile"),(0,n.yg)("p",null,"SQL profile \u4e2d cache \u76f8\u5173\u7684\u6307\u6807\u5728 SegmentIterator \u4e0b\uff0c\u5305\u62ec"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u8bed\u4e49"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BytesScannedFromCache"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece File Cache \u8bfb\u53d6\u7684\u6570\u636e\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BytesScannedFromRemote"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece\u8fdc\u7a0b\u5b58\u50a8\u8bfb\u53d6\u7684\u6570\u636e\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BytesWriteIntoCache"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5199\u5165 File Cache \u7684\u6570\u636e\u91cf")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LocalIOUseTimer"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6 File Cache \u7684\u8017\u65f6")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"NumLocalIOTotal"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6 File Cache \u7684\u6b21\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"NumRemoteIOTotal"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u8fdc\u7a0b\u5b58\u50a8\u7684\u6b21\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"NumSkipCacheIOTotal"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ece\u8fdc\u7a0b\u5b58\u50a8\u8bfb\u53d6\u5e76\u6ca1\u6709\u8fdb\u5165 File Cache \u7684\u6b21\u6570")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"RemoteIOUseTimer"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u8fdc\u7a0b\u5b58\u50a8\u7684\u8017\u65f6")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"WriteCacheIOUseTimer"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5199 File Cache \u7684\u8017\u65f6")))),(0,n.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.yg)("a",{parentName:"p",href:"../query-acceleration/tuning/query-profile"},"\u67e5\u8be2\u6027\u80fd\u5206\u6790")," \u67e5\u770b\u67e5\u8be2\u6027\u80fd\u5206\u6790\u3002"),(0,n.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.yg)("h3",{id:"\u8bbe\u7f6e-ttl-\u7b56\u7565"},"\u8bbe\u7f6e TTL \u7b56\u7565"),(0,n.yg)("p",null,"\u5728\u5efa\u8868\u65f6\uff0c\u8bbe\u7f6e\u76f8\u5e94\u7684 PROPERTY\uff0c\u5373\u53ef\u5c06\u8be5\u8868\u7684\u6570\u636e\u4f7f\u7528 TTL \u7b56\u7565\u8fdb\u884c\u7f13\u5b58\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"file_cache_ttl_seconds")," : \u65b0\u5bfc\u5165\u7684\u6570\u636e\u671f\u671b\u5728\u7f13\u5b58\u4e2d\u4fdd\u7559\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'CREATE TABLE IF NOT EXISTS customer (\n  C_CUSTKEY     INTEGER NOT NULL,\n  C_NAME        VARCHAR(25) NOT NULL,\n  C_ADDRESS     VARCHAR(40) NOT NULL,\n  C_NATIONKEY   INTEGER NOT NULL,\n  C_PHONE       CHAR(15) NOT NULL,\n  C_ACCTBAL     DECIMAL(15,2)   NOT NULL,\n  C_MKTSEGMENT  CHAR(10) NOT NULL,\n  C_COMMENT     VARCHAR(117) NOT NULL\n)\nDUPLICATE KEY(C_CUSTKEY, C_NAME)\nDISTRIBUTED BY HASH(C_CUSTKEY) BUCKETS 32\nPROPERTIES(\n    "file_cache_ttl_seconds"="300"\n)\n')),(0,n.yg)("p",null,"\u4e0a\u8868\u4e2d\uff0c\u6240\u6709\u65b0\u5bfc\u5165\u7684\u6570\u636e\u5c06\u5728\u7f13\u5b58\u4e2d\u88ab\u4fdd\u7559 300 \u79d2\u3002\u7cfb\u7edf\u5f53\u524d\u652f\u6301\u4fee\u6539\u8868\u7684 TTL \u65f6\u95f4\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\u5c06 TTL \u7684\u65f6\u95f4\u5ef6\u957f\u6216\u51cf\u77ed\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},'ALTER TABLE customer set ("file_cache_ttl_seconds"="3000");\n')),(0,n.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"\u4fee\u6539\u540e\u7684 TTL \u503c\u5e76\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u800c\u4f1a\u5b58\u5728\u4e00\u5b9a\u7684\u5ef6\u8fdf\u3002"),(0,n.yg)("p",{parentName:"admonition"},"\u5982\u679c\u5728\u5efa\u8868\u65f6\u6ca1\u6709\u8bbe\u7f6e TTL\uff0c\u7528\u6237\u540c\u6837\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ALTER \u8bed\u53e5\u6765\u4fee\u6539\u8868\u7684 TTL \u5c5e\u6027\u3002")),(0,n.yg)("h3",{id:"\u7f13\u5b58\u9884\u70ed-1"},"\u7f13\u5b58\u9884\u70ed"),(0,n.yg)("p",null,"\u76ee\u524d\u652f\u6301\u4e09\u79cd\u7f13\u5b58\u9884\u70ed\u6a21\u5f0f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5c06 ",(0,n.yg)("inlineCode",{parentName:"li"},"compute_group_name0")," \u7684\u7f13\u5b58\u6570\u636e\u9884\u70ed\u5230 ",(0,n.yg)("inlineCode",{parentName:"li"},"compute_group_name1")," \u3002")),(0,n.yg)("p",null,"\u5f53\u6267\u884c\u4ee5\u4e0b SQL \u65f6\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"compute_group_name1")," \u8ba1\u7b97\u7ec4\u4f1a\u83b7\u53d6 ",(0,n.yg)("inlineCode",{parentName:"p"},"compute_group_name0")," \u8ba1\u7b97\u7ec4\u7684\u8bbf\u95ee\u4fe1\u606f\uff0c\u6765\u5c3d\u53ef\u80fd\u8fd8\u539f\u51fa\u4e0e ",(0,n.yg)("inlineCode",{parentName:"p"},"compute_group_name0")," \u8ba1\u7b97\u7ec4\u4e00\u81f4\u7684\u7f13\u5b58\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"WARM UP COMPUTE GROUP compute_group_name1 WITH COMPUTE GROUP compute_group_name0\n")),(0,n.yg)("p",null,"\u67e5\u770b\u5f53\u524d\u6240\u6709\u8ba1\u7b97\u7ec4\u4e2d\u6700\u9891\u7e41\u8bbf\u95ee\u7684\u8868\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CACHE HOTSPOT '/';\n")),(0,n.yg)("p",null,"\u67e5\u770b ",(0,n.yg)("inlineCode",{parentName:"p"},"compute_group_name0")," \u4e0b\u7684\u6240\u6709\u8868\u4e2d\u6700\u9891\u7e41\u8bbf\u95ee\u7684 Partition\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CACHE HOTSPOT '/compute_group_name0';\n")),(0,n.yg)("p",null,"\u67e5\u770b ",(0,n.yg)("inlineCode",{parentName:"p"},"compute_group_name0")," \u4e0b\uff0c\u8868",(0,n.yg)("inlineCode",{parentName:"p"},"regression_test_cloud_load_copy_into_tpch_sf1_p1.customer")," \u7684\u8bbf\u95ee\u4fe1\u606f\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CACHE HOTSPOT '/compute_group_name0/regression_test_cloud_load_copy_into_tpch_sf1_p1.customer';\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5c06\u8868 ",(0,n.yg)("inlineCode",{parentName:"li"},"customer")," \u7684\u6570\u636e\u9884\u70ed\u5230 ",(0,n.yg)("inlineCode",{parentName:"li"},"compute_group_name1"),"\u3002\u6267\u884c\u4ee5\u4e0b SQL\uff0c\u53ef\u4ee5\u5c06\u8be5\u8868\u5728\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6570\u636e\u5168\u90e8\u62c9\u53d6\u5230\u672c\u5730\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"WARM UP COMPUTE GROUP compute_group_name1 WITH TABLE customer\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5c06\u8868 ",(0,n.yg)("inlineCode",{parentName:"li"},"customer")," \u7684\u5206\u533a ",(0,n.yg)("inlineCode",{parentName:"li"},"p1")," \u7684\u6570\u636e\u9884\u70ed\u5230 ",(0,n.yg)("inlineCode",{parentName:"li"},"compute_group_name1"),"\u3002\u6267\u884c\u4ee5\u4e0b SQL\uff0c\u53ef\u4ee5\u5c06\u8be5\u5206\u533a\u5728\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6570\u636e\u5168\u90e8\u62c9\u53d6\u5230\u672c\u5730\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"WARM UP COMPUTE GROUP compute_group_name1 with TABLE customer PARTITION p1\n")),(0,n.yg)("p",null,"\u4e0a\u8ff0\u4e09\u6761\u7f13\u5b58\u9884\u70ed SQL \u5747\u4f1a\u8fd4\u56de\u4e00\u4e2a JobID \u7ed3\u679c\u3002\u4f8b\u5982\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"WARM UP COMPUTE GROUP cloud_warm_up WITH TABLE test_warm_up;\n")),(0,n.yg)("p",null,"\u7136\u540e\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b SQL \u67e5\u770b\u7f13\u5b58\u9884\u70ed\u8fdb\u5ea6\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW WARM UP JOB WHERE ID = 13418; \n")),(0,n.yg)("p",null,"\u53ef\u6839\u636e ",(0,n.yg)("inlineCode",{parentName:"p"},"FinishBatch")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"AllBatch")," \u5224\u65ad\u5f53\u524d\u4efb\u52a1\u8fdb\u5ea6\uff0c\u6bcf\u4e2a Batch \u7684\u6570\u636e\u5927\u5c0f\u7ea6\u4e3a 10GB\u3002\u76ee\u524d\uff0c\u4e00\u4e2a\u8ba1\u7b97\u7ec4\u4e2d\uff0c\u540c\u4e00\u65f6\u95f4\u5185\u53ea\u652f\u6301\u6267\u884c\u4e00\u4e2a\u9884\u70ed Job\u3002\u7528\u6237\u53ef\u4ee5\u505c\u6b62\u6b63\u5728\u8fdb\u884c\u7684\u9884\u70ed Job\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL WARM UP JOB WHERE id = 13418;\n")),(0,n.yg)("h2",{id:"\u5b9e\u8df5\u6848\u4f8b"},"\u5b9e\u8df5\u6848\u4f8b"),(0,n.yg)("p",null,"\u67d0\u7528\u6237\u62e5\u6709\u4e00\u7cfb\u5217\u6570\u636e\u8868\uff0c\u603b\u6570\u636e\u91cf\u8d85\u8fc7 3TB\uff0c\u800c\u53ef\u7528\u7f13\u5b58\u5bb9\u91cf\u4ec5\u4e3a 1.2TB\u3002\u5176\u4e2d\uff0c\u8bbf\u95ee\u9891\u7387\u8f83\u9ad8\u7684\u8868\u6709\u4e24\u5f20\uff1a\u4e00\u5f20\u662f\u5927\u5c0f\u4e3a 200MB \u7684\u7ef4\u5ea6\u8868 (",(0,n.yg)("inlineCode",{parentName:"p"},"dimension_table"),")\uff0c\u53e6\u4e00\u5f20\u662f\u5927\u5c0f\u4e3a 100GB \u7684\u4e8b\u5b9e\u8868 (",(0,n.yg)("inlineCode",{parentName:"p"},"fact_table"),")\uff0c\u540e\u8005\u6bcf\u65e5\u90fd\u6709\u65b0\u6570\u636e\u5bfc\u5165\uff0c\u5e76\u9700\u8981\u6267\u884c T+1 \u67e5\u8be2\u64cd\u4f5c\u3002\u6b64\u5916\uff0c\u5176\u4ed6\u5927\u8868\u8bbf\u95ee\u9891\u7387\u4e0d\u9ad8\u3002"),(0,n.yg)("p",null,"\u5728 LRU \u7f13\u5b58\u7b56\u7565\u4e0b\uff0c\u5927\u8868\u6570\u636e\u5982\u679c\u88ab\u67e5\u8be2\u8bbf\u95ee\uff0c\u53ef\u80fd\u4f1a\u66ff\u6362\u6389\u9700\u8981\u5e38\u9a7b\u7f13\u5b58\u7684\u5c0f\u8868\u6570\u636e\uff0c\u9020\u6210\u6027\u80fd\u6ce2\u52a8\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u7528\u6237\u91c7\u53d6 TTL \u7f13\u5b58\u7b56\u7565\uff0c\u5c06\u4e24\u5f20\u8868\u7684 TTL \u65f6\u95f4\u5206\u522b\u8bbe\u7f6e\u4e3a 1 \u5e74\u548c 1 \u5929\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'ALTER TABLE dimension_table set ("file_cache_ttl_seconds"="31536000");\n\nALTER TABLE fact_table set ("file_cache_ttl_seconds"="86400");\n')),(0,n.yg)("p",null,"\u5bf9\u4e8e\u7ef4\u5ea6\u8868\uff0c\u7531\u4e8e\u5176\u6570\u636e\u91cf\u8f83\u5c0f\u4e14\u53d8\u52a8\u4e0d\u5927\uff0c\u7528\u6237\u8bbe\u7f6e 1 \u5e74\u7684 TTL \u65f6\u95f4\uff0c\u4ee5\u786e\u4fdd\u5176\u6570\u636e\u5728\u4e00\u5e74\u5185\u90fd\u80fd\u88ab\u5feb\u901f\u8bbf\u95ee\uff1b\u5bf9\u4e8e\u4e8b\u5b9e\u8868\uff0c\u7528\u6237\u6bcf\u5929\u9700\u8981\u8fdb\u884c\u4e00\u6b21\u8868\u5907\u4efd\uff0c\u7136\u540e\u8fdb\u884c\u5168\u91cf\u5bfc\u5165\uff0c\u56e0\u6b64\u5c06\u5176 TTL \u65f6\u95f4\u8bbe\u7f6e\u4e3a 1 \u5929\u3002"))}y.isMDXComponent=!0}}]);