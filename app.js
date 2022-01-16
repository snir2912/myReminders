const momgo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myReminders");
    dbo.createCollection("reminders", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myReminders");
    var toDoHw = { name: "turn off the boiller", description: "turn on the boiller for 30 minutes" };
    dbo.collection("reminders").insertOne(toDoHw, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});