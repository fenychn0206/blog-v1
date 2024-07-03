---
title: 「笔记」 堆
date: 2024-07-03 22:08:47
tags:
 - 信息竞赛
 - OI
 - 笔记
 - C++
categories:
 - 信息竞赛OI
 - 笔记
mathjax: true
---

## 堆是什么？

- 堆其实是一颗**完全二叉树**
- 堆中某个节点**不大于或不小于**其**父节点**的值

## 堆的分类

1. **大根堆**：所有节点的值不大于父亲节点。最大值为根节点
2. **小根堆**：所有节点的值不小于父亲节点。最小值为根节点

## 如何储存

由于是一颗完全二叉树，所以可以使用其性质用数组储存

![大根堆，感谢csacademy提供建图器！](https://prod-files-secure.s3.us-west-2.amazonaws.com/10e5ff27-76cf-410c-a656-06fa7ec0e82c/c50963eb-5650-4652-a371-03ff4b647469/Graph_Editor.png)

大根堆，感谢csacademy提供建图器！

![小根堆，还是csacademy的建图器](https://prod-files-secure.s3.us-west-2.amazonaws.com/10e5ff27-76cf-410c-a656-06fa7ec0e82c/a9753b0f-9ebc-4f08-abea-3d34683e8195/Graph_Editor_(1).png)

小根堆，还是csacademy的建图器

- 使用到的数据

  **已知节点**：i

  **父亲节点**：i / 2

  **左孩子**：2 * i;

  **右孩子**：2 * i + 1

## 堆的操作

一个对需要支持如下操作

- 插入一个元素，$O(logn)$
- 访问堆顶元素，$O(1)$
- 删除堆顶元素，$O(logn)$

## 堆的储存

![此处演示的堆为大根堆](https://prod-files-secure.s3.us-west-2.amazonaws.com/10e5ff27-76cf-410c-a656-06fa7ec0e82c/531e48d8-e188-478a-ad8a-d167ced06d44/%E5%A0%86%E5%82%A8%E5%AD%98%E7%AC%94%E8%AE%B0.001.jpeg)

此处演示的堆为大根堆

## 堆的操作

1. **插入操作**：在堆的最后插入新的元素，然后上浮到合适的位置以保持堆的性质。插入操作的时间复杂度是 $O(\log n)$。
2. **删除操作**：删除堆顶元素，然后将最后一个元素放到堆顶，再下沉到合适的位置以保持堆的性质。删除操作的时间复杂度是 $O(\log n)$。
3. **构建堆**：从最后一个非叶子节点开始，依次进行下沉操作，直到堆顶。构建堆的时间复杂度是 $O(n)$。
4. **堆排序**：通过反复执行删除操作，可以得到一个有序序列。堆排序的时间复杂度是 $O(n \log n)$。

## STL-优先队列

在队列的基础上，添加了一个内部的排序，本质是由堆来实现的，所以我们对应的可以使用ta来完成堆的题目

### 基础用法

`priority_queue<数据类型> 名字;` 默认是一个大根堆

### 进阶用法

`priority_queue<int, vector<int>, greater<int> > pq1;` 小根堆

`priority_queue<int, vecotr<int>, less<int> > pq2;` 大根堆

**操作和队列基本相同：** `top()` 访问队头元素

`empty()` 是否队空

`size()` 返回队列长度

`push(x)` 插入x到队尾并排序

`pop()` 弹出队头元素

***~~https://www.cnblogs.com/huashanqingzhu/p/11040390.html~~***

## 📎附件

[堆【模板题】.cpp](https://prod-files-secure.s3.us-west-2.amazonaws.com/10e5ff27-76cf-410c-a656-06fa7ec0e82c/666ee7e5-22d7-420e-8bef-3395fe601d41/堆【模板题】.cpp)

[「NOIP2004」合并果子.cpp](https://prod-files-secure.s3.us-west-2.amazonaws.com/10e5ff27-76cf-410c-a656-06fa7ec0e82c/5b0b4681-8e42-48c3-a3a5-9ead9776b53d/「NOIP2004」合并果子.cpp)
