const funds = require('../model/fund.js');


const getAllFunds =   (req, res) => {
    if (req.query.search) {
        const id = req.query.search
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
    }
    else {
        const fundsData = funds.getAllFunds()
        fundsData.then((allData) => {
            res.status(200).send(allData)
        }).catch((err) => {
            res.status(404).send('Request Not Found')
        })
    }
}

const getSingleFund =(req, res) => {
        console.log(req.query)
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
            res.status(404).send("Fund not found")
        })
 }

const createFund= (req, res) => {
        const newFields = req.body
        if (Object.entries(newFields).length) {
            const fundData = funds.createFund(db, newFields)
            fundData.then((docStatus) => {
                console.log(docStatus)
                res.status(202).send(`new fund created with id ${docStatus.insertedId} Status Code:${res.statusCode}`);
            }).catch((err) => {
                res.status(404)
            })
        }
        else {
            res.status(400).send(`Invalid Input`);
        }
    }

  
  const deleteFund = (req, res) => {
        const id = req.params.id
        const fundData = funds.deleteFund(db, id)
        fundData.then((docStatus) => {
            if (docStatus.deletedCount === 0) {
                res.status(400).send(`fund with id: ${id} does not exists`);
            } else {
                res.status(410).send(`Fund with id: ${id} deleted Status Code:${res.statusCode}`);
            }
        }).catch((err) => {
            res.status(404).send("Not Found : Invalid Input")
        })
    }

    const updateFund = (req, res) => {
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
    }

module.exports = { getAllFunds,getSingleFund,createFund,deleteFund,updateFund };