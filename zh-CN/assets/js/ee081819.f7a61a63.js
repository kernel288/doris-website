"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[494124],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),g=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=g(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=g(t),m=i,d=c["".concat(p,".").concat(m)]||c[m]||y[m]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<a;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},948174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var r=t(58168),i=(t(296540),t(15680));const a={title:"\u4f7f\u7528 Hint \u63a7\u5236\u4ee3\u4ef7\u6539\u5199",language:"zh-CN"},l=void 0,o={unversionedId:"query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",id:"query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",title:"\u4f7f\u7528 Hint \u63a7\u5236\u4ee3\u4ef7\u6539\u5199",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule.md",sourceDirName:"query-acceleration/tuning/tuning-plan",slug:"/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",permalink:"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Hint \u63a7\u5236\u4ee3\u4ef7\u6539\u5199",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Hint \u8c03\u6574 Join Shuffle \u65b9\u5f0f",permalink:"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle"},next:{title:"\u4f7f\u7528 Leading Hint \u63a7\u5236 Join \u987a\u5e8f",permalink:"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint"}},p={},g=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u8c03\u4f18\u6848\u4f8b",id:"\u8c03\u4f18\u6848\u4f8b",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:g},c="wrapper";function y(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,i.yg)("p",null,"\u67e5\u8be2\u4f18\u5316\u5668\u5728\u751f\u6210\u6267\u884c\u8ba1\u5212\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5e94\u7528\u4e00\u7cfb\u5217\u89c4\u5219\u3002\u8fd9\u4e9b\u89c4\u5219\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff1a\u57fa\u4e8e\u89c4\u5219\u7684\u4f18\u5316 (Rule-Based Optimizer \u5373 RBO) \u548c\u57fa\u4e8e\u4ee3\u4ef7\u7684\u4f18\u5316 (Cost-Based Optimizer \u5373 CBO) \u3002"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"RBO\uff1a\u6b64\u7c7b\u4f18\u5316\u901a\u8fc7\u5e94\u7528\u4e00\u7cfb\u5217\u9884\u5b9a\u4e49\u7684\u542f\u53d1\u5f0f\u89c4\u5219\u6765\u6539\u8fdb\u67e5\u8be2\u8ba1\u5212\uff0c\u800c\u4e0d\u8003\u8651\u5177\u4f53\u7684\u6570\u636e\u7edf\u8ba1\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u8c13\u8bcd\u4e0b\u63a8\u3001\u6295\u5f71\u4e0b\u63a8\u7b49\u7b56\u7565\u5747\u5c5e\u4e8e\u6b64\u7c7b\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"CBO\uff1a\u6b64\u7c7b\u4f18\u5316\u5219\u5229\u7528\u6570\u636e\u7edf\u8ba1\u4fe1\u606f\u6765\u4f30\u7b97\u4e0d\u540c\u6267\u884c\u8ba1\u5212\u7684\u4ee3\u4ef7\uff0c\u5e76\u9009\u62e9\u4ee3\u4ef7\u6700\u5c0f\u7684\u8ba1\u5212\u8fdb\u884c\u6267\u884c\u3002\u8fd9\u5305\u62ec\u8bbf\u95ee\u8def\u5f84\u7684\u9009\u62e9\u3001\u8fde\u63a5\u7b97\u6cd5\u7684\u9009\u62e9\u7b49\u3002"))),(0,i.yg)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u5e93\u7ba1\u7406\u5458\u6216\u5f00\u53d1\u4eba\u5458\u53ef\u80fd\u9700\u8981\u5bf9\u67e5\u8be2\u4f18\u5316\u8fc7\u7a0b\u8fdb\u884c\u66f4\u4e3a\u7cbe\u7ec6\u7684\u63a7\u5236\u3002\u57fa\u4e8e\u6b64\uff0c\u672c\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u67e5\u8be2 Hint \u6765\u7ba1\u7406 CBO \u89c4\u5219\u3002"),(0,i.yg)("p",null,"CBO \u89c4\u5219\u63a7\u5236 Hint \u7684\u57fa\u672c\u8bed\u6cd5\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT /*+ USE_CBO_RULE(rule1, rule2, ...) */ ...\n")),(0,i.yg)("p",null,"\u6b64 Hint \u5e94\u7d27\u8ddf\u5728 SELECT \u5173\u952e\u5b57\u4e4b\u540e\uff0c\u5e76\u5728\u62ec\u53f7\u5185\u6307\u5b9a\u8981\u542f\u7528\u7684\u89c4\u5219\u540d\u79f0\uff08\u6ce8\uff1a\u89c4\u5219\u540d\u79f0\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u3002"),(0,i.yg)("p",null,"\u5728\u4f18\u5316\u5668\u4e2d\uff0c\u4ee5\u4e0b CBO \u89c4\u5219\u9ed8\u8ba4\u5904\u4e8e\u7981\u7528\u72b6\u6001\uff0c\u9700\u8981\u901a\u8fc7 ",(0,i.yg)("inlineCode",{parentName:"p"},"USE_CBO_RULE hint "),"\u6765\u663e\u5f0f\u542f\u7528\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"PUSH_DOWN_AGG_THROUGH_JOIN")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"PUSH_DOWN_AGG_THROUGH_JOIN_ONE_SIDE")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"PUSH_DOWN_DISTINCT_THROUGH_JOIN"))),(0,i.yg)("p",null,"\u8fd9\u4e9b\u89c4\u5219\u4e3b\u8981\u6d89\u53ca\u805a\u5408\u64cd\u4f5c\u548c JOIN \u64cd\u4f5c\u7684\u4f18\u5316\u3002\u5177\u4f53\u7684\u4f18\u5316\u903b\u8f91\u5982\u4e0b\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u7cfb\u7edf\u9996\u5148\u4f1a\u68c0\u67e5\u67e5\u8be2\u4e2d\u662f\u5426\u5b58\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"USE_CBO_RULE hint"),"\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5982\u679c\u5b58\u5728\u8be5 Hint\uff0c\u7cfb\u7edf\u4f1a\u904d\u5386\u6240\u6709\u6307\u5b9a\u7684\u89c4\u5219\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u6bcf\u4e2a\u89c4\u5219\uff0c\u7cfb\u7edf\u4f1a\u68c0\u67e5\u5176\u662f\u5426\u5728\u767d\u540d\u5355\u4e2d\u3002\u82e5\u5728\u767d\u540d\u5355\u4e2d\uff0c\u5219\u8be5\u89c4\u5219\u5c06\u88ab\u542f\u7528\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u82e5\u6307\u5b9a\u7684\u89c4\u5219\u4e0d\u5728\u767d\u540d\u5355\u4e2d\uff0c\u7cfb\u7edf\u4f1a\u8fdb\u4e00\u6b65\u68c0\u67e5\u5176\u662f\u5426\u4e3a\u6709\u6548\u7684\u89c4\u5219\u540d\u79f0\u3002\u5982\u679c\u662f\u6709\u6548\u89c4\u5219\uff0c\u8be5\u89c4\u5219\u540c\u6837\u4f1a\u88ab\u542f\u7528\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u4efb\u4f55\u65e0\u6cd5\u8bc6\u522b\u7684\u89c4\u5219\u540d\u79f0\u90fd\u5c06\u88ab\u7cfb\u7edf\u5ffd\u7565\u3002"))),(0,i.yg)("h2",{id:"\u8c03\u4f18\u6848\u4f8b"},"\u8c03\u4f18\u6848\u4f8b"),(0,i.yg)("p",null,"\u67e5\u8be2\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT /*+ USE_CBO_RULE(push_down_agg_through_join, push_down_agg_through_join_one_side) */    a.event_id,\n    b.experiment_id,\n    b.group_id,\n    COUNT(a.event_id)\nFROM\n    com_dd_library a\nJOIN shunt_log_com_dd_library b ON\n    a.device_id = b.device_id\nGROUP BY\n    b.group_id,\n    b.experiment_id,\n    a.event_id;\n")),(0,i.yg)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u542f\u7528\u4e86\u4e24\u4e2a\u805a\u5408\u4e0b\u63a8\u89c4\u5219\u3002\u8fd9\u4e00\u64cd\u4f5c\u53ef\u80fd\u4f7f\u4f18\u5316\u5668\u80fd\u591f\u751f\u6210\u4e00\u4e2a\u66f4\u4e3a\u9ad8\u6548\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5c24\u5176\u662f\u5728\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\u96c6\u65f6\u3002"),(0,i.yg)("p",null,"\u6700\u4f73\u5b9e\u8df5\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u8c28\u614e\u4f7f\u7528 CBO \u89c4\u5219 ",(0,i.yg)("inlineCode",{parentName:"p"},"hint"),"\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f18\u5316\u5668\u80fd\u591f\u505a\u51fa\u826f\u597d\u7684\u51b3\u7b56\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5728\u5e94\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"hint")," \u4e4b\u524d\uff0c\u5e94\u5148\u5206\u6790\u67e5\u8be2\u6027\u80fd\u5e76\u8bc6\u522b\u51fa\u74f6\u9888\u6240\u5728\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u9a8c\u8bc1 ",(0,i.yg)("inlineCode",{parentName:"p"},"hint")," \u7684\u6548\u679c\uff0c\u4ee5\u786e\u4fdd\u5b83\u786e\u5b9e\u80fd\u591f\u6539\u5584\u6027\u80fd\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5b9a\u671f\u91cd\u65b0\u8bc4\u4f30\u5df2\u5e94\u7528\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"hint"),"\uff0c\u56e0\u4e3a\u6570\u636e\u5206\u5e03\u548c\u7cfb\u7edf\u914d\u7f6e\u7684\u53d8\u5316\u53ef\u80fd\u4f1a\u5f71\u54cd\u5176\u6709\u6548\u6027\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u8bb0\u5f55\u6240\u6709\u5df2\u5e94\u7528\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"hint")," \u53ca\u5176\u7406\u7531\uff0c\u4ee5\u4fbf\u4e8e\u540e\u7eed\u7684\u7ef4\u62a4\u548c\u4f18\u5316\u5de5\u4f5c\u3002"))),(0,i.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.yg)("p",null,"\u901a\u8fc7\u5408\u7406\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"USE_CBO_RULE hint"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u7279\u5b9a\u573a\u666f\u4e0b\u5fae\u8c03\u67e5\u8be2\u4f18\u5316\u5668\u7684\u884c\u4e3a\uff0c\u4ece\u800c\u6f5c\u5728\u5730\u63d0\u5347\u590d\u6742\u67e5\u8be2\u7684\u6027\u80fd\u3002\u7136\u800c\uff0c\u8fd9\u9700\u8981\u5bf9\u67e5\u8be2\u4f18\u5316\u8fc7\u7a0b\u548c\u6570\u636e\u7279\u6027\u6709\u6df1\u5165\u7684\u7406\u89e3\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f9d\u8d56\u4f18\u5316\u5668\u7684\u81ea\u52a8\u51b3\u7b56\u4ecd\u7136\u662f\u6700\u4f73\u7684\u9009\u62e9\u3002"))}y.isMDXComponent=!0}}]);