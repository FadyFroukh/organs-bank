const mongoose = require("../Connection");

const hlaSchema = new mongoose.Schema({
    userId:{
        type:String,
        trim:true
    },
    status:{
        type:Number,
        required:true,
        trim:true
    },
    first:{
        type:String,
        required:true,
        trim:true
    },
    second:{
        type:String,
        required:true,
        trim:true
    },
    file:{
        type:Buffer,
        required:true,
    }
})

const Hla = mongoose.model("Hla",hlaSchema);

module.exports = Hla;