---
title: Some good practice with JavaScript
layout: post
tags: Web
---


## Use JSON  

When appending json in your url as parameters, use **encodeURIComponent()** to escapse some specical characters, like **#**, **&**   
{% highlight javascript %}
// ex: json_data = {"name": "H&M Store", "address": "#10 ABC road"}
url += '&param1=' + encodeURIComponent(JSON.stringify(json_data));
{% endhighlight %}


refs  
[SO](http://stackoverflow.com/questions/8844814/how-to-safely-use-json-stringify)  
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)  

