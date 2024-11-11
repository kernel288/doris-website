"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[147797],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>y});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?r.createElement(y,i(i({ref:a},d),{},{components:t})):r.createElement(y,i({ref:a},d))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66626:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),n=(t(296540),t(15680));const o={title:"DataX Doriswriter",language:"en"},i=void 0,l={unversionedId:"ecosystem/datax",id:"version-3.0/ecosystem/datax",title:"DataX Doriswriter",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/datax.md",sourceDirName:"ecosystem",slug:"/ecosystem/datax",permalink:"/docs/3.0/ecosystem/datax",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DataX Doriswriter",language:"en"},sidebar:"ecosystem",previous:{title:"Doris Kafka Connector",permalink:"/docs/3.0/ecosystem/doris-kafka-connector"},next:{title:"DBT Doris Adapter",permalink:"/docs/3.0/ecosystem/dbt-doris-adapter"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Directly Download the DataX Installation Package",id:"directly-download-the-datax-installation-package",level:3},{value:"Compile the DorisWriter Plugin Manually",id:"compile-the-doriswriter-plugin-manually",level:3},{value:"Datax DorisWriter parameter introduction:",id:"datax-doriswriter-parameter-introduction",level:3},{value:"Example",id:"example",level:3},{value:"1. Stream reads the data and imports it to Doris",id:"1-stream-reads-the-data-and-imports-it-to-doris",level:4},{value:"2.Mysql reads the data and imports it to Doris",id:"2mysql-reads-the-data-and-imports-it-to-doris",level:4}],d={toc:p},m="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"datax-doriswriter"},"DataX Doriswriter"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/alibaba/DataX"},"DataX")," Doriswriter plugin supports synchronizing data from various data sources, such as MySQL, Oracle, and SQL Server, into Doris using the Stream Load method."),(0,n.yg)("p",null,":::Note\nThis plugin needs to be used together with the DataX service.\nDataX supports multiple data sources. For more details, see here.\n:::"),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("h3",{id:"directly-download-the-datax-installation-package"},"Directly Download the DataX Installation Package"),(0,n.yg)("p",null,"DataX provides an official installation package that already includes DataX, which can be downloaded and used directly. For more details, refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/alibaba/DataX?tab=readme-ov-file#download-datax%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80"},"here"),"."),(0,n.yg)("h3",{id:"compile-the-doriswriter-plugin-manually"},"Compile the DorisWriter Plugin Manually"),(0,n.yg)("p",null,"Download the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/extension/DataX"},"source code")," for the DorisWriter plugin."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Run ",(0,n.yg)("inlineCode",{parentName:"p"},"init-env.sh"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify code of doriswriter in ",(0,n.yg)("inlineCode",{parentName:"p"},"DataX/doriswriter")," if you need.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Build doriswriter"),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Build doriswriter along:")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"`mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests`\n")),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"If you need to compile the entire DataX project, please refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/alibaba/DataX/blob/master/userGuid.md#quick-start"},"here"))),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Compilation error")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"If you encounter the following compilation errors:\n\n```\nCould not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n```\n\nYou can try the following solutions:\n\n1. Download [alibaba-datax-maven-m2-20210928.tar.gz](https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz)\n2. After decompression, copy the resulting `alibaba/datax/` directory to `.m2/repository/com/alibaba/` corresponding to the maven used, and try to compile again. \n")))),(0,n.yg)("h3",{id:"datax-doriswriter-parameter-introduction"},"Datax DorisWriter parameter introduction:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"jdbcUrl")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: Doris's JDBC connection string, the user executes preSql or postSQL."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: Yes"),(0,n.yg)("li",{parentName:"ul"},"Default: None"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"loadUrl")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Description: As a connection target for Stream Load. The format is "ip:port". Where IP is the FE node IP, port is the http_port of the FE node. You can fill in more than one, separated by commas in English: ',(0,n.yg)("inlineCode",{parentName:"li"},","),", doriswriter will visit in a polling manner."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: Yes"),(0,n.yg)("li",{parentName:"ul"},"Default: None"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"username")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The username to access the Doris database"),(0,n.yg)("li",{parentName:"ul"},"Mandatory: Yes"),(0,n.yg)("li",{parentName:"ul"},"Default: None"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"password")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: Password to access Doris database"),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: empty"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"connection.selectedDatabase")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The name of the Doris database that needs to be written."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: Yes"),(0,n.yg)("li",{parentName:"ul"},"Default: None"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"connection. table")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The name of the Doris table that needs to be written.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Mandatory: Yes"),(0,n.yg)("li",{parentName:"ul"},"Default: None"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"flushInterval")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The time interval at which data is written in batches. If this time interval is set too small, it will cause Doris write blocking problem, error code -235, and if you set this time interval too small, ",(0,n.yg)("inlineCode",{parentName:"li"},"maxBatchRows")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"batchSize")," parameters are set too large, then it may not be able to reach you The data size set by this will also be imported."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: 30000 (ms)"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"column")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Description: The fields that the destination table needs to write data into, these fields will be used as the field names of the generated Json data. Fields are separated by commas. For example: "column": ','["id","name","age"]',"."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: Yes"),(0,n.yg)("li",{parentName:"ul"},"Default: No"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"preSql")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: Before writing data to the destination table, the standard statement here will be executed first."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: None"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"postSql")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: After writing data to the destination table, the standard statement here will be executed."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: None")))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"maxBatchRows")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The maximum number of rows for each batch of imported data. Together with ",(0,n.yg)("strong",{parentName:"li"},"batchSize"),", it controls the number of imported record rows per batch. When each batch of data reaches one of the two thresholds, the data of this batch will start to be imported."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: 500000"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"batchSize")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The maximum amount of data imported in each batch. Works with ",(0,n.yg)("strong",{parentName:"li"},"maxBatchRows")," to control the number of imports per batch. When each batch of data reaches one of the two thresholds, the data of this batch will start to be imported."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: 94371840"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"maxRetries")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The number of retries after each batch of failed data imports."),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: 3")))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"labelPrefix")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Description: The label prefix for each batch of imported tasks. The final label will have ",(0,n.yg)("inlineCode",{parentName:"li"},"labelPrefix + UUID")," to form a globally unique label to ensure that data will not be imported repeatedly"),(0,n.yg)("li",{parentName:"ul"},"Mandatory: No"),(0,n.yg)("li",{parentName:"ul"},"Default: ",(0,n.yg)("inlineCode",{parentName:"li"},"datax_doris_writer_")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"loadProps")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Description: The request parameter of StreamLoad. For details, refer to the StreamLoad introduction page. ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-operate/import/stream-load-manual"},"Stream load - Apache Doris")),(0,n.yg)("p",{parentName:"li"},"This includes the imported data format: format, etc. The imported data format defaults to csv, which supports JSON. For details, please refer to the type conversion section below, or refer to the official information of Stream load above.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Mandatory: No")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Default: None"))))),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("h4",{id:"1-stream-reads-the-data-and-imports-it-to-doris"},"1. Stream reads the data and imports it to Doris"),(0,n.yg)("p",null,"For instructions on using the doriswriter plug-in, please refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md"},"here"),"."),(0,n.yg)("h4",{id:"2mysql-reads-the-data-and-imports-it-to-doris"},"2.Mysql reads the data and imports it to Doris"),(0,n.yg)("p",null,"1.Mysql table structure"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `t_test`(\n `id`bigint(30) NOT NULL,\n `order_code` varchar(30) DEFAULT NULL COMMENT '',\n `line_code` varchar(30) DEFAULT NULL COMMENT '',\n `remark` varchar(30) DEFAULT NULL COMMENT '',\n `unit_no` varchar(30) DEFAULT NULL COMMENT '',\n `unit_name` varchar(30) DEFAULT NULL COMMENT '',\n `price` decimal(12,2) DEFAULT NULL COMMENT '',\n PRIMARY KEY(`id`) USING BTREE\n)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='';\n")),(0,n.yg)("p",null,"2.Doris table structure"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `ods_t_test` (\n `id`bigint(30) NOT NULL,\n `order_code` varchar(30) DEFAULT NULL COMMENT '',\n `line_code` varchar(30) DEFAULT NULL COMMENT '',\n `remark` varchar(30) DEFAULT NULL COMMENT '',\n `unit_no` varchar(30) DEFAULT NULL COMMENT '',\n `unit_name` varchar(30) DEFAULT NULL COMMENT '',\n `price` decimal(12,2) DEFAULT NULL COMMENT ''\n\uff09ENGINE=OLAP\nUNIQUE KEY(id`, `order_code`)\nDISTRIBUTED BY HASH(`order_code`) BUCKETS 1\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 3\",\n\"in_memory\" = \"false\",\n\"storage_format\" = \"V2\"\n);\n")),(0,n.yg)("p",null,"3.Create datax script"),(0,n.yg)("p",null,"my_import.json"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "job": {\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "connection": [\n                            {\n                                "jdbcUrl": ["jdbc:mysql://localhost:3306/demo"],\n                                "table": ["employees_1"]\n                            }\n                        ],\n                        "username": "root",\n                        "password": "xxxxx",\n                        "where": ""\n                    }\n                },\n                "writer": {\n                    "name": "doriswriter",\n                    "parameter": {\n                        "loadUrl": ["127.0.0.1:8030"],\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "username": "root",\n                        "password": "xxxxxx",\n                        "postSql": ["select count(1) from all_employees_info"],\n                        "preSql": [],\n                        "flushInterval":30000,\n                        "connection": [\n                          {\n                            "jdbcUrl": "jdbc:mysql://127.0.0.1:9030/demo",\n                            "selectedDatabase": "demo",\n                            "table": ["all_employees_info"]\n                          }\n                        ],\n                        "loadProps": {\n                            "format": "json",\n                            "strip_outer_array":"true",\n                            "line_delimiter": "\\\\x02"\n                        }\n                    }\n                }\n            }\n        ],\n        "setting": {\n            "speed": {\n                "channel": "1"\n            }\n        }\n    }\n}\n')),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Remark:"),(0,n.yg)("pre",{parentName:"blockquote"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'"loadProps": {\n  "format": "json",\n  "strip_outer_array": "true",\n  "line_delimiter": "\\\\x02"\n}\n')),(0,n.yg)("ol",{parentName:"blockquote"},(0,n.yg)("li",{parentName:"ol"},"Here we use JSON format to import data"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"line_delimiter")," defaults to a newline character, which may conflict with the value in the data, we can use some special characters or invisible characters to avoid import errors"),(0,n.yg)("li",{parentName:"ol"},"strip_outer_array : Represents multiple rows of data in a batch of imported data. Doris will expand the array when parsing, and then parse each Object in it as a row of data in turn."),(0,n.yg)("li",{parentName:"ol"},"For more parameters of Stream load, please refer to ","[Stream load document]","(",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/data-operate/import/stream-load-manual"},"Stream load - Apache Doris"),")"),(0,n.yg)("li",{parentName:"ol"},"If it is in CSV format, we can use it like this")),(0,n.yg)("pre",{parentName:"blockquote"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'"loadProps": {\n   "format": "csv",\n   "column_separator": "\\\\x01",\n   "line_delimiter": "\\\\x02"\n}\n')),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"CSV format should pay special attention to row and column separators to avoid conflicts with special characters in the data. Hidden characters are recommended here. The default column separator is: \\t, row separator: \\n"))),(0,n.yg)("p",null,"4.Execute the datax task, refer to the specific ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/alibaba/DataX/blob/master/userGuid.md"},"datax official website")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"python bin/datax.py my_import.json\n")),(0,n.yg)("p",null,"After execution, we can see the following information"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'2022-11-16 14:28:54.012 [job-0] INFO  JobContainer - jobContainer starts to do prepare ...\n2022-11-16 14:28:54.012 [job-0] INFO  JobContainer - DataX Reader.Job [mysqlreader] do prepare work .\n2022-11-16 14:28:54.013 [job-0] INFO  JobContainer - DataX Writer.Job [doriswriter] do prepare work .\n2022-11-16 14:28:54.020 [job-0] INFO  JobContainer - jobContainer starts to do split ...\n2022-11-16 14:28:54.020 [job-0] INFO  JobContainer - Job set Channel-Number to 1 channels.\n2022-11-16 14:28:54.023 [job-0] INFO  JobContainer - DataX Reader.Job [mysqlreader] splits to [1] tasks.\n2022-11-16 14:28:54.023 [job-0] INFO  JobContainer - DataX Writer.Job [doriswriter] splits to [1] tasks.\n2022-11-16 14:28:54.033 [job-0] INFO  JobContainer - jobContainer starts to do schedule ...\n2022-11-16 14:28:54.036 [job-0] INFO  JobContainer - Scheduler starts [1] taskGroups.\n2022-11-16 14:28:54.037 [job-0] INFO  JobContainer - Running by standalone Mode.\n2022-11-16 14:28:54.041 [taskGroup-0] INFO  TaskGroupContainer - taskGroupId=[0] start [1] channels for [1] tasks.\n2022-11-16 14:28:54.043 [taskGroup-0] INFO  Channel - Channel set byte_speed_limit to -1, No bps activated.\n2022-11-16 14:28:54.043 [taskGroup-0] INFO  Channel - Channel set record_speed_limit to -1, No tps activated.\n2022-11-16 14:28:54.049 [taskGroup-0] INFO  TaskGroupContainer - taskGroup[0] taskId[0] attemptCount[1] is started\n2022-11-16 14:28:54.052 [0-0-0-reader] INFO  CommonRdbmsReader$Task - Begin to read record by Sql: [select taskid,projectid,taskflowid,templateid,template_name,status_task from dwd_universal_tb_task \n] jdbcUrl:[jdbc:mysql://localhost:3306/demo?yearIsDateType=false&zeroDateTimeBehavior=convertToNull&tinyInt1isBit=false&rewriteBatchedStatements=true].\nWed Nov 16 14:28:54 GMT+08:00 2022 WARN: Establishing SSL connection without server\'s identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn\'t set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to \'false\'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.\n2022-11-16 14:28:54.071 [0-0-0-reader] INFO  CommonRdbmsReader$Task - Finished read record by Sql: [select taskid,projectid,taskflowid,templateid,template_name,status_task from dwd_universal_tb_task \n] jdbcUrl:[jdbc:mysql://localhost:3306/demo?yearIsDateType=false&zeroDateTimeBehavior=convertToNull&tinyInt1isBit=false&rewriteBatchedStatements=true].\n2022-11-16 14:28:54.104 [Thread-1] INFO  DorisStreamLoadObserver - Start to join batch data: rows[2] bytes[438] label[datax_doris_writer_c4e08cb9-c157-4689-932f-db34acc45b6f].\n2022-11-16 14:28:54.104 [Thread-1] INFO  DorisStreamLoadObserver - Executing stream load to: \'http://127.0.0.1:8030/api/demo/dwd_universal_tb_task/_stream_load\', size: \'441\'\n2022-11-16 14:28:54.224 [Thread-1] INFO  DorisStreamLoadObserver - StreamLoad response :{"Status":"Success","BeginTxnTimeMs":0,"Message":"OK","NumberUnselectedRows":0,"CommitAndPublishTimeMs":17,"Label":"datax_doris_writer_c4e08cb9-c157-4689-932f-db34acc45b6f","LoadBytes":441,"StreamLoadPutTimeMs":1,"NumberTotalRows":2,"WriteDataTimeMs":11,"TxnId":217056,"LoadTimeMs":31,"TwoPhaseCommit":"false","ReadDataTimeMs":0,"NumberLoadedRows":2,"NumberFilteredRows":0}\n2022-11-16 14:28:54.225 [Thread-1] INFO  DorisWriterManager - Async stream load finished: label[datax_doris_writer_c4e08cb9-c157-4689-932f-db34acc45b6f].\n2022-11-16 14:28:54.249 [taskGroup-0] INFO  TaskGroupContainer - taskGroup[0] taskId[0] is successed, used[201]ms\n2022-11-16 14:28:54.250 [taskGroup-0] INFO  TaskGroupContainer - taskGroup[0] completed it\'s tasks.\n2022-11-16 14:29:04.048 [job-0] INFO  StandAloneJobContainerCommunicator - Total 2 records, 214 bytes | Speed 21B/s, 0 records/s | Error 0 records, 0 bytes |  All Task WaitWriterTime 0.000s |  All Task WaitReaderTime 0.000s | Percentage 100.00%\n2022-11-16 14:29:04.049 [job-0] INFO  AbstractScheduler - Scheduler accomplished all tasks.\n2022-11-16 14:29:04.049 [job-0] INFO  JobContainer - DataX Writer.Job [doriswriter] do post work.\nWed Nov 16 14:29:04 GMT+08:00 2022 WARN: Establishing SSL connection without server\'s identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn\'t set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to \'false\'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.\n2022-11-16 14:29:04.187 [job-0] INFO  DorisWriter$Job - Start to execute preSqls:[select count(1) from dwd_universal_tb_task]. context info:jdbc:mysql://172.16.0.13:9030/demo.\n2022-11-16 14:29:04.204 [job-0] INFO  JobContainer - DataX Reader.Job [mysqlreader] do post work.\n2022-11-16 14:29:04.204 [job-0] INFO  JobContainer - DataX jobId [0] completed successfully.\n2022-11-16 14:29:04.204 [job-0] INFO  HookInvoker - No hook invoked, because base dir not exists or is a file: /data/datax/hook\n2022-11-16 14:29:04.205 [job-0] INFO  JobContainer - \n         [total cpu info] => \n                averageCpu                     | maxDeltaCpu                    | minDeltaCpu                    \n                -1.00%                         | -1.00%                         | -1.00%\n                        \n\n         [total gc info] => \n                 NAME                 | totalGCCount       | maxDeltaGCCount    | minDeltaGCCount    | totalGCTime        | maxDeltaGCTime     | minDeltaGCTime     \n                 PS MarkSweep         | 1                  | 1                  | 1                  | 0.017s             | 0.017s             | 0.017s             \n                 PS Scavenge          | 1                  | 1                  | 1                  | 0.007s             | 0.007s             | 0.007s             \n\n2022-11-16 14:29:04.205 [job-0] INFO  JobContainer - PerfTrace not enable!\n2022-11-16 14:29:04.206 [job-0] INFO  StandAloneJobContainerCommunicator - Total 2 records, 214 bytes | Speed 21B/s, 0 records/s | Error 0 records, 0 bytes |  All Task WaitWriterTime 0.000s |  All Task WaitReaderTime 0.000s | Percentage 100.00%\n2022-11-16 14:29:04.206 [job-0] INFO  JobContainer - \nTask Start Time                        : 2022-11-16 14:28:53\nTask End Time                          : 2022-11-16 14:29:04\nTotal Task Duration                    : 10s\nAverage Task Throughput                : 21B/s\nRecord Write Speed                     : 0rec/s\nTotal Records Read                     : 2\nTotal Read/Write Failures              : 0\n\n')))}c.isMDXComponent=!0}}]);