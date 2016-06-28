---
title: When to unregister your broadcastreceiver
layout: post
tags: Android
---


[Some practice notice in implementing bound service](http://developer.android.com/guide/components/bound-services.html#Additional_Notes)
You should usually pair the binding and unbinding during matching bring-up and tear-down moments of the client's lifecycle. 
For example:
If you only need to interact with the service while your activity is visible, you should bind during onStart() and unbind during onStop().

If you want your activity to receive responses even while it is stopped in the background, then you can bind during onCreate() and unbind during onDestroy(). Beware that this implies that your activity needs to use the service the entire time it's running (even in the background), so if the service is in another process, then you increase the weight of the process and it becomes more likely that the system will kill it.

Note: You should usually not bind and unbind during your activity's onResume() and onPause(), because these callbacks occur at every lifecycle transition and you should keep the processing that occurs at these transitions to a minimum. Also, if multiple activities in your application bind to the same service and there is a transition between two of those activities, the service may be destroyed and recreated as the current activity unbinds (during pause) before the next one binds (during resume). (This activity transition for how activities coordinate their lifecycles is described in the Activities document.)


[Release memory when your user interface becomes hidden](http://developer.android.com/training/articles/memory.html#ReleaseMemoryAsUiGone)
When the user navigates to a different app and your UI is no longer visible, you should release any resources that are used by only your UI. Releasing UI resources at this time can significantly increase the system's capacity for cached processes, which has a direct impact on the quality of the user experience.

To be notified when the user exits your UI, implement the onTrimMemory() callback in your Activity classes. You should use this method to listen for the TRIM_MEMORY_UI_HIDDEN level, which indicates your UI is now hidden from view and you should free resources that only your UI uses.

Notice that your app receives the onTrimMemory() callback with TRIM_MEMORY_UI_HIDDEN only when all the UI components of your app process become hidden from the user. This is distinct from the onStop() callback, which is called when an Activity instance becomes hidden, which occurs even when the user moves to another activity in your app. So although you should implement onStop() to release activity resources such as a network connection or to unregister broadcast receivers, you usually should not release your UI resources until you receive onTrimMemory(TRIM_MEMORY_UI_HIDDEN). This ensures that if the user navigates back from another activity in your app, your UI resources are still available to resume the activity quickly.


Refs
[android-when-to-register-unregister-broadcast-receivers-created-in-an-activity](http://stackoverflow.com/questions/7887169/android-when-to-register-unregister-broadcast-receivers-created-in-an-activity)
[Activity life cycle](http://stackoverflow.com/questions/7475356/is-oncreate-called-when-an-activity-object-is-created)