---
title: SQL Quick Reference
layout: post
tags: SQL
---

At the top level there are mainly 3 types of joins:    
**INNER JOIN** - fetches data if present in both the tables  
**OUTER JOIN**    
**CROSS JOIN**    

OUTER JOIN are of 3 types:

**LEFT OUTER JOIN** - fetches data if present in the left table.    
**RIGHT OUTER JOIN** - fetches data if present in the right table.    
**FULL OUTER JOIN** - fetches data if present in either of the two tables.        
**CROSS JOIN**, as the name suggests, does [n X m] that joins everything to everything.
Similar to scenario where we simply lists the tables for joining (in the FROM clause of the SELECT statement), using commas to separate them.

Points to be noted:

If you just mention JOIN then by default it is a INNER JOIN.
An OUTER join has to be LEFT | RIGHT | FULL you can not simply say OUTER JOIN.
You can drop OUTER keyword and just say LEFT JOIN or RIGHT JOIN or FULL JOIN.


refs:
[1](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
[2](http://stackoverflow.com/questions/406294/left-join-and-left-outer-join-in-sql-server)