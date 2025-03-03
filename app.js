const express = require('express')
const initDB = require('./model/models')
const app = express()
const port = 3000
const router = require("./router")

// 配置跨域
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*") // 允许所有域名访问
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization") // 允许的请求头
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS") // 允许的请求方法
    next()
})

// 配置静态资源
app.set('view engine', 'ejs');



initDB()


app.use("/", router)

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
})
