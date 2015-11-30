---
title: UIActionSheet cancel button index trap
layout: post
tags: iOS
---

1. ButtonIndex of cancel is **0**
	{% highlight objective-c %}
	// Add Cancel in init
	UIActionSheet *actionSheet = [[UIActionSheet alloc]initWithTitle:nil delegate:self cancelButtonTitle:@"Cancel" destructiveButtonTitle:nil otherButtonTitles:nil];
	[actionSheet addButtonWithTitle:@"MyItem"];
	
	// Add Cancel after init (I prefer this way)
	UIActionSheet *actionSheet = [[UIActionSheet alloc]initWithTitle:nil delegate:self cancelButtonTitle:nil destructiveButtonTitle:nil otherButtonTitles:nil, nil];
	actionSheet.cancelButtonIndex = [actionSheet addButtonWithTitle:@"Cancel"];
	[actionSheet addButtonWithTitle:@"MyItem"];
	{% endhighlight %}

2. ButtonIndex of cancel is **last one**

	Add Cancel and other buttons in init, buttonIndex of cancel button is the last one, done is 0, option1 is 1.

	{% highlight objective-c %} 
	UIActionSheet *actionSheet = [[UIActionSheet alloc]initWithTitle:nil delegate:self cancelButtonTitle:@"Cancel" destructiveButtonTitle:nil otherButtonTitles:@"Done", @"Done2", nil];
	[actionSheet addButtonWithTitle:@"MyItem"];
	{% endhighlight %}










