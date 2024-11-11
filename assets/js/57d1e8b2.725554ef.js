"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[406761],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>s});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=g(a),y=r,s=m["".concat(l,".").concat(y)]||m[y]||d[y]||o;return a?n.createElement(s,i(i({ref:t},c),{},{components:a})):n.createElement(s,i({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var g=2;g<o;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},896150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const o={title:"Alibaba Cloud Max Compute",language:"en"},i=void 0,p={unversionedId:"lakehouse/database/max-compute",id:"lakehouse/database/max-compute",title:"Alibaba Cloud Max Compute",description:"\x3c!--",source:"@site/docs/lakehouse/database/max-compute.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/max-compute",permalink:"/docs/dev/lakehouse/database/max-compute",draft:!1,tags:[],version:"current",frontMatter:{title:"Alibaba Cloud Max Compute",language:"en"},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/docs/dev/lakehouse/database/es"},next:{title:"Querying Files on S3/HDFS",permalink:"/docs/dev/lakehouse/file"}},l={},g=[{value:"Connect to MaxCompute",id:"connect-to-maxcompute",level:2},{value:"Example",id:"example",level:3},{value:"Basic properties of creating Catalog",id:"basic-properties-of-creating-catalog",level:3},{value:"Optional properties of creating Catalog",id:"optional-properties-of-creating-catalog",level:3},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"How to obtain Endpoint and Quota",id:"how-to-obtain-endpoint-and-quota",level:2}],c={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"alibaba-cloud-maxcompute"},"Alibaba Cloud MaxCompute"),(0,r.yg)("p",null,"MaxCompute is an enterprise-level SaaS (Software as a Service) cloud data warehouse on Alibaba Cloud."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/product-overview/what-is-maxcompute"},"What is MaxCompute"))),(0,r.yg)("h2",{id:"connect-to-maxcompute"},"Connect to MaxCompute"),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- 1. Create Catalog.\nCREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.default.project" = "xxx",\n  "mc.access_key" = "xxxx",\n  "mc.secret_key" = "xxx",\n  "mc.endpoint" = "http://service.cn-beijing-vpc.MaxCompute.aliyun-inc.com/api"\n);\n\n-- 2. Switch to the newly created Catalog.\nSWITCH mc;\n\n-- The following steps are the same as using Mysql.\n\n-- 3. View all databases under this Catalog.\nSHOW DATABASES;\n\n-- 4. Use a database. Here, xxx is any database from the results shown in step 3.\nUSE xxx;\n\n-- 5. View all tables under this database.\nSHOW TABLES;\n\n-- 6. Perform SQL queries.\nselect * from tb  limit 10;\n')),(0,r.yg)("h3",{id:"basic-properties-of-creating-catalog"},"Basic properties of creating Catalog"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"type"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Fixed as  ",(0,r.yg)("inlineCode",{parentName:"td"},"max_compute"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"mc.default.project"),(0,r.yg)("td",{parentName:"tr",align:"center"},"The name of the MaxCompute project you want to access. It can be created and managed in ",(0,r.yg)("a",{parentName:"td",href:"https://MaxCompute.console.aliyun.com/cn-beijing/project-list"},"MaxCompute project list"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"mc.access_key"),(0,r.yg)("td",{parentName:"tr",align:"center"},"AccessKey.It can be created and managed in ",(0,r.yg)("a",{parentName:"td",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"mc.secret_key"),(0,r.yg)("td",{parentName:"tr",align:"center"},"SecretKey.It can be created and managed in ",(0,r.yg)("a",{parentName:"td",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"mc.endpoint"),(0,r.yg)("td",{parentName:"tr",align:"center"},"The region where MaxCompute is enabled. Please refer to ",(0,r.yg)("inlineCode",{parentName:"td"},"How to obtain Endpoint and Quota")," below for configuration.")))),(0,r.yg)("h3",{id:"optional-properties-of-creating-catalog"},"Optional properties of creating Catalog"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mc.quota"),(0,r.yg)("td",{parentName:"tr",align:null},"pay-as-you-go"),(0,r.yg)("td",{parentName:"tr",align:null},"Quota name. Please refer to ",(0,r.yg)("inlineCode",{parentName:"td"},"How to obtain Endpoint and Quota")," below for configuration.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mc.split_strategy"),(0,r.yg)("td",{parentName:"tr",align:null},"byte_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Set the split division method. It can be set to divide by byte size ",(0,r.yg)("inlineCode",{parentName:"td"},"byte_size")," or divide by row count ",(0,r.yg)("inlineCode",{parentName:"td"},"row_count"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mc.split_byte_size"),(0,r.yg)("td",{parentName:"tr",align:null},"268435456"),(0,r.yg)("td",{parentName:"tr",align:null},"The file size read by each split, in bytes. The default is 256MB. It takes effect only when ",(0,r.yg)("inlineCode",{parentName:"td"},'"mc.split_strategy" = "byte_size"'),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mc.split_row_count"),(0,r.yg)("td",{parentName:"tr",align:null},"1048576"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of rows read by each split. It takes effect only when ",(0,r.yg)("inlineCode",{parentName:"td"},'"mc.split_strategy" = "row_count"'),".")))),(0,r.yg)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"MaxCompute"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"INT"),(0,r.yg)("td",{parentName:"tr",align:"center"},"INT"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"BINARY"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Not supported"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"DECIMAL(precision,scale)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DECIMAL(precision,scale)"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"VARCHAR(n)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"VARCHAR(n)"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"CHAR(n)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"CHAR(n)"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"DATE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DATE"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DATETIME(3)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"You can specify the time zone by  ",(0,r.yg)("inlineCode",{parentName:"td"},"SET [global] time_zone = 'Asia/Shanghai'"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Not supported"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"TIMESTAMP_NTZ"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DATETIME(6)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"The precision of TIMESTAMP_NTZ in MaxCompute is 9. The maximum precision of DATETIME in Doris is only 6. Therefore, when reading data, the extra parts will be directly truncated.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:"center"},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"MAP"),(0,r.yg)("td",{parentName:"tr",align:"center"},"MAP"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"JSON"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Not supported"),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h2",{id:"usage-notes"},"Usage notes"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The MaxCompute Catalog is developed based on the ",(0,r.yg)("a",{parentName:"li",href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1"},"Open Storage SDK")," ."),(0,r.yg)("li",{parentName:"ol"},"The use of the Open Storage SDK has certain limitations. Please refer to the ",(0,r.yg)("inlineCode",{parentName:"li"},"Usage limitations")," section in this ",(0,r.yg)("a",{parentName:"li",href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1"},"document")," ."),(0,r.yg)("li",{parentName:"ol"},"The Project in MaxCompute is equivalent to the DataBase in Doris.")),(0,r.yg)("h2",{id:"how-to-obtain-endpoint-and-quota"},"How to obtain Endpoint and Quota"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"if you use the dedicated resource group of data transmission service , please refer to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Use exclusive data service resource groups")," section in this ",(0,r.yg)("a",{parentName:"p",href:"https://help.aliyun.com/zh/maxcompute/user-guide/purchase-and-use-exclusive-resource-groups-for-dts"},"document"),", and in ",(0,r.yg)("inlineCode",{parentName:"p"},"2. Authorization"),", enable the corresponding permissions. In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Quota (Quota) management")," list, view and copy the corresponding QuotaName, and specify ",(0,r.yg)("inlineCode",{parentName:"p"},'"mc.quota" = "QuotaName"'),". At this time, you can choose VPC/public network to access MaxCompute, but the bandwidth through VPC is guaranteed, and the public network bandwidth resources are small.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If you use pay-as-you-go, please refer to the Using ",(0,r.yg)("inlineCode",{parentName:"p"},"open storage (pay-as-you-go)")," section in this ",(0,r.yg)("a",{parentName:"p",href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1"},"document")," to enable the open storage (Storage API) switch and grant permissions to the users corresponding to Ak and SK. At this time, your ",(0,r.yg)("inlineCode",{parentName:"p"},"mc.quota")," is the default value ",(0,r.yg)("inlineCode",{parentName:"p"},"pay-as-you-go"),", and you do not need to specify this value additionally. At this time, you can only use VPC to access MaxCompute.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Through steps 1/2, you already know how to access MaxCompute. Now, you need to configure ",(0,r.yg)("inlineCode",{parentName:"p"},"mc.endpoint")," according to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Endpoints in different regions")," in ",(0,r.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/endpoints"},"Alibaba Cloud Endpoints document"),". Users that access through VPC need to configure ",(0,r.yg)("inlineCode",{parentName:"p"},"mc.endpoint")," according to the ",(0,r.yg)("inlineCode",{parentName:"p"},"VPC endpoint")," column in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Endpoints in different regions(VPC)"),". Users that access through the public network can choose the ",(0,r.yg)("inlineCode",{parentName:"p"},"Classic network endpoint")," column in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Endpoints in different regions(internal network for connecting cloud products)")," or the ",(0,r.yg)("inlineCode",{parentName:"p"},"Public endpoint")," column in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Endpoints in different regions(Internet)")," to configure ",(0,r.yg)("inlineCode",{parentName:"p"},"mc.endpoint"),"."))))}d.isMDXComponent=!0}}]);