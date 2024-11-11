"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2112],{15680:(r,e,n)=>{n.d(e,{xA:()=>c,yg:()=>f});var t=n(296540);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function o(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function s(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function y(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},o=Object.keys(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var l=t.createContext({}),i=function(r){var e=t.useContext(l),n=e;return r&&(n="function"==typeof r?r(e):s(s({},e),r)),n},c=function(r){var e=i(r.components);return t.createElement(l.Provider,{value:e},r.children)},u="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,o=r.originalType,l=r.parentName,c=y(r,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?t.createElement(f,s(s({ref:e},c),{},{components:n})):t.createElement(f,s({ref:e},c))}));function f(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=n.length,s=new Array(o);s[0]=d;var y={};for(var l in e)hasOwnProperty.call(e,l)&&(y[l]=e[l]);y.originalType=r,y[u]="string"==typeof r?r:a,s[1]=y;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},984634:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>y,toc:()=>i});var t=n(58168),a=(n(296540),n(15680));const o={title:"ARRAY_SORTBY",language:"en"},s=void 0,y={unversionedId:"sql-manual/sql-functions/array-functions/array-sortby",id:"version-2.0/sql-manual/sql-functions/array-functions/array-sortby",title:"ARRAY_SORTBY",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-sortby.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-sortby",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-sortby",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_SORTBY",language:"en"},sidebar:"docs",previous:{title:"ARRAY_REVERSE_SORT",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-reverse-sort"},next:{title:"ARRAY_POSITION",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-position"}},l={},i=[{value:"array_sortby",id:"array_sortby",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},u="wrapper";function p(r){let{components:e,...n}=r;return(0,a.yg)(u,(0,t.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_sortby"},"array_sortby"),(0,a.yg)("p",null,"array_sortby"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_sortby(ARRAY<T> src,Array<T> key)\nARRAY<T> array_sortby(lambda,array....)\n")),(0,a.yg)("p",null,"First, arrange the key column in ascending order, and then return the corresponding column of the src column sorted in this order as the result;\nReturns NULL if the input array src is NULL.\nIf the input array key is NULL, the order in which src is returned remains unchanged.\nIf the input array key element contains NULL, the output sorted array will place NULL first."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [test]>select array_sortby(['a','b','c'],[3,2,1]);\n+----------------------------------------------------+\n| array_sortby(ARRAY('a', 'b', 'c'), ARRAY(3, 2, 1)) |\n+----------------------------------------------------+\n| ['c', 'b', 'a']                                    |\n+----------------------------------------------------+\n\nmysql [test]>select array_sortby([1,2,3,4,5],[10,5,1,20,80]);\n+-------------------------------------------------------------+\n| array_sortby(ARRAY(1, 2, 3, 4, 5), ARRAY(10, 5, 1, 20, 80)) |\n+-------------------------------------------------------------+\n| [3, 2, 1, 4, 5]                                             |\n+-------------------------------------------------------------+\n\nmysql [test]>select *,array_sortby(c_array1,c_array2) from test_array_sortby order by id;\n+------+-----------------+-------------------------+--------------------------------------+\n| id   | c_array1        | c_array2                | array_sortby(`c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+--------------------------------------+\n|    0 | NULL            | [2]                     | NULL                                 |\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [5, 3, 1, 2, 4]                      |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [6, 7, 8]                            |\n|    3 | [1]             | [-100]                  | [1]                                  |\n|    4 | NULL            | NULL                    | NULL                                 |\n|    5 | [3]             | NULL                    | [3]                                  |\n|    6 | [1, 2]          | [2, 1]                  | [2, 1]                               |\n|    7 | [NULL]          | [NULL]                  | [NULL]                               |\n|    8 | [1, 2, 3]       | [3, 2, 1]               | [3, 2, 1]                            |\n+------+-----------------+-------------------------+--------------------------------------+\n\nmysql [test]>select *, array_map((x,y)->(y+x),c_array1,c_array2) as arr_sum,array_sortby((x,y)->(y+x),c_array1,c_array2) as arr_sort from array_test2;\n+------+-----------------+--------------+----------------+-----------------+\n| id   | c_array1        | c_array2     | arr_sum        | arr_sort        |\n+------+-----------------+--------------+----------------+-----------------+\n|    1 | [1, 2, 3]       | [10, 11, 12] | [11, 13, 15]   | [1, 2, 3]       |\n|    2 | [4, 3, 5]       | [10, 20, 30] | [14, 23, 35]   | [4, 3, 5]       |\n|    3 | [-40, 30, -100] | [30, 10, 20] | [-10, 40, -80] | [-100, -40, 30] |\n+------+-----------------+--------------+----------------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, SORT, ARRAY_SORTBY"))}p.isMDXComponent=!0}}]);