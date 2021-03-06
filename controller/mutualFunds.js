const Fund = require("../model/fundSchema.js")

const getAllFunds = (req, res) => {
    if (req.query.search) {
        const fund_Name = req.query.search
        query = { "name": fund_Name }
        Fund.findOne(query).then(fund => {
            if (fund === null) {
                res.status(400).send(`fund with id: ${id} does not exists`);
            }
            else {
                res.status(200).send(fund)
            }
        }).catch((err) => {
            res.status(404).send("Fund not found")
        })
    }
    else {
        Fund.find().then(allfunds => {
            res.status(200).send(allfunds)
        }).catch((err) => {
            res.status(404).send('Request Not Found')
        })
    }
}

const getSingleFund = (req, res) => {
    const id = req.params.id
    query = { "_id": id }
    Fund.findOne(query).then(fund => {
        if (fund === null) {
            res.status(400).send(`fund with id: ${id} does not exists`);
        }
        else {
            res.status(200).send(fund)
        }
    }).catch((err) => {
        res.status(404).send("Fund not found")
    })
}

const createFund = (req, res) => {
    const newFund = new Fund(req.body)
    if (Object.entries(req.body).length) {
        newFund.save().then((docStatus) => {
            console.log(docStatus)
            res.status(202).send(docStatus);
        }).catch((err) => {
            res.status(400).send("Invalid Input / Duplicate Code value")
        })
    }
    else {
        res.status(400).send(`Invalid Input`);
    }
}


const deleteFund = (req, res) => {
    const id = req.params.id
    query = { "_id": id }
    Fund.deleteOne(query).then((docStatus) => {
        if (docStatus.deletedCount === 0) {
            res.status(400).send(`fund with id: ${id} does not exists`);
        } else {
            res.status(410).send(`Fund with id: ${id} deleted`);
        }
    }).catch((err) => {
        res.status(404).send("Not Found : Invalid Input")
    })
}

const updateFund = (req, res) => {
    const id = req.params.id
    filter = { "_id": id }
    const updateFields = req.body
    console.log(updateFields)
    Fund.updateOne(filter, updateFields).then((docStatus) => {
        if (docStatus.nModified && docStatus.n) {
            Fund.findOne(filter).then(result=>{
                res.status(202).send(result);
            })
        } else {
            console.log(docStatus)
            res.status(400).send(`Invalid / Duplicate Input`);
        }
    }).catch((err) => {
        res.status(404).send(`Invalid Id`);
    })
}

module.exports = { getAllFunds, getSingleFund, createFund, deleteFund, updateFund };