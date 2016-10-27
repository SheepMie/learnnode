var mongoose = require("mongoose");
var TestSchema = require("../schemas/test"); //引入模式文件
var TestModel = mongoose.model("test1", TestSchema); //生成test1模型和模式,在数据库中生成集合,注意只能小写或数字组合，大写会改成小写加s

module.exports = TestModel; //导出模型
