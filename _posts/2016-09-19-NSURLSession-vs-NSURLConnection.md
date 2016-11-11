---
title: NSURLConnection vs NSURLSession
layout: post
tags: iOS
---

NSURLConnection vs NSURLSession

[Networking Overview Guide](https://developer.apple.com/library/content/documentation/NetworkingInternetWeb/Conceptual/NetworkingOverview/WorkingWithHTTPAndHTTPSRequests/WorkingWithHTTPAndHTTPSRequests.html#//apple_ref/doc/uid/TP40010220-CH8-SW1)

Retrieving the Contents of a URL with Delegates
If your app needs more control over your request, such as controlling whether redirects are followed, performing custom authentication, or obtaining the data piecewise as it is received, you can use the NSURLSession class with a custom delegate. For compatibility with earlier versions of OS X and iOS, you can also use the NSURLConnection class with a custom delegate.

For the most part, the NSURLSession and NSURLConnection classes work similarly at a high level. However, there are a few significant differences:

The NSURLSession API provides support for download tasks that behave much like the NSURLDownload class. This usage is described further in Downloading the Contents of a URL to Disk.
When you create an NSURLSession object, you provide a reusable configuration object that encapsulates many common configuration options. With NSURLConnection, you must set those options on each connection independently.
An NSURLConnection object handles a single request and any follow-on requests.
An NSURLSession object manages multiple tasks, each of which represents a single URL request and any follow-on requests. You usually create a session when your app launches, then create tasks in much the same way that you would create NSURLConnection objects.

With NSURLConnection, each connection object has a separate delegate. With NSURLSession, the delegate is shared across all tasks within a session. If you need to use a different delegate, you must create a new session.
When you initialize an NSURLSession or NSURLConnection object, the connection or session is automatically scheduled in the current run loop in the default run loop mode.

The delegate you provide receives notifications throughout the connection process, including intermittent calls to the URLSession:dataTask:didReceiveData: or connection:didReceiveData: method when a connection receives additional data from the server. It is the delegate’s responsibility to keep track of the data it has already received, if necessary. As a rule:

If the data can be processed a piece at a time, do so. For example, you might use a streaming XML parser.
If the data is small, you might append it to an NSMutableData object.
If the data is large, you should write it to a file and process it upon completion of the transfer.
When the URLSession:task:didCompleteWithError: or connectionDidFinishLoading: method is called, the delegate has received the entirety of the URL’s contents.

