---
layout: default
title: UITableView method is not called when cell is clicked on
---

When UITapGestureRecognizer is added into the superview,and the super view contains the tableView,<br>
the tab event on the cells would be eaten up. 

Solu:(Swift)       
```      
yourtableview.cancelsTouchesInView = false
```

[Ref link](http://stackoverflow.com/questions/8952688/didselectrowatindexpath-not-being-called/9248827#9248827)

<p>{{ page.date | date_to_string }}</p>


