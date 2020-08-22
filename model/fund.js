
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const funds = require('../controller/mutualFunds.js');

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
            console.log(singleData)
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

    app.post('/funds', (req, res) => {
        const newFields = req.body
        const fundData = funds.createFund(db, newFields)
        fundData.then((docStatus) => {
            console.log(docStatus)
            res.status(202).send(`new fund created with id ${docStatus.insertedId} Status Code:${res.statusCode}`);
        }).catch((err) => {
            res.status(404)
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

    app.put('/funds/:id', (req, res) => {
        const id = req.params.id
        const updateFields = req.body
        const fundData = funds.updateFund(db, id, updateFields)
        fundData.then((docStatus) => {
            if (docStatus.matchedCount === 0) {
                res.status(400).send(`fund with id: ${id} does not exists`);
            } else {
                res.status(202).send(`Fund with id: ${id} updated Status Code:${res.statusCode}`);
            }
        }).catch((err) => {
            res.sendStatus(404)
        })
    })

    console.log("server started");
}

module.exports = { appStart };