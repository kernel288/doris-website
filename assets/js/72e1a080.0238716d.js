"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[347941],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>y});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),u=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=u(e.components);return n.createElement(g.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,y=p["".concat(g,".").concat(d)]||p[d]||c[d]||l;return t?n.createElement(y,o(o({ref:a},s),{},{components:t})):n.createElement(y,o({ref:a},s))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var g in a)hasOwnProperty.call(a,g)&&(i[g]=a[g]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},778063:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(58168),r=(t(296540),t(15680));const l={title:"Managing Storage Vault",language:"en"},o=void 0,i={unversionedId:"compute-storage-decoupled/managing-storage-vault",id:"compute-storage-decoupled/managing-storage-vault",title:"Managing Storage Vault",description:"\x3c!--",source:"@site/docs/compute-storage-decoupled/managing-storage-vault.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/managing-storage-vault",permalink:"/docs/dev/compute-storage-decoupled/managing-storage-vault",draft:!1,tags:[],version:"current",frontMatter:{title:"Managing Storage Vault",language:"en"},sidebar:"docs",previous:{title:"Compilation and Deployment",permalink:"/docs/dev/compute-storage-decoupled/compilation-and-deployment"},next:{title:"Managing Compute Groups",permalink:"/docs/dev/compute-storage-decoupled/managing-compute-cluster"}},g={},u=[{value:"Creating a Storage Vault",id:"creating-a-storage-vault",level:2},{value:"Creating an HDFS Storage Vault",id:"creating-an-hdfs-storage-vault",level:3},{value:"Creating an S3 Storage Vault",id:"creating-an-s3-storage-vault",level:3},{value:"Viewing Storage Vaults",id:"viewing-storage-vaults",level:2},{value:"Setting the Default Storage Vault",id:"setting-the-default-storage-vault",level:2},{value:"Specifying Storage Vault When Creating a Table",id:"specifying-storage-vault-when-creating-a-table",level:2},{value:"Changing Storage Vault",id:"changing-storage-vault",level:2},{value:"Deleting a Storage Vault",id:"deleting-a-storage-vault",level:2},{value:"Storage Vault Privilege",id:"storage-vault-privilege",level:2},{value:"Granting",id:"granting",level:3},{value:"Revoking",id:"revoking",level:3}],s={toc:u},p="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Storage Vault is a remote shared storage used by Doris in a decoupled storage-compute model. You can configure one or more Storage Vaults to store different tables in different Storage Vaults."),(0,r.yg)("h2",{id:"creating-a-storage-vault"},"Creating a Storage Vault"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT [IF NOT EXISTS] <vault_name>\nPROPERTIES\n("key" = "value",...)\n')),(0,r.yg)("p",null,"<vault_name> is the user-defined name of the Storage Vault, which serves as the identifier for accessing the Storage Vault."),(0,r.yg)("h3",{id:"creating-an-hdfs-storage-vault"},"Creating an HDFS Storage Vault"),(0,r.yg)("p",null,"To create an HDFS-based decoupled storage-compute Doris cluster, ensure that all nodes (including FE/BE nodes, Meta Service) have privilege to access the specified HDFS, including completing Kerberos authorization configuration and connectivity checks in advance (which can be tested using Hadoop Client on each corresponding node)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS ssb_hdfs_vault\n    PROPERTIES (\n        "type"="hdfs",                                     -- required\n        "fs.defaultFS"="hdfs://127.0.0.1:8020",            -- required\n        "path_prefix"="big/data",                          -- optional, generally filled in according to business name\n        "hadoop.username"="user"                           -- optional\n        "hadoop.security.authentication"="kerberos"        -- optional\n        "hadoop.kerberos.principal"="hadoop/127.0.0.1@XXX" -- optional\n        "hadoop.kerberos.keytab"="/etc/emr.keytab"         -- optional\n    );\n')),(0,r.yg)("h3",{id:"creating-an-s3-storage-vault"},"Creating an S3 Storage Vault"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS ssb_s3_vault\n    PROPERTIES (\n        "type"="S3",                                   -- required\n        "s3.endpoint" = "oss-cn-beijing.aliyuncs.com", -- required\n        "s3.region" = "bj",                            -- required\n        "s3.bucket" = "bucket",                        -- required\n        "s3.root.path" = "big/data/prefix",            -- required\n        "s3.access_key" = "ak",                        -- required\n        "s3.secret_key" = "sk",                        -- required\n        "provider" = "OSS"                             -- required\n    );\n')),(0,r.yg)("p",null,"More parameter explanations and examples can be found in ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT"},"CREATE-STORAGE-VAULT"),"."),(0,r.yg)("h2",{id:"viewing-storage-vaults"},"Viewing Storage Vaults"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW STORAGE VAULTS\n")),(0,r.yg)("p",null,"The returned result includes 4 columns: the Storage Vault name, Storage Vault ID, properties, and whether it is the default Storage Vault."),(0,r.yg)("h2",{id:"setting-the-default-storage-vault"},"Setting the Default Storage Vault"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET <vault_name> AS DEFAULT STORAGE VAULT\n")),(0,r.yg)("h2",{id:"specifying-storage-vault-when-creating-a-table"},"Specifying Storage Vault When Creating a Table"),(0,r.yg)("p",null,"When creating a table, specify ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_vault_name")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"PROPERTIES"),", and the data will be stored in the Storage Vault corresponding to the specified ",(0,r.yg)("inlineCode",{parentName:"p"},"vault name"),". Once the table is successfully created, the ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_vault")," cannot be modified, meaning changing the Storage Vault is not supported."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS supplier (\n  s_suppkey int(11) NOT NULL COMMENT "",\n  s_name varchar(26) NOT NULL COMMENT "",\n  s_address varchar(26) NOT NULL COMMENT "",\n  s_city varchar(11) NOT NULL COMMENT "",\n  s_nation varchar(16) NOT NULL COMMENT "",\n  s_region varchar(13) NOT NULL COMMENT "",\n  s_phone varchar(16) NOT NULL COMMENT ""\n)\nUNIQUE KEY (s_suppkey)\nDISTRIBUTED BY HASH(s_suppkey) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"storage_vault_name" = "ssb_hdfs_vault"\n);\n')),(0,r.yg)("h2",{id:"changing-storage-vault"},"Changing Storage Vault"),(0,r.yg)("p",null,"Used to update modifiable properties of the Storage Vault configuration."),(0,r.yg)("p",null,"Coming soon"),(0,r.yg)("h2",{id:"deleting-a-storage-vault"},"Deleting a Storage Vault"),(0,r.yg)("p",null,"Only non-default Storage Vaults that are not referenced by any tables can be deleted."),(0,r.yg)("p",null,"Coming soon"),(0,r.yg)("h2",{id:"storage-vault-privilege"},"Storage Vault Privilege"),(0,r.yg)("p",null,"Grant a specified MySQL user the usage privilege for a certain Storage Vault, allowing the user to specify that Storage Vault when creating tables or viewing Storage Vaults."),(0,r.yg)("h3",{id:"granting"},"Granting"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT\n    USAGE_PRIV\n    ON STORAGE VAULT <vault_name>\n    TO { ROLE | USER } {<role> | <user>}\n")),(0,r.yg)("p",null,"Only Admin users have the authority to execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"GRANT")," statement, which is used to grant specified Storage Vault privileges to User/Role. Users/Roles with ",(0,r.yg)("inlineCode",{parentName:"p"},"USAGE_PRIV")," privilege for a certain Storage Vault can perform the following operations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"View the information of that Storage Vault through ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW STORAGE VAULT"),";"),(0,r.yg)("li",{parentName:"ul"},"Specify the use of that Storage Vault in ",(0,r.yg)("inlineCode",{parentName:"li"},"PROPERTIES")," when creating tables.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"grant usage_priv on storage vault my_storage_vault to user1\n")),(0,r.yg)("h3",{id:"revoking"},"Revoking"),(0,r.yg)("p",null,"Revoke the Storage Vault privileges of a specified MySQL user."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE \n    USAGE_PRIV\n    ON STORAGE VAULT <vault_name>\n    FROM { ROLE | USER } {<role> | <user>}\n")),(0,r.yg)("p",null,"Only Admin users have the authority to execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"REVOKE")," statement, which is used to revoke the privileges of User/Role for the specified Storage Vault."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"revoke usage_priv on storage vault my_storage_vault from user1\n")))}c.isMDXComponent=!0}}]);