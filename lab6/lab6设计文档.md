# lab6设计文档

17307100018 俞铖昊

**1 正则表达式解释：**

 /^1[3456789]\d{9}$/ 表示1开头，后面跟3-9的数字，之后是跟9个数字。

/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ 是指大小写字母加数字，之后跟@，之后再跟字母数字。

**2 继承的理解**

构造函数： 通过call在子类构造函数调用父类构造函数

原型链：子类的原型为父类的实例。

圆形式：利用`Object.creat`做了已有对象的浅复制

 **3 Map、Set、Array之间的区别和使用**

set和array相似，不过set不允许重复元素出现。

map键值对储存，相比于array，map相当于键的本身不仅仅是数字下标。

![本地截图](https://github.com/KOBEuzi/KOBEuzi-SOFT130002_lab/blob/master/lab6/images/lab6%E6%9C%AC%E5%9C%B0%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%88%AA%E5%9B%BE.JPG)
![github截图](https://github.com/KOBEuzi/KOBEuzi-SOFT130002_lab/blob/master/lab6/images/lab6%E6%9C%AC%E5%9C%B0%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%88%AA%E5%9B%BE.JPG)
