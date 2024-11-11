"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[946006],{15680:(t,n,e)=>{e.d(n,{xA:()=>c,yg:()=>_});var r=e(296540);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var m=r.createContext({}),s=function(t){var n=r.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},c=function(t){var n=s(t.components);return r.createElement(m.Provider,{value:n},t.children)},l="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,m=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),l=s(e),b=o,_=l["".concat(m,".").concat(b)]||l[b]||u[b]||i;return e?r.createElement(_,a(a({ref:n},c),{},{components:e})):r.createElement(_,a({ref:n},c))}));function _(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=b;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[l]="string"==typeof t?t:o,a[1]=p;for(var s=2;s<i;s++)a[s]=e[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}b.displayName="MDXCreateElement"},727771:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=e(58168),o=(e(296540),e(15680));const i={title:"BITMAP_OR_COUNT",language:"en"},a=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-or-count",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-or-count",title:"BITMAP_OR_COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-or-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-or-count",permalink:"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-or-count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_OR_COUNT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_XOR_COUNT",permalink:"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor-count"},next:{title:"BITMAP_CONTAINS",permalink:"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-contains"}},m={},s=[{value:"bitmap_or_count",id:"bitmap_or_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},l="wrapper";function u(t){let{components:n,...e}=t;return(0,o.yg)(l,(0,r.A)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"bitmap_or_count"},"bitmap_or_count"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BigIntVal bitmap_or_count(BITMAP lhs, BITMAP rhs)")),(0,o.yg)("p",null,"Calculates the union of two or more input bitmaps and returns the number of union sets."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+--------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+--------------------------------------------------------------+\n|                                                            3 |\n+--------------------------------------------------------------+\n\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+---------------------------------------------------------------------------+\n|                                                                         3 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+---------------------------------------------------------------------------+\n|                                                                         5 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty()) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         6 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL);\n+-------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL) |\n+-------------------------------------------------------------------------------------------------+\n|                                                                                            NULL |\n+-------------------------------------------------------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"BITMAP_OR_COUNT,BITMAP\n")))}u.isMDXComponent=!0}}]);