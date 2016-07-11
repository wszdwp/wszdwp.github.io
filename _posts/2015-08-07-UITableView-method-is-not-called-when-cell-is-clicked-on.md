---
title: UITableView method is not called when cell is clicked on
layout: post
tags: iOS
---

When UITapGestureRecognizer is added into the superview,and the super view contains the tableView,
the tab event on the cells would be eaten up.

{% highlight Swift %}
yourtableview.cancelsTouchesInView = false
{% endhighlight %}
