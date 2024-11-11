"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[306424],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>u});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),g=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=g(e.components);return n.createElement(p.Provider,{value:a},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=g(t),m=r,u=y["".concat(p,".").concat(m)]||y[m]||s[m]||l;return t?n.createElement(u,i(i({ref:a},d),{},{components:t})):n.createElement(u,i({ref:a},d))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},541064:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=t(58168),r=(t(296540),t(15680));const l={title:"Spark Doris Connector",language:"zh-CN"},i=void 0,o={unversionedId:"ecosystem/spark-doris-connector",id:"version-1.2/ecosystem/spark-doris-connector",title:"Spark Doris Connector",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/ecosystem/spark-doris-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/spark-doris-connector",permalink:"/zh-CN/docs/1.2/ecosystem/spark-doris-connector",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Spark Doris Connector",language:"zh-CN"},sidebar:"ecosystem",next:{title:"Flink Doris Connector",permalink:"/zh-CN/docs/1.2/ecosystem/flink-doris-connector"}},p={},g=[{value:"\u7248\u672c\u517c\u5bb9",id:"\u7248\u672c\u517c\u5bb9",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"Maven",id:"maven",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:3},{value:"SQL",id:"sql",level:4},{value:"DataFrame",id:"dataframe",level:4},{value:"RDD",id:"rdd",level:4},{value:"pySpark",id:"pyspark",level:4},{value:"\u5199\u5165",id:"\u5199\u5165",level:3},{value:"SQL",id:"sql-1",level:4},{value:"DataFrame(batch/stream)",id:"dataframebatchstream",level:4},{value:"Java \u793a\u4f8b",id:"java-\u793a\u4f8b",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u901a\u7528\u914d\u7f6e\u9879",id:"\u901a\u7528\u914d\u7f6e\u9879",level:3},{value:"SQL \u548c Dataframe \u4e13\u6709\u914d\u7f6e",id:"sql-\u548c-dataframe-\u4e13\u6709\u914d\u7f6e",level:3},{value:"Structured Streaming \u4e13\u6709\u914d\u7f6e",id:"structured-streaming-\u4e13\u6709\u914d\u7f6e",level:3},{value:"RDD \u4e13\u6709\u914d\u7f6e",id:"rdd-\u4e13\u6709\u914d\u7f6e",level:3},{value:"Doris \u548c Spark \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",id:"doris-\u548c-spark-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:g},y="wrapper";function s(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"spark-doris-connector"},"Spark Doris Connector"),(0,r.yg)("p",null,"Spark Doris Connector \u53ef\u4ee5\u652f\u6301\u901a\u8fc7 Spark \u8bfb\u53d6 Doris \u4e2d\u5b58\u50a8\u7684\u6570\u636e\uff0c\u4e5f\u652f\u6301\u901a\u8fc7 Spark \u5199\u5165\u6570\u636e\u5230 Doris\u3002"),(0,r.yg)("p",null,"\u4ee3\u7801\u5e93\u5730\u5740\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-spark-connector"},"https://github.com/apache/doris-spark-connector")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u4ece",(0,r.yg)("inlineCode",{parentName:"li"},"Doris"),"\u4e2d\u8bfb\u53d6\u6570\u636e"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"li"},"Spark DataFrame"),"\u6279\u91cf/\u6d41\u5f0f \u5199\u5165",(0,r.yg)("inlineCode",{parentName:"li"},"Doris")),(0,r.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06",(0,r.yg)("inlineCode",{parentName:"li"},"Doris"),"\u8868\u6620\u5c04\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"DataFrame"),"\u6216\u8005",(0,r.yg)("inlineCode",{parentName:"li"},"RDD"),"\uff0c\u63a8\u8350\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"li"},"DataFrame"),"\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301\u5728",(0,r.yg)("inlineCode",{parentName:"li"},"Doris"),"\u7aef\u5b8c\u6210\u6570\u636e\u8fc7\u6ee4\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002")),(0,r.yg)("h2",{id:"\u7248\u672c\u517c\u5bb9"},"\u7248\u672c\u517c\u5bb9"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Connector"),(0,r.yg)("th",{parentName:"tr",align:null},"Spark"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris"),(0,r.yg)("th",{parentName:"tr",align:null},"Java"),(0,r.yg)("th",{parentName:"tr",align:null},"Scala"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.3.1"),(0,r.yg)("td",{parentName:"tr",align:null},"3.4 ~ 3.1, 2.4, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.2.0"),(0,r.yg)("td",{parentName:"tr",align:null},"3.2, 3.1, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,r.yg)("td",{parentName:"tr",align:null},"3.2, 3.1, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"1.0 +"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1.0.1"),(0,r.yg)("td",{parentName:"tr",align:null},"3.1, 2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"0.12 - 0.15"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"2.12, 2.11")))),(0,r.yg)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.yg)("h3",{id:"maven"},"Maven"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.doris</groupId>\n    <artifactId>spark-doris-connector-3.4_2.12</artifactId>\n    <version>1.3.2</version>\n</dependency>\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5907\u6ce8")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bf7\u6839\u636e\u4e0d\u540c\u7684 Spark \u548c Scala \u7248\u672c\u66ff\u6362\u76f8\u5e94\u7684 Connector \u7248\u672c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u4ece",(0,r.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/doris/"},"\u8fd9\u91cc"),"\u4e0b\u8f7d\u76f8\u5173\u7248\u672c jar \u5305\u3002"))),(0,r.yg)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,r.yg)("p",null,"\u7f16\u8bd1\u65f6\uff0c\u53ef\u76f4\u63a5\u8fd0\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"sh build.sh"),"\uff0c\u5177\u4f53\u53ef\u53c2\u8003\u8fd9\u91cc\u3002"),(0,r.yg)("p",null,"\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u4f1a\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u751f\u6210\u76ee\u6807 jar \u5305\uff0c\u5982\uff1aspark-doris-connector-3.2_2.12-1.2.0-SNAPSHOT.jar\u3002 \u5c06\u6b64\u6587\u4ef6\u590d\u5236\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"ClassPath")," \u4e2d\u5373\u53ef\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark-Doris-Connector"),"\u3002 \u4f8b\u5982\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"Local")," \u6a21\u5f0f\u8fd0\u884c\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark"),"\uff0c\u5c06\u6b64\u6587\u4ef6\u653e\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"jars/")," \u6587\u4ef6\u5939\u4e0b\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"Yarn"),"\u96c6\u7fa4\u6a21\u5f0f\u8fd0\u884c\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"Spark"),"\uff0c\u5219\u5c06\u6b64\u6587\u4ef6\u653e\u5165\u9884\u90e8\u7f72\u5305\u4e2d\u3002\n\u4e5f\u53ef\u4ee5"),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u5728\u6e90\u7801\u76ee\u5f55\u4e0b\u6267\u884c\uff1a\n",(0,r.yg)("inlineCode",{parentName:"li"},"sh build.sh"),"\n\u6839\u636e\u63d0\u793a\u8f93\u5165\u4f60\u9700\u8981\u7684 Scala \u4e0e Spark \u7248\u672c\u8fdb\u884c\u7f16\u8bd1\u3002")),(0,r.yg)("p",null,"\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u4f1a\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u751f\u6210\u76ee\u6807 jar \u5305\uff0c\u5982\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"spark-doris-connector-3.2_2.12-1.2.0-SNAPSHOT.jar"),"\u3002\n\u5c06\u6b64\u6587\u4ef6\u590d\u5236\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"ClassPath")," \u4e2d\u5373\u53ef\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark-Doris-Connector"),"\u3002"),(0,r.yg)("p",null,"\u4f8b\u5982\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"Local")," \u6a21\u5f0f\u8fd0\u884c\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark"),"\uff0c\u5c06\u6b64\u6587\u4ef6\u653e\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"jars/")," \u6587\u4ef6\u5939\u4e0b\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"Yarn"),"\u96c6\u7fa4\u6a21\u5f0f\u8fd0\u884c\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"Spark"),"\uff0c\u5219\u5c06\u6b64\u6587\u4ef6\u653e\u5165\u9884\u90e8\u7f72\u5305\u4e2d\u3002"),(0,r.yg)("p",null,"\u4f8b\u5982\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"spark-doris-connector-3.2_2.12-1.2.0-SNAPSHOT.jar")," \u4e0a\u4f20\u5230 hdfs \u5e76\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"spark.yarn.jars")," \u53c2\u6570\u4e0a\u6dfb\u52a0 hdfs \u4e0a\u7684 Jar\u5305\u8def\u5f84"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"1. \u4e0a\u4f20 `spark-doris-connector-3.2_2.12-1.2.0-SNAPSHOT.jar` \u5230 hdfs\u3002\n\nhdfs dfs -mkdir /spark-jars/\nhdfs dfs -put /your_local_path/spark-doris-connector-3.2_2.12-1.2.0-SNAPSHOT.jar /spark-jars/\n\n2. \u5728\u96c6\u7fa4\u4e2d\u6dfb\u52a0 `spark-doris-connector-3.2_2.12-1.2.0-SNAPSHOT.jar` \u4f9d\u8d56\u3002\nspark.yarn.jars=hdfs:///spark-jars/spark-doris-connector-3.2_2.12-1.2.0-SNAPSHOT.jar\n\n")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.yg)("h3",{id:"\u8bfb\u53d6"},"\u8bfb\u53d6"),(0,r.yg)("h4",{id:"sql"},"SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE\nTEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nSELECT *\nFROM spark_doris;\n')),(0,r.yg)("h4",{id:"dataframe"},"DataFrame"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'val dorisSparkDF = spark.read.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  .load()\n\ndorisSparkDF.show(5)\n')),(0,r.yg)("h4",{id:"rdd"},"RDD"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.doris.spark._\n\nval dorisSparkRDD = sc.dorisRDD(\n  tableIdentifier = Some("$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"),\n  cfg = Some(Map(\n    "doris.fenodes" -> "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n    "doris.request.auth.user" -> "$YOUR_DORIS_USERNAME",\n    "doris.request.auth.password" -> "$YOUR_DORIS_PASSWORD"\n  ))\n)\n\ndorisSparkRDD.collect()\n')),(0,r.yg)("h4",{id:"pyspark"},"pySpark"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'dorisSparkDF = spark.read.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  .load()\n// show 5 lines data \ndorisSparkDF.show(5)\n')),(0,r.yg)("h3",{id:"\u5199\u5165"},"\u5199\u5165"),(0,r.yg)("h4",{id:"sql-1"},"SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE\nTEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n  "table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n  "fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n  "user"="$YOUR_DORIS_USERNAME",\n  "password"="$YOUR_DORIS_PASSWORD"\n);\n\nINSERT INTO spark_doris\nVALUES ("VALUE1", "VALUE2", ...);\n# or\nINSERT INTO spark_doris\nSELECT *\nFROM YOUR_TABLE\n# or\nINSERT OVERWRITE \nSELECT *\nFROM YOUR_TABLE \n')),(0,r.yg)("h4",{id:"dataframebatchstream"},"DataFrame(batch/stream)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// batch sink\nval mockDataDF = List(\n  (3, "440403001005", "21.cn"),\n  (1, "4404030013005", "22.cn"),\n  (33, null, "23.cn")\n).toDF("id", "mi_code", "mi_name")\nmockDataDF.show(5)\n\nmockDataDF.write.format("doris")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  //\u5176\u5b83\u9009\u9879\n  //\u6307\u5b9a\u4f60\u8981\u5199\u5165\u7684\u5b57\u6bb5\n  .option("doris.write.fields", "$YOUR_FIELDS_TO_WRITE")\n  // \u652f\u6301\u8bbe\u7f6e Overwrite \u6a21\u5f0f\u6765\u8986\u76d6\u6570\u636e\n  // .option("save_mode", SaveMode.Overwrite)\n  .save()\n\n// stream sink(StructuredStreaming)\n\n// \u7ed3\u679c DataFrame \u548c doris \u8868\u76f8\u540c\u7684\u7ed3\u6784\u5316\u6570\u636e, \u914d\u7f6e\u65b9\u5f0f\u548c\u6279\u91cf\u6a21\u5f0f\u4e00\u81f4\u3002\nval sourceDf = spark.readStream.\n       .format("your_own_stream_source")\n       .load()\n\nval resultDf = sourceDf.<transformations>\n\nresultDf.writeStream\n      .format("doris")\n      .option("checkpointLocation", "$YOUR_CHECKPOINT_LOCATION")\n      .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n      .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n      .option("user", "$YOUR_DORIS_USERNAME")\n      .option("password", "$YOUR_DORIS_PASSWORD")\n      .start()\n      .awaitTermination()\n\n// \u7ed3\u679c DataFrame \u4e2d\u5b58\u5728\u67d0\u4e00\u5217\u7684\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u5199\u5165\u7684\uff0c\u6bd4\u5982\u7b26\u5408\u5bfc\u5165\u89c4\u8303\u7684 Kafka \u6d88\u606f\u4e2d\u7684 value \u503c\n\nval kafkaSource = spark.readStream\n  .format("kafka")\n  .option("kafka.bootstrap.servers", "$YOUR_KAFKA_SERVERS")\n  .option("startingOffsets", "latest")\n  .option("subscribe", "$YOUR_KAFKA_TOPICS")\n  .load()\nkafkaSource.selectExpr("CAST(value as STRING)")\n  .writeStream\n  .format("doris")\n  .option("checkpointLocation", "$YOUR_CHECKPOINT_LOCATION")\n  .option("doris.table.identifier", "$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME")\n  .option("doris.fenodes", "$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_DORIS_USERNAME")\n  .option("password", "$YOUR_DORIS_PASSWORD")\n  // \u8bbe\u7f6e\u8be5\u9009\u9879\u53ef\u4ee5\u5c06 Kafka \u6d88\u606f\u4e2d\u7684 value \u5217\u4e0d\u7ecf\u8fc7\u5904\u7406\u76f4\u63a5\u5199\u5165\n  .option("doris.sink.streaming.passthrough", "true")\n  .option("doris.sink.properties.format", "json")\n  // \u5176\u4ed6\u9009\u9879\n  .start()\n  .awaitTermination()\n')),(0,r.yg)("h3",{id:"java-\u793a\u4f8b"},"Java \u793a\u4f8b"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"samples/doris-demo/spark-demo/")," \u4e0b\u63d0\u4f9b\u4e86 Java\n\u7248\u672c\u7684\u793a\u4f8b\uff0c\u53ef\u4f9b\u53c2\u8003\uff0c",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/spark-demo"},"\u8fd9\u91cc")),(0,r.yg)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.yg)("h3",{id:"\u901a\u7528\u914d\u7f6e\u9879"},"\u901a\u7528\u914d\u7f6e\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.fenodes"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris FE http \u5730\u5740\uff0c\u652f\u6301\u591a\u4e2a\u5730\u5740\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.table.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u8868\u540d\uff0c\u5982\uff1adb1.tbl1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u91cd\u8bd5\u6b21\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.yg)("td",{parentName:"tr",align:null},"3600"),(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2 doris \u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a 1 \u5c0f\u65f6\uff0c-1 \u8868\u793a\u65e0\u8d85\u65f6\u9650\u5236")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u4e2a RDD Partition \u5bf9\u5e94\u7684 Doris Tablet \u4e2a\u6570\u3002",(0,r.yg)("br",null),"\u6b64\u6570\u503c\u8bbe\u7f6e\u8d8a\u5c0f\uff0c\u5219\u4f1a\u751f\u6210\u8d8a\u591a\u7684 Partition\u3002\u4ece\u800c\u63d0\u5347 Spark \u4fa7\u7684\u5e76\u884c\u5ea6\uff0c\u4f46\u540c\u65f6\u4f1a\u5bf9 Doris \u9020\u6210\u66f4\u5927\u7684\u538b\u529b\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6 Doris \u8868\u7684\u5217\u540d\u5217\u8868\uff0c\u591a\u5217\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"4064"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u6b21\u4ece BE \u8bfb\u53d6\u6570\u636e\u7684\u6700\u5927\u884c\u6570\u3002\u589e\u5927\u6b64\u6570\u503c\u53ef\u51cf\u5c11 Spark \u4e0e Doris \u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u7684\u6b21\u6570\u3002",(0,r.yg)("br",null),"\u4ece\u800c\u51cf\u8f7b\u7f51\u7edc\u5ef6\u8fdf\u6240\u5e26\u6765\u7684\u989d\u5916\u65f6\u95f4\u5f00\u9500\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.yg)("td",{parentName:"tr",align:null},"2147483648"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5f02\u6b65\u8f6c\u6362 Arrow \u683c\u5f0f\u5230 spark-doris-connector \u8fed\u4ee3\u6240\u9700\u7684 RowBatch")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.yg)("td",{parentName:"tr",align:null},"64"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u8f6c\u6362 Arrow \u683c\u5f0f\u7684\u5185\u90e8\u5904\u7406\u961f\u5217\uff0c\u5f53 doris.deserialize.arrow.async \u4e3a true \u65f6\u751f\u6548")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.write.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5199\u5165 Doris \u8868\u7684\u5b57\u6bb5\u6216\u8005\u5b57\u6bb5\u987a\u5e8f\uff0c\u591a\u5217\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002",(0,r.yg)("br",null),"\u9ed8\u8ba4\u5199\u5165\u65f6\u8981\u6309\u7167 Doris \u8868\u5b57\u6bb5\u987a\u5e8f\u5199\u5165\u5168\u90e8\u5b57\u6bb5\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.batch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"100000"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u6b21\u5199 BE \u7684\u6700\u5927\u884c\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5199 BE \u5931\u8d25\u4e4b\u540e\u7684\u91cd\u8bd5\u6b21\u6570\uff0c\u4ece 1.3.0 \u7248\u672c\u5f00\u59cb\uff0c \u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u5373\u9ed8\u8ba4\u4e0d\u8fdb\u884c\u91cd\u8bd5\u3002\u5f53\u8bbe\u7f6e\u8be5\u53c2\u6570\u5927\u4e8e 0 \u65f6\uff0c\u4f1a\u8fdb\u884c\u6279\u6b21\u7ea7\u522b\u7684\u5931\u8d25\u91cd\u8bd5\uff0c\u4f1a\u5728 Spark Executor \u5185\u5b58\u4e2d\u7f13\u5b58 ",(0,r.yg)("inlineCode",{parentName:"td"},"doris.sink.batch.size")," \u6240\u914d\u7f6e\u5927\u5c0f\u7684\u6570\u636e\uff0c\u53ef\u80fd\u9700\u8981\u9002\u5f53\u589e\u5927\u5185\u5b58\u5206\u914d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.properties.format"),(0,r.yg)("td",{parentName:"tr",align:null},"csv"),(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load \u7684\u6570\u636e\u683c\u5f0f\u3002",(0,r.yg)("br",null),"\u5171\u652f\u6301 3 \u79cd\u683c\u5f0f\uff1acsv\uff0cjson\uff0carrow ",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/stream-load-manual/"},"\u66f4\u591a\u53c2\u6570\u8be6\u60c5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load \u7684\u5bfc\u5165\u53c2\u6570\u3002",(0,r.yg)("br",null),"\u4f8b\u5982:",(0,r.yg)("br",null),"\u6307\u5b9a\u5217\u5206\u9694\u7b26\uff1a",(0,r.yg)("inlineCode",{parentName:"td"},"'doris.sink.properties.column_separator' = ','"),"\u7b49",(0,r.yg)("br",null)," ",(0,r.yg)("a",{parentName:"td",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/stream-load-manual/"},"\u66f4\u591a\u53c2\u6570\u8be6\u60c5"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.task.partition.size"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u5199\u5165\u4efb\u52a1\u5bf9\u5e94\u7684 Partition \u4e2a\u6570\u3002Spark RDD \u7ecf\u8fc7\u8fc7\u6ee4\u7b49\u64cd\u4f5c\uff0c\u6700\u540e\u5199\u5165\u7684 Partition \u6570\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\uff0c\u4f46\u6bcf\u4e2a Partition \u5bf9\u5e94\u7684\u8bb0\u5f55\u6570\u6bd4\u8f83\u5c11\uff0c\u5bfc\u81f4\u5199\u5165\u9891\u7387\u589e\u52a0\u548c\u8ba1\u7b97\u8d44\u6e90\u6d6a\u8d39\u3002",(0,r.yg)("br",null),"\u6b64\u6570\u503c\u8bbe\u7f6e\u8d8a\u5c0f\uff0c\u53ef\u4ee5\u964d\u4f4e Doris \u5199\u5165\u9891\u7387\uff0c\u51cf\u5c11 Doris \u5408\u5e76\u538b\u529b\u3002\u8be5\u53c2\u6570\u914d\u5408 doris.sink.task.use.repartition \u4f7f\u7528\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.task.use.repartition"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u91c7\u7528 repartition \u65b9\u5f0f\u63a7\u5236 Doris \u5199\u5165 Partition \u6570\u3002\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u91c7\u7528 coalesce \u65b9\u5f0f\u63a7\u5236\uff08\u6ce8\u610f\uff1a\u5982\u679c\u5728\u5199\u5165\u4e4b\u524d\u6ca1\u6709 Spark action \u7b97\u5b50\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6574\u4e2a\u8ba1\u7b97\u5e76\u884c\u5ea6\u964d\u4f4e\uff09\u3002",(0,r.yg)("br",null),"\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219\u91c7\u7528 repartition \u65b9\u5f0f\uff08\u6ce8\u610f\uff1a\u53ef\u8bbe\u7f6e\u6700\u540e Partition \u6570\uff0c\u4f46\u4f1a\u989d\u5916\u589e\u52a0 shuffle \u5f00\u9500\uff09\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.batch.interval.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"50"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u6279\u6b21 sink \u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d ms\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.enable-2pc"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u4e24\u9636\u6bb5\u63d0\u4ea4\u3002\u5f00\u542f\u540e\u5c06\u4f1a\u5728\u4f5c\u4e1a\u7ed3\u675f\u65f6\u63d0\u4ea4\u4e8b\u52a1\uff0c\u800c\u90e8\u5206\u4efb\u52a1\u5931\u8d25\u65f6\u4f1a\u5c06\u6240\u6709\u9884\u63d0\u4ea4\u72b6\u6001\u7684\u4e8b\u52a1\u4f1a\u6eda\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.auto-redirect"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u91cd\u5b9a\u5411 StreamLoad \u8bf7\u6c42\u3002\u5f00\u542f\u540e StreamLoad \u5c06\u901a\u8fc7 FE \u5199\u5165\uff0c\u4e0d\u518d\u663e\u5f0f\u83b7\u53d6 BE \u4fe1\u606f\u3002")))),(0,r.yg)("h3",{id:"sql-\u548c-dataframe-\u4e13\u6709\u914d\u7f6e"},"SQL \u548c Dataframe \u4e13\u6709\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.filter.query.in.max.count"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8c13\u8bcd\u4e0b\u63a8\u4e2d\uff0cin \u8868\u8fbe\u5f0f value \u5217\u8868\u5143\u7d20\u6700\u5927\u6570\u91cf\u3002\u8d85\u8fc7\u6b64\u6570\u91cf\uff0c\u5219 in \u8868\u8fbe\u5f0f\u6761\u4ef6\u8fc7\u6ee4\u5728 Spark \u4fa7\u5904\u7406\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.ignore-type"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5728\u5b9a\u4e34\u65f6\u89c6\u56fe\u4e2d\uff0c\u8bfb\u53d6 schema \u65f6\u8981\u5ffd\u7565\u7684\u5b57\u6bb5\u7c7b\u578b\u3002",(0,r.yg)("br",null)," \u4f8b\u5982\uff0c'doris.ignore-type'='bitmap,hll'")))),(0,r.yg)("h3",{id:"structured-streaming-\u4e13\u6709\u914d\u7f6e"},"Structured Streaming \u4e13\u6709\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.sink.streaming.passthrough"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c06\u7b2c\u4e00\u5217\u7684\u503c\u4e0d\u7ecf\u8fc7\u5904\u7406\u76f4\u63a5\u5199\u5165\u3002")))),(0,r.yg)("h3",{id:"rdd-\u4e13\u6709\u914d\u7f6e"},"RDD \u4e13\u6709\u914d\u7f6e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.auth.user"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.request.auth.password"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u8bfb\u53d6\u6570\u636e\u7684\u8868\u8fbe\u5f0f\uff0c\u6b64\u8868\u8fbe\u5f0f\u900f\u4f20\u7ed9 Doris\u3002Doris \u4f7f\u7528\u6b64\u8868\u8fbe\u5f0f\u5b8c\u6210\u6e90\u7aef\u6570\u636e\u8fc7\u6ee4\u3002")))),(0,r.yg)("h2",{id:"doris-\u548c-spark-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"},"Doris \u548c Spark \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Spark Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.NullType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.BooleanType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.ByteType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.ShortType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.IntegerType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.LongType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.FloatType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.DateType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.StringType",(0,r.yg)("sup",null,"1"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"DecimalType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.StringType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DataTypes.DoubleType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HLL"),(0,r.yg)("td",{parentName:"tr",align:null},"Unsupported datatype")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bitmap"),(0,r.yg)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6ce8\uff1aConnector \u4e2d\uff0c\u5c06",(0,r.yg)("inlineCode",{parentName:"li"},"DATETIME"),"\u6620\u5c04\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"String"),"\u3002\u7531\u4e8e",(0,r.yg)("inlineCode",{parentName:"li"},"Doris"),"\u5e95\u5c42\u5b58\u50a8\u5f15\u64ce\u5904\u7406\u903b\u8f91\uff0c\u76f4\u63a5\u4f7f\u7528\u65f6\u95f4\u7c7b\u578b\u65f6\uff0c\u8986\u76d6\u7684\u65f6\u95f4\u8303\u56f4\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u3002\u6240\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"String")," \u7c7b\u578b\u76f4\u63a5\u8fd4\u56de\u5bf9\u5e94\u7684\u65f6\u95f4\u53ef\u8bfb\u6587\u672c\u3002")),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u5982\u4f55\u5199\u5165 Bitmap \u7c7b\u578b\uff1f"))),(0,r.yg)("p",null,"\u5728 Spark SQL \u4e2d\uff0c\u901a\u8fc7 insert into \u65b9\u5f0f\u5199\u5165\u6570\u636e\u65f6\uff0c\u5982\u679c doris \u7684\u76ee\u6807\u8868\u4e2d\u5305\u542b ",(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"HLL")," \u7c7b\u578b\u7684\u6570\u636e\u65f6\uff0c\u9700\u8981\u8bbe\u7f6e\u53c2\u6570 ",(0,r.yg)("inlineCode",{parentName:"p"},"doris.ignore-type")," \u4e3a\u5bf9\u5e94\u7c7b\u578b\uff0c\u5e76\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"doris.write.fields")," \u5bf9\u5217\u8fdb\u884c\u6620\u5c04\u8f6c\u6362\uff0c\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"BITMAP"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n"table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n"fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n"user"="$YOUR_DORIS_USERNAME",\n"password"="$YOUR_DORIS_PASSWORD"\n"doris.ignore-type"="bitmap",\n"doris.write.fields"="col1,col2,col3,bitmap_col2=to_bitmap(col2),bitmap_col3=bitmap_hash(col3)"\n);\n')),(0,r.yg)("p",{parentName:"blockquote"},"HLL"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TEMPORARY VIEW spark_doris\nUSING doris\nOPTIONS(\n"table.identifier"="$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME",\n"fenodes"="$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT",\n"user"="$YOUR_DORIS_USERNAME",\n"password"="$YOUR_DORIS_PASSWORD"\n"doris.ignore-type"="hll",\n"doris.write.fields"="col1,hll_col1=hll_hash(col1)"\n);\n'))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"\u5982\u4f55\u4f7f\u7528overwrite\u5199\u5165\uff1f"))),(0,r.yg)("p",null,"\u4ece 1.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301 overwrite \u6a21\u5f0f\u5199\u5165\uff08\u53ea\u652f\u6301\u5168\u8868\u7ea7\u522b\u7684\u6570\u636e\u8986\u76d6\uff09\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"DataFrame"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'resultDf.format("doris")\n  .option("doris.fenodes","$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n  // your own options\n  .option("save_mode", SaveMode.Overwrite)\n  .save()\n')),(0,r.yg)("p",{parentName:"blockquote"},"SQL"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE your_target_table\nSELECT * FROM your_source_table\n"))))}s.isMDXComponent=!0}}]);