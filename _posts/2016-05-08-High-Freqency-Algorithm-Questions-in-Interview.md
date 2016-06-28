---
title: High freqency algorithm questions in interview
layout: post
tags: Algorithm
published: false
---


High freqency algorithm questions in interview

1. longest palindrome
Best Solu: dp解的

2. 两个词的最短距离变体
follow up词很多怎么省空间。

3. LC原题股票I

4.）一个矩阵斜着走的list例子如下：
123
456
789
输出：{1}{42}{753}{86}{9}

4. max sum subarray
我用了sum = nums[i] + (sum > 0 ? sum : 0)，

314. Binary Tree Vertical Order Traversal
Queue BFS,用dictionary记录每一个node的column.用一个mincolumn和一个maxcolumn记录最大最小的column.然后遍历dictionary打印。
打印的时候 while(!dic.isempty() && current <=maxcolumn){if(!dic.containskey(current) break; else print;} 后被告知1. 不需要maxcolumn, 2. dic里面的column肯定连续，所以if check不需要。想了一下确实是，楼主sb了，写了两个多余的判断
map（不是unordered_map)会更简单一点吧

1.anagram, 输出一个句子, 里面的单词是空格隔开, 输出list of anagram in this sentence. 就是List<List<String>>.

2.sort colors, 三色旗问题, 用swap, O(n)时间, O(1)空间.

3.Pow

4.给一堆point(x, y), 返回前k个离远点最近的点, 用k-selection算法, 核心就是那个partition, 平均时间复杂度可以做到O(n).

5.实现哈希表, 只实现lookup()和add()

6.树的中序遍历和前序遍历的iterative代码.

7.二叉树的traverse by level和print in vertical order. 前面那个简单, 就是BFS, 后面这个要先遍历, 边遍历边给每个节点一个index, 比如root为0, 做left减1, right加1. 然后建立一个HashMap, key是index, value是list<TreeNode>

8.检测一个图是否是二分图, 就是BFS, 然后给每个节点上色.

9.找名人问题.

10.会议室问题, 给一堆会议室的schedule(starTtime, endTime), 算出需要几个会议室才能满足要求. 解法就是新建一个class{time, isStart}, 把schedule转化成这个class, 然后对这些时间进行排序, time相同时,end排在start前面, 然后对这个排序好的list进行遍历, 需要start, meeting_room_num++, 遇到end --. 得到max

11.给一个每行和每列都排序好的矩阵, 求第k大的数值. 可以用heap做.

12.Lowest common ancestor, 注意要写CTCI上面那个代码, 输入可能不来自同一棵树.

13.给一个span(min, max)和BST, 返回一个子树, 子树里面的节点都在这个span里面.

14.jump river的题目, 给一个数组[1,0,1,0,1], 1代表可以站, 0不可以站. 从速度为1开始往前跳, 每次跳的时候, 可以跳当前速度那么多格, 也可以跳当前速度+1那么多格. 问最少跳几次可以跳过河(即跳出数组), 或者跳不过河. 解法直接递归+cache就可以. 上面的例子跳2次就能跳过河了, 第一次从index=0, 速度为1跳到2, 然后速度为2刚好跳出去.

Facebook onsite的时候还有一轮Culture Fit面试, 除了讲讲你的简历, 下面几个问题经常会问到:
1.为什么选Facebook?
2.给FB的一个产品提点改进意见.
3.当你和你的同事有冲突了, 怎么解决? (focus on "let the code talk")
4.最近在读什么书?


Refs:
[http://www.1point3acres.com/bbs/thread-96088-1-1.html](http://www.1point3acres.com/bbs/thread-96088-1-1.html)
[http://www.geeksforgeeks.org/top-algorithms-and-data-structures-for-competitive-programming/#algo2](http://www.geeksforgeeks.org/top-algorithms-and-data-structures-for-competitive-programming/#algo2)

