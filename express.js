const express = require('express');
const app = express();
var connection = require('./Database/connection');


app.get('/', async (req, res) => {
    const db = await connection.connect();
    db.collection('mutual-funds2').find().toArray().then(results => {
            console.log(results)
        })
})

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: false }));

app.listen(3000, function () {
    console.log('listening on 3000')
})