"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[776535],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=d(a),c=i,u=g["".concat(s,".").concat(c)]||g[c]||p[c]||r;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},658791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(58168),i=(a(296540),a(15680));const r={title:"Best Practices",language:"en"},o=void 0,l={unversionedId:"table-design/best-practice",id:"version-3.0/table-design/best-practice",title:"Best Practices",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/table-design/best-practice.md",sourceDirName:"table-design",slug:"/table-design/best-practice",permalink:"/docs/3.0/table-design/best-practice",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Best Practices",language:"en"},sidebar:"docs",previous:{title:"Using AUTO_INCREMENT",permalink:"/docs/3.0/table-design/auto-increment"},next:{title:"Loading Overview",permalink:"/docs/3.0/data-operate/import/load-manual"}},s={},d=[{value:"Data models",id:"data-models",level:2},{value:"DUPLICATE KEY model",id:"duplicate-key-model",level:3},{value:"AGGREGATE KEY model",id:"aggregate-key-model",level:3},{value:"UNIQUE KEY model",id:"unique-key-model",level:3},{value:"Index",id:"index",level:2},{value:"<strong>Prefix index</strong>",id:"prefix-index",level:3},{value:"<strong>ZoneMap index</strong>",id:"zonemap-index",level:3},{value:"<strong>Inverted index</strong>",id:"inverted-index",level:3},{value:"<strong>BloomFilter index</strong>",id:"bloomfilter-index",level:3},{value:"<strong>Ngram BloomFilter index</strong>",id:"ngram-bloomfilter-index",level:3},{value:"<strong>Bitmap index</strong>",id:"bitmap-index",level:3},{value:"Field type",id:"field-type",level:2},{value:"Create table",id:"create-table",level:2}],m={toc:d},g="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"best-practices"},"Best Practices"),(0,i.yg)("h2",{id:"data-models"},"Data models"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Doris arranges data in three models: DUPLICATE KEY model, UNIQUE KEY model, and AGGREGATE KEY model.")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Recommendations")),(0,i.yg)("p",{parentName:"admonition"},"Because the data model is determined and ",(0,i.yg)("strong",{parentName:"p"},"immutable")," during table creation, it is important to select the most suitable data model."),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"The Duplicate Key model is a good fit for ad-hoc queries across any dimensions. It cannot leverage the benefits of pre-aggregation, but it is also not constrained by the limitations of an aggregation model, so it can take advantage of columnar storage (only reading the relevant columns without the need to read all key columns)."),(0,i.yg)("li",{parentName:"ol"},"The Aggregate Key model, through pre-aggregation, can largely reduce the amount of data scanned and the computational workload for aggregate queries. It is particularly suitable for reporting queries with fixed patterns. However, this model is not friendly for count(*) queries. Additionally, since the aggregation method on the Value columns are fixed, users should pay extra attention to semantic correctness when performing other types of aggregate queries."),(0,i.yg)("li",{parentName:"ol"},"The Unique Key model is designed for scenarios that require unique primary key constraints. It can ensure the uniqueness of primary keys. The downside is that it cannot reap the benefits brought by materialization and pre-aggregation. For users with high-performance requirements for aggregate queries, it is recommended to use the Merge-on-Write feature of the Unique Key model since Doris 1.2."),(0,i.yg)("li",{parentName:"ol"},"Users with partial column update requirements might select from the following data models:",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Unique Key model (Merge-on-Write mode)"),(0,i.yg)("li",{parentName:"ol"},"Aggregate Key model (aggregated by REPLACE_IF_NOT_NULL)"))))),(0,i.yg)("h3",{id:"duplicate-key-model"},"DUPLICATE KEY model"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"duplicate-key-model-example",src:a(164614).A,width:"2560",height:"1656"})),(0,i.yg)("p",null,"When only the sorting columns are specified, rows with the same key will not be merged."),(0,i.yg)("p",null,"This is applicable to analytical business scenarios where data does not require pre-aggregation:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Analysis of raw data"),(0,i.yg)("li",{parentName:"ul"},"Analysis of log or time series data where only new data is appended.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- For example, log analysis that allows only appending new data with replicated KEYs.\nCREATE TABLE session_data\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid) -- Used solely for specifying sorting columns, rows with the same KEY will not be merged.\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10;\n")),(0,i.yg)("h3",{id:"aggregate-key-model"},"AGGREGATE KEY model"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"aggregate-key-model-example",src:a(448448).A,width:"2560",height:"1528"})),(0,i.yg)("p",null,"Old and new records with the same AGGREGATE KEY will be aggregated. The currently supported aggregation methods are as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"SUM: calculates the sum by accumulating the values of multiple rows;"),(0,i.yg)("li",{parentName:"ol"},"REPLACE: replaces the value in the previously imported rows with the value from the next batch of data;"),(0,i.yg)("li",{parentName:"ol"},"MAX: retains the maximum value;"),(0,i.yg)("li",{parentName:"ol"},"MIN: retains the minimum value;"),(0,i.yg)("li",{parentName:"ol"},"REPLACE_IF_NOT_NULL: replaces non-null values. Unlike REPLACE, it does not replace null values;"),(0,i.yg)("li",{parentName:"ol"},"HLL_UNION: aggregates columns of HLL type using the HyperLogLog algorithm;"),(0,i.yg)("li",{parentName:"ol"},"BITMAP_UNION: aggregates columns of BITMAP type using bitmap union aggregation;")),(0,i.yg)("p",null,"This is suitable for reporting and multi-dimensional analysis scenarios such as:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Website traffic analysis"),(0,i.yg)("li",{parentName:"ul"},"Multi-dimensional analysis of data reports.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- Example of website traffic analysis\nCREATE TABLE site_visit\n(\n    siteid      INT,\n    city        SMALLINT,\n    username    VARCHAR(32),\n    pv BIGINT   SUM DEFAULT '0' -- PV caculation\n)\nAGGREGATE KEY(siteid, city, username) -- Rows with the same KEY will be merged, and non-key columns will be aggregated based on the specified aggregation function.\nDISTRIBUTED BY HASH(siteid) BUCKETS 10;\n")),(0,i.yg)("h3",{id:"unique-key-model"},"UNIQUE KEY model"),(0,i.yg)("p",null,"The new record will replace the old record that has the same UNIQUE KEY with it. Before Doris 1.2, the UNIQUE KEY model was implemented the same way as the REPLACE aggregation of the AGGREGATE KEY model. However, Since Doris 1.2, we have introduced the Merge-on-Write implementation for the UNIQUE KEY model, which provides better performance for aggregate queries."),(0,i.yg)("p",null,"This is suitable for analytical business scenarios that require updates, such as:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Deduplicated order analysis"),(0,i.yg)("li",{parentName:"ul"},"Real-time synchronization of inserts, updates, and deletes.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- Example of deduplicated order analysis\nCREATE TABLE sales_order\n(\n    orderid     BIGINT,\n    status      TINYINT,\n    username    VARCHAR(32),\n    amount      BIGINT DEFAULT '0'\n)\nUNIQUE KEY(orderid) -- Rows of the same KEY will be merged\nDISTRIBUTED BY HASH(orderid) BUCKETS 10;\n")),(0,i.yg)("h2",{id:"index"},"Index"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Indexes can facilitate quick filtering and searching of data. Currently, Doris supports two types of indexes:"),(0,i.yg)("ol",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ol"},"Built-in smart indexes, including prefix index and ZoneMap index."),(0,i.yg)("li",{parentName:"ol"},"User-created secondary indexes, including inverted index, BloomFilter index, Ngram BloomFilter index, and Bitmap index."))),(0,i.yg)("h3",{id:"prefix-index"},(0,i.yg)("strong",{parentName:"h3"},"Prefix index")),(0,i.yg)("p",null,"Prefix indexes are built-in indexes in the Aggregate, Unique, and Duplicate data models. The underlying data storage is sorted and stored based on the columns specified as the AGGREGATE KEY, UNIQUE KEY, or DUPLICATE KEY in their respective table creation statements. Prefix index, built on top of the sorted data, allows for quick data querying based on given prefix columns."),(0,i.yg)("p",null,"Prefix indexes are sparse indexes and cannot locate the exact row where a key is present. Instead, they can only roughly identify the range where the key may exist, and then use binary search algorithms to accurately locate the position of the key."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Recommendations")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"When creating a table, ",(0,i.yg)("strong",{parentName:"li"},"the correct column order can greatly improve query efficiency"),".",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Since the column order is specified during table creation, a table can only have one type of prefix index. However, this may not be efficient enough for queries based on the columns without prefix index. In such cases, users can adjust the column order by creating materialized views."))),(0,i.yg)("li",{parentName:"ol"},"The first field in a prefix index should always be the field of the longest query conditions and should be a high-cardinality field.",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Bucketing field: It should have relatively even data distribution and be frequently used, preferably a high-cardinality field."),(0,i.yg)("li",{parentName:"ol"},"Int(4) + Int(4) + varchar(50): The prefix index length is only 28."),(0,i.yg)("li",{parentName:"ol"},"Int(4) + varchar(50) + Int(4): The prefix index length is only 24."),(0,i.yg)("li",{parentName:"ol"},"varchar(10) + varchar(50): The prefix index length is only 30."),(0,i.yg)("li",{parentName:"ol"},"Prefix index (36 characters): The first field delivers the best query performance. If a varchar field is encountered, the prefix index will automatically truncate it to the first 20 characters."),(0,i.yg)("li",{parentName:"ol"},"If possible, include the most frequently used query fields in the prefix index. Otherwise, specify them as the bucketing fields."))),(0,i.yg)("li",{parentName:"ol"},"The field lengths in the prefix index should be as explicit as possible because Doris can only utilize the prefix index for the first 36 bytes."),(0,i.yg)("li",{parentName:"ol"},"If it is difficult to design a partitioning, bucketing, and prefix index strategy for your data range, consider introducing inverted indexes for acceleration."))),(0,i.yg)("h3",{id:"zonemap-index"},(0,i.yg)("strong",{parentName:"h3"},"ZoneMap index")),(0,i.yg)("p",null,"ZoneMap index is index information automatically maintained on a per-column basis in the columnar storage format. It includes information such as Min/Max values and the number of Null values. During data querying, the ZoneMap index is utilized to select the data range to scan based on the filtered fields using range conditions."),(0,i.yg)("p",null,'For example, when filtering the "age" field with the following query statement:'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Shell"},"SELECT * FROM table WHERE age > 0 and age < 51;\n")),(0,i.yg)("p",null,'If the Short Key Index is not hit, the ZoneMap index will be used to determine the data range, known as the "ordinary" range, that needs to be scanned based on the query conditions for the "age" field. This reduces the number of pages that need to be scanned.'),(0,i.yg)("h3",{id:"inverted-index"},(0,i.yg)("strong",{parentName:"h3"},"Inverted index")),(0,i.yg)("p",null,"Doris supports inverted indexes since version 2.0.0. Inverted index can be used for full-text searches on text data and range queries on regular numeric and date types. It enables fast filtering of rows that meet the conditions from massive amounts of data."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'-- Inverted index can be specified during table creation or added later. This is an example of specifying it during table creation:\nCREATE TABLE table_name\n(\n  columns_difinition,\n  INDEX idx_name1(column_name1) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese")] [COMMENT \'your comment\']\n  INDEX idx_name2(column_name2) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese")] [COMMENT \'your comment\']\n  INDEX idx_name3(column_name3) USING INVERTED [PROPERTIES("parser" = "chinese", "parser_mode" = "fine_grained|coarse_grained")] [COMMENT \'your comment\']\n  INDEX idx_name4(column_name4) USING INVERTED [PROPERTIES("parser" = "english|unicode|chinese", "support_phrase" = "true|false")] [COMMENT \'your comment\']\n  INDEX idx_name5(column_name4) USING INVERTED [PROPERTIES("char_filter_type" = "char_replace", "char_filter_pattern" = "._"), "char_filter_replacement" = " "] [COMMENT \'your comment\']\n  INDEX idx_name5(column_name4) USING INVERTED [PROPERTIES("char_filter_type" = "char_replace", "char_filter_pattern" = "._")] [COMMENT \'your comment\']\n)\ntable_properties;\n\n-- Example: keyword matching in full-text searches, implemented by MATCH_ANY MATCH_ALL\nSELECT * FROM table_name WHERE column_name MATCH_ANY | MATCH_ALL \'keyword1 ...\';\n')),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Recommendations")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"If it is difficult to design a partitioning, bucketing, and prefix index strategy for your data range, consider introducing inverted indexes for acceleration."))),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Restrictions")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"Different data models have different restrictions on inverted index.",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Aggregate KEY model: only allows inverted index for Key columns"),(0,i.yg)("li",{parentName:"ol"},"Unique KEY model: allows inverted index for any column after enabling Merge-on-Write"),(0,i.yg)("li",{parentName:"ol"},"Duplicate KEY model: allows inverted index for any column"))))),(0,i.yg)("h3",{id:"bloomfilter-index"},(0,i.yg)("strong",{parentName:"h3"},"BloomFilter index")),(0,i.yg)("p",null,"Doris supports adding BloomFilter indexes to fields with high value distinctiveness, making it suitable for scenarios that involve equivalence queries on columns with high cardinality."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'-- Example: add "bloom_filter_columns"="k1,k2,k3" in the PROPERTIES of the table creation statement.\n-- To create BloomFilter index for saler_id and category_id in the table.\nCREATE TABLE IF NOT EXISTS sale_detail_bloom  (\n    sale_date date NOT NULL COMMENT "Sale data",\n    customer_id int NOT NULL COMMENT "Customer ID",\n    saler_id int NOT NULL COMMENT "Saler ID",\n    sku_id int NOT NULL COMMENT "SKU ID",\n    category_id int NOT NULL COMMENT "Category ID",\n    sale_count int NOT NULL COMMENT "Sale count",\n    sale_price DECIMAL(12,2) NOT NULL COMMENT "Sale price",\n    sale_amt DECIMAL(20,2)  COMMENT "Sale amount"\n)\nDuplicate  KEY(sale_date, customer_id,saler_id,sku_id,category_id)\nDISTRIBUTED BY HASH(saler_id) BUCKETS 10\nPROPERTIES (\n"bloom_filter_columns"="saler_id,category_id"\n);\n')),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Restrictions")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"BloomFilter indexes are not supported for columns of type Tinyint, Float, and Double."),(0,i.yg)("li",{parentName:"ol"},'BloomFilter indexes can only accelerate filtering using "in" and "=" operators.'),(0,i.yg)("li",{parentName:"ol"},'BloomFilter indexes must be built on high-cardinality columns (above 5000) in query conditions that involve "in" or "=" operators.',(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"BloomFilter indexes are suitable for non-prefix filtering."),(0,i.yg)("li",{parentName:"ol"},'Queries will filter based on the high-frequency values in the column, and the filtering conditions are mostly "in" and "=".'),(0,i.yg)("li",{parentName:"ol"},'Unlike Bitmap indexes, BloomFilter indexes are suitable for high-cardinality columns, such as UserID. If created on low-cardinality columns like "gender", each block will contain almost all values, rendering the BloomFilter index meaningless.'),(0,i.yg)("li",{parentName:"ol"},"It is suitable for cases with data cardinality around half of the total range."),(0,i.yg)("li",{parentName:"ol"},"For high-cardinality columns with equality (=) queries, such as ID numbers, using BloomFilter indexes can greatly accelerate performance."))))),(0,i.yg)("h3",{id:"ngram-bloomfilter-index"},(0,i.yg)("strong",{parentName:"h3"},"Ngram BloomFilter index")),(0,i.yg)("p",null,'Since 2.0.0, Doris has introduced the NGram BloomFilter index to improve the performance of "',(0,i.yg)("strong",{parentName:"p"},"LIKE"),'" queries.'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'-- Example of creating NGram BloomFilter index in table creation statement\nCREATE TABLE `nb_table` (\n  `siteid` int(11) NULL DEFAULT "10" COMMENT "",\n  `citycode` smallint(6) NULL COMMENT "",\n  `username` varchar(32) NULL DEFAULT "" COMMENT "",\n  INDEX idx_ngrambf (`username`) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="256") COMMENT \'username ngram_bf index\'\n) ENGINE=OLAP\nAGGREGATE KEY(`siteid`, `citycode`, `username`) COMMENT "OLAP"\nDISTRIBUTED BY HASH(`siteid`) BUCKETS 10;\n\n-- PROPERTIES("gram_size"="3", "bf_size"="256"), representing the number of grams and the byte size of the BloomFilter\n-- The number of grams is determined according to the query cases and is typically set to the length of the majority of query strings. The number of bytes in the BloomFilter can be determined after testing. Generally, a larger number of bytes leads to better filtering results, and it is recommended to start with a value of 256 for testing and evaluating the effectiveness. However, it\'s important to note that a larger number of bytes also increases the storage cost of the index.\n-- With high data cardinality, there is no need to set a large BloomFilter size. Conversely, with low data cardinality, increase the BloomFilter size to enhance filtering efficiency.\n')),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Restrictions")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"NGram BloomFilter index only supports string columns."),(0,i.yg)("li",{parentName:"ol"},"NGram BloomFilter indexes and BloomFilter indexes are mutually exclusive, meaning that only one of them can be set for the same column."),(0,i.yg)("li",{parentName:"ol"},"The sizes of the NGram and the BloomFilter can both be optimized based on the actual situation. If the NGram size is relatively small, you may increase the BloomFilter size."),(0,i.yg)("li",{parentName:"ol"},"For data at the scale of billions or above, if there is a need for fuzzy matching, it is recommended to use inverted indexes or NGram BloomFilter."))),(0,i.yg)("h3",{id:"bitmap-index"},(0,i.yg)("strong",{parentName:"h3"},"Bitmap index")),(0,i.yg)("p",null,"To accelerate data queries, Doris supports users in adding Bitmap indexes to certain fields. This is suitable for scenarios involving equivalence or range queries on columns with lower cardinality."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- Example: create Bitmap index for siteid on bitmap_table\nCREATE INDEX [IF NOT EXISTS] bitmap_index_name ON\nbitmap_table (siteid)\nUSING BITMAP COMMENT 'bitmap_siteid';\n")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Restrictions")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"Bitmap indexes can only be created on a single column."),(0,i.yg)("li",{parentName:"ol"},"Bitmap indexes can be applied to all columns in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Duplicate")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Unique")," Key models, as well as the key columns in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Aggregate")," Key model."),(0,i.yg)("li",{parentName:"ol"},"Bitmap indexes support the following data types:",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"TINYINT")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"SMALLINT")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"INT")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"BIGINT")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"CHAR")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"VARCHAR")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"DATE")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"DATETIME")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"LARGEINT")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"DECIMAL")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"BOOL")))),(0,i.yg)("li",{parentName:"ol"},"Bitmap indexes only take effect under Segment V2. The storage format of tables with Bitmap indexes will be automatically converted to V2 format by default."),(0,i.yg)("li",{parentName:"ol"},"Bitmap indexes should be constructed within a certain cardinality range. It is not suitable for extremely high or low cardinality cases.",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"It is recommended for columns with a cardinality between 100 and 100,000, such as the occupation field or city field. If the duplication rate is too high, there won't be significant advantages to build Bitmap indexes compared to other types of indexes. If the duplication rate is too low, Bitmap indexes can significantly reduce space efficiency and performance. Specific types of queries, such as count, OR, and AND operations, only require bitwise operations."),(0,i.yg)("li",{parentName:"ol"},"Bitmap indexes are more suitable for orthogonal queries."))))),(0,i.yg)("h2",{id:"field-type"},"Field type"),(0,i.yg)("p",null,"Doris supports various field types, including precise deduplication with BITMAP, fuzzy deduplication with HLL, semi-structured data types such as ARRAY/MAP/JSON, as well as common numeric, string, and time types."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Recommendations")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},"VARCHAR ",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Variable-length string with a length range of 1-65533 bytes. It is stored in UTF-8 encoding, where English characters typically occupy 1 byte."),(0,i.yg)("li",{parentName:"ol"},"There is often a misunderstanding about the performance difference between varchar(255) and varchar(65533). If the data stored in both cases is the same, the performance will be the same as well. When creating a table, if you are unsure about the maximum length of the field, it is recommended to use varchar(65533) to prevent import errors caused by excessively long strings."))),(0,i.yg)("li",{parentName:"ol"},"STRING ",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Variable-length string with a default size of 1048576 bytes (1MB), which can be increased to 2147483643 bytes (2GB). It is stored in UTF-8 encoding, where English characters typically occupy 1 byte."),(0,i.yg)("li",{parentName:"ol"},"It can only be used in value columns but not key columns or partitioning columns."),(0,i.yg)("li",{parentName:"ol"},"It is suitable for storing large text content. However, if such a requirement does not exist, it is recommended to use VARCHAR. STRING columns have limitations as they cannot be used in key columns or partitioning columns."))),(0,i.yg)("li",{parentName:"ol"},"Numeric fields: Choose the appropriate data type based on the required precision. There is no special restrictions on this."),(0,i.yg)("li",{parentName:"ol"},"Time fields: Note that if there is a high precision requirement (timestamp accurate to milliseconds), you need to specify the use of datetime(6). Otherwise, such timestamps are not supported by default."),(0,i.yg)("li",{parentName:"ol"},"It is recommended to use the JSON data type instead of string type for storing JSON data."))),(0,i.yg)("h2",{id:"create-table"},"Create table"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"create-table-example",src:a(210126).A,width:"2560",height:"1384"})),(0,i.yg)("p",null,"Considerations in creating a table include the setting of data partitions and buckets in addition to data model, index, and field types."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Best practice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'-- Take Merge-on-Write tables in the Unique Key model as an example:\n-- Merge-on-Write in the Unique Key model is implemented in a different way from the Aggregate Key model. The performance of it is similar to that on the Duplicate Key model.\n-- In use cases requiring primary key constraints, the Aggregate Key model can deliver much better query performance compared to the Duplicate Key model, especially in aggregate queries and queries that involve filtering a large amount of data using indexes.\n\n-- For non-partitioned tables\nCREATE TABLE IF NOT EXISTS tbl_unique_merge_on_write\n(\n    `user_id` LARGEINT NOT NULL COMMENT "Use ID",\n    `username` VARCHAR(50) NOT NULL COMMENT "Username",\n    `register_time` DATE COMMENT "User registration time",\n    `city` VARCHAR(20) COMMENT "User city",\n    `age` SMALLINT COMMENT "User age",\n    `sex` TINYINT COMMENT "User gender",\n    `phone` LARGEINT COMMENT "User phone number",\n    `address` VARCHAR(500) COMMENT "User address"\n)\nUNIQUE KEY(`user_id`, `username`)\n-- Data volume of 3~5G\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10 \nPROPERTIES (\n-- In Doris 1.2.0, as a new feature, Merge-on-Write is disabled by default. Users can enable it by adding the following property.\n"enable_unique_key_merge_on_write" = "true" \n);\n\n-- For partitioned tables\nCREATE TABLE IF NOT EXISTS tbl_unique_merge_on_write_p\n(\n    `user_id` LARGEINT NOT NULL COMMENT "Use ID",\n    `username` VARCHAR(50) NOT NULL COMMENT "Username",\n    `register_time` DATE COMMENT "User registration time",\n    `city` VARCHAR(20) COMMENT "User city",\n    `age` SMALLINT COMMENT "User age",\n    `sex` TINYINT COMMENT "User gender",\n    `phone` LARGEINT COMMENT "User phone number",\n    `address` VARCHAR(500) COMMENT "User address"\n)\nUNIQUE KEY(`user_id`, `username`, `register_time`)\nPARTITION BY RANGE(`register_time`) (\n    PARTITION p00010101_1899 VALUES [(\'0001-01-01\'), (\'1900-01-01\')), \n    PARTITION p19000101 VALUES [(\'1900-01-01\'), (\'1900-01-02\')), \n    PARTITION p19000102 VALUES [(\'1900-01-02\'), (\'1900-01-03\')),\n    PARTITION p19000103 VALUES [(\'1900-01-03\'), (\'1900-01-04\')),\n    PARTITION p19000104_1999 VALUES [(\'1900-01-04\'), (\'2000-01-01\')),\n    FROM ("2000-01-01") TO ("2022-01-01") INTERVAL 1 YEAR, \n    PARTITION p30001231 VALUES [(\'3000-12-31\'), (\'3001-01-01\')), \n    PARTITION p99991231 VALUES [(\'9999-12-31\'), (MAXVALUE)) \n) \n-- Data volume of 3~5G\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10 \nPROPERTIES ( \n-- In Doris 1.2.0, as a new feature, Merge-on-Write is disabled by default. Users can enable it by adding the following property.\n"enable_unique_key_merge_on_write" = "true", \n-- The unit for dynamic partition scheduling can be specified as HOUR, DAY, WEEK, MONTH, or YEAR.\n"dynamic_partition.time_unit" = "MONTH",\n-- The starting offset for dynamic partitioning is specified as a negative number. Depending on the value of the time_unit, it uses the current day (week/month) as the reference point, partitions prior to this offset will be deleted (TTL). If not specified, the default value is -2147483648, indicating that historical partitions will not be deleted.\n"dynamic_partition.start" = "-3000",\n-- The ending offset for dynamic partitioning is specified as a positive number. Depending on the value of the time_unit, it uses the current day (week/month) as the reference point. Create the corresponding partitions of the specified range in advance.\n"dynamic_partition.end" = "10",\n-- The prefix for names of the dynamically created partitions (required).\n"dynamic_partition.prefix" = "p",\n-- The number of buckets corresponding to the dynamically created partitions.\n"dynamic_partition.buckets" = "10", \n"dynamic_partition.enable" = "true", \n-- The following is the number of replicas corresponding to dynamically created partitions. If not specified, the default value will be the replication factor specified when creating the table, which is typically 3.\n"dynamic_partition.replication_num" = "3",\n"replication_num" = "3"\n);  \n\n-- View existing partitions\n-- The actual number of created partitions is determined by a combination of dynamic_partition.start, dynamic_partition.end, and the settings of PARTITION BY RANGE.\nshow partitions from tbl_unique_merge_on_write_p;\n')),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Restrictions")),(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The database character set should be specified as UTF-8 since only UTF-8 is supported.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The replication factor for tables must be 3 (if not specified, it defaults to 3).")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The data volume of an individual tablet (",(0,i.yg)("strong",{parentName:"p"},"Tablet Count = Partition Count ","*"," Bucket Count ","*"," Replication Factor"),") theoretically has no upper or lower bounds, except for small tables (in the range of hundreds of megabytes to one gigabyte), where it should be ensured to be within the range of 1 GB to 10 GB:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"If the data volume of an individual tablet is too small, it can result in poor data aggregation performance and increased metadata management overhead."),(0,i.yg)("li",{parentName:"ol"},"If the data volume is too large, it hinders replica migration, synchronization, and increases the cost of schema changes or materialization operations (these operations are retried at the granularity of a tablet)."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For data exceeding 500 million records, ",(0,i.yg)("strong",{parentName:"p"},"partitioning and bucketing")," strategies must be implemented:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Recommendations for bucketing:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"For large tables, each tablet should be in the range of 1 GB to 10 GB to prevent the generation of too many small files."),(0,i.yg)("li",{parentName:"ol"},"For dimension tables of approximately 100 megabytes, the number of tablets should be controlled within the range of 3 to 5. This ensures a certain level of concurrency without generating excessive small files."))),(0,i.yg)("li",{parentName:"ol"},"If partitioning is not feasible and the data grows rapidly without the possibility of dynamic time-based partitioning, it is advisable to increase the number of buckets to accommodate the data volume based on the data retention period (180 days). It is still recommended to keep the size of each bucket between 1 GB and 10 GB."),(0,i.yg)("li",{parentName:"ol"},"Apply salting to the bucketing field and use the same salting strategy for queries in order to leverage bucket pruning capabilities."),(0,i.yg)("li",{parentName:"ol"},"Random bucketing:",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"If an OLAP table does not have fields that need to be updated, setting the data bucketing mode to RANDOM can avoid severe data skew. During data ingestion, each batch of data is randomly assigned to a tablet for writing."),(0,i.yg)("li",{parentName:"ol"},"When the bucketing mode for a table is set to RANDOM, since there is no bucketing column, querying the table will scan all buckets in the hit partitions instead of querying specific buckets based on the values of the bucketing column. This setting is suitable for overall aggregation and analysis queries rather than high-concurrency point queries."),(0,i.yg)("li",{parentName:"ol"},"If an OLAP table has a random distribution of data, setting the ",(0,i.yg)("inlineCode",{parentName:"li"},"load_to_single_tablet")," parameter to true during data ingestion allows each task to write to a single tablet. This improves concurrency and throughput during large-scale data ingestion. It can also reduce the write amplification caused by data ingestion and compaction and ensure cluster stability."))),(0,i.yg)("li",{parentName:"ol"},"Dimension tables, which grow slowly, can use a single partition and apply bucketing based on commonly used query conditions (where the data distribution of the bucketing field is relatively even)."),(0,i.yg)("li",{parentName:"ol"},"Fact tables.")))),(0,i.yg)("ol",{parentName:"admonition",start:5},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For scenarios where there is a large amount of historical partitioned data but the historical data is relatively small, unbalanced, or queried infrequently, you can use the following approach to place the data in special partitions. You can create historical partitions for historical data of small sizes (e.g., yearly partitions, monthly partitions). For example, you can create historical partitions for data ",(0,i.yg)("inlineCode",{parentName:"p"},'FROM ("2000-01-01") TO ("2022-01-01") INTERVAL 1 YEAR'),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"\nPARTITION p00010101_1899 VALUES [('0001-01-01'), ('1900-01-01')), \n\nPARTITION p19000101 VALUES [('1900-01-01'), ('1900-01-02')), \n\n...\n\nPARTITION p19000104_1999 VALUES [('1900-01-04'), ('2000-01-01')),\n\nFROM (\"2000-01-01\") TO (\"2022-01-01\") INTERVAL 1 YEAR, \n\nPARTITION p30001231 VALUES [('3000-12-31'), ('3001-01-01')), \n\nPARTITION p99991231 VALUES [('9999-12-31'), (MAXVALUE)) \n\n"))))))}p.isMDXComponent=!0},448448:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/aggregate-key-model-example-56f5457b8684e8da1222fb19c7756ec1.png"},210126:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create-table-example-eeb2537949e854e2dbb17326a2c2a228.png"},164614:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/duplicate-key-model-example-f0d28a2328a37f044e15cb967ea995ca.png"}}]);