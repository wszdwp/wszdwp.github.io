---
title: NSData NSString NSDictionary NSArray conversion
layout: post
tags: iOS
---

##NSData and NSString
{% highlight objective-c linenos %}
NSString *myNSString = 
    [[NSString alloc]initWithData:myNSData 
                         encoding:NSUTF8StringEncoding];

NSData *myNSData = 
    [myNSString dataUsingEncoding:NSUTF8StringEncoding];
{% endhighlight %}

##NSData and NSDictionary
{% highlight objective-c linenos %}
NSDictionary *myNSDictionary = 
    [NSJSONSerialization JSONObjectWithData:myNSData 
                                    options:NSJSONReadingAllowFragments 
                                      error:&error];

NSData * jsonData = 
    [NSJSONSerialization dataWithJSONObject:yourDictionary 
                            options:0 error:&err];
{% endhighlight %}

##NSData and NSArray
{% highlight objective-c linenos %}
NSData *jsonData = 
    [NSJSONSerialization dataWithJSONObject:myNSArray 
                                    options:NSJSONWritingPrettyPrinted 
                                      error:&error];

//[NSPropertyListSerialization dataWithPropertyList:format:options:error:] 
//to convert the data, 
//then check if the result -isKindOfClass:[NSArray class].
{% endhighlight %}

##NSString and NSDictioanry
**NSString <-- NSData --> NSDictionary**


##NSString and NSArray
{% highlight objective-c linenos %}
NSString *name = 
    [[array  valueForKey:@"name"] componentsJoinedByString:@","];

????
{% endhighlight %}


##Getter
**Access custom class's object in NSDictionary**
{% highlight objective-c linenos %}
MyClass1 *myClass1 = 
    [[MyClass1 alloc]initWithNSDictionary:[myNSDictionary objectForKey:@"key1"]];
NSArray *myNSArrayList = [[NSArray alloc]init];
myNSArrayList = [myNSDictionary objectForKey:@"myNSArrayList"];
{% endhighlight %}

**Access custom class's object in NSArray**
{% highlight objective-c linenos %}
MyClass *myClass = 
    [[MyClass alloc] initWithNSDictionary:[myNSArray objectAtIndex:i]];
{% endhighlight %}