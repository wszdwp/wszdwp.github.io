---
title: This app will not work with future version of iOS warning
layout: post
tags: iOS
---


# What happened is  
Start from Apr 5 2017, with iOS 10.3 or later iOS version, you might see this warning  
```
This app will not work with future version of iOS. 
The developer of this app needs to update it to improve its compatibility
```

Apple has also required developers submit new apps with 64-bit support since February 2015 and app updates since June 2015.

The switch to 64-bit only support means that older iOS devices built on 32-bit architecture will not be able to upgrade to the new iOS. This includes the iPhone 5, 5c, and older, the standard version of the iPad (so not the Air or the Pro), and the first iPad mini.

## What does this warning mean is  
In the iOS 11 is your 32-bit app will no longer work on iOS11. You need to build app on arm64 to make it running.  
[June 28, 2017 64-bit app in iOS 11](https://developer.apple.com/news/?id=06282017b)  

## What you can do is  
Refer to the docs to check your device model and compatibility  
[iOS Device Support Matrix](https://static1.squarespace.com/static/51adfbd9e4b095d664d9b869/t/597ef5abd2b8570b18d77c52/1501492652294/Matrix_16by9-8k.pdf)  
[iPod Model](https://support.apple.com/en-us/HT204217)  
[iPhone Model](https://support.apple.com/en-ca/HT201296)  
[iPad Model](https://support.apple.com/en-us/HT201471)  

Read the guide for converting to 64-bit Binary
[Convert your app to 64-bit Binary](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/Cocoa64BitGuide/ConvertingExistingApp/ConvertingExistingApp.html)

## How to change your build settings in XCode     
In project build settings
change architectures from ```$(ARCHS_STANDARD)``` to ```arm64```  
in your valid architectures settings(both project level and target level), you also need to add ```arm64``` if this is missing there.  

refs  
[https://support.apple.com/en-us/HT207449](https://support.apple.com/en-us/HT207449)  
[https://9to5mac.com/2017/01/31/ios-10-3-beta-32-bit-app-warning/](https://9to5mac.com/2017/01/31/ios-10-3-beta-32-bit-app-warning/)    
[http://www.macworld.com/article/3163248/ios/the-future-of-ios-is-64-bit-only-apple-to-stop-support-of-32-bit-apps.html](http://www.macworld.com/article/3163248/ios/the-future-of-ios-is-64-bit-only-apple-to-stop-support-of-32-bit-apps.html)   
