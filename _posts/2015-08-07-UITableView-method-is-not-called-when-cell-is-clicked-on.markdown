When UITapGestureRecognizer is added into the superview,and the super view contains the tableView,
the tab event on the cells would be eaten up.

```Swift
//Solu:(Swift) 
yourtableview.cancelsTouchesInView = false
```