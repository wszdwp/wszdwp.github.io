---
title: Calendar Date in Android
layout: post
tags: Android
---

```java
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

// Get Date from Calendar 
Date currentTime = Calendar.getInstance().getTime();

// DateFormatter
DateFormat df = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.getDefault());

// Calendar Date to String
String dateString = df.format(Calendar.getInstance().getTime());

// String to Calendar Date
Calendar cal = Calendar.getInstance();
cal.setTime(df.parse(dateString));
```