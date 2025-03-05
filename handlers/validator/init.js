// 检查query中的page和limit参数
function checkPageForm(req) {
    if (req.query.page && req.query.limit) {
        return true
    }
    return false
}

module.exports = {
    checkPageForm
}







