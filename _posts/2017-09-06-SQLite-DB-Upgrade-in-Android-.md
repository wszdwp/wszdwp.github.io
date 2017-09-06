---
title: SQLite DB Upgrade in Android
layout: post
tags: Android
published: true
---


# DB Upgrade

## Add a new table
In ```onUpgrade```, call ```onCreate(db)```  

## Add 1 TEXT, 1 INTEGER, 1TEXT new columns in the end of an existed table  
In ```onUpgrade```  
1. ALTER TABLE tablename RENAME TO tablename_temp  
2. INSERT INTO tablename SELECT tablename_temp.*, '', 0, '' FROM tablename_temp  
3. DROP TABLE IF EXISTS tablename_temp  

