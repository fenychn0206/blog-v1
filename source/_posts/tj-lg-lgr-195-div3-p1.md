---
title: 「题解」 『FLA - I』冲云霄
date: 2024-08-03 16:35:17
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

# Problem

[题目传送门](https://www.luogu.com.cn/problem/P10835)

# Solution

## Step1. 读题&分析

对于这道题目，我们需要根据给定的整数 $ n $ 和 $ m $ 确定是否可以用相同的正整数 $ a $ 组成一个长度为 $ m $ 的序列，使得该序列所有元素的异或结果为 $ n $。

具体来说，给定一个数列 $ a $ 的所有元素都相同，记为 $ a $。那么该数列的异或结果是：

$$
a \oplus a \oplus \cdots \oplus a
$$
其中 $ a $ 出现了 $ m $ 次。由于异或的一个重要性质是 $ x \oplus x = 0 $，因此对于一个相同的数 $ a $ 异或 $ m $ 次的结果为：

- 如果 $ m $ 是偶数，结果是 $ 0 $。
- 如果 $ m $ 是奇数，结果是 $ a $。

因此，我们可以得出结论：

1. 如果 $ m $ 是偶数，那么异或结果只能是 $ 0 $。所以，如果 $ n = 0 $ 时输出 `Yes`，否则输出 `No`。
2. 如果 $ m $ 是奇数，那么异或结果是 $ a $，因此只要 $ n $ 可以作为数列中的元素（即 $ n $ 是正整数），则输出 `Yes`，否则输出 `No`。

## Step2. 代码步骤

- **输入**：首先读取测试用例的数量 $ T $。然后，对于每个测试用例，读取两个整数 $ n $ 和 $ m $。
- **处理**：根据 $ m $ 的奇偶性判断结果：
  - 如果 $ m $ 是偶数且 $ n $ 为 $ 0 $，输出 `Yes`。否则输出 `No`。
  - 如果 $ m $ 是奇数且 $ n $ 为正整数，输出 `Yes`。否则输出 `No`。

## Step3. 时间复杂度计算

因为是直接使用结论做题目，所以单次计算复杂度为 $ \Theta(1) $，对于本题目的测试点是完全没问题的~~（有问题就出事了）~~。

# Code

> 请遵守[《洛谷社区规则》](https://help.luogu.com.cn/rules/community)，重视**学术诚信**，不要当C玩以达成刷AC率的目的！

```C++ 『FLA - I』冲云霄.cpp
#include <bits/stdc++.h>
#define int long long
#define endl "\n"
#define fp(_a, _b, _c, _d) for(int _a = _b; _a <= _c; _a += _d)
#define fm(_a, _b, _c, _d) for(int _a = _b; _a <= _c; _a -= _d)
#define fin(_a, _b) for(int ss = 1; ss <= _a; ss ++ ) cin >> _b[ss];
#define fout(_a, _b, _c) for(int ss = 1; ss <= _a; ss ++ ) cout << _b[ss] << _c ;
using namespace std;

const int N = 1e7 + 10;
const int M = 2e3 + 5;

int t, n, m, k, a[N];

signed main()
{
    "toothless. #17";
    cin >> t;
    fp(ss, 1, t, 1)
    {
        cin >> n >> m ;
        if(m % 2 == 0)  // 如果  m  是偶数且  n  为  0 ，输出 Yes。否则输出 No。
        {
            if(n == 0)
            {
                cout << "Yes" << endl;
            }
            else
            {
                cout << "No" << endl;
            }
        }
        else  // 如果  m  是奇数且  n  为正整数，输出 Yes 。否则输出 No。
        {
            if(n > 0)
            {
                cout << "Yes" << endl;
            }
            else
            {
                cout << "No" << endl;
            }
        }
    }
    return 0;
}
```
