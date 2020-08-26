const fs = require('fs');
const mongoose = require("mongoose");
const Fund =require("./model/fundSchema.js")
const {connectionString}= require('./Database/dbconfig.js')


mongoose.connect(connectionString, {useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, })
    .then(response => {
        console.log("connected database")
        initialize();
    })

function initialize() {
    const rawdata = fs.readFileSync('./funds.json')
    const funds = JSON.parse(rawdata);
    Fund.insertMany(funds)
}