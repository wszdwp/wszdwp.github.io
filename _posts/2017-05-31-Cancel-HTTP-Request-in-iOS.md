---
title: Cancel http request task in iOS
layout: post
tags: iOS
---

1. Create ```NSURLSession``` ```NSURLSessionDataTask``` in ```ViewController``` 
2. Init ```NSURLSessionDataTask``` in ```dataTaskWithRequest()```
3. Exsited ```NSURLSessionDataTask``` can be ```cancel()```
4. Created ```NSURLSessionDataTask``` can be start by ```resume()```

```swift
let defaultSession = NSURLSession(configuration: NSURLSessionConfiguration.defaultSessionConfiguration())
var dataTask: NSURLSessionDataTask?
```

```swift
var dataTask: NSURLSessionDataTask? = NSURLSession().dataTaskWithRequest(request, completionHandler: {(data, response, error) in { }) 
```

```swift
dataTask.cancel()
```

```swift
dataTask.resume()
```

ps: in dataTaskWithRequest, completionHandller is run on background by default


In searchBar textDidChange,
 
```swift
func searchBar(searchBar: UISearchBar, textDidChange searchText: String) {
    if searchText.characters.count >= MIN_QUERY_LEN { 
        if self.dataTask != nil {
            NSLog("cancel request task")
            self.dataTask?.cancel()
        }

        let requestType = "MyRequestType1"
        var requestURL = "https://myservice/myserviceType?"
        var requestBody = "&param1=001&param2=002"
        if let url = NSURL(string:"\(requestURL)") {
            
            let request:NSMutableURLRequest = NSMutableURLRequest(URL: url, cachePolicy: NSURLRequestCachePolicy.ReloadIgnoringLocalCacheData, timeoutInterval: 60.0)
            request.HTTPMethod = "POST"
            request.HTTPBody = (requestBody as NSString).dataUsingEncoding(NSUTF8StringEncoding)
            
            // This completion block is run on background by default, no need to dispatch it to background using GCD. 
            self.dataTask = defaultSession.dataTaskWithRequest(request, completionHandler: {(data, response, error) in
                if let error = error {
                    print(error.localizedDescription)
                } else if let httpResponse = response as? NSHTTPURLResponse {
                    if httpResponse.statusCode == 200 {
                        // Dispatch to main queue if need dealing with response data in main queue
                        dispatch_async(dispatch_get_main_queue()) {
                            //TODO: deal with response data
                        }
                    }
                }

            });
            
            self.dataTask?.resume()
        }
    }
}

```

refs:  
[https://developer.apple.com/reference/foundation/nsurlsession?language=objc](https://developer.apple.com/reference/foundation/nsurlsession?language=objc)
[https://developer.apple.com/reference/foundation/nsurlsessiontask](https://developer.apple.com/reference/foundation/nsurlsessiontask)
[https://stackoverflow.com/questions/31345250/how-to-cancel-on-going-http-request-in-swift](https://stackoverflow.com/questions/31345250/how-to-cancel-on-going-http-request-in-swift)
[https://stackoverflow.com/questions/31746229/does-nsurlsession-for-http-data-task-nsurlsessiondatatask-runs-in-background-t](https://stackoverflow.com/questions/31746229/does-nsurlsession-for-http-data-task-nsurlsessiondatatask-runs-in-background-t)  
[https://stackoverflow.com/questions/19099448/send-post-request-using-nsurlsession](https://stackoverflow.com/questions/19099448/send-post-request-using-nsurlsession)[https://www.raywenderlich.com/110458/nsurlsession-tutorial-getting-started](https://www.raywenderlich.com/110458/nsurlsession-tutorial-getting-started) 
[https://stackoverflow.com/questions/21918722/how-do-i-use-nsoperationqueue-with-nsurlsession](https://stackoverflow.com/questions/21918722/how-do-i-use-nsoperationqueue-with-nsurlsession) 
