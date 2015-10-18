---
title: SQL query left (outer) join
layout: post
tags: SQL
---

My application senario   
Set A and set B, A contains all the data in B, but B only contains part of the data in A.
Example: my sales orders are table A, once the order is finished, the order will be copied into my history sales orders table which is table B. 

{% highlight sql %}
//Select col1 and col2 only in table1
SELECT col1, col2 FROM table1 LEFT JOIN table2 
	ON table1.PRIKEY1 = table2.PRIKEY1
	AND	table1.PRIKEY2 = table2.PRIKEY2
	AND table1.PRIKEY3 = table2.PRIKEY3
	WHERE table1.PRIKEY4 IS NOT NULL
	AND table1.PRIMKEY4 = 'myPrikey4';

//Select col1 and col2 only in table2
SELECT col1, col2 FROM table1 LEFT JOIN table2 
	ON table1.PRIKEY1 = table2.PRIKEY1
	AND	table1.PRIKEY2 = table2.PRIKEY2
	AND table1.PRIKEY3 = table2.PRIKEY3
	WHERE table1.PRIKEY4 IS NULL
	AND table1.PRIMKEY4 = 'myPrikey4';
{% endhighlight %}

Refs
[http://stackoverflow.com/questions/406294/left-join-and-left-outer-join-in-sql-server](http://stackoverflow.com/questions/406294/left-join-and-left-outer-join-in-sql-server)
[http://www.oschina.net/question/89964_65912](http://www.oschina.net/question/89964_65912)
