---
title: NSData NSString NSDictionary NSArray conversion
layout: post
tags: iOS
---


## NSObject serialization/deserialization
1. Convert NSObject(or your custom object extends from NSObject) to NSDictionary  
2. Convert NSDictionary to NSData  
3. Convert NSData to NSString(json format) 

**NSString <-- NSData --> NSDictioanry <--> NSObject**  

**NSString <-- NSData --> NSArray**    

## NSData and NSString  
{% highlight objective-c %}
NSString *myNSString = 
    [[NSString alloc]initWithData:myNSData 
                         encoding:NSUTF8StringEncoding];

NSData *myNSData = 
    [myNSString dataUsingEncoding:NSUTF8StringEncoding];
{% endhighlight %}

## NSData and NSDictionary  
{% highlight objective-c %}
NSDictionary *myNSDictionary = 
    [NSJSONSerialization JSONObjectWithData:myNSData 
                                    options:NSJSONReadingAllowFragments 
                                      error:&error];

NSData *jsonData = 
    [NSJSONSerialization dataWithJSONObject:yourDictionary 
                            options:0 error:&err];
{% endhighlight %}

## NSData and NSArray  
{% highlight objective-c %}
NSData *jsonData = 
    [NSJSONSerialization dataWithJSONObject:myNSArray 
                                    options:NSJSONWritingPrettyPrinted 
                                      error:&error];

NSArray *myNSArray = [NSJSONSerialization JSONObjectWithData:myNSData options:NSJSONReadingAllowFragments error:&error];
{% endhighlight %} 

## Getter  
**Access custom class's object in NSDictionary**
{% highlight objective-c %}
MyClass1 *myClass1 = 
    [[MyClass1 alloc]initWithNSDictionary:[myNSDictionary objectForKey:@"key1"]];
NSArray *myNSArrayList = [[NSArray alloc]init];
myNSArrayList = [myNSDictionary objectForKey:@"myNSArrayList"];
{% endhighlight %}

**Access custom class's object in NSArray**
{% highlight objective-c %}
MyClass *myClass = 
    [[MyClass alloc] initWithNSDictionary:[myNSArray objectAtIndex:i]];
{% endhighlight %}