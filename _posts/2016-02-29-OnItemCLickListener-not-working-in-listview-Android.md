---
title: OnItemClickListener is not working in listView Android
layout: post
tags: Android
---


Solution:   
{% highlight Xml %}
android:descendantFocusability="blocksDescendants"
{% endhighlight %}

# What
Tap on row of your listView, the OnItemClickListener is not called.

# How
If any row item of list contains focusable or clickable view then OnItemClickListener won't work.
The row item must have a param like android:descendantFocusability="blocksDescendants" in order to be getting called.

# Why


references  
[SO link](http://stackoverflow.com/questions/5551042/onitemclicklistener-not-working-in-listview-android)
