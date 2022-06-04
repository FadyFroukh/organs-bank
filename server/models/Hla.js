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
    third:{
        type:String,
        required:true,
        trim:true
    },
    fourth:{
        type:String,
        required:true,
        trim:true
    },
    fifth:{
        type:String,
        required:true,
        trim:true
    },
    sixth:{
        type:String,
        required:true,
        trim:true
    },
    fileName:{
        type:String,
        required:true,
        trim:true
    }
})

const Hla = mongoose.model("Hla",hlaSchema);

module.exports = Hla;