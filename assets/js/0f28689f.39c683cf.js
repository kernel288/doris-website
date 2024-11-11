"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[633604],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>c});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,c=d["".concat(p,".").concat(m)]||d[m]||g[m]||r;return a?t.createElement(c,i(i({ref:n},u),{},{components:a})):t.createElement(c,i({ref:n},u))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},243927:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=a(58168),l=(a(296540),a(15680));const r={title:"Updating Data on Unique Key Model",language:"en"},i=void 0,o={unversionedId:"data-operate/update/update-of-unique-model",id:"data-operate/update/update-of-unique-model",title:"Updating Data on Unique Key Model",description:"\x3c!--",source:"@site/docs/data-operate/update/update-of-unique-model.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/update-of-unique-model",permalink:"/docs/dev/data-operate/update/update-of-unique-model",draft:!1,tags:[],version:"current",frontMatter:{title:"Updating Data on Unique Key Model",language:"en"},sidebar:"docs",previous:{title:"Updating Data with UPDATE Command",permalink:"/docs/dev/data-operate/update/unique-update"},next:{title:"Updating Data on Aggregate Key Model",permalink:"/docs/dev/data-operate/update/update-of-aggregate-model"}},p={},s=[{value:"Updates on All Columns",id:"updates-on-all-columns",level:2},{value:"Partial Update",id:"partial-update",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:3},{value:"Notes",id:"notes",level:3},{value:"Flexible Partial Column Updates",id:"flexible-partial-column-updates",level:2},{value:"Applicable Scenarios",id:"applicable-scenarios",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:3}],u={toc:s},d="wrapper";function g(e){let{components:n,...a}=e;return(0,l.yg)(d,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"This document primarily introduces the updates based on the load data on the Doris Unique Key model."),(0,l.yg)("h2",{id:"updates-on-all-columns"},"Updates on All Columns"),(0,l.yg)("p",null,'When load data into the primary key model (Unique model) in Doris using supported load methods such as Stream Load, Broker Load, Routine Load, Insert Into, etc., if there are no corresponding data rows with the primary key, new data will be inserted. If there are corresponding data rows with the primary key, the data will be updated. In other words, load data into the Doris primary key model follows an "upsert" mode. Based on the import, updating existing records is by default the same as load a new record. Therefore, you can refer to the data load documentation section for more details.'),(0,l.yg)("h2",{id:"partial-update"},"Partial Update"),(0,l.yg)("p",null,"Updating partial columns mainly refers to directly updating certain field values in a table instead of updating all field values. This can be done using the Update statement, which typically involves reading the entire row data, updating specific field values, and then writing it back. This read-write transaction is time-consuming and not suitable for writing large amounts of data. In the context of load updates on the primary key model, Doris provides a functionality to directly insert or update partial column data without reading the entire row data, significantly improving the update efficiency."),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Note:"),(0,l.yg)("ol",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ol"},"Partial updates are only supported in the Merge-on-Write implementation of the Unique Key starting from version 2.0."),(0,l.yg)("li",{parentName:"ol"},"Starting from version 2.0.2, partial updates are supported using INSERT INTO."),(0,l.yg)("li",{parentName:"ol"},"Partial updates are not supported on tables with materialized views."))),(0,l.yg)("h3",{id:"use-cases"},"Use Cases"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Real-time dynamic column updates that require high-frequency updates on certain fields in the table. For example, in a user tag table, there are fields containing the latest user behavior information that needs real-time updates to enable real-time analysis and decision-making in advertising/recommendation systems.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Combining multiple source tables into a large denormalized table.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Data correction."))),(0,l.yg)("h3",{id:"usage"},"Usage"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Table Creation")),(0,l.yg)("p",null,"When creating the table, the following property needs to be specified to enable the Merge-on-Write implementation:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"enable_unique_key_merge_on_write = true\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"StreamLoad/BrokerLoad/RoutineLoad")),(0,l.yg)("p",null,"If you are using Stream Load/Broker Load/Routine Load, add the following header during the load:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"partial_columns: true\n")),(0,l.yg)("p",null,"Also, specify the columns to be loaded in the ",(0,l.yg)("inlineCode",{parentName:"p"},"columns")," section (all key columns must be included, otherwise updates won't be possible)."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Flink Connector")),(0,l.yg)("p",null,"If you are using the Flink Connector, add the following configuration:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"'sink.properties.partial_columns' = 'true',\n")),(0,l.yg)("p",null,"Also, specify the columns to be loaded in ",(0,l.yg)("inlineCode",{parentName:"p"},"sink.properties.column")," (all key columns must be included, otherwise updates won't be possible)."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"INSERT INTO")),(0,l.yg)("p",null,"In all data models, when using ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," with a subset of columns, the default behavior is to insert the entire row. To enable partial column updates in the Merge-on-Write implementation, the following session variable needs to be set:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_unique_key_partial_update=true\n")),(0,l.yg)("p",null,"Note that the default value for the session variable ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),", which controls whether the insert statement operates in strict mode, is true. In strict mode, updating non-existing keys during partial column updates is not allowed. So, if you want to insert non-existing keys during partial column updates using the insert statement, you need to set ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update")," to true and also set ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," to false."),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"Suppose there is an order table named ",(0,l.yg)("inlineCode",{parentName:"p"},"order_tbl")," in Doris, where the order ID is a key column, and the order status and order amount are value columns. The data is as follows:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Order ID"),(0,l.yg)("th",{parentName:"tr",align:null},"Order Amount"),(0,l.yg)("th",{parentName:"tr",align:null},"Order Status"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Pending")))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        | 100          | Pending      |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,l.yg)("p",null,"Now, when a user clicks on payment, the Doris system needs to update the order status of the order with ID '1' to 'To be shipped'."),(0,l.yg)("p",null,"If you are using Stream Load, you can update as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'$ cat update.csv\n\n1,To be shipped\n\n$ curl --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:8030/api/db1/order_tbl/_stream_load\n')),(0,l.yg)("p",null,"If you are using ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),", you can update as following methods:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) values (1,'To be shipped');\n")),(0,l.yg)("p",null,"The translated version in English:"),(0,l.yg)("p",null,"After the update, the result is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | To be shipped |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,l.yg)("h3",{id:"notes"},"Notes"),(0,l.yg)("p",null,"Due to the Merge-on-Write implementation requiring data completion during data writing to ensure optimal query performance, performing partial column updates using the Merge-on-Write implementation may result in a decrease in load performance."),(0,l.yg)("p",null,"Suggestions for improving load performance:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Use SSDs equipped with NVMe or high-speed SSD cloud disks. Reading historical data in large quantities during data completion will generate high read IOPS and read throughput.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Enabling row storage can significantly reduce the IOPS generated during data completion, resulting in noticeable improvements in load performance. Users can enable row storage by using the following property when creating the table:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'"store_row_column" = "true"\n')),(0,l.yg)("p",null,"Now, all rows in a batch write task (whether it is an load task or ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),") can only update the same columns. If you need to update different columns, you will need to perform separate batch writes."),(0,l.yg)("h2",{id:"flexible-partial-column-updates"},"Flexible Partial Column Updates"),(0,l.yg)("p",null,"Before version x.x.x, Doris's partial update feature required that every row in an import update the same columns. Starting from version x.x.x, Doris supports a more flexible partial update method that allows each row in a single import to update different columns."),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Note"),(0,l.yg)("ol",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ol"},"The flexible partial update feature is supported since version x.x.x."),(0,l.yg)("li",{parentName:"ol"},"Currently, only the Stream Load import method and tools using Stream Load (e.g. Doris-Flink-Connector) support this feature."),(0,l.yg)("li",{parentName:"ol"},"The import file must be in JSON format when using flexible column updates."))),(0,l.yg)("h3",{id:"applicable-scenarios"},"Applicable Scenarios"),(0,l.yg)("p",null,"When using CDC to synchronize data from a database system to Doris in real-time, the records output by the source system may not contain complete row data, but only the values of the primary keys and the updated columns. In such cases, the columns updated in a batch of data within a time window may differ. Flexible column updates can be used to import data into Doris."),(0,l.yg)("h3",{id:"usage-1"},"Usage"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Enabling Flexible Column Updates for Existing Tables")),(0,l.yg)("p",null,"For existing Merge-On-Write tables created in old versions of Doris, after upgrading, you can enable flexible partial updates using the command: ",(0,l.yg)("inlineCode",{parentName:"p"},'ALTER TABLE db1.tbl1 ENABLE FEATURE "UPDATE_FLEXIBLE_COLUMNS";'),". After executing this command, if the result of ",(0,l.yg)("inlineCode",{parentName:"p"},"show create table db1.tbl1")," includes ",(0,l.yg)("inlineCode",{parentName:"p"},'"enable_unique_key_skip_bitmap_column" = "true"'),", the feature has been successfully enabled. Ensure that the target table has the light-schema-change feature enabled beforehand."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Using Flexible Column Updates for New Tables")),(0,l.yg)("p",null,"For new tables, to use the flexible column update feature, specify the following table properties when creating the table to enable Merge-on-Write, light-schema-change, and include the required hidden bitmap column for flexible column updates:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'"enable_light_schema_change" = "true"\n"enable_unique_key_merge_on_write" = "true"\n"enable_unique_key_skip_bitmap_column" = "true"\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"StreamLoad")),(0,l.yg)("p",null,"When using Stream Load, add the following header:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"unique_key_update_mode:UPDATE_FLEXIBLE_COLUMNS\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Flink Doris Connector")),(0,l.yg)("p",null,"If using the Flink Doris Connector, add the following configuration:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"'sink.properties.unique_key_update_mode' = 'UPDATE_FLEXIBLE_COLUMNS'\n")),(0,l.yg)("h3",{id:"example-1"},"Example"),(0,l.yg)("p",null,"Assuming the following table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t1 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true");\n')),(0,l.yg)("p",null,"The original data in the table is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL root@127.1:d1> select * from t1;\n+---+----+----+----+----+----+\n| k | v1 | v2 | v3 | v4 | v5 |\n+---+----+----+----+----+----+\n| 0 | 0  | 0  | 0  | 0  | 0  |\n| 1 | 1  | 1  | 1  | 1  | 1  |\n| 2 | 2  | 2  | 2  | 2  | 2  |\n| 3 | 3  | 3  | 3  | 3  | 3  |\n| 4 | 4  | 4  | 4  | 4  | 4  |\n| 5 | 5  | 5  | 5  | 5  | 5  |\n+---+----+----+----+----+----+\n")),(0,l.yg)("p",null,"Now, updating some fields using flexible column updates:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ cat test1.json\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"k": 0, "__DORIS_DELETE_SIGN__": 1}\n{"k": 1, "v1": 10}\n{"k": 2, "v2": 20, "v5": 25}\n{"k": 3, "v3": 30}\n{"k": 4, "v4": 20, "v1": 43, "v3": 99}\n{"k": 5, "v5": null}\n{"k": 6, "v1": 999, "v3": 777}\n{"k": 2, "v4": 222}\n{"k": 1, "v2": 111, "v3": 111}\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location-trusted -u root: \\\n-H "strict_mode:false" \\\n-H "format:json" \\\n-H "read_json_by_line:true" \\\n-H "unique_key_update_mode:UPDATE_FLEXIBLE_COLUMNS" \\\n-T test1.json \\\n-XPUT http://<host>:<http_port>/api/d1/t1/_stream_load\n')),(0,l.yg)("p",null,"After the update, the data in the table is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL root@127.1:d1> select * from t1;\n+---+-----+------+-----+------+--------+\n| k | v1  | v2   | v3  | v4   | v5     |\n+---+-----+------+-----+------+--------+\n| 1 | 10  | 111  | 111 | 1    | 1      |\n| 2 | 2   | 20   | 2   | 222  | 25     |\n| 3 | 3   | 3    | 30  | 3    | 3      |\n| 4 | 43  | 4    | 99  | 20   | 4      |\n| 5 | 5   | 5    | 5   | 5    | <null> |\n| 6 | 999 | 9876 | 777 | 1234 | <null> |\n+---+-----+------+-----+------+--------+\n")),(0,l.yg)("h3",{id:"limitations-and-considerations"},"Limitations and Considerations"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Similar to previous partial updates, flexible column updates require that each row of imported data include all key columns. Rows not meeting this requirement will be filtered out and counted in filter rows. If the number of filtered rows exceeds the ",(0,l.yg)("inlineCode",{parentName:"p"},"max_filter_ratio")," threshold for this import, the entire import will fail, and filtered data will generate an error log.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"In flexible partial update loads, key-value pairs in each JSON object are only valid if the key matches a column name in the target table. Key-value pairs that do not meet this requirement will be ignored. Pairs with keys ",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_VERSION_COL__"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_ROW_STORE_COL__"),", or ",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SKIP_BITMAP_COL__")," will also be ignored.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"If the table properties of the target table include ",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_type"),", the import can specify the value for the ",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")," column by including a key-value pair in the JSON object with key ",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),". For rows that do not specify a value for the ",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),", if the key exists in the original table, the value will be filled from the old row; otherwise, it will be set to null."))),(0,l.yg)("p",null,"For example, for the following table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t2 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true",\n"function_column.sequence_type" = "int");\n')),(0,l.yg)("p",null,"The original data in the table is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"+---+----+----+----+----+----+----------------------+\n| k | v1 | v2 | v3 | v4 | v5 |__DORIS_SEQUENCE_COL__|\n+---+----+----+----+----+----+----------------------+\n| 0 | 0  | 0  | 0  | 0  | 0  | 0                    |\n| 1 | 1  | 1  | 1  | 1  | 10 | 10                   |\n| 2 | 2  | 2  | 2  | 2  | 20 | 20                   |\n| 3 | 3  | 3  | 3  | 3  | 30 | 30                   |\n| 4 | 4  | 4  | 4  | 4  | 40 | 40                   |\n| 5 | 5  | 5  | 5  | 5  | 50 | 50                   |\n+---+----+----+----+----+----+----------------------+\n")),(0,l.yg)("p",null,"Importing data using flexible partial column updates:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"k": 1, "v1": 111, "v5": 9, "__DORIS_SEQUENCE_COL__": 9}\n{"k": 2, "v2": 222, "v5": 25, "__DORIS_SEQUENCE_COL__": 25}\n{"k": 3, "v3": 333}\n{"k": 4, "v4": 444, "v5": 50, "v1": 411, "v3": 433, "v2": null, "__DORIS_SEQUENCE_COL__": 50}\n{"k": 5, "v5": null, "__DORIS_SEQUENCE_COL__": null}\n{"k": 6, "v1": 611, "v3": 633}\n{"k": 7, "v3": 733, "v5": 300, "__DORIS_SEQUENCE_COL__": 300}\n')),(0,l.yg)("p",null,"The final data in the table is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"+---+--------+--------+-----+------+--------+\n| k | v1     | v2     | v3  | v4   | v5     |\n+---+--------+--------+-----+------+--------+\n| 0 | 0      | 0      | 0   | 0    | 0      |\n| 1 | 1      | 1      | 1   | 1    | 1      |\n| 5 | 5      | 5      | 5   | 5    | 5      |\n| 2 | 2      | 222    | 2   | 2    | 25     |\n| 3 | 3      | 3      | 333 | 3    | 3      |\n| 4 | 411    | <null> | 433 | 444  | 50     |\n| 6 | 611    | 9876   | 633 | 1234 | <null> |\n| 7 | <null> | 9876   | 733 | 1234 | 300    |\n+---+--------+--------+-----+------+--------+\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"When the table property ",(0,l.yg)("inlineCode",{parentName:"li"},"function_column.sequence_col")," is set in the target table, the key-value pair in the JSON object for flexible column updates with the key ",(0,l.yg)("inlineCode",{parentName:"li"},"__DORIS_SEQUENCE_COL__")," will be ignored. The value of the ",(0,l.yg)("inlineCode",{parentName:"li"},"__DORIS_SEQUENCE_COL__")," column in a specific row during import will be the same of the final value of the column specified by the table property ",(0,l.yg)("inlineCode",{parentName:"li"},"function_column.sequence_col")," for that row.")),(0,l.yg)("p",null,"For example, for the following table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t3 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL DEFAULT "31"\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true",\n"function_column.sequence_col" = "v5");\n')),(0,l.yg)("p",null,"The original data in the table is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"+---+----+----+----+----+----+----------------------+\n| k | v1 | v2 | v3 | v4 | v5 |__DORIS_SEQUENCE_COL__|\n+---+----+----+----+----+----+----------------------+\n| 0 | 0  | 0  | 0  | 0  | 0  | 0                    |\n| 1 | 1  | 1  | 1  | 1  | 10 | 10                   |\n| 2 | 2  | 2  | 2  | 2  | 20 | 20                   |\n| 3 | 3  | 3  | 3  | 3  | 30 | 30                   |\n| 4 | 4  | 4  | 4  | 4  | 40 | 40                   |\n| 5 | 5  | 5  | 5  | 5  | 50 | 50                   |\n+---+----+----+----+----+----+----------------------+\n")),(0,l.yg)("p",null,"Using flexible partial updates, the following data is imported:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"k": 1, "v1": 111, "v5": 9}\n{"k": 2, "v2": 222, "v5": 25}\n{"k": 3, "v3": 333}\n{"k": 4, "v4": 444, "v5": 50, "v1": 411, "v3": 433, "v2": null}\n{"k": 5, "v5": null}\n{"k": 6, "v1": 611, "v3": 633}\n{"k": 7, "v3": 733, "v5": 300}\n')),(0,l.yg)("p",null,"The final data in the table is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"+---+--------+--------+-----+------+-----+\n| k | v1     | v2     | v3  | v4   | v5  |\n+---+--------+--------+-----+------+-----+\n| 0 | 0      | 0      | 0   | 0    | 0   |\n| 1 | 1      | 1      | 1   | 1    | 10  |\n| 5 | 5      | 5      | 5   | 5    | 50  |\n| 2 | 2      | 222    | 2   | 2    | 25  |\n| 3 | 3      | 3      | 333 | 3    | 30  |\n| 4 | 411    | <null> | 433 | 444  | 50  |\n| 6 | 611    | 9876   | 633 | 1234 | 31  |\n| 7 | <null> | 9876   | 733 | 1234 | 300 |\n+---+--------+--------+-----+------+-----+\n")),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"When using flexible partial updates, the following import parameters cannot be specified or enabled:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"merge_type")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"delete")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"fuzzy_parse")," parameter cannot be enabled."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"columns")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"jsonpaths")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"hidden_columns")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"function_column.sequence_col")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"sql")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"memtable_on_sink_node")," option cannot be enabled."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"group_commit")," parameter cannot be specified."),(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"where")," parameter cannot be specified."))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Flexible partial updates are not supported on tables with Variant columns.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Flexible partial updates are not supported on tables with synchronous materialized views."))))}g.isMDXComponent=!0}}]);