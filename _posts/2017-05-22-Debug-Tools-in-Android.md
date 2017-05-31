---
title: Debug tools in Android
layout: post
tags: Android
---

# Android

## View SQLite of Android App in Chrome Dev Tools

Stetho - A debug bridge for Android applications from Facebook  
[http://facebook.github.io/stetho/](http://facebook.github.io/stetho/)  


Prerequisites: Android studio with android device connectted.

1. In build.gradle 
{% highlight gradle %}
dependencies {
    // Stetho core
    compile 'com.facebook.stetho:stetho:1.5.0'
    compile 'com.facebook.stetho:stetho-js-rhino:1.4.2'
}  
{% endhighlight %}

2. In Application
{% highlight Java %}
    public void onCreate() {  
        super.onCreate(); 
        // Init Stetho 
        Stetho.initializeWithDefaults(this);
    }  
{% endhighlight %}

3. In your Chrome, type ```chrome://inspect/```, select your connected device to debug

4. In Chrome Developer Tools, select Resources on top toolbar and select Web SQL on left tool pane for checking data in your SQLite. You can type in and run sql query in right command area(not the bottom console area).






