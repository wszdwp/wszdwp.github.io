---
title: UITableView method is not called when cell is clicked on
layout: post
---

When UITapGestureRecognizer is added into the superview,and the super view contains the tableView,
the tab event on the cells would be eaten up.

{% highlight swift %}
//Solu:(Swift) 
yourtableview.cancelsTouchesInView = false
{% endhighlight %}
