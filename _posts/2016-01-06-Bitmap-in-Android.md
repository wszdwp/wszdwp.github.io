---
title: Bitmap in android
layout: post
tags: Android
published: false
---

## Memory efficiency

1. Check the dimensions of a bitmap before decoding it
```
// Check the dimensions
BitmapFactory.Options options = new BitmapFactory.Options();
options.inJustDecodeBounds = true;

// Decodeing
options.inJustDecodeBounds = false;
```

2. Process bitmaps in a background thread using [**AsyncTask**](http://developer.android.com/reference/android/os/AsyncTask.html)

