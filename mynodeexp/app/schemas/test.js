var mongoose = require("mongoose");

var TestSchema = new mongoose.Schema({ //数据框架
    name: {
        type: String //属性name,类型为String
    },
    age: {
        type: Number, //属性age,类型为Number,默认为0
        default: 0
    },
    time: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        default: ''
    }
});

module.exports = TestSchema;
