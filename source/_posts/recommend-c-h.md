---
title: 推荐几个适用于竞赛的 C++ 模板库
date: 2024-08-20 12:08:35
tags: 
  - 信息竞赛
  - OI
  - C++
categories: 
  - 信息竞赛OI
  - C++实用工具
---

![干货们](https://cdn.jsdelivr.net/gh/FrederickBun/upyun-rhimgcdn@img/upload/Screenshot%202024-08-20%20at%2012.15.40%E2%80%AFPM-20240820-1724130945920-0e1932e3c82a17fe.png)

这些就是我今天将会介绍的四个朋友，让我们一一介绍吧

## FastIOS.h

你还在因背不下来快读快写而烦恼吗？

你还在因突然发现代码需要快读快写，然而改起来很麻烦而烦恼吗？

你还在因为普通快读快写难以获得最优解而烦恼吗？

快使用封装快读，用仿 `cin cout` 的方式避免更改困难！！！

目前支持：**整形（你能想到的都可以），浮点数（你能想到的都可以），string，c风格字符串……**

#### 食用方法

需要使用 `using namespace FastIOS;`。

如果您需要本地调试，在代码编译选项里加入 `-DLOCAL`。

粘贴代码，更改您的 `cin cout`为 `qin qout`。

运行、调试、提交代码，祝您rp++，轻松AC，拿下最优解！！！

#### 高级

##### 使用自定义的快读类型

默认的 `qin qout` 是自动推断的产物，规则：

- 当定义 `LACAL` 宏时（编译代码选项里加入 `-DLOCAL`），使用 `qins qouts`。
- 当定义 `NORMAL` 宏时（编译代码选项里加入 `-DNORMAL`），使用 `qinn qoutn`。
- 否则使用 `qinf qoutf`。

其实有三对输入输出：`qins qouts`，`qinn qoutn`，`qinf qoutf`。只能任选一种，不能混用它们！！！

- `qins qouts` 是慢速快读，可以用于**OJ提交&本地调试&文件输入输出**。
- `qinn qoutn` 是普通快读，可以用于**OJ提交&文件输入输出**（本地调试困难，结束需要反复输入 `Ctrl+Z`)。
- `qinf qoutf` 是高速快读，可以用于**OJ提交&文件输入输出**（本地调试困难，结束需要反复输入 `Ctrl+Z`)。

快读的原理如出一辙，都是利用单个字符的输入。

慢速快读：使用 `<cstdio>`库中的 `std::getchar()`，`std::putchar()`。

普通快读：使用 `<cstdio>`库中的 `fread()`，`fwrite()`，先统一读入，再返回。

高速快读：使用 `<iostream>`库中的 `std::streambuf()`，直接访问cin，cout缓存。

## BigNumber.h

一个简单的封装整数高精度库。

### 食用方法

需要使用 `using namespace BigNumber;`

使用 `bignumber a`来定义一个高精度数字。

目前支持的运算符：

- `a+b`普通的加法
- `a-b`普通的减法
- `a*b`乘法(使用FFT加速)
- `a/b`普通的除法
- `a%b`普通的模法
- `abs(a)`返回绝对值
- `to_int(a)`转化为 `int`
- `to_long_long`转化为 `long long`

同时直接兼容 `cin cout`与 `FastIOS.h`中的快读快写！

## ExSort.h

一个对排序方法的追加。

#### 食用方法

类似于 `std::sort`（~~[你不知道？](https://zh.cppreference.com/w/cpp/algorithm/sort)~~）。

但是暂不支持自定义比较函数，想要排序结构体需要重载小于运算符（~~[你不知道？](https://zh.cppreference.com/w/cpp/language/overload_resolution)~~）。

## InMath.h

开发中……

目前只有矩阵、快速幂、逆元、exgcd
