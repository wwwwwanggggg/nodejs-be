const express = require("express")
const errorhandler = require("./middleware/errorhandler")
const logger = require("./middleware/logger")
const handler = require("./handlers/init")

const router = express.Router()
const apiRouter = express.Router()

function createRouterGroup(path) {
    const routerGroup = express.Router()
    apiRouter.use(path, routerGroup)
    return routerGroup
}

function initRouterGroup() {
    router.use(express.json())
    router.use("/api", apiRouter)
    router.use("/", errorhandler)
    router.use("/", logger)


    // example
    const exampleRouter = createRouterGroup("/example")
    {
        exampleRouter.get("/", (req, res) => {
            res.send("Hello from example router")
        })
        // end 

        // errorhandlerexample
        exampleRouter.get("/error", (req, res) => {
            throw new Error("This is an error")
        })

        passageRouter = createRouterGroup("/passage")
        {
            passageRouter.get("/:id", handler.passage.getPassage) // 获取文章
            passageRouter.post("/", handler.passage.createPssage) // 创建文章
            passageRouter.delete("/:id", handler.passage.deletePassage) // 
        }
    }
}

initRouterGroup()
module.exports = router