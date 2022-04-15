const express = require("express");
const mongo = require("mongodb");
const cors = require("cors");

const mongoClient = mongo.MongoClient;
const app = express();
const port = 4000 || process.env.PORT;

const User = require("./models/User");
const Hla = require("./models/Hla");
const Organ = require("./models/Organ");

const ObjectId = mongo.ObjectId;

const url = "mongodb+srv://Fadi:12345@body-parts.aovk2.mongodb.net/test";

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({
  origin:"*"
}))

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
            res.send(result);
            db.close();
        })
    });
})

app.get("/hla/:id",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("hla").findOne({userId:req.params.id},function(err,result){
            if (err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.put("/users",(req,res)=>{
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").updateOne({"_id":ObjectId(req.body.id)},{$set:{
            "rule":req.body.rule
        }}).then(result=>{
            console.log(result);
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

app.post("/login",(req,res)=>{
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("body-parts");
        dbo.collection("users").find({
            email:req.body.email,
            password:req.body.password,
            id:req.body.id
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

app.post("/hla",(req,res)=>{

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
            res.send(result);
            db.close();
        })
    });
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
            res.send(result);
            db.close
        })
    })
})



app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
})