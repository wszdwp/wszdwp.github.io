---
title: Fix Layout After Safe Area Layout Guides Enabled in Existed project
layout: post
tags: iOS
published: true
---

## Fix view blocked on the top issue in iphone X  
```
// Interface Builder
1. top space to superview >= 68    // priority = 750
2. check Use Safe Area Layout Guides to enable it
3. add Align Top to Safe Area == 5 // priority = 250
```

## Fix extra inset on top of tableview  
```swift
if #available(iOS 11.0, *) {
    myTableView.contentInsetAdjustmentBehavior = .never
} else {
    automaticallyAdjustsScrollViewInsets = false
}
```

# Some gist for layout
## Add boarder and round corner in IB  
```
// Add User Defined Runtime Attributes
layer.cornerRadius = 5
layer.borderWidth = 0.5
```

## Add background image
```swift
let imgView:UIImageView = UIImageView(image: UIImage(named: "background.png")!)
imgView.frame = UIScreen.main.bounds
self.view.insertSubview(imgView, at: 0)
```



