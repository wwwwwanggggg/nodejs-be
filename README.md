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

├── app.js 服务端程序入口
├── global 全局变量
│   
├── handlers 路由处理
│   ├── init.js 初始化
│   └── validator 参数校验
│       └── init.js 初始化
├── middleware 中间件
│   ├── errorhandler.js 错误处理中间件
│   ├── init.js 
│   └── logger.js 日志中间件
├── model 数据库模型
│   └── models.js
├── package.json
├── package-lock.json
├── README.md
├── router.js 路由注册
├── static 静态资源
├── uploads 上传资源
└── views 渲染视图

