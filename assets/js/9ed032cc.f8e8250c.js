"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[415856],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=g(a),u=r,m=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const i={title:"Iceberg",language:"en"},l=void 0,o={unversionedId:"lakehouse/datalake-building/iceberg-build",id:"version-3.0/lakehouse/datalake-building/iceberg-build",title:"Iceberg",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/lakehouse/datalake-building/iceberg-build.md",sourceDirName:"lakehouse/datalake-building",slug:"/lakehouse/datalake-building/iceberg-build",permalink:"/docs/3.0/lakehouse/datalake-building/iceberg-build",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Iceberg",language:"en"},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/3.0/lakehouse/datalake-building/hive-build"},next:{title:"JDBC Catalog",permalink:"/docs/3.0/lakehouse/database/jdbc"}},p={},g=[{value:"Metadata Creation and Deletion",id:"metadata-creation-and-deletion",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Database",id:"database",level:3},{value:"Table",id:"table",level:3},{value:"Data Operations",id:"data-operations",level:2},{value:"INSERT",id:"insert",level:3},{value:"INSERT OVERWRITE",id:"insert-overwrite",level:3},{value:"CTAS(CREATE TABLE AS SELECT)",id:"ctascreate-table-as-select",level:3},{value:"Abnormal Data and Data Transformation",id:"abnormal-data-and-data-transformation",level:2},{value:"HDFS File Operations",id:"hdfs-file-operations",level:3},{value:"Object Storage File Operations",id:"object-storage-file-operations",level:3},{value:"Related Parameters",id:"related-parameters",level:2},{value:"FE",id:"fe",level:3},{value:"BE",id:"be",level:3}],s={toc:g},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Since version 2.1.6, Apache Doris supports DDL and DML operations on Iceberg. Users can directly create library tables in Iceberg through Apache Doris and write data to Iceberg tables. With this feature, users can perform full data querying and writing operations on Iceberg through Apache Doris, further simplifying the lakehouse architecture for users."),(0,r.yg)("p",null,"This article introduces the Iceberg operations, syntax, and usage notes supported in Apache Doris."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This is an experimental feature.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Before using, please set:"),(0,r.yg)("br",null),"set global enable_nereids_planner = true;",(0,r.yg)("br",null),"set global enable_fallback_to_original_planner = false;"),(0,r.yg)("h2",{id:"metadata-creation-and-deletion"},"Metadata Creation and Deletion"),(0,r.yg)("h3",{id:"catalog"},"Catalog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Creation"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'CREATE CATALOG [IF NOT EXISTS] iceberg PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "hms",\n    "hive.metastore.uris" = "thrift://172.21.16.47:7004",\n    "warehouse" = "hdfs://172.21.16.47:4007/user/hive/warehouse/",\n    "hadoop.username" = "hadoop",\n    "fs.defaultFS" = "hdfs://172.21.16.47:4007"\n);\n')),(0,r.yg)("p",{parentName:"li"},"  The above mainly demonstrates how to create an HMS Iceberg Catalog in Apache Doris. Apache Doris currently supports multiple types of Iceberg Catalogs. For more configurations, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/lakehouse/datalake-analytics/iceberg"},"Iceberg Catalog"),"."),(0,r.yg)("p",{parentName:"li"},"  Note that if you need to create Iceberg tables or write data through Hive Catalog in Apache Doris, you need to explicitly add the ",(0,r.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," property and ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse")," property in the Catalog attributes. If the Catalog is created only for querying, these two parameters can be omitted.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Deletion"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"DROP CATALOG [IF EXISTS] iceberg;\n")),(0,r.yg)("p",{parentName:"li"},"  Deleting the Catalog does not remove any library table information in Iceberg. It simply removes the mapping of this Iceberg Catalog in Apache Doris."))),(0,r.yg)("h3",{id:"database"},"Database"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Creation"),(0,r.yg)("p",{parentName:"li"},"  You can switch to the corresponding Catalog and execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE DATABASE")," statement:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"SWITCH iceberg;\nCREATE DATABASE [IF NOT EXISTS] iceberg_db;\n")),(0,r.yg)("p",{parentName:"li"},"  You can also create using fully qualified names or specify a location, such as:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"CREATE DATABASE [IF NOT EXISTS] iceberg.iceberg_db;\n")),(0,r.yg)("p",{parentName:"li"},"  Afterwards, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE DATABASE")," command to view the relevant information of the Database:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"mysql> SHOW CREATE DATABASE iceberg_db;\n+------------+------------------------------+\n| Database   | Create Database              |\n+------------+------------------------------+\n| iceberg_db | CREATE DATABASE `iceberg_db` |\n+------------+------------------------------+\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Delete"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"DROP DATABASE [IF EXISTS] iceberg.iceberg_db;\n")),(0,r.yg)("p",{parentName:"li"},"  :::caution Note\nFor Iceberg Database, you must first delete all tables under this Database before deleting the Database, otherwise an error will occur. This operation will also synchronously delete the corresponding Database in Iceberg.\n:::"))),(0,r.yg)("h3",{id:"table"},"Table"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create"),(0,r.yg)("p",{parentName:"li"},"  Apache Doris supports creating partitioned or non-partitioned tables in Iceberg."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"-- Create unpartitioned iceberg table\nCREATE TABLE unpartitioned_table (\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3',\n  `col4` FLOAT COMMENT 'col4',\n  `col5` DOUBLE COMMENT 'col5',\n  `col6` DECIMAL(9,4) COMMENT 'col6',\n  `col7` STRING COMMENT 'col7',\n  `col8` DATE COMMENT 'col8',\n  `col9` DATETIME COMMENT 'col9'\n)  ENGINE=iceberg\nPROPERTIES (\n  'write-format'='parquet'\n);\n\n-- Create partitioned iceberg table\n-- The partition columns must be in table's column definition list\nCREATE TABLE partition_table (\n  `ts` DATETIME COMMENT 'ts',\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3',\n  `col4` FLOAT COMMENT 'col4',\n  `col5` DOUBLE COMMENT 'col5',\n  `col6` DECIMAL(9,4) COMMENT 'col6',\n  `col7` STRING COMMENT 'col7',\n  `col8` DATE COMMENT 'col8',\n  `col9` DATETIME COMMENT 'col9',\n  `pt1` STRING COMMENT 'pt1',\n  `pt2` STRING COMMENT 'pt2'\n)  ENGINE=iceberg\nPARTITION BY LIST (DAY(ts), pt1, pt2) ()\nPROPERTIES (\n  'write-format'='orc',\n  'compression-codec'='zlib'\n);\n")),(0,r.yg)("p",{parentName:"li"},"  After creation, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," command to view the table creation statement in Iceberg. For partitioned tables and partition functions, refer to the following section on ",(0,r.yg)("strong",{parentName:"p"},"Partition"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Column Types"),(0,r.yg)("p",{parentName:"li"},"  The column types used to create Iceberg tables in Apache Doris correspond to the column types in Iceberg as follows:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Apache Doris"),(0,r.yg)("th",{parentName:"tr",align:null},"Iceberg"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")))),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Note: Only these data types are currently supported; other data types will result in an error."),(0,r.yg)("li",{parentName:"ul"},"Column types can only be the default Nullable for now; NOT NULL is not supported."),(0,r.yg)("li",{parentName:"ul"},"After inserting data, if the types are not compatible, such as inserting ",(0,r.yg)("inlineCode",{parentName:"li"},"'abc'")," into a numeric type, it will be converted to a null value before insertion."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Drop"),(0,r.yg)("p",{parentName:"li"},"  You can delete an Iceberg table using the ",(0,r.yg)("inlineCode",{parentName:"p"},"DROP TABLE")," statement. Currently, deleting a table will also delete the data, including partition data.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Partition"),(0,r.yg)("p",{parentName:"li"},"  The partition types in Iceberg correspond to List partitions in Apache Doris. Therefore, when creating an Iceberg partitioned table in Apache Doris, you need to use the List partition creation statement, but you do not need to explicitly enumerate each partition. When writing data, Apache Doris will automatically create the corresponding Iceberg partition based on the data values."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Supports creating single-column or multi-column partitioned tables."),(0,r.yg)("li",{parentName:"ul"},"Supports partition transformation functions to support Iceberg implicit partitioning and partition evolution features. Specific Iceberg partition transformation functions can be found at ",(0,r.yg)("a",{parentName:"li",href:"https://iceberg.apache.org/spec/#partition-transforms"},"Iceberg partition transforms"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"year(ts)")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"years(ts)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"month(ts)")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"months(ts)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"day(ts)")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"days(ts)")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"date(ts)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hour(ts)")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"hours(ts)")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"date_hour(ts)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"bucket(N, col)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"truncate(L, col)")))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"File Formats"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Parquet (default)"),(0,r.yg)("li",{parentName:"ul"},"ORC"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Compression Formats"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Parquet: snappy, zstd (default), plain. (plain means no compression)"),(0,r.yg)("li",{parentName:"ul"},"ORC: snappy, zlib (default), zstd, plain. (plain means no compression)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Storage Medium"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"HDFS"),(0,r.yg)("li",{parentName:"ul"},"Object storage")))),(0,r.yg)("h2",{id:"data-operations"},"Data Operations"),(0,r.yg)("p",null,"You can use the INSERT statement to write data into an Iceberg table."),(0,r.yg)("p",null,"Supports writing to Iceberg tables created by Apache Doris or to existing tables in Iceberg that support the format."),(0,r.yg)("p",null,"For partitioned tables, data will be automatically written to the corresponding partition or a new partition will be created based on the data."),(0,r.yg)("p",null,"Currently, specifying partition write is not supported."),(0,r.yg)("h3",{id:"insert"},"INSERT"),(0,r.yg)("p",null,"The INSERT operation writes data to the target table in an append manner."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'INSERT INTO iceberg_tbl values (val1, val2, val3, val4);\nINSERT INTO iceberg.iceberg_db.iceberg_tbl SELECT col1, col2 FROM internal.db1.tbl1;\n\nINSERT INTO iceberg_tbl(col1, col2) values (val1, val2);\nINSERT INTO iceberg_tbl(col1, col2, partition_col1, partition_col2) values (1, 2, "beijing", "2023-12-12");\n')),(0,r.yg)("h3",{id:"insert-overwrite"},"INSERT OVERWRITE"),(0,r.yg)("p",null,"INSERT OVERWRITE completely replaces the existing data in the original table with new data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT OVERWRITE TABLE VALUES(val1, val2, val3, val4)\nINSERT OVERWRITE TABLE iceberg.iceberg_db.iceberg_tbl(col1, col2) SELECT col1, col2 FROM internal.db1.tbl1;\n")),(0,r.yg)("h3",{id:"ctascreate-table-as-select"},"CTAS(CREATE TABLE AS SELECT)"),(0,r.yg)("p",null,"You can create an Iceberg table and write data using the ",(0,r.yg)("inlineCode",{parentName:"p"},"CTAS")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE TABLE iceberg_ctas ENGINE=iceberg AS SELECT * FROM other_table;\n")),(0,r.yg)("p",null,"CTAS supports specifying file formats, partitioning methods, and other information, such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE TABLE iceberg_ctas ENGINE=iceberg\nPARTITION BY LIST (pt1, pt2) ()\nAS SELECT col1,pt1,pt2 FROM part_ctas_src WHERE col1>0;\n    \nCREATE TABLE iceberg.iceberg_db.iceberg_ctas (col1,col2,pt1) ENGINE=iceberg\nPARTITION BY LIST (pt1) ()\nPROPERTIES (\n    'write-format'='parquet',\n    'compression-codec'='zstd'\n)\nAS SELECT col1,pt1 as col2,pt2 as pt1 FROM test_ctas.part_ctas_src WHERE col1>0;\n")),(0,r.yg)("h2",{id:"abnormal-data-and-data-transformation"},"Abnormal Data and Data Transformation"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"hdfs-file-operations"},"HDFS File Operations"),(0,r.yg)("p",null,"Data from Iceberg tables on HDFS is written to the final directory, and Iceberg metadata is managed by submitting it."),(0,r.yg)("p",null,"The data file naming format is: ",(0,r.yg)("inlineCode",{parentName:"p"},"<query-id>_<uuid>-<index>.<compress-type>.<file-type>")),(0,r.yg)("h3",{id:"object-storage-file-operations"},"Object Storage File Operations"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"related-parameters"},"Related Parameters"),(0,r.yg)("h3",{id:"fe"},"FE"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"be"},"BE"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"iceberg_sink_max_file_size")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum size of data files. When the amount of data written exceeds this size, the current file will be closed, and a new file will be created to continue writing."),(0,r.yg)("td",{parentName:"tr",align:null},"1GB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_max_partition_nums_per_writer")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of partitions written per Instance on a BE node."),(0,r.yg)("td",{parentName:"tr",align:null},"128")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_non_partition_write_scaling_data_processed_threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"Threshold for the amount of data processed to trigger scaling-write for non-partitioned tables. For every increase of ",(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_non_partition_write_scaling_data_processed_threshold")," data, it will be sent to a new writer (instance) for writing. The scaling-write mechanism is mainly used to write data using a different number of writer (instance) based on the data volume, increasing the number of writer (instance) with the increase in data volume to improve concurrent write throughput. It also saves resources when the data volume is low and minimizes the number of generated files as much as possible."),(0,r.yg)("td",{parentName:"tr",align:null},"25MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_data_processed_rebalance_threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum data amount threshold to trigger rebalancing for partitioned tables. If ",(0,r.yg)("inlineCode",{parentName:"td"},"accumulated data amount")," - ",(0,r.yg)("inlineCode",{parentName:"td"},"data amount since the last rebalance or initial accumulation")," >= ",(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_data_processed_rebalance_threshold"),", the rebalancing mechanism will be triggered. If a significant difference in final file sizes is found, you can reduce this threshold to increase balance. Of course, a too small threshold will increase the cost of rebalancing and may affect performance."),(0,r.yg)("td",{parentName:"tr",align:null},"25MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_partition_data_processed_rebalance_threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum partition data amount threshold when triggering rebalancing for partitioned tables. If ",(0,r.yg)("inlineCode",{parentName:"td"},"current partition data amount")," >= ",(0,r.yg)("inlineCode",{parentName:"td"},"threshold")," * ",(0,r.yg)("inlineCode",{parentName:"td"},"current partition allocated task number"),", the partition will be rebalanced. If a significant difference in final file sizes is found, you can reduce this threshold to increase balance. Of course, a too small threshold will increase the cost of rebalancing and may affect performance."),(0,r.yg)("td",{parentName:"tr",align:null},"15MB")))))}d.isMDXComponent=!0}}]);