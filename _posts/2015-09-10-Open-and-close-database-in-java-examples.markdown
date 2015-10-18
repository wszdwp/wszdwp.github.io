---
title: Open and close database in Java
layout: post
tags: SQL
---

{% highlight Java %}
MyDb db = new MyDb(context);
  
try {
    // Do stuff
    db.open();


} catch (SQLException ex) {
    // Exception handling stuff
} finally {
    if (db != null) {
        try {
            db.close();
        } catch (SQLException e) { /* ignored */}
    }
}
{% endhighlight %}
