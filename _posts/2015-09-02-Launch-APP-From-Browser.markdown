---
title: Launch app from browser
layout: post
tags: Android iOS
---
##iOS
1. Create URL Types in project-info.plist
2. Add new URL Identifier
3. Create custom URL scheme 

[Tutorial step by step with pictures](http://iosdevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html)
[SO answer](http://stackoverflow.com/questions/25883113/open-ios-app-from-browser)


##Android

###Add custom scheme    
-1. In manifest add intent filer as below
{% highlight xml %}
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.BROWSABLE" />
    <category android:name="android.intent.category.DEFAULT" />
	<data android:scheme="myApp"/>  
</intent-filter>
{% endhighlight %}
-2. In your broswer, input **myApp://**      
My test failed in local, I guess it might be the broswer in your mobile device appends some thing on your request URL. It can work when you put a html page which contains **\<a href="myApp://"> Start your application\<\a>**