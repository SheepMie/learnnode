exports.index = function(req, res) { //next为中间件的回调函数。如果它带有参数，则代表抛出一个错误，参数为错误文本。
    //res.end('去你妹的'); //上文已发送send不能再次发送,要用end
    res.json({
        success: '1'
    });
    //next('get not found'); //获得的是req内容
};
exports.about = function(req, res) {
    console.log(req.param("n"));
    res.json({
        success: '1'
    });
};

exports.cb0 = function(req, res, next) {
    console.log('CB0');
    next();
};

exports.cb1 = function(req, res, next) {
    console.log('CB1');
    next();
};
exports.example = function(req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
};
exports.hellow = function(req, res) {
    res.end('Hello from D!');
};
