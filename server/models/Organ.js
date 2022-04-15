const mongoose = require("../Connection");

const organSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        trim:true
    },
    organName:{
        type:String,
        required:true,
        trim:true
    },
    rule:{
        type:Number,
        required:true,
        trim:true
    }
})

const Organ = mongoose.model("Organ",organSchema);

module.exports = Organ;