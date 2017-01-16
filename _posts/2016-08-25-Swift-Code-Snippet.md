---
title: Swift code snippet
layout: post
tags: iOS
---


# Some swift code  

```swift
// String to Double
let doubleString = "0.0"
let emptyString = ""

let doubleStringVal = (doubleString as NSString).doubleValue
let emptyStringVal = (emptyString as NSString).doubleValue

let doubleStringValue = Double(doubleString)
let emptyStringValue:Double? = Double(emptyString)

// Substring
let str1 = "000003999000"
str1.substringWithRange(Range<String.Index>(start: str1.startIndex, end: str1.endIndex.advancedBy(-3)))
str1.substringWithRange(Range<String.Index>(start: str1.endIndex.advancedBy(-3), end: str1.endIndex))

// String compare
let stocking = "Stocking"
let stOcking = ""
let STOCKING = "STOCKING"
STOCKING.lowercaseString == stocking.lowercaseString    //true
STOCKING == stocking    //false
stocking.caseInsensitiveCompare(STOCKING) == NSComparisonResult.OrderedSame //true


// Array (important)
let shoppingList = ["Eggs", "Milk"]
//shoppingList[0] = "Bread"             // can not assign value to a array element, error
var shoppingList2 = ["Eggs", "Milk"]
var shoppingList2_copy = shoppingList2
shoppingList2_copy[0] = "Bread"
shoppingList2                           //["Eggs", "Milk"]
shoppingList2_copy                      //["Bread", "Milk"]


// Check API availability in iOS
if #available (iOS 8, *) {
    
}

@available (iOS 9, *) 
func myFunc{
    //Only work for >= iOS 9
}
```

