---
title: JSON and string conversion in Android
layout: post
tags: Android
---

##Object and JSONString
{% highlight java %}
//Object to JSONString
Gson gson = new Gson();
String myObjectJsonStr = gson.toJson(myObject);

// List of Objects to JsonString
String myObjectJsonStr = gson.toJson(myList);


//JSONString to Object
Gson gson = new Gson();
MyClass myObject = gson.fromJson(myJSONObject, MyClass.class);

//JSONString to List of Objects
Type type = new TypeToken<ArrayList<MyClass>>() {}.getType()
ArrayList<MyClass> myObject = gson.fromJson(myObjectJsonStr, type);
{% endhighlight %}
