
# 分析类结构与继承关系
文件结构：Navigate -> File Structure

类层次结构： Navigate -> Type Hierarchy

<div align="center">
    <img src="https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/080706.png">
</div>

方法层次结构：Navigate -> Method Hierarchy

工具分析时仅分析与当前类有直接关系的类。因此当前类中应该包含的方法定义的位置，有三种情况。
1. 方法在类中定义了
2. 方法不在类中定义，但是在父类定义了
3. 方法应该在类中定义，因为该类不是抽象类。但是因为该类即继承了我们分析的类又间接的继承了我们分析的类。
```java
// 对于第 3 点举例
interface A {
     f();
}

abstract class B {
     f();
}

class C extends B implements A{
   // 直接实现了 A 同时通过继承 B 也间接实现了 A
}
```

方法调用链：Navigate -> Call Hierarchy

<div align="center">
    <img src="https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg">
</div>

<div align="center">
    <img src="https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg">
</div>