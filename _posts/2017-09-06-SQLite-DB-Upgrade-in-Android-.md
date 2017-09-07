---
title: SQLite DB Upgrade in Android
layout: post
tags: Android
published: true
---


# SQLite DB Upgrade

## Add a new table
In ```onUpgrade```, call ```onCreate(db)```  

## Add new columns  
```1 TEXT, 1 INTEGER, 1 TEXT``` new columns added in the end of an existed table  
In ```onUpgrade```, call ```db.execSQL(SQL_STATEMENT)```

SQL_STATEMENT  
```sql
ALTER TABLE tablename RENAME TO tablename_temp  

CREATE TABLE IF NOT EXISTS tablename (  
    col_rowid INTEGER PRIMARY KEY AUTOINCREASEMENT,  
    col1 TEXT,  
    col2 TEXT,  
    col3 TEXT,  
    UNIQUE(col1, col3))  

INSERT INTO tablename   
    SELECT tablename_temp.*, '', 0, ''  
    FROM tablename_temp 

DROP TABLE IF EXISTS tablename_temp  
```


