const Passage = require("../model/models").Passage
const fs = require("fs")
const markdownIt = require("markdown-it")
const markdownItKatex = require('markdown-it-katex');
const mdhighlight = require('markdown-it-highlightjs')

const md = markdownIt().use(markdownItKatex).use(mdhighlight)

module.exports = {
    async getPassage(req, res) {
        const id = req.params.id
        try {
            const passage = await Passage.findOne({
                where: {
                    id: id
                }
            })
            if (passage) {
                fs.readFile(passage.dataValues.path, "utf-8", (err, markdowncontent) => {
                    if (err) {
                        res.status(500).json({
                            code: 500,
                            message: "服务器错误",
                            error: err.message
                        })
                    }
                    const htmlcontent = md.render(markdowncontent)
                    res.status(200).render("passage", {
                        "markdown": htmlcontent
                    })

                })
            } else {
                res.status(404).json({
                    code: 404,
                    message: "未找到该文章"
                })
            }
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "服务器错误",
                error: error.message
            })
        }
    },
    async getPassageContent(req, res) {
        const id = req.params.id
        try {
            const passage = await Passage.findOne({ where: { id: id } })
            if (!passage) {
                res.status(404).json({
                    code: 404,
                    message: "未找到该文章"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    message: "获取成功",
                    data: passage.dataValues
                })
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                message: "服务器错误",
                error: err.message
            })
        }
    },
    async getPassageAll(req, res) {
        try {
            const passages = await Passage.findAll()
            if (passages.length === 0) {
                res.status(404).json({
                    code: 404,
                    message: "未找到文章"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    message: "获取成功",
                    data: passages
                })
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                message: "服务器错误",
                error: err.message
            })
        }
    },
    async createPssage(req, res) {
        const data = req.body
        if (!req.file) {
            res.status(400).json({
                code: 400,
                message: "没有文件上传"
            })
            return
        }

        console.log(req.file)
        try {
            const passage = await Passage.create({
                title: data.title,
                content: data.content,
                nav: data.nav,
                path: data.path,
                coverPath: data.coverPath
            })
            res.status(201).json({
                code: 201,
                message: "创建成功",
                data: passage
            })
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "服务器错误",
                error: error.message
            })
        }
    },
    async deletePassage(req, res) {
        const id = req.params.id
        try {
            const passage = await Passage.destroy({
                where: {
                    id: id
                }
            })
            if (passage) {
                res.status(200).json({
                    code: 200,
                    message: "删除成功"
                })
            } else {
                res.status(404).json({
                    code: 404,
                    message: "未找到该文章"
                })
            }
        } catch (err) {
            res.status(500).json({
                code: 500,
                message: "服务器错误",
                error: err.message
            })
        }
    }
}