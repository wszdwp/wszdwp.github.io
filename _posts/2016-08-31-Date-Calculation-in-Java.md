---
title: Date Calculation in Java
layout: post
tags: Android
published: true
---


## Display
[test](#test-header)

## Caculation


## Conversion

### Formatted string -> Date object
```java
String fmtDateString = "20160831";
DateFormat df = new SimpleDateFormat("yyyyMMdd", Locale.US);
Date dt = df.parse(fmtDateString); // need to deal with java.text.ParseException
```

### Calendar -> Date
```java
Date coolDate = new GregorianCalendar(year, month, day).getTime();
```

### Date object -> Formatted string
```java
Date dt = new Date();
DateFormat df = new SimpleDateFormat("yyyyMMdd", Locale.US);
String fmtDateString = df.format(dt);
```


## Date object to Calendar
```java
Calendar calendar = Calendar.getInstance();
calendar.setTime(date);
```



## test header


## Refs  
[so 0](http://stackoverflow.com/questions/9208126/to-find-the-next-work-day)
[so 1](http://stackoverflow.com/questions/4637238/how-to-check-if-its-saturday-sunday)
[so 2](http://stackoverflow.com/questions/2379835/construct-date-an-efficient-way)
