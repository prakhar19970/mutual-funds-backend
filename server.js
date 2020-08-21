

const { connectionString } = require("./Database/dbconfig.js")
const { appStart }=require("./model/fund.js")
const MongoClient = require('mongodb').MongoClient

//connect to database
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('funds') //database object
        appStart(db);// this calls on the the express app and starts the server
    })