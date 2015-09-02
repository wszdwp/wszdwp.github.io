---
title: SQLite FTS Query Example (on going)
layout: post
tags: SQLiteDb
---


#CRUD Queries

{% highlight Java linenos %}
	public static final String LOG_TAG = "EmployeeDb";
	public static final String FTS_VIRTUAL_TABLE = "Employee";

	public static final String KEY_NAME = "name";
	public static final String KEY_GENDER = "gender";
	public static final String KEY_CONTACT = "contact";
	public static final String KEY_DESCR = "descripion";

{% endhighlight %}

## CREATE

## SELECT
{% highlight Java linenos %}
String inputText = getInputText();
String query = "SELECT " + EmployeeDb.FTS_VIRTUAL_TABLE + "." +
				"docid as _id " + ","
				+ KEY_NAME + "," 
				+ KEY_GENDER + ","
				+ KEY_CONTACT + ","
				+ KEY_DESCR
				+ " FROM " + FTS_VIRTUAL_TABLE +" WHERE " + FTS_VIRTUAL_TABLE + " MATCH '"
				+ name: Chris gender: male + KEY_SEARCH + ":" +inputText + "*" + "'";
{% endhighlight %}
## UPDATE

## DELETE

