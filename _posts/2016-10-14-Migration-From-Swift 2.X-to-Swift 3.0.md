---
title: Migration from Swift 2.X to Swift 3.0
layout: post
tags: iOS
---

# Swift 2.X to Swift 3.0

1. id in Objective-C is not AnyObject but Any, casting using as  

```swift
(value as AnyObject).boolValue
```

2. errMsg:UnsafeMutablePointer<UnsafeMutablePointer<Int8>?> in C API as char **, change to 

```swift
var errMsg:UnsafeMutablePointer<Int8>? = nil
```