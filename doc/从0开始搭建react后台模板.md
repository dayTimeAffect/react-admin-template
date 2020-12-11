## 一、前言
本系列文章计划撰文两篇：
+ 【起步】基础架构篇
+ ...

项目地址：

预览地址：

本系列文章将记录如何从0开始搭建出一个及格后台系统，
#### 系统功能包含：
+ 页面 （待实现）
    + 登陆页面
    + 404页面
+ 导航菜单（待实现）
    + 顶部导航
    + 侧边栏导航
+ 功能组件（待实现）
    + 按钮（antd组件）
    + ...
+ 动画（待实现）
+ 表格（待实现）
    + 基础表格
+ 表单（待实现）
+ 图表（待实现）
    + echarts图标
+ ...

#### 主要依赖：
+ [react](https://react.docschina.org/)(用于构建用户界面的 JavaScript 库)
+ [antd](https://3x.ant.design/index-cn)(antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。)
+ [typescript](https://www.tslang.cn/)



### 项目搭建

**一、创建项目**

```
yarn create react-app . --template typescript
yarn eject
```

**二、引入需要的依赖**

+ 新增支持less语法 [React中引入less](https://juejin.cn/post/6904902292496089096)
+ 新增antd框架 ( `yarn add antd` )
+ 新增classnames优化动态类名的创建 ( `yarn add -D classnames` )
+ 新增Git日志约束工具 ( [给你的项目搭建 Git 提交日志规范](https://juejin.cn/post/6904194531709681672/) )

##  项目中的系列文章

+ [React中引入less](https://juejin.cn/post/6904902292496089096)

+ [给你的项目搭建 Git 提交日志规范](https://juejin.cn/post/6904194531709681672/) 
+ [antd 踩坑之 javascriptEnabled配置](https://juejin.cn/post/6904911555909910542)