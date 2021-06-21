# CSS简介

CSS是Cascading Style Sheets的简称，中文称层叠样式表。

## 选择器（Selector）

### 基本选择器

1.通用元素选择器

\* 表示应用到所有的标签 * {color: yellow}

2.标签选择器

div {color: yellow}

3.类选择器

.类名{样式} .Mycolor {color: yellow}

4.ID选择器

#ID名{样式} #Mycolor {color: yellow}

### 组合选择器
1.多元素选择器
2.后代元素选择器
3.子元素选择器
4.毗邻元素选择器

### 属性选择器
[属性]{样式}

### 伪类选择器
1、静态伪类

:link 未访问 :visited 已访问

2、动态伪类

:focus 拥有焦点 :hover 鼠标停留 :active 正被点击

3、UI元素伪类

:enabled    可用状态 :disabled    不可用状态 :checked    选中状态

4、结构伪类

first-child last-child first-of-type last-of-type...

### 伪元素选择器

:first-letter 设置首字母样式

:first-line 设置首行样式

:before 在元素内容前面插入内容

:after 在元素内容后面插入内容

## 常用属性

### 颜色属性
color grb() rgba() HSL() HSLA()

currentColor 当前颜色

transparent 全透明

opacity 元素的透明度

### 字体属性

font-family：字体名称

font-size: 设置字体的大小

font-weight: 设置文本的粗细

font-style: 用于规定斜体文本

### 文本属性
white-space: 设置元素中空白的处理方式

direction: 规定文本的方向

text-align: 文本的水平对齐方式

line-height: 文本行高

vertical-align: 文本所在行高的垂直对齐方式

text-indent: 文本缩进

letter-spacing: 添加字母之间的空白

word-spacing: 添加每个单词之间的空白

text-transform: 属性控制文本的大小写

text-overflow: 文本溢出样式

text-decoration: 文本的装饰

text-shadow：文本阴影

word-wrap：自动换行

### 背景属性

background-color: 背景颜色

background-image 设置图像为背景

background-position 设置背景图像的位置坐标

background-repeat 设置背景图像不重复平铺

background-attachment 背景图像是否固定或者随着页面的其余部分滚动

## 页面布局

### 盒子模型

width height padding border margin

### display

none 不显示

block 显示为块级元素

inline 显示为内联元素

inline-block 行内块元素

flex 弹性布局

grid 网格二维布局

### float 浮动
none 默认
left 左浮动
right 右浮动

### position 规定元素的定位类型
static 默认值，没有定位，遵从正常的文档流

relative 相对定位元素，相对于其正常位置进行定位，遵从正常的文档流

absolute 绝对定位元素，脱离正常文档流

fixed 绝对定位元素，固定在浏览器某处

sticky 粘贴

### z-index  元素层叠顺序
利用z-index，可以改变元素相互覆盖的顺序

## 动画
### transform
rotate 旋转
skew  扭曲
scale  缩放
translate 移动

### Transition
transition-property：变换的属性
transition-duration：变换持续时间
transition-timing-function： 变换的速率（ease:(逐渐变慢)、linear:(匀速)、ease-in:(加速)、ease-out:(减速)、ease-in-out:(加速然后减速)
transition-delay：变换延迟时间

### animation
animation-name 动画名称

animation-duration 持续时间

animation-timing-function 时间函数

animation-iteration-count 循环次数

animation-direction 动画方向

animation-delay 延迟时间
