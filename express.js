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

    app.get('/funds', (req, res) => {
        const fundsData = funds.getAllFunds(db)
        fundsData.then((allData) => {
            res.status(200).send(allData)
        }).catch((err) => {
            res.sendStatus(404)
        })
    })

    app.get('/funds/:id', (req, res) => {

        const id = req.params.id
        const fundData = funds.getFund(db, id)
        fundData.then((singleData) => {
            res.status(200).send(singleData)
        }).catch((err) => {
            res.sendStatus(404)
        })
    })

    app.listen(3000);
    console.log("Listening on port 3000");
}
