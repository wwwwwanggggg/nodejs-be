const Passage = require("../model/models").Passage

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
                res.status(200).json({
                    code: 200,
                    message: "获取成功",
                    data: passage
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
    async createPssage(req, res) {
        const data = req.body
        console.log(data);
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
            await Passage.destory({
                where: {
                    id: id
                }
            })

            res.status(200).json({
                code: 200,
                message: "删除成功",
                data: null,
            })
        } catch (err) {
            res.status(500).json({
                code: 500,
                message: "服务器错误",
                error: err.message
            })
        }
    }
}