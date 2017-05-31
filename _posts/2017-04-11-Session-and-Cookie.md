---
title: Session and Cookie
layout: post
tags: Web
published: false
---


sessionId is a (mostly hashing) value used on server-side to identify each session.

cookie is a (mostly hashing) value used on client-side to indentify each session.


[http://stackoverflow.com/questions/6922145/what-is-the-difference-between-server-side-cookie-and-client-side-cookie](http://stackoverflow.com/questions/6922145/what-is-the-difference-between-server-side-cookie-and-client-side-cookie)


sessionId pros:
```
By storing a session ID you can identify different sessions of the same user, and you may want to handle them in any special way (e.g. just allow a single session, or have data that's associated with the session instead of to the user).
```
[http://stackoverflow.com/questions/13146298/why-should-i-use-session-id-in-cookie-instead-of-storing-login-and-hashed-pass](http://stackoverflow.com/questions/13146298/why-should-i-use-session-id-in-cookie-instead-of-storing-login-and-hashed-pass)