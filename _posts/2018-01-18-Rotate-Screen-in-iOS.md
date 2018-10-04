---
title: Rotate screen in iOS
layout: post
tag: iOS
published: true
---


# Rotate screen in iOS
In general, screen rotation can be controlled in either app level or viewcontroller level.  
1. App level control level is greater than viewcontroller level.  
2. For app level, two ways can be set up rotations, one is in the .plist, the other is in AppDelegate.  
 
## App level 
### plist  

```
    <key>UISupportedInterfaceOrientations</key>
    <array>
        <string>UIInterfaceOrientationLandscapeLeft</string>
        <string>UIInterfaceOrientationLandscapeRight</string>
        <string>UIInterfaceOrientationPortraitUpsideDown</string>
        <string>UIInterfaceOrientationPortrait</string>
    </array>
    <key>UISupportedInterfaceOrientations~ipad</key>
    <array>
        <string>UIInterfaceOrientationLandscapeLeft</string>
        <string>UIInterfaceOrientationLandscapeRight</string>
    </array>
    <key>UISupportedInterfaceOrientations~iphone</key>
    <array>
        <string>UIInterfaceOrientationPortrait</string>
        <string>UIInterfaceOrientationLandscapeRight</string>
    </array>
```

### AppDelegate  
```
// Example: In iPhone device, we need only one viewcontrollers (DetailInfoViewController) can rotate to both portrait and landscape except upsidedown orientation. For the other viewcontrollers only allow one one orientation portrait. In iPad device, allow all rotation except for upside down.

func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
        if UIDevice.current.userInterfaceIdiom == .phone {
            guard let allVC = application.keyWindow?.rootViewController?.childViewControllers else {
                return UIInterfaceOrientationMask.portrait
            }
            guard let topVC = allVC.last else {
                return UIInterfaceOrientationMask.portrait
            }
            if topVC is DetailInfoViewController {  
                return UIInterfaceOrientationMask.allButUpsideDown
            } else {
                return UIInterfaceOrientationMask.portrait
            }
        } else {
            return UIInterfaceOrientationMask.allButUpsideDown
        }
    }

```  


## ViewController  

### Check current screen orientation

**WARNINGS: Issues of relying on ```UIDevice.current.orientation.isPortrait``` to detect device orientation**

When device is put on the table, ```UIDevice.current.orientation.isPortrait``` and ```UIDevice.current.orientation.isLandscape``` both return **false**, ```UIDevice.current.orientation.isFlat``` is return **true**. In this case, we better use ```UIApplication.shared.statusBarOrientation ``` to detect device orientation

### Force to rotate the screen
```
// force to rotate to portrait
override func viewWillAppear(_ animated: Bool) {
    super.viewWillAppear(true)
    // force to portrait
    if (UIApplication.shared.statusBarOrientation == .landscapeLeft || UIApplication.shared.statusBarOrientation == .landscapeRight) {
        let value = UIInterfaceOrientation.landscapeLeft.rawValue
        UIDevice.current.setValue(value, forKey: "orientation")
    }
}
```

### Do something when doing rotation  
```
    override func willTransition(to newCollection: UITraitCollection, with coordinator: UIViewControllerTransitionCoordinator) {
        coordinator.animate(alongsideTransition: { (_) in
            if UIApplication.shared.statusBarOrientation == .landscapeLeft || UIApplication.shared.statusBarOrientation == .landscapeRight {
                    print("do something when from Portrait to Landscape")
                } else {
                    print("do something whenfrom Landscape to Portrait")
                }
        }, completion: { (UIViewControllerTransitionCoordinatorContext) -> Void in
            print("rotation completed")
        })
        
        super.willTransition(to: newCollection, with: coordinator)
    }

```


