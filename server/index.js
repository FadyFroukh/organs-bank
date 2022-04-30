const express = require("express");
const mongo = require("mongodb");
const cors = require("cors");

const mongoClient = mongo.MongoClient;
const app = express();
const port = 4000 || process.env.PORT;

const User = require("./models/User");
const Hla = require("./models/Hla");
const Organ = require("./models/Organ");
const Question = require("./models/Question");


const ObjectId = mongo.ObjectId;
const multer = require('multer');


const url = "mongodb+srv://Fadi:12345@body-parts.aovk2.mongodb.net/test";

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({
  origin:"*"
}))

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`)
    }
  })
let upload = multer({ dest: 'uploads/' })



app.get("/",(req,res)=>{
    res.json({
      "Welcome":"Welcome to the Body Parts API",
    })
})

//Users Endpoints

app.get("/users",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").find({}).toArray(function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.get("/users/:id",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").findOne({_id:ObjectId(req.params.id)},function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.post("/users",(req,res)=>{
    const user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password,
        phone:req.body.phone,
        address:req.body.address,
        email:req.body.email,
        age:req.body.age,
        id:req.body.id,
        sex:req.body.sex,
        status:req.body.status,
        rule:req.body.rule
    })
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").insertOne(user,function(err,result){
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        })
    });
    
})

app.put("/users",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").updateOne({"_id":ObjectId(req.body.id)},{$set:{
            "rule":req.body.rule
        }}).then(result=>{
            console.log(req.body.rule);
            res.send(result);
        }).catch(err=>{
            console.log("Update Failed");
        })
    })
})

app.put("/users-data",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").updateOne({"_id":ObjectId(req.body._id)},{$set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phone:req.body.phone,
            address:req.body.address,
            email:req.body.email,
            sex:req.body.sex,
            age:req.body.age,
            id:req.body.id,
            status:req.body.status,
            rule:req.body.rule,
            password:req.body.password
        }}).then(result=>{
            console.log(result.matchedCount);
            res.send(result);
        }).catch(err=>{
            console.log("Update Failed");
        })
    })
})


app.post("/admin-login",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("admins").find({
            username:req.body.username,
            password:req.body.password
        }).toArray(function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.delete("/users/:id",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").findOneAndDelete({"_id":ObjectId(req.params.id)},function(err,result){
            if(err) throw err;
            console.log(req.params.id);
            res.send(result);
            db.close();
        })
    })
})


app.get("/login",(req,res)=>{
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").find({
            email:req.query.email
        }).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    }); 
})




//Hla Endpoints

app.get("/hla",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("hla").find({}).toArray(function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.post("/hla",upload.single("file"),(req,res)=>{

    const hla = new Hla({
        userId:req.body.userId,
        first:req.body.first,
        second:req.body.second,
        status:req.body.status,
        file:req.body.file
    })

    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("hla").insertOne(hla,function(err,result){
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        })
    });
})

app.put("/hla",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("hla").updateOne({"_id":ObjectId(req.body._id)},{$set:{
            first:req.body.first,
            second:req.body.second,
            status:req.body.status
        }}).then(result=>{
            console.log(result.matchedCount);
            res.send(result);
        }).catch(err=>{
            console.log("Update Failed");
        })
    })
})

app.get("/hla/:id",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("hla").findOne({userId:req.params.id},function(err,result){
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        })
    })
})

app.delete("/hla/:id",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("hla").findOneAndDelete({"_id":ObjectId(req.params.id)},function(err,result){
            if(err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        })
    })
})



//Organs Endpoints

app.get("/organs",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("organs").find({}).toArray(function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.get("/organs/:id",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("organs").findOne({userId:req.params.id},function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.post("/organs",(req,res)=>{

    const organ = new Organ({
        userId:req.body.userId,
        organName:req.body.organName,
        rule:req.body.rule
    })


    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("organs").insertOne(organ,function(err,result){
            if(err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        })
    })
})

app.put("/organs",function(req,res){
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("organs").updateOne({"_id":ObjectId(req.body._id)},{$set:{
            organName:req.body.organName,
            rule:req.body.rule
        }}).then(result=>{
            console.log(result);
            res.send(result);
        }).catch(err=>{
            console.log("Update Failed");
        })
    })
})

app.delete("/organs/:id",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("organs").findOneAndDelete({"_id":ObjectId(req.params.id)},function(err,result){
            if(err) throw err;
            res.send(result);
            db.close();
        })
    })
})


//Question Endpoints

app.get("/question",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("questions").find({}).toArray(function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.post("/question",(req,res)=>{
    const question = new Question({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        messageTopic:req.body.messageTopic,
        messageBody:req.body.messageBody
    })
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("questions").insertOne(question,function(err,result){
            if(err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        })
    })
})


app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
})