---
title: Learn iOS From Questions
layout: post
tags: iOS
---


# UIViews

1. On a UITableViewCell constructor:   
``` 
-(id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
```

What is the reuseIdentifier used for? 

2. Difference between atomic and nonatomic synthesized properties?

3. copy vs retain

4. What is method swizzling in Objective C and why would you use it?

5. What’s the difference between not-running, inactive, active, background and suspended execution states?

6. What is a category and when is it used? 
A category is a way of adding additional methods to a class without extending it. It is often used to add a collection of related methods. A common use case is to add additional methods to built in classes in the Cocoa frameworks. For example adding async download methods to the UIImage class.

7. Can you spot the bug in the following code and suggest how to fix it:

8. What is the difference between viewDidLoad and viewDidAppear? Which should you use to load data from a remote server to display in the view?

9. What considerations do you need when writing a UITableViewController which shows images downloaded from a remote server?

10. What is a protocol, how do you define your own and when is it used?

11. What is KVC and KVO? Give an example of using KVC to set a value.

12. What are blocks and how are they used?

13. What mechanisms does iOS provide to support multi-threading?

```objective-c
//1. NSThread creates a new low-level thread which can be started by calling the start method.
NSThread* myThread = [[NSThread alloc] initWithTarget:self
                                      selector:@selector(myThreadMainMethod:)
                                      object:nil];
[myThread start];

//2. NSOperationQueue allows a pool of threads to be created and used to execute NSOperations in parallel. NSOperations can also be run on the main thread by asking NSOperationQueue for the mainQueue.
NSOperationQueue* myQueue = [[NSOperationQueue alloc] init];
[myQueue addOperation:anOperation]; 
[myQueue addOperationWithBlock:^{
 /* Do something. */
}];

//3. GCD or Grand Central Dispatch is a modern feature of Objective-C that provides a rich set of methods and API's to use in order to support common multi-threading tasks. GCD provides a way to queue tasks for dispatch on either the main thread, a concurrent queue (tasks are run in parallel) or a serial queue (tasks are run in FIFO order).
dispatch_queue_t myQueue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
dispatch_async(myQueue, ^{
  printf("Do some work here.\n");
});
```

14. What is the Responder Chain?  

15. What's the difference between using a delegate and notification?





refs 
[20 iOS Developer Interview Questions](https://www.codementor.io/ios/tutorial/ios-interview-tips-questions-answers-objective-c)
