---
title: Download image with url in Swift
layout: post
tag: iOS
---

# Swift
{% highlight Swift %}
let imageURLStr = "https://avatars3.githubusercontent.com/u/3345765?v=3&s=460"  //Image url
                dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0)) {
                    let imageURL = NSURL(string: imageURLStr)
                    let data:NSData?  = NSData(contentsOfURL: imageURL!)
                    dispatch_async(dispatch_get_main_queue(), {
                        if data == nil {
                            cell.itemImage.setImage(UIImage(named: "NoImageFound.png"), forState: UIControlState.Normal)
                        } else {
                            cell.itemImage.setImage(UIImage(data:data!), forState: UIControlState.Normal)
                        }
                    });
                }
{% endhighlight %}

References:
[SO answer](http://stackoverflow.com/questions/24231680/loading-downloading-image-from-url-on-swift#27517280)