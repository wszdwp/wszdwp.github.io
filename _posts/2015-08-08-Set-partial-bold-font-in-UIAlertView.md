---
title: Set partial bold font in UIAlertView
layout: post
tag: iOS
---

{% highlight Swift %}
@IBAction func SubmitAction(sender: AnyObject) { 
    generatePopupAlert() 
}

func generatePopupAlert() { 
    var attributedMessage = convertToAttributedString("Do you want to delete line ", bold1: lineNum, normal2: ", Click OK to confirm!", bold2: "", normal3: "", size: 14.0) 
    myAlertController("",messageStr: attributedMessage) 
}

func myAlertController(titleStr: String, messageStr: NSMutableAttributedString, selectedVendorId:String) { 
    var alertController = UIAlertController(title: titleStr, message: "", preferredStyle: .Alert)

    alertController.setValue(titleStr, forKey: "attributedTitle")
    alertController.setValue(messageStr, forKey: "attributedMessage")

    var cancelAction = UIAlertAction(title: "Cancel", style: UIAlertActionStyle.Cancel) {
        UIAlertAction in
        var okAction = UIAlertAction(title: "OK", style: UIAlertActionStyle.Default) {
            UIAlertAction in
            self.sendRequest()
        }
        alertController.addAction(cancelAction)
        alertController.addAction(okAction)

        self.presentViewController(alertController, animated: true, completion: nil) 
    }
}

func convertToAttributedString(normal1: String, bold1: String, normal2: String, bold2: String, normal3:String, size: CGFloat) -> NSMutableAttributedString { 
    var combined = normal1 + bold1 + normal2 + bold2 + normal3 
    var attrStr = NSMutableAttributedString(data: combined.dataUsingEncoding(NSUTF8StringEncoding)!, options: nil, documentAttributes: nil, error: nil) 
    
    attrStr?.addAttribute(NSFontAttributeName, value: UIFont.systemFontOfSize(size), range: NSRange(location: 0,length: countElements(normal1)))
    attrStr?.addAttribute(NSFontAttributeName, value: UIFont.boldSystemFontOfSize(size), range: NSRange(location:countElements(normal1),length: countElements(bold1)))
    attrStr?.addAttribute(NSFontAttributeName, value: UIFont.systemFontOfSize(size), range: NSRange(location: countElements(normal1 + bold1),length: countElements(normal2)))
    attrStr?.addAttribute(NSFontAttributeName, value: UIFont.boldSystemFontOfSize(size), range: NSRange(location: countElements(normal1 + bold1 + normal2),length: countElements(bold2)))
    attrStr?.addAttribute(NSFontAttributeName, value: UIFont.systemFontOfSize(size), range: NSRange(location: countElements(normal1 + bold1 + normal2 + bold2),length: countElements(normal3)))

    if attrStr == nil {
        NSLog("Error")
    }
    
    return attrStr! 
}
{% endhighlight %}

References    
1. [UIAlertController custom font, size, color](http://stackoverflow.com/questions/26460706/uialertcontroller-custom-font-size-color)     
2. [How to use NSKeyValueCoding protocol while designing data models?](http://stackoverflow.com/questions/14940514/how-to-use-nskeyvaluecoding-protocol-while-designing-data-models)     
3. [Key-Value Prgramming Guide from Apple](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/KeyValueCoding/Articles/KeyValueCoding.html)