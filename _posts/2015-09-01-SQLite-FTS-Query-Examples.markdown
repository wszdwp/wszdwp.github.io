---
title: SQLite FTS query example (on going)
layout: post
tags: SQL
---


#CRUD Queries

{% highlight Java %}
	public static final String LOG_TAG = "EmployeeDb";
	public static final String FTS_VIRTUAL_TABLE = "Employee";

	public static final String KEY_NAME = "name";
	public static final String KEY_GENDER = "gender";
	public static final String KEY_CONTACT = "contact";
	public static final String KEY_DESCR = "descripion";

{% endhighlight %}

## CREATE

## SELECT
{% highlight Java %}
String inputText = getInputText();
String query = "SELECT " + EmployeeDb.FTS_VIRTUAL_TABLE + "." +
				"docid as _id " + ","
				+ KEY_NAME + "," 
				+ KEY_GENDER + ","
				+ KEY_CONTACT + ","
				+ KEY_DESCR
				+ " FROM " + FTS_VIRTUAL_TABLE +" WHERE " + FTS_VIRTUAL_TABLE + " MATCH '"
				+ name: Chris gender: male + KEY_SEARCH + ":" +inputText + "*" + "'";

"CREATE VIRTUAL TABLE " + FTS_VIRTUAL_TABLE + " USING fts4(" +
	KEY_FIRSTNAME + "," +
	KEY_LASTNAME + "," +
	KEY_GENDER + "," +
	KEY_AGE + "," +
	KEY_DEPARTMENT + "," +
	KEY_MAJOR + "," +
	KEY_STUDENTID + "," +  
	UNIQUE (" + KEY_STUDENTID + "," + KEY_DEPARTMENT + "))";

{% endhighlight %}

{% highlight sql %} 
SELECT * FROM words_fts WHERE words_fts MATCH 'company';
{% endhighlight %}

{% highlight sql %} 
SELECT * FROM words_fts WHERE words_fts MATCH 'description: company';
{% endhighlight %}


{% highlight sql %} 
SELECT * FROM words_fts WHERE words_fts MATCH 'description: comp*';
{% endhighlight %}
## UPDATE

## DELETE


###References
1. [Android Quick Tip: Using SQLite FTS Tables](http://blog.andresteingress.com/2011/09/30/android-quick-tip-using-sqlite-fts-tables/)
