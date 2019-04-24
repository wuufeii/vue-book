# vue-book

> 用vue写的具有翻书效果的页面 </br>

``` bash
可快速使用，直接拿dist文件，修改json数据，就可以使用你的一套网站内容
```

## 项目在线效果

想要看看项目的效果是怎样的？来吧——[传送门](https://wuufeii.github.io/vue-book) <br />

## 项目截图

		封面效果
<div align="center">
  <img width="800" src="https://github.com/wuufeii/html-css/blob/master/assets/img-vueBook/1.png"/>
</div>

		内容区效果
<div align="center">
  <img width="800" src="https://github.com/wuufeii/html-css/blob/master/assets/img-vueBook/2.png"/>
</div>


## 项目如何使用

``` bash
一、直接使用
如果你直接使用这个，你只需要下载[dist]这个文件夹，然后找到static-data-data.json
你只需要修改data.json里面的数据，就可以直接使用该项目，无需启动项目，无需添加html，无需修改css,只需浏览器打开即可用
```

>     data.json中字段含义

```	JavaScript
frontCover: {
  logo: 'Wf', //封面log字段
  title: '这是笔记本',  //封面标题
  content: '青春纪念手册', //封面内容
  year: '2019' 
},
content: [{
  isTitle: true, //是否是内容标题
  isFront: true, //是否正向翻页
  pre: 'first', //上一页索引名
  cur: 'ref_1', //当前页索引名
  next: 'ref_1_1', //下一页索引名
  chapter: '第一章',  //如果是标题，则代表标题章节，否则可为空
  title: '这是第一章标题', //如果是标题，则代表标题题目，否则可为空
  content: '' //如果不是标题，则代表内容，否则可为空
  }, {
  ...
  }
  
 ```

>     *注意如果内容第一页的pre必须是first,最后一页的next必须是last,中间的每列索引可以自定义

二、开发环境使用

```bash
如果你想添加功能，请下载项目，然后根据需要修改组件

### 首先下载项目依赖包，使用方命令。
npm install

### 服务器热部署，运行项目
npm run dev

### 项目的构建命令
npm run build

###以下命令来查看依赖关系.然后再根据具体情况划分代码块.
npm run build --report
```
