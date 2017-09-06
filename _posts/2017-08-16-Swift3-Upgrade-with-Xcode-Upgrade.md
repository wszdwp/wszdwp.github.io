---
title: Upgrade Xcode from 7.3.0 to 8.3.3, swift from 2.2 to 3.1
layout: post
tags: iOS
---


# Swift  

## Errors and Warnings

```swift
// from  
DispatchQueue.global(priority: DispatchQueue.GlobalQueuePriority.default).async

// to   
DispatchQueue.global(qos: DispatchQoS.QoSClass.default).async


// from  
crashInfo.appName = String(cString: (UnsafePointer<CChar>)(sqlite3_column_text(compiledStatement, 0)))

// to  
crashInfo.appName = String(cString: sqlite3_column_text(compiledStatement, 0))


// from 
let attributedOptions : [String: AnyObject] = [
                NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType as AnyObject,
                NSCharacterEncodingDocumentAttribute: String.Encoding.utf8 as AnyObject
            ]

// to  
let attributedOptions : [String: AnyObject] = [
                NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType as AnyObject,
                NSCharacterEncodingDocumentAttribute: String.Encoding.utf8.rawValue as AnyObject
            ]

// from  
let errMsg:UnsafeMutablePointer<UnsafeMutablePointer<Int8>>? = nil
sqlite3_exec(mySqliteDB, ("BEGIN EXCLUSIVE TRANSACTION" as NSString).utf8String, nil, nil, errMsg)

// to  
var errMsg:UnsafeMutablePointer<Int8>? = nil
sqlite3_exec(mySqliteDB, "BEGIN EXCLUSIVE TRANSACTION", nil, nil, &errMsg)


[super awakeFromNib]; // in func awakeFromNib(){ }

```

## For camera use in iOS 10
add ```Privacy - Camera Usage Description``` in ```plist```, otherwise it would crash with missing **NSCameraUsageDescription** error


