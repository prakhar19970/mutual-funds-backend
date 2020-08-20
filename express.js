const express = require('express');
const app = express();
var connection = require('./Database/connection');


const {getFunds} = require('./controller/mutualFunds');

app.get('/', async (req, res) => {
    const db = await connection.connect();
    var results=await getFunds(db)
    console.log(results)
})

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: false }));

app.listen(3000, function () {
    console.log('listening on 3000')
})