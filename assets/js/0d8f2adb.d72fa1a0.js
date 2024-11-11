"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[785768],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),g=r,y=c["".concat(p,".").concat(g)]||c[g]||u[g]||l;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const l={title:"ClickHouse",language:"en"},o=void 0,i={unversionedId:"lakehouse/database/clickhouse",id:"version-2.0/lakehouse/database/clickhouse",title:"ClickHouse",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/database/clickhouse.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/clickhouse",permalink:"/docs/2.0/lakehouse/database/clickhouse",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ClickHouse",language:"en"},sidebar:"docs",previous:{title:"SQL Server",permalink:"/docs/2.0/lakehouse/database/sqlserver"},next:{title:"SAP HANA",permalink:"/docs/2.0/lakehouse/database/sap-hana"}},p={},s=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to ClickHouse",id:"connect-to-clickhouse",level:2},{value:"Connection security",id:"connection-security",level:3},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"ClickHouse to Doris type mapping",id:"clickhouse-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"FAQ",id:"faq",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog supports connection to the ClickHouse database through the standard JDBC interface. This document describes how to configure a ClickHouse database connection."),(0,r.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.yg)("p",null,"To connect to the ClickHouse database you need"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ClickHouse 23.x or higher (versions below this are not fully tested).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC driver for ClickHouse database, you can download the latest or specified version of ClickHouse JDBC driver from ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.clickhouse/clickhouse-jdbc"},"Maven repository"),". ",(0,r.yg)("strong",{parentName:"p"},"ClickHouse JDBC Driver version 0.4.6 is recommended. "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris Network connection between each FE and BE node and the ClickHouse server, default port is 8123."))),(0,r.yg)("h2",{id:"connect-to-clickhouse"},"Connect to ClickHouse"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG clickhouse PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="password",\n    "jdbc_url" = "jdbc:clickhouse://example.net:8123/",\n    "driver_url" = "clickhouse-jdbc-0.4.6-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n')),(0,r.yg)("admonition",{title:"remarks",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," defines the connection information and parameters to be passed to the ClickHouse JDBC driver.\nParameters for supported URLs can be found in ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/integrations/java#configuration"},"ClickHouse JDBC Driver Configuration"),".")),(0,r.yg)("h3",{id:"connection-security"},"Connection security"),(0,r.yg)("p",null,"If you configured TLS with a global trust certificate installed on the data source, you can enable TLS between the cluster and the data source by appending parameters to the JDBC connection string set in the jdbc_url property."),(0,r.yg)("p",null,"For example, enable TLS by adding the ssl=true parameter to the jdbc_url configuration property:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'"jdbc_url"="jdbc:clickhouse://example.net:8123/db?ssl=true"\n')),(0,r.yg)("p",null,"For more information about TLS configuration options, see ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/integrations/java#connect-to-clickhouse-with-ssl"},"Clickhouse JDBC Driver Documentation SSL Configuration Section")),(0,r.yg)("h2",{id:"hierarchical-mapping"},"Hierarchical mapping"),(0,r.yg)("p",null,"When mapping ClickHouse, a Database in Doris corresponds to a Database in ClickHouse. The Table under Doris' Database corresponds to the Tables under the Database in ClickHouse. That is, the mapping relationship is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.yg)("th",{parentName:"tr",align:"center"},"ClickHouse"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},"ClickHouse Server")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,r.yg)("h2",{id:"type-mapping"},"Type mapping"),(0,r.yg)("h3",{id:"clickhouse-to-doris-type-mapping"},"ClickHouse to Doris type mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ClickHouse Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bool"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date/Date32"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DateTime/DateTime64"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float32"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float64"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int8"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int16/UInt8"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris does not have UNSIGNED data type, so expand by an order of magnitude")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int32/UInt16"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris does not have UNSIGNED data type, so expand by an order of magnitude")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int64/Uint32"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris does not have UNSIGNED data type, so it is expanded by an order of magnitude")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int128/UInt64"),(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris does not have UNSIGNED data type, so expand it by an order of magnitude")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int256/UInt128/UInt256"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris does not have a data type of this magnitude and uses STRING for processing")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMALV3/STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Which type will be selected based on the (precision, scale) of the DECIMAL field")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Enum/IPv4/IPv6/UUID"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"Array's internal type adaptation logic refers to the above types, nested array is not supported")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Other"),(0,r.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"query-optimization"},"Query optimization"),(0,r.yg)("h3",{id:"predicate-pushdown"},"Predicate pushdown"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When executing a query like ",(0,r.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'"),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing unnecessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When FE conf ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_func_pushdown")," is set to true, the function conditions after where will also be pushed down to the external data source."),(0,r.yg)("p",{parentName:"li"},"The functions that currently support push down to ClickHouse are:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Function"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"FROM_UNIXTIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"UNIX_TIMESTAMP")))))),(0,r.yg)("h3",{id:"row-limit"},"Row limit"),(0,r.yg)("p",null,"If you have the limit keyword in the query, Doris will push the limit down to ClickHouse to reduce the amount of data transfer."),(0,r.yg)("h3",{id:"escape-characters"},"Escape characters"),(0,r.yg)("p",null,'Doris will automatically add the escape character ("") to the field names and table names in the query statements sent to ClickHouse to avoid conflicts between the field names and table names and ClickHouse internal keywords.'),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"NoClassDefFoundError: net/jpountz/lz4/LZ4Factory")," error message appears when reading Clickhouse data through ClickHouse Catalog"),(0,r.yg)("p",{parentName:"li"},"You can first download the ",(0,r.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/net/jpountz/lz4/lz4/1.3.0/lz4-1.3.0.jar"},"lz4-1.3.0.jar")," package and put it in every ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_lib/")," directory under the FE and BE directories (if it does not exist, just create it manually)."))))}u.isMDXComponent=!0}}]);