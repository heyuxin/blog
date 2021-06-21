# html记录

## html
htyper text markup language 超文本标记语言

超文本: 就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素

标记语言: 标记（标签）构成的语言

## 标签
是由一对尖括号包裹的单词构成

标签分为两部分: 开始标签 结束标签

有些标签功能比较简单 使用一个标签即可 这种标签叫做自闭合标签

## 属性
通常是以键值对形式出现 例如 name="nick"

属性名字全部小写

如果属性值和属性名完全一样 直接写属性名即可 例如 readonly disable

## HTML基本结构
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
  </head>
  <body>
    <h1>标题</h1>
    <p>段落。。。</p>
  </body>
</html>
```
## head
title 标题

base 页面上的所有链接默认地址

link 引用外部文档

meta 定义关于HTML文档的元数据 重要的属性有三个：http-equiv、name、content

style 样式

## body
### 块级标签和内联标签

block（块）元素的特点

总是在新行上开始 可以设置宽高

它可以容纳内联元素和其他块元素

---

inline（内联）元素的特点

和其他元素都在一行上

宽高，行高及外边距和内边距不可改变

内联元素只能容纳文本或者其他内联元素

### 基本标签

h1~h6：标题

p: 段落标签 包裹的内容被换行

strong: 加粗

em: 文字变成斜体

sup和sub: 上角标 和 下角标

br: 换行

hr: 水平线

div span

### a 超链接

属性：href、target

href  超链接地址：可以是Web上任意资源，包括图片，网页，样式，脚本文件等。href="#"时，表示被链接页面就是当前页面。

target  文档打开时要显示的目标位置，属性值一般有：_blank（新窗口中打开）、_self（默认，在超链接所在的容器中打开）、_parent（在超链接的父容器中打开）、_top（整个容器中打开）

### img 图形标签

用来显示图片

属性：src、title、alt、width、height、align

src  图片地址

title  鼠标悬浮在图片上的文字

alt  图片找不到时要替换的文字

width  图片的宽

height  图片的高 (宽高两个属性只用一个会自动等比缩放)

### 列表标签

ul: 无序列表

ol: 有序列表

li: 列表中的每一项

dl: 定义列表

dt: 列表标题

dd: 列表项

### 多媒体

audio 音频

video 视频

### form 表单标签

表单属性 action、method、enctype...

表单元素
input type属性

text  文本框输入

password  定义密码字段

radio  单选按钮

checkbox  复选框

file  文件域

button  普通按钮

reset 定义重置按钮

submit 定义提交按钮

---

button 　定义一个按钮

select 　定义一个下拉列表

option 　定义下拉列表中的一个选项

optgroup 定义选项组，用于组合选项

textarea 定义多行的文本输入控件

fieldset 分组表单内的相关元素

legend 定义fieldset元素的标题

label 定义input元素的标注
