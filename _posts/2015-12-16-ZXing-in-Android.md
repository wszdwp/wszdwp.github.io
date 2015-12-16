---
title: Barcode scanner ZXing in Android
layout: post
tags: Android
---

# ZXing scanner

**1. Install ZXing lib in project.**

{% highlight java %} 

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

{% endhighlight %}

**2. In activity create an IntentIntegrator.**
{% highlight java %} 

IntentIntegrator integrator = new IntentIntegrator(this);
integrator.initiateScan();

{% endhighlight %}

**3. In onActivityResult, parse the result.**
{% highlight Java %} 

@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data){
	IntentResult scanResult = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
	// Document explaination:
	// null if the event handled here was not related to this class, 
	// or else an IntentResult containing the result of the scan. 
	// If the user cancelled scanning, the fields will be null.

	// Notice: In actual test, scanResult is not null but the scanResult.getContents() is null
	if (scanResult != null) {
		Log.v(LOG_TAG, "scan content is " + scanResult.getContents());
	}
}
{% endhighlight %}











