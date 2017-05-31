---
title: Capture done button onclick event in android
layout: post
tags: Android
---

# Capture done button onclick event in android

## JellyBean and higher  
OnEditorActionListener is needed to listen for 'enter' or 'next' and you cannot use OnKeyListener.

```
editText.setOnEditorActionListener(new OnEditorActionListener() {
    @Override
    public boolean onEditorAction(TextView view, int actionId, KeyEvent event) {
        int result = actionId & EditorInfo.IME_MASK_ACTION;
        switch(result) {
        case EditorInfo.IME_ACTION_DONE:
            // done stuff
            return true;
            break;
        case EditorInfo.IME_ACTION_NEXT:
            // next stuff
            return true;
            break;
        }
        return false;
    }
});
```


Refs:  
[Key Event](https://developer.android.com/reference/android/view/KeyEvent.html)

