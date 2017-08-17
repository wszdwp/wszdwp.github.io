---
title: Upgrade Xcode from 7.3.0 to 8.3.3, swift from 2.2 to 3.1
layout: post
tags: iOS
---


# Swift  

## Warnings

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


```

