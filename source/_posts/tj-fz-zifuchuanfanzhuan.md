---
title: 「题解」 字符串反转
date: 2024-07-02 22:08:15
tags:
 - 信息竞赛
 - OI
 - 题解
 - C++
categories:
 - 信息竞赛OI
 - 题解
mathjax: true
---

## 题目

![题目，此处展示的为个人训练题库（http://154.3.2.170/p/XF1）](https://cdn.jsdelivr.net/gh/FrederickBun/upyun-rhimgcdn@img/upload/202407022210276.png)

## 1.题目分析

一道简单的字符串操作题，直接套用C++中字符串对应的操作即可

## 2.做题思路

1. 使用 `while` 循环读入字符串 `inpt ` 为 `.` 时停止读入
   1. 对 `inpt` 字符串执行 `inpt.append(1,' ')` 意思是在读入的字符串后加一个空格，因为 `cin` 会排掉空格
   2. 定义一个 `str` 字符串用来储存答案
   3. 对 `str ` 字符串执行 `str.insert(0, inpt)` 即将输入内容添加至 `str` 字符串最前面
2. 输出 `str` 即可

## 3.复杂度计算

由于只需要循环长度次，所以时间复杂度为 $O(n)$ 是完全不会超的

## 4.完整代码

###### 希望大家不要让我强行上反作弊

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
	string str;
	string inpt;
	while(true)
	{
		cin >> inpt ;
		if(inpt == ".")
		{
			break;
		}
		inpt.append(1, ' ');
		str.insert(0, inpt);
	}
	cout << str ;
	return 0;
}
```

## 写在最后

有问题请及时评论，我会做出对应的修改！
