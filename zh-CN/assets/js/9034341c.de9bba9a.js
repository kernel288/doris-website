"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[500444],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>A});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},E="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),E=u(n),m=a,A=E["".concat(i,".").concat(m)]||E[m]||p[m]||l;return n?r.createElement(A,o(o({ref:t},c),{},{components:n})):r.createElement(A,o({ref:t},c))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[E]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},263048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-TABLE-AND-GENERATED-COLUMN",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-AND-GENERATED-COLUMN",id:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-AND-GENERATED-COLUMN",title:"ALTER-TABLE-AND-GENERATED-COLUMN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-AND-GENERATED-COLUMN.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-AND-GENERATED-COLUMN",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-AND-GENERATED-COLUMN",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-AND-GENERATED-COLUMN",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-COMMENT",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT"},next:{title:"CANCEL-ALTER-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE"}},i={},u=[{value:"ALTER TABLE\u548c\u751f\u6210\u5217",id:"alter-table\u548c\u751f\u6210\u5217",level:2},{value:"REORDER COLUMN",id:"reorder-column",level:3},{value:"RENAME COLUMN",id:"rename-column",level:3},{value:"DROP COLUMN",id:"drop-column",level:3}],c={toc:u},E="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(E,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-table\u548c\u751f\u6210\u5217"},"ALTER TABLE\u548c\u751f\u6210\u5217"),(0,a.yg)("p",null,"\u4e0d\u652f\u6301\u4f7f\u7528ALTER TABLE ADD COLUMN\u589e\u52a0\u4e00\u4e2a\u751f\u6210\u5217\uff0c\u4e0d\u652f\u6301\u4f7f\u7528ALTER TABLE MODIFY COLUMN\u4fee\u6539\u751f\u6210\u5217\u4fe1\u606f\u3002\u652f\u6301\u4f7f\u7528ALTER TABLE\u5bf9\u751f\u6210\u5217\u987a\u5e8f\u8fdb\u884c\u4fee\u6539\uff0c\u4fee\u6539\u751f\u6210\u5217\u540d\u79f0\u548c\u5220\u9664\u751f\u6210\u5217\u3002"),(0,a.yg)("p",null,"\u4e0d\u652f\u6301\u7684\u573a\u666f\u62a5\u9519\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> CREATE TABLE test_alter_add_column(a int, b int) properties("replication_num"="1");\nQuery OK, 0 rows affected (0.14 sec)\nmysql> ALTER TABLE test_alter_add_column ADD COLUMN c int AS (a+b);\nERROR 1105 (HY000): errCode = 2, detailMessage = Not supporting alter table add generated columns.\nmysql> ALTER TABLE test_alter MODIFY COLUMN c int KEY AS (a+b+1);\nERROR 1105 (HY000): errCode = 2, detailMessage = Not supporting alter table modify generated columns.\n')),(0,a.yg)("h3",{id:"reorder-column"},"REORDER COLUMN"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE products ORDER BY (product_id, total_value, price, quantity);\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a\n\u4fee\u6539\u540e\u7684\u5217\u987a\u5e8f\u4ecd\u7136\u9700\u8981\u6ee1\u8db3\u751f\u6210\u5217\u5efa\u8868\u65f6\u7684\u987a\u5e8f\u9650\u5236\u3002"),(0,a.yg)("h3",{id:"rename-column"},"RENAME COLUMN"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE products RENAME COLUMN total_value new_name;\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a\n\u5982\u679c\u8868\u4e2d\u67d0\u5217\uff08\u751f\u6210\u5217\u6216\u8005\u666e\u901a\u5217\uff09\u88ab\u5176\u5b83\u751f\u6210\u5217\u5f15\u7528\uff0c\u9700\u8981\u5148\u5220\u9664\u5176\u5b83\u751f\u6210\u5217\u540e\uff0c\u624d\u80fd\u4fee\u6539\u6b64\u751f\u6210\u5217\u7684\u540d\u79f0\u3002"),(0,a.yg)("h3",{id:"drop-column"},"DROP COLUMN"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE products DROP COLUMN total_value;\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a\n\u5982\u679c\u8868\u4e2d\u67d0\u5217\uff08\u751f\u6210\u5217\u6216\u8005\u666e\u901a\u5217\uff09\u88ab\u5176\u5b83\u751f\u6210\u5217\u5f15\u7528\uff0c\u9700\u8981\u5148\u5220\u9664\u5176\u5b83\u751f\u6210\u5217\u540e\uff0c\u624d\u80fd\u5220\u9664\u6b64\u88ab\u5f15\u7528\u7684\u751f\u6210\u5217\u6216\u8005\u666e\u901a\u5217\u3002"))}p.isMDXComponent=!0}}]);