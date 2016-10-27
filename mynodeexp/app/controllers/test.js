var TestModel = require("../models/test");

exports.save = function(req, res) {
    var entity = new TestModel({ //写入数据
        name: req.body.name, //需要app.js头引入var bodyParser = require('body-parser');    
        age: req.body.age,
        email: req.body.email
    });
    entity.save(function(error, doc) {
        if (error) {
            console.log("error :" + error);
        } else {
            console.log(doc);
            res.json({
                success: 1
            });
        }
    });

    // TestModel.create({ //添加一条数据，与entity相似,如果是Entity，使用save方法，如果是Model，使用create方法
    //     name: "test_create",
    //     age: 26,
    //     email: "tom@qq.com"
    // }, function(error, doc) {
    //     console.log(doc);
    // });

    /*TestModel.find({
        "age": 28
    }, function(error, docs) {
        if (error) {
            console.log("error :" + error);
        } else {
            console.log(docs); //docs: age为28的所有文档
        }
    });*/
    /*var conditions = {
        name: 'test_update'
    };

    var update = {
        $set: {
            age: 16
        }
    };

    TestModel.update(conditions, update, function(error,dor) { //更新数据
        if (error) {
            console.log(error);
        } else {
            console.log('Update success!');
            TestModel.find({
                "age": 26
            }, function(error, docs) {
                if (error) {
                    console.log("error :" + error);
                } else {
                    console.log(docs); //docs: age为28的所有文档
                }
            });
        }
    });*/
    /*var TestEntity = new TestModel({ //写入数据
        name: "helloworld",
        age: 28,
        email: "helloworld@qq.com"
    });
    TestEntity.save(function(error, doc) {
        if (error) {
            console.log("error :" + error);
        } else {
            console.log(doc);
        }
    });*/
    // var conditions = {
    //     name: 'tom'
    // };
    //
    // TestModel.remove(conditions, function(error, dor) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Delete success!');
    //     }
    // });
    /*TestModel.findById('57eb7f09af892801680528c8', function(err, doc) {
        console.log(doc);
    });*/
};
exports.requirt = function(req, res) {
    TestModel.find({
        age: 28
    }, function(error, docs) {
        if (error) {
            console.log("error :" + error);
        } else {
            console.log(docs);
            res.json(docs);
        }
    });
};
