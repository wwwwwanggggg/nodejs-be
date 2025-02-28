const express = require("express")
const errorhandler = require("./middleware/errorhandler")
const logger = require("./middleware/logger")

const router = express.Router()
const apiRouter = express.Router()

function createRouterGroup(path) {
    const routerGroup = express.Router()
    apiRouter.use(path, routerGroup)
    return routerGroup
}

function initRouterGroup() {
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
    }
}


initRouterGroup()
module.exports = router