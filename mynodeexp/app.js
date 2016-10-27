var express = require('express');
//var path = require("path");
var bodyParser = require('body-parser'); //可以获取body内参数
//var multer = require('multer');
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT || 8080; //设置端口

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
var db = mongoose.connect("mongodb://localhost/test");
db.connection.on("error", function(error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function() {
    console.log("------数据库连接成功！------");
});
require('./config/routes')(app);
/*if ('development' === app.get('env')) { //在开发者环境下配置
    app.set('showStackError', true); //打印错误
    app.use(logger(':method :url :status')); //返回对应参数
    app.locals.pretty = true; //页面代码格式化
    //mongoose.set('debug', true); //打开开发环境
}*/
app.listen(port);
console.log('imooc started on port' + port); //监听日志，是否开启
