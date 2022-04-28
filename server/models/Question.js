const mongoose = require("../Connection");

const questionSchema = new mongoose.Schema({
   firstName:{
       type:String,
       trim:true,
       required:true
   },
    lastName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        required:true
    },
    messageTopic:{
        type:String,
        trim:true,
        required:true
    },
    messageBody:{
        type:String,
        trim:true,
        required:true
    }
})

const Question = mongoose.model("Question",questionSchema);

module.exports = Question;