const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient
const password = 'Kochikame02@';
const connectionString = `mongodb+srv://admin:${password}@cluster0.oruwf.mongodb.net/<funds>?retryWrites=true&w=majority`;
const funds = require('./controller/mutualFunds');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('funds')
        appStart(db)
    })

function appStart(db) {

    app.get('/', (req, res) => {
        const fundsData = funds.getAllFunds(db)
        fundsData.then((allData) => {
            res.status(200).send(allData)
        })
    })

    app.listen(3000);
    console.log("Listening on port 3000");
}
