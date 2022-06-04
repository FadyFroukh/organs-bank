const mongoose = require("mongoose");
mongoose.connect("mongodb://Fadi:12345@body-parts-shard-00-00.aovk2.mongodb.net:27017,body-parts-shard-00-01.aovk2.mongodb.net:27017,body-parts-shard-00-02.aovk2.mongodb.net:27017/body-parts?ssl=true&replicaSet=atlas-h5ybzp-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;