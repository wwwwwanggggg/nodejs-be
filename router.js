const express = require("express")
const midware = require("./middleware/init")
const handler = require("./handlers/init")
const multer = require("multer")

const router = express.Router()

const apiRouter = express.Router()
const upload = multer({ storage: multer.memoryStorage() }) // 内存存储


function createRouterGroup(path) {
    const routerGroup = express.Router()
    apiRouter.use(path, routerGroup)
    return routerGroup
}

function initRouterGroup() {
    router.use(express.json())
    router.use("/api", apiRouter)
    router.use("/", midware.errorhandler)
    router.use("/", midware.logger)


    // example
    const exampleRouter = createRouterGroup("/example")
    {
        exampleRouter.get("/", (req, res) => {
            res.send("Hello from example router")
        })
        // end 


        passageRouter = createRouterGroup("/passage")
        {
            passageRouter.get("/html/:id", handler.passage.getPassage) // 获取文章渲染
            passageRouter.get("/:id", handler.passage.getPassageContent) // 获取文章目录，内容
            passageRouter.post("/", midware.isformdata, upload.single("file"), handler.passage.createPssage) // 创建文章
            passageRouter.delete("/:id", handler.passage.deletePassage) // 删除文章
        }
    }
}

initRouterGroup()
module.exports = router