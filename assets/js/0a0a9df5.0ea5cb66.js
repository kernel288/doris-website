"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[594967],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>p});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),g=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=g(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=g(a),m=r,p=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(p,i(i({ref:t},u),{},{components:a})):n.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},556782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const l={title:"Job Scheduler",language:"en"},i=void 0,s={unversionedId:"data-operate/scheduler/job-scheduler",id:"version-3.0/data-operate/scheduler/job-scheduler",title:"Job Scheduler",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/data-operate/scheduler/job-scheduler.md",sourceDirName:"data-operate/scheduler",slug:"/data-operate/scheduler/job-scheduler",permalink:"/docs/3.0/data-operate/scheduler/job-scheduler",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Job Scheduler",language:"en"},sidebar:"docs",previous:{title:"MySQL Dump",permalink:"/docs/3.0/data-operate/export/export-with-mysql-dump"},next:{title:"Transaction",permalink:"/docs/3.0/data-operate/transaction"}},o={},g=[{value:"Background",id:"background",level:2},{value:"Job Scheduler",id:"job-scheduler",level:2},{value:"Features of Doris Job Scheduler",id:"features-of-doris-job-scheduler",level:2},{value:"Syntax Overview",id:"syntax-overview",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Automated Data Synchronization with Job Scheduler and Catalog",id:"automated-data-synchronization-with-job-scheduler-and-catalog",level:2},{value:"Design and Implementation",id:"design-and-implementation",level:2},{value:"Future Plans",id:"future-plans",level:2}],u={toc:g},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"background"},"Background"),(0,r.yg)("p",null,"In the context of increasingly refined data management needs, scheduled tasks play a crucial role. They are typically applied in the following scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Regular Data Updates:")," Periodic data imports and ETL operations reduce manual intervention, improving efficiency and accuracy in data processing."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Catalog Integration:")," Regular synchronization of external data sources ensures efficient and accurate integration of multi-source data into the target system, meeting complex business analysis requirements."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Data Cleanup:")," Periodic cleaning of expired/invalid data frees up storage space and prevents performance issues caused by excessive outdated data.")),(0,r.yg)("p",null,"In earlier versions of Apache Doris, meeting the above requirements often depended on external scheduling systems, such as business code-based scheduling or third-party scheduling tools and distributed scheduling platforms. However, these external systems might not meet Doris's flexible scheduling strategies and resource management needs. Additionally, failures in external scheduling systems can increase business risks and require extra maintenance time and effort."),(0,r.yg)("h2",{id:"job-scheduler"},"Job Scheduler"),(0,r.yg)("p",null,"To address these issues, Apache Doris introduced the Job Scheduler feature in version 2.1, enabling autonomous task scheduling with precision down to the second. "),(0,r.yg)("p",null,"This feature ensures data import completeness and consistency while allowing users to flexibly and conveniently adjust scheduling strategies. Reducing reliance on external systems also decreases system failure risks and maintenance costs, providing a more unified and reliable user experience."),(0,r.yg)("h2",{id:"features-of-doris-job-scheduler"},"Features of Doris Job Scheduler"),(0,r.yg)("p",null,"Doris Job Scheduler is a task management system that runs based on preset schedules, triggering predefined operations at specific times or intervals for automated task execution. Key features include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Efficient Scheduling:")," Tasks and events can be scheduled within specified intervals, ensuring efficient data processing. The time wheel algorithm ensures precise second-level triggers."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Flexible Scheduling:")," Multiple scheduling options are available, such as scheduling by minutes, hours, days, or weeks. It supports one-time scheduling and recurring (cyclic) event scheduling, with customizable start and end times for cyclic schedules."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Event Pool and High-Performance Processing Queue:")," Implemented using Disruptor to achieve a high-performance producer-consumer model, minimizing task execution overload."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Traceable Scheduling Records:")," Stores the latest task execution records (configurable), which can be viewed with simple commands to ensure traceability."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"High Availability:")," Leveraging Doris\u2019s high-availability mechanisms, Job Scheduler can easily achieve self-recovery and high availability.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Related Documentation:")," ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB"},"CREATE-JOB")),(0,r.yg)("h2",{id:"syntax-overview"},"Syntax Overview"),(0,r.yg)("p",null,"A valid Job statement must include the following components:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"CREATE JOB:")," Requires a job name, uniquely identifying the event in the database."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ON SCHEDULE Clause:")," Specifies the job type, trigger time, and frequency.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"AT timestamp:")," For one-time events. Executes the job once at the specified date and time. ",(0,r.yg)("strong",{parentName:"li"},"AT current_timestamp")," specifies the current date and time. The job runs immediately upon creation and can be used for asynchronous task creation."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"EVERY interval:")," For periodic jobs, specifying the execution frequency. Keywords include ",(0,r.yg)("strong",{parentName:"li"},"WEEK"),", ",(0,r.yg)("strong",{parentName:"li"},"DAY"),", ",(0,r.yg)("strong",{parentName:"li"},"HOUR"),", and ",(0,r.yg)("strong",{parentName:"li"},"MINUTE"),".",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Interval:")," Defines the execution frequency, e.g., ",(0,r.yg)("strong",{parentName:"li"},"1 DAY")," for daily, ",(0,r.yg)("strong",{parentName:"li"},"1 HOUR")," for hourly, ",(0,r.yg)("strong",{parentName:"li"},"1 MINUTE")," for every minute, ",(0,r.yg)("strong",{parentName:"li"},"1 WEEK")," for weekly."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"STARTS Clause (optional):")," Specifies the start time for the repeating interval. ",(0,r.yg)("strong",{parentName:"li"},"CURRENT_TIMESTAMP")," sets the current date and time. The job runs immediately upon creation."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ENDS Clause (optional):")," Specifies the end time for the job event."))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"DO Clause:")," Specifies the operation to execute when the job triggers, currently supporting ",(0,r.yg)("strong",{parentName:"li"},"INSERT")," statements.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE\nJOB\n  job_name\n  ON SCHEDULE schedule\n  [COMMENT 'string']\n  DO execute_sql;\n\nschedule: {\n    AT timestamp\n    | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\ninterval:\n    quantity { WEEK |DAY | HOUR | MINUTE}\n")),(0,r.yg)("h2",{id:"usage-example"},"Usage Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,r.yg)("p",null,'This creates a job named "my_job" that executes every minute, importing data from db2.tbl2 into db1.tbl1.'),(0,r.yg)("p",null,"Creating a One-Time Job:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE AT '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,r.yg)("p",null,'This creates a job named "my_job" that executes once at 2025-01-01 00:00:00, importing data from db2.tbl2 into db1.tbl1.'),(0,r.yg)("p",null,"Creating a Periodic Job Without End Time:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nCREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE create_time >= days_add(now(), -1);\n")),(0,r.yg)("p",null,'This creates a job named "my_job" that starts on 2025-01-01 00:00:00 and executes every day, importing data from db2.tbl2 into db1.tbl1.'),(0,r.yg)("p",null,"Creating a Periodic Job With End Time:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2025-01-01 00:00:00' ENDS '2026-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE create_time >= days_add(now(), -1);\n")),(0,r.yg)("p",null,'This creates a job named "my_job" that starts on 2025-01-01 00:00:00, executes every day, and ends on 2026-01-01 00:10:00, importing data from db2.tbl2 into db1.tbl1.'),(0,r.yg)("p",null,"Using Job for Asynchronous Execution:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB my_job ON SCHEDULE AT current_timestamp DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n")),(0,r.yg)("p",null,"Since jobs in Doris are created as synchronous tasks but executed asynchronously, this example sets the job as a one-time task with the start time as the current time, suitable for asynchronous tasks like insert into select."),(0,r.yg)("h2",{id:"automated-data-synchronization-with-job-scheduler-and-catalog"},"Automated Data Synchronization with Job Scheduler and Catalog"),(0,r.yg)("p",null,"For instance, in an e-commerce scenario, users often need to extract business data from MySQL and synchronize it to Doris for data analysis, supporting precise marketing activities. The Job Scheduler, combined with Multi Catalog capabilities, can efficiently accomplish periodic data synchronization across data sources."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS user.activity (\n    `user_id` INT NOT NULL,\n    `date` DATE NOT NULL,\n    `city` VARCHAR(20),\n    `age` SMALLINT,\n    `sex` TINYINT,\n    `last_visit_date` DATETIME DEFAULT '1970-01-01 00:00:00',\n    `cost` BIGINT DEFAULT '0',\n    `max_dwell_time` INT DEFAULT '0',\n    `min_dwell_time` INT DEFAULT '99999'\n);\nINSERT INTO user.activity VALUES\n    (10000, '2017-10-01', 'Beijing', 20, 0, '2017-10-01 06:00:00', 20, 10, 10),\n    (10000, '2017-10-01', 'Beijing', 20, 0, '2017-10-01 07:00:00', 15, 2, 2),\n    (10001, '2017-10-01', 'Beijing', 30, 1, '2017-10-01 17:05:00', 2, 22, 22),\n    (10002, '2017-10-02', 'Shanghai', 20, 1, '2017-10-02 12:59:00', 200, 5, 5),\n    (10003, '2017-10-02', 'Guangzhou', 32, 0, '2017-10-02 11:20:00', 30, 11, 11),\n    (10004, '2017-10-01', 'Shenzhen', 35, 0, '2017-10-01 10:00:00', 100, 3, 3),\n    (10004, '2017-10-03', 'Shenzhen', 35, 0, '2017-10-03 10:20:00', 11, 6, 6);\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"user","_","id"),(0,r.yg)("th",{parentName:"tr",align:null},"date"),(0,r.yg)("th",{parentName:"tr",align:null},"city"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"sex"),(0,r.yg)("th",{parentName:"tr",align:null},"last","_","visit","_","date"),(0,r.yg)("th",{parentName:"tr",align:null},"cost"),(0,r.yg)("th",{parentName:"tr",align:null},"max","_","dwell","_","time"),(0,r.yg)("th",{parentName:"tr",align:null},"min","_","dwell","_","time"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01"),(0,r.yg)("td",{parentName:"tr",align:null},"Beijing"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01 06:00"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01"),(0,r.yg)("td",{parentName:"tr",align:null},"Beijing"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01 07:00"),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10001"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01"),(0,r.yg)("td",{parentName:"tr",align:null},"Beijing"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01 17:05:45"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"22"),(0,r.yg)("td",{parentName:"tr",align:null},"22")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10002"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-02"),(0,r.yg)("td",{parentName:"tr",align:null},"Shanghai"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-02 12:59:12"),(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10003"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-02"),(0,r.yg)("td",{parentName:"tr",align:null},"Guangzhou"),(0,r.yg)("td",{parentName:"tr",align:null},"32"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-02 11:20:00"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:null},"11")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10004"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01"),(0,r.yg)("td",{parentName:"tr",align:null},"Shenzhen"),(0,r.yg)("td",{parentName:"tr",align:null},"35"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-01 10:00:15"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10004"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-03"),(0,r.yg)("td",{parentName:"tr",align:null},"Shenzhen"),(0,r.yg)("td",{parentName:"tr",align:null},"35"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"2017-10-03 10:20:22"),(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"6")))),(0,r.yg)("p",null,"Example Workflow"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Creating a Doris Table:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS user_activity (\n  `user_id` LARGEINT NOT NULL COMMENT "User ID",\n  `date` DATE NOT NULL COMMENT "Data import date",\n  `city` VARCHAR(20) COMMENT "User city",\n  `age` SMALLINT COMMENT "User age",\n  `sex` TINYINT COMMENT "User gender",\n  `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "Last visit date",\n  `cost` BIGINT SUM DEFAULT "0" COMMENT "Total spending",\n  `max_dwell_time` INT MAX DEFAULT "0" COMMENT "Max dwell time",\n  `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "Min dwell time"\n) AGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1"\n);\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Creating a Catalog for the MySQL Database:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG activity PROPERTIES (\n  "type"="jdbc",\n  "user"="root",\n  "password"="123456",\n  "jdbc_url" = "jdbc:mysql://127.0.0.1:3306/user?useSSL=false",\n  "driver_url" = "mysql-connector-java-5.1.49.jar",\n  "driver_class" = "com.mysql.jdbc.Driver"\n);\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Importing Data from MySQL to Doris:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"One-Time Scheduling:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nCREATE JOB one_time_load_job ON SCHEDULE AT '2024-08-10 03:00:00' DO INSERT INTO user_activity SELECT * FROM activity.user_activity;\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Periodic Scheduling:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE JOB schedule_load ON SCHEDULE EVERY 1 DAY DO INSERT INTO user_activity SELECT * FROM activity.user_activity WHERE last_visit_date >= days_add(now(), -1);\n")),(0,r.yg)("h2",{id:"design-and-implementation"},"Design and Implementation"),(0,r.yg)("p",null,"Efficient scheduling often entails substantial resource consumption, especially with high-precision scheduling. Traditional implementations using Java's built-in scheduling capabilities or other libraries may have significant issues with precision and memory usage. To ensure performance while minimizing resource usage, the TimingWheel algorithm is combined with Disruptor to achieve second-level task scheduling.\nTechnical Details"),(0,r.yg)("p",null,"Using Netty\u2019s HashedWheelTimer to implement the time wheel algorithm, the Job Manager periodically (default every ten minutes) schedules future events into the time wheel. Disruptor constructs a single-producer, multi-consumer model to ensure efficient task triggering without excessive resource usage. The time wheel only triggers tasks and does not execute them directly. For immediate tasks, they are submitted to the respective execution thread pool."),(0,r.yg)("p",null,"For single-execution events, the event definition is deleted after scheduling. For periodic events, the time wheel\u2019s system events periodically pull the next cycle's execution tasks. This avoids clustering tasks in one bucket, reducing meaningless traversal and improving processing efficiency. For transactional tasks, the Job Scheduler ensures task execution results align with expectations through strong association and callback mechanisms, maintaining data integrity and consistency.\nConclusion"),(0,r.yg)("h2",{id:"future-plans"},"Future Plans"),(0,r.yg)("p",null,"Doris Job Scheduler is a powerful and flexible task scheduling tool essential for data processing. Beyond common scenarios like data lake analysis and internal ETL, it plays a crucial role in implementing asynchronous materialized views. Asynchronous materialized views store precomputed result sets, and their update frequency is closely tied to source table changes. Frequent updates to source table data necess"))}c.isMDXComponent=!0}}]);