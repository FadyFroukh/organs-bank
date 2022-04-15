const mongoose = require("../Connection");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true        
    },
    id:{
        type:Number,
        required:true,
        trim:true
    },
    sex:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:Number,
        required:true,
        trim:true
    },
    rule:{
        type:Number,
        required:true,
        trim:true
    }

})

const User = mongoose.model("User",userSchema);

module.exports = User;