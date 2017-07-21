---
title: Tracking in Android
layout: post
tags: Android
published: true
---


# 用户行为的统计  
Google Analytics - Tracking  
GA旧的统计方式是用Google Analytics SDK for Android.

## 跟踪4个方面  
1. App installations  
2. Active users and demographics  
3. Screens and user engagement  
4. Crashes and exceptions  

## 如何配置  
1. Update AndroidManifest.xml  
开网络访问权限  

2. Add EasyTracker methods (Activity level)  
在 ```onStart()``` and ```onStop()`` 中添加send的方法，  

3. Create your analytics.xml file  
全局的tracking配置， ga_trackingId, ga_autoActivityTracking, ga_reportUncaughtExceptions  

4. Gradle build dependencies中， 需要加入``compile files('libs/libGoogleAnalyticsServices.jar')``

