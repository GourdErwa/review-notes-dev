> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes) ，[github-源码 ](https://github.com/GourdErwa/leetcode)，欢迎 Star，转载请附上原文出处链接和本声明。

[toc]
## 引入 KMP 算法的动机是什么？
KMP 算法是一种改进的字符串匹配算法，关于 kmp 算法的介绍及命名由来可参考 [KMP 算法 ](https://baike.baidu.com/item/kmp%E7%AE%97%E6%B3%95)。

我们先来分析一下普通的 (暴力匹配过程)，假设有 ababababca 主字符串，我们要查找 abababca 模式串第一次出现的位置，我们遍历主字符串的所有字符，每遍历到一个字符同时向后与模式串的字符进行匹配。代码如下：

```java
/**
 * 暴力匹配思路
 *
 * 1.遍历整个主串，最大遍历到（mainLength - matchLength），因为剩余长度小于匹配串长度时肯定无法匹配
 * 2.每次遍历到主串的字符时与匹配串的字符逐个向后匹配（注意边界）
 * 3.匹配结束后，如果匹配串的下标到达最后一个位置说明匹配成功，返回 i
 * 4.循环该过程，如果未匹配返回 -1
 *
 * 边界及其他优化情况暂不考虑
 *
 * @param main 主字串符
 * @param match 匹配字符串
 * @return 第一次出现的位置，如果未找到返回 -1
 */
public int indexOfViolence(String main, String match) {
    int matchLength = match.length();
    int mainLength = main.length();

    for (int i = 0; i <= mainLength - matchLength; i++) { // 1
        if (main.charAt(i) == match.charAt(0)) { // 2
            int im = i, jm = 0;
            while (im < mainLength && jm < matchLength && main.charAt(im) == match.charAt(jm)){
                im++;
                jm++;
            }
            if (jm == matchLength) { // 3
                return i;
            }
        }
    }
    return -1; // 4
}
```
第一次暴力匹配过程中，匹配到 `|` 位置时出现匹配失败。
```
ababab |abca
ababab |ca
```
我们可以发现 ababab`|`ca 的前半部分匹配成功，而且前半部分 ababab 有「重复性问题」。我们试图去找出优化点，让匹配次数更少。
         
## KMP 算法核心思想-部分匹配表-PMT（Partial Match Table）

>"前缀"指除了最后一个字符以外，一个字符串的全部头部组合；"后缀"指除了第一个字符以外，一个字符串的全部尾部组合。

对于前半部分 ababab 字符串来说：         
- ababab 的前缀集合为 {"a","ab","aba","abab","ababa"}
- ababab 的后缀集合为 {"babab","abab","bab","ab","b"}
- 交集为 {"ab","abab"}，最长的交集串长度为 4

按最长的交集串长度规则进行计算，我们得出整个匹配字符串对应的部分匹配表。
- PMT 中的 Index 是匹配字符串对应的下标。
- PMT 中的 Value 是匹配字符串的前缀集合与后缀集合的交集中最长元素的长度。
- PMT 中的 Next 是匹配字符串在匹配失败后根据最长元素长度减一后重新匹配的位置（后续说明为什么）。
> 解释：abab 的 Value = 2，因为他们的交集中最长元素的长度 "ba" = 2

| char  |  a   |  b   |  a   |  b   |  a   |  b   |  a   |  c   |
| :---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Index |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |
| Value |  0   |  0   |  1   |  2   |  3   |  4   |  0   |  1   |
| Next  |  -1  |  0   |  0   |  1   |  2   |  3   |  4   |  0   |

对于第一次匹配 ababab`|`ca，我们分析如何应用我们的部分匹配表：
- 主串 $[i-j,i)$ 与匹配串 $[0,j)$ 部分是已经完全匹配的
- 对于已完全匹配部分 $ababab$ 我们可知 PMT-Value = 4
- 所以可得出 
    - ① 主串 $[i-j,i)$ 中前 4 个与匹配串 $[0,j)$ 中的后 4 个相同
    - ② 匹配串 $[0,j)$ 中前 4 个与主串 $[i-j,i)$ 中的后 4 个相同
- 我们为了确定匹配串下次匹配的起始位置因此采用第②种情况，所以 j 位置下次匹配下标为「4 - 1」（数组从 0 开始）
- 因为匹配串第一个字符的 PMT-Value=0 ,所以 0-1 时需要特殊处理

疑问点：
为什么 i 不需要移动呢？因为针对主串$[i-j,i)$中的字符，最后 4 个字符与匹配串的前 4 个相同，而下一次比较时 j 下标已经重置到相同部分的下一个了。

<div align="center">
    <img src="https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/algo-KMP.jpg">
</div>

**构建部分匹配表-PMT**
???
 
## 参考
- [如何更好地理解和掌握 KMP 算法?](https://www.zhihu.com/question/21923021)

> 更多相关专栏内容汇总：
>- [Java 核心知识-专栏文章目录汇总 ](https://gourderwa.blog.csdn.net/article/details/104020339)
>- [Java 并发编程-专栏文章目录汇总 ](https://blog.csdn.net/xiaohulunb/article/details/103594468)
>- [Java JVM（JDK13）-专栏文章目录汇总 ](https://blog.csdn.net/xiaohulunb/article/details/103828570)
>- [数据结构与算法-专栏文章目录汇总 ](https://blog.csdn.net/xiaohulunb/article/details/104368031)

<div align="center">
    <img src="https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg">
</div>