"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[381455],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var i=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},284912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(58168),a=(n(296540),n(15680));const r={title:"TOPN Query Optimization",language:"en"},o=void 0,l={unversionedId:"query-acceleration/tuning/topn-query",id:"query-acceleration/tuning/topn-query",title:"TOPN Query Optimization",description:"\x3c!--",source:"@site/docs/query-acceleration/tuning/topn-query.md",sourceDirName:"query-acceleration/tuning",slug:"/query-acceleration/tuning/topn-query",permalink:"/docs/dev/query-acceleration/tuning/topn-query",draft:!1,tags:[],version:"current",frontMatter:{title:"TOPN Query Optimization",language:"en"},sidebar:"docs",previous:{title:"Runtime Filter",permalink:"/docs/dev/query-acceleration/tuning/runtime-filter"},next:{title:"Data Lakehouse Overview",permalink:"/docs/dev/lakehouse/lakehouse-overview"}},s={},p=[{value:"Advantages of TOPN",id:"advantages-of-topn",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Configuration and Query Analysis",id:"configuration-and-query-analysis",level:2},{value:"Checking if TOPN Query Optimization is Enabled",id:"checking-if-topn-query-optimization-is-enabled",level:3},{value:"Checking the Effectiveness of TOPN Query Optimization During Execution",id:"checking-the-effectiveness-of-topn-query-optimization-during-execution",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"TOPN queries refer to queries that involve ORDER BY LIMIT operations, which are common in log retrieval and other detailed query scenarios. Doris automatically optimizes this type of query."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tablex WHERE xxx ORDER BY c1,c2 ... LIMIT n\n")),(0,a.yg)("h2",{id:"advantages-of-topn"},"Advantages of TOPN"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"During execution, dynamic range filters are built for the sorting columns (e.g., c1 >= 1000), which automatically apply the preceding conditions when reading data, leveraging zonemap indexes to filter out some rows or even entire files.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If the sorting fields c1, c2 are exactly the prefix of the table key, further optimization is applied. When reading data, only the header or tail of the data files is read, reducing the amount of data read to just the n rows needed.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"SELECT * deferred materialization, during the data reading and sorting process, only the sorting columns are read, not the other columns. After obtaining the row numbers that meet the conditions, the entire data of those n rows needed is read, significantly reducing the amount of data read and sorted."))),(0,a.yg)("h2",{id:"limitations"},"Limitations"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"It only applies to DUP and MOW tables, not to MOR and AGG tables.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Due to the high memory consumption on very large ",(0,a.yg)("inlineCode",{parentName:"p"},"n"),", it will not take effect if n is greater than ",(0,a.yg)("inlineCode",{parentName:"p"},"topn_opt_limit_threshold"),"."))),(0,a.yg)("h2",{id:"configuration-and-query-analysis"},"Configuration and Query Analysis"),(0,a.yg)("p",null,"The following two parameters are session variables that can be set for a specific SQL or globally."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"topn_opt_limit_threshold"),": This session variable determines whether TOPN optimization is applied. It defaults to 1024, and setting it to 0 disables the optimization.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"enable_two_phase_read_optimization"),": This session variable determines whether to enable this optimization. It defaults to true, and setting it to false disables the optimization."))),(0,a.yg)("h3",{id:"checking-if-topn-query-optimization-is-enabled"},"Checking if TOPN Query Optimization is Enabled"),(0,a.yg)("p",null,"To confirm if TOPN query optimization is enabled for a particular SQL, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"EXPLAIN")," statement to get the query plan. An example is as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"TOPN OPT")," indicates that optimization point 1 is applied.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"VOlapScanNode")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"SORT LIMIT")," indicates optimization point 2 is applied.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"OPT TWO PHASE")," indicates optimization point 3 is applied."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"   1:VTOP-N(137)\n   |   order by: @timestamp18 DESC\n   |   TOPN OPT\n   |   OPT TWO PHASE\n   |   offset: 0\n   |   limit: 10\n   |   distribute expr lists: applicationName5\n   |  \n   0:VOlapScanNode(106)\n      TABLE: log_db.log_core_all_no_index(log_core_all_no_index), PREAGGREGATION: ON\n      SORT INFO:\n           @timestamp18\n      SORT LIMIT: 10\n      TOPN OPT:1\n      PREDICATES: ZYCFC-TRACE-ID4 like '%flowId-1720055220933%'\n      partitions=1/8 (p20240704), tablets=250/250, tabletList=1727094,1727096,1727098 ...\n      cardinality=345472780, avgRowSize=0.0, numNodes=1\n      pushAggOp=NONE\n")),(0,a.yg)("h3",{id:"checking-the-effectiveness-of-topn-query-optimization-during-execution"},"Checking the Effectiveness of TOPN Query Optimization During Execution"),(0,a.yg)("p",null,"First, set ",(0,a.yg)("inlineCode",{parentName:"p"},"topn_opt_limit_threshold")," to 0 to disable TOPN query optimization and compare the execution time of the SQL with and without optimization enabled."),(0,a.yg)("p",null,"After enabling TOPN query optimization, search for ",(0,a.yg)("inlineCode",{parentName:"p"},"RuntimePredicate")," in the query profile and focus on the following metrics:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"RowsZonemapRuntimePredicateFiltered"),": The number of rows filtered out, the higher the better.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"NumSegmentFiltered"),": The number of data files filtered out, the higher the better.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"BlockConditionsFilteredZonemapRuntimePredicateTime"),": The time taken to filter data, the lower the better."))),(0,a.yg)("p",null,"Before version 2.0.3, the ",(0,a.yg)("inlineCode",{parentName:"p"},"RuntimePredicate")," metrics were not separated out, and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Zonemap")," metrics can be used as a rough guide."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"    SegmentIterator:\n          -  BitmapIndexFilterTimer:  46.54us\n          -  BlockConditionsFilteredBloomFilterTime:  10.352us\n          -  BlockConditionsFilteredDictTime:  7.299us\n          -  BlockConditionsFilteredTime:  202.23ms\n          -  BlockConditionsFilteredZonemapRuntimePredicateTime:  0ns\n          -  BlockConditionsFilteredZonemapTime:  402.917ms\n          -  BlockInitSeekCount:  399\n          -  BlockInitSeekTime:  11.309ms\n          -  BlockInitTime:  215.59ms\n          -  BlockLoadTime:  7s567ms\n          -  BlocksLoad:  392.97K  (392970)\n          -  CachedPagesNum:  0\n          -  CollectIteratorMergeTime:  0ns\n          -  CollectIteratorNormalTime:  0ns\n          -  CompressedBytesRead:  29.76  MB\n          -  DecompressorTimer:  427.713ms\n          -  ExprFilterEvalTime:  3s930ms\n          -  FirstReadSeekCount:  392.921K  (392921)\n          -  FirstReadSeekTime:  528.287ms\n          -  FirstReadTime:  1s134ms\n          -  IOTimer:  51.286ms\n          -  InvertedIndexFilterTime:  49.457us\n          -  InvertedIndexQueryBitmapCopyTime:  0ns\n          -  InvertedIndexQueryBitmapOpTime:  0ns\n          -  InvertedIndexQueryCacheHit:  0\n          -  InvertedIndexQueryCacheMiss:  0\n          -  InvertedIndexQueryTime:  0ns\n          -  InvertedIndexSearcherOpenTime:  0ns\n          -  InvertedIndexSearcherSearchTime:  0ns\n          -  LazyReadSeekCount:  0\n          -  LazyReadSeekTime:  0ns\n          -  LazyReadTime:  106.952us\n          -  NumSegmentFiltered:  0\n          -  NumSegmentTotal:  50\n          -  OutputColumnTime:  61.987ms\n          -  OutputIndexResultColumnTimer:  12.345ms\n          -  RawRowsRead:  3.929151M  (3929151)\n          -  RowsBitmapIndexFiltered:  0\n          -  RowsBloomFilterFiltered:  0\n          -  RowsConditionsFiltered:  6.38976M  (6389760)\n          -  RowsDictFiltered:  0\n          -  RowsInvertedIndexFiltered:  0\n          -  RowsKeyRangeFiltered:  0\n          -  RowsShortCircuitPredFiltered:  0\n          -  RowsShortCircuitPredInput:  0\n          -  RowsStatsFiltered:  6.38976M  (6389760)\n          -  RowsVectorPredFiltered:  0\n          -  RowsVectorPredInput:  0\n          -  RowsZonemapRuntimePredicateFiltered:  6.38976M  (6389760)\n          -  SecondReadTime:  0ns\n          -  ShortPredEvalTime:  0ns\n          -  TotalPagesNum:  2.301K  (2301)\n          -  UncompressedBytesRead:  137.99  MB\n          -  VectorPredEvalTime:  0ns\n")))}u.isMDXComponent=!0}}]);