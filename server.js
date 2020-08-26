

const { connectionString } = require("./Database/dbconfig.js")
const { appStart }=require("./controller/mutualFunds.js")
// const MongoClient = require('mongodb').MongoClient
const mongoose = require("mongoose");
//connect to database
mongoose.connect(connectionString, {  useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, })
    .then(client => {
        
        // const db = client.db('funds') //database object
        appStart(client);// this calls on the the express app and starts the server
    })