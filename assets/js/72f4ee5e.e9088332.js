"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[306174],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},691592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const i={title:"ORTHOGONAL_BITMAP_INTERSECT",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",title:"ORTHOGONAL_BITMAP_INTERSECT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",permalink:"/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ORTHOGONAL_BITMAP_INTERSECT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_INTERSECT",permalink:"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-intersect"},next:{title:"ORTHOGONAL_BITMAP_INTERSECT_COUNT",permalink:"/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect-count"}},s={},c=[{value:"orthogonal_bitmap_intersect",id:"orthogonal_bitmap_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"orthogonal_bitmap_intersect"},"orthogonal_bitmap_intersect"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_INTERSECT(bitmap_column, column_to_filter, filter_values)"),"\nThe bitmap intersection function, the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select orthogonal_bitmap_intersect(members, tag_group, 1150000, 1150001, 390006) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+-------------------------------------------------------------------------------+\n| orthogonal_bitmap_intersect(`members`, `tag_group`, 1150000, 1150001, 390006) |\n+-------------------------------------------------------------------------------+\n| NULL                                                                          |\n+-------------------------------------------------------------------------------+\n1 row in set (3.505 sec)\n\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ORTHOGONAL_BITMAP_INTERSECT,BITMAP\n")))}m.isMDXComponent=!0}}]);