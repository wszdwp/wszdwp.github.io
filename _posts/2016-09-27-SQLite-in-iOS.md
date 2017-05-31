---
title: SQLite in iOS
layout: post
tags: iOS
---

SQL in iOS

SQLite 

1. open
2. prepare
3. step
4. finalize
5. close

execute an SQL query, it must first be compiled into a byte-code program 

```sqlite3_exec() = ' sqlite3_prepare_v2(), sqlite3_step(), and sqlite3_finalize(),'



```swift
//Open
if (sqlite3_open((self.databasePath as NSString).UTF8String, &mySqliteDB) == SQLITE_OK) {
    
}

//Close
sqlite3_close(mySqliteDB)

//Execute SQL
if (sqlite3_exec(mySqliteDB, (query as NSString).UTF8String, nil, nil, &errMsg) != SQLITE_OK) {}

```

[sqlite3_step](https://www.safaribooksonline.com/library/view/using-sqlite/9781449394592/re325.html)

```swift
var stmt:COpaquePointer = nil
if(sqlite3_prepare_v2(mySqliteDB, (selectSql as NSString).UTF8String, -1, &stmt, nil) == SQLITE_OK) {
    if(sqlite3_step(stmt) == SQLITE_ROW) {
        rowid = String(sqlite3_column_int(stmt, 0))
        
    }
    sqlite3_finalize(stmt)
}
sqlite3_close(mySqliteDB)
```