const express = require("express")
const midware = require("./middleware/init")
const handler = require("./handlers/init")

const router = express.Router()

const apiRouter = express.Router()
// 配置 multer 以原始文件名存储到up




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



    const exampleRouter = createRouterGroup("/example")
    {
        exampleRouter.get("/", (req, res) => {
            res.send("Hello from example router")
        })
        // end 

    }

}

initRouterGroup()
module.exports = router