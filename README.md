## 前言

这是一个简单的express二次封装的框架，在很大程度上借鉴了tz-gin的结构，所以大家快去给[tz-gin](https://github.com/xjtu-tenzor/tz-gin-template)点个star吧

## 如何使用

启动
```bash
npm install
npm run dev
```
使用了nodemon作为热更新，使用了Sequlize作为orm，默认连接了MySql

## 目录结构

├── global 全局变量
├── handlers 路由处理函数 
├── middleware 中间件
├── model 数据库相关
├── public 公开资源
├── uploads 上传资源
├── router.js 注册路由在这里
└── app.js 应用级设置在这里

