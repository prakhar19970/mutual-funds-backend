const express = require('express');
const app = express();

const { connectionString } = require( "./Database/dbconfig.js")

const MongoClient = require('mongodb').MongoClient
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
            if (singleData === null) {
                res.status(400).send(`fund with id: ${id} does not exists`);
            }
            else {
                res.status(200).send(singleData)
            }
        }).catch((err) => {
            res.sendStatus(404)
        })
    })

    app.delete('/funds/:id', (req, res) => {
        const id = req.params.id
        const fundData = funds.deleteFund(db, id)

        fundData.then((docStatus) => {
             if (docStatus.deletedCount === 0) {
                res.status(400).send(`fund with id: ${id} does not exists`);
            } else {
                res.status(410).send(`Fund with id: ${id} deleted Status Code:${res.statusCode}`);
            }
        }).catch((err) => {
            res.sendStatus(404)
        })
    })


    app.listen(3000);
    console.log("Listening on port 3000");
}
