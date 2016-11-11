---
title: CollectionTypes in Python
layout: post
tags: Python
---

# Create Dict

```python
## 1
from collections import defaultdict

d = defaultdict(lambda: 0)

for i in xrange(100):
    d[i % 10] += 1

## 2
d = dict()
    
for i in xrange(100):
    key = i % 10
    d[key] = d.get(key, 0) + 1
```