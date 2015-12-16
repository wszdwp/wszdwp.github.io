---
title: Pull up refresh tableView in Swift
layout: post
tags: iOS
---

# How to detect pull down gesture?	

{% highlight swift %} 

	var pullUpDragging:Bool = false
    var pullDownDragging:Bool = false
    var startOffset:CGFloat = 0

    override func viewDidLoad() {
        super.viewDidLoad()
        //...

    	updateLabel = UILabel(frame: CGRectMake(productListTable.bounds.width/2 - 35, 0, 70, 30))
        updateLabel.text = "Loading..."
        updateLabel.textColor = UIColor(red: 0.0, green: 122.0/255.0, blue: 1.0, alpha: 1.0)
        updateLabel.hidden = true
        self.productListTable.addSubview(updateLabel)
        self.productListTable.tableFooterView = updateLabel
    }

	func scrollViewWillBeginDragging(scrollView: UIScrollView) {
        startOffset = scrollView.contentOffset.y
    }

    func scrollViewDidScroll(scrollView:UIScrollView) {
        if (scrollView.contentOffset.y < 0) {
            pullDownDragging = true
        }
    }
    
    
    
    func scrollViewDidEndDragging(scrollView: UIScrollView, willDecelerate decelerate: Bool) {
        if (startOffset + scrollView.frame.height >= scrollView.contentSize.height)
        && !pullDownDragging {
            pullUpDragging = true
            updateLabel.hidden = false
        }
    }
    
    func scrollViewDidEndDecelerating(scrollView: UIScrollView) {
        if pullUpDragging && !waitForResponse {
            //To send request and refresh the data
        }
        pullUpDragging = false
        pullDownDragging = false
        updateLabel.hidden = true
    }
{% endhighlight %}
