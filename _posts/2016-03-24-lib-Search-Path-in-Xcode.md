---
title: lib search path in xcode
layout: post
tags: iOS
published: false
---

```
//:configuration = Debug
LIBRARY_SEARCH_PATHS = $(inherited) $(PROJECT_DIR)/S2kMobileWMS $(PROJECT_DIR)/KDC Scanner

//:configuration = Release
LIBRARY_SEARCH_PATHS = $(inherited) $(PROJECT_DIR)/S2kMobileWMS $(PROJECT_DIR)/KDC Scanner

//:completeSettings = some
LIBRARY_SEARCH_PATHS
```