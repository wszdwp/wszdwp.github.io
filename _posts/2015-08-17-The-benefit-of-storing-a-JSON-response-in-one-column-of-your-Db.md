---
title: The benefit of storing a JSON response in one column of your database
layout: post
tags: SQL
---

In my previous projects, I store the JSON response into Object, and then I map object's properties to each column of my SQLiteDb table in iOS or android. The drawback of doing so is cost of updating the table when your JSON response changed. This is a headache thing when your app with those Dbs in production. 

If I treat my whole response as one column and set an unique key, I don't need to worry about the Db upgrade when my JSON response changed(like adding new field) on the server side. 

Of course, the cost of this is I need parse the String data to json first in my viewController(iOS) or activity(android). Then I can get my information and by parsing JSON to my objects .