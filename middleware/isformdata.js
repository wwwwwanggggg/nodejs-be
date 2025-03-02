module.exports = function (req, res, next) {
    if (!req.is("multipart/form-data")) {
        return res.status(400).json({
            code: 400,
            message: "请求不是 multipart/form-data 格式"
        })
    }
    next()
}


