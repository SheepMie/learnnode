var Index = require('../app/controllers/app');
var Mongo = require('../app/controllers/test');
module.exports = function(app) {
    app.all("*", function(req, res, next) {　　  //表示后面所有路由必须经过该中间件
        // res.writeHead(200, {                 //只能发送一次send，导致后续不能发送json
        //     "Content-Type": "text/html;charset=utf-8",
        //     'Access-Control-Allow-Origin': '*' //解决跨域问题
        // }); //设置响应头属性值
        res.statusCode = 200;
        res.sendDate = false;
        res.setHeader( //用设置请求头的方法可是后续实现json发送
            "Content-Type", "text/html;charset=utf-8"
        ); //设置响应头属性值
        res.setHeader(
            'Access-Control-Allow-Origin', '*' //解决跨域问题
        ); //设置响应头属性值
        next();
    });

    app.get('/', Index.index);
    app.post('/about', Index.about);
    // app.get("*", function(req, res) {　　
    //     res.end("404 - 未找到!");
    // });
    app.route('/book')
        .get(function(req, res) {
            res.send('Get a random book');
        })
        .post(function(req, res) {
            res.send('Add a book');
        })
        .put(function(req, res) {
            res.send('Update the book');
        });
    app.get('/example/d', Index.cb0, Index.cb1, Index.example, Index.hellow); //中间件方法

    /*数据库保存*/
    app.post('/save', Mongo.save);
    app.get('/requirt', Mongo.requirt);
};
