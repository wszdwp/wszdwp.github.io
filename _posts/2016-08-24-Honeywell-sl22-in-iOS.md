---
title: Honeywell Captuvo SL22 Barcode Scanner Integration in iOS
layout: post
tags: iOS
---


## **Configuration**
1. Drag honeywell sdk into your project, you should be able see **libCaptuvoSDK.a** been added into your **general, linked frameworks and libraries**

2. In general, linked frameworks and libraries, add ExternalAccessory.framework

3. In Info.plist file, add
{% highlight xml %}
    <key>UISupportedExternalAccessoryProtocols</key>
    <array>
        <string>com.honeywell.scansled.protocol.decoder</string>
        <string>com.honeywell.scansled.protocol.msr</string>
        <string>com.honeywell.scansled.protocol.pm</string>
    </array>
{% endhighlight %}

## **How to use**

### **In AppDelegate** (App level) 
- Add CaptuvoEventsProtocol in AppDelegate class
{% highlight swift %}
class AppDelegate: UIResponder, UIApplicationDelegate, CaptuvoEventsProtocol {...}
{% endhighlight %}

- Override funcs in CaptuvoEventsProtocol
{% highlight swift %}
func captuvoConnected() {
    Captuvo.sharedCaptuvoDevice().startDecoderHardware()
}

func captuvoDisconnected() {

}
{% endhighlight %}

- In didFinishLaunchingWithOptions
{% highlight swift %}
Captuvo.sharedCaptuvoDeviceDebug().addCaptuvoDelegate(self)
Captuvo.sharedCaptuvoDevice().startDecoderHardware()    
{% endhighlight %}

- In applicationDidEnterBackground
{% highlight swift %}
Captuvo.sharedCaptuvoDevice().stopDecoderHardware()    
{% endhighlight %}

- In applicationWillEnterForeground
{% highlight swift %}
Captuvo.sharedCaptuvoDevice().startDecoderHardware()
{% endhighlight %}

### **In ViewController** (ViewController level) 
- Enable device delegate  
{% highlight swift %}
override func viewWillAppear(animated: Bool) {
    super.viewWillAppear(true)
    Captuvo.sharedCaptuvoDeviceDebug().addCaptuvoDelegate(self)
}

override func viewWillDisappear(animated: Bool) {
    super.viewWillDisappear(true)
    Captuvo.sharedCaptuvoDeviceDebug().removeCaptuvoDelegate(self)
}
{% endhighlight %}

- Receive barcode reading   
{% highlight swift %}
func decoderDataReceived(data: String!) {
    self.myUITextField.text = data //fill up into UITextField
    self.submitAction("")   //auto click submit btn
}
{% endhighlight %} 




