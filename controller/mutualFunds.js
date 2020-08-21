const { ObjectId } = require("mongodb");
const { dbCollection }=require("../Database/dbconfig.js")


 function getAllFunds(db) {
    return new Promise((resolve, reject) => {
        db.collection(dbCollection).find().toArray().then(allFunds => {
            resolve(allFunds)
        })
    });
}

function getFund(db,id) {
    return new Promise((resolve, reject) => {
        query={"_id":ObjectId(id)}
        db.collection(dbCollection).findOne(query).then(fund => {
            resolve(fund)
        })
    });
}

function deleteFund(db,id) {
    return new Promise((resolve, reject) => {
        query={"_id":ObjectId(id)}
        db.collection(dbCollection).deleteOne(query).then(status => {
            resolve(status)
        })
    });
}



module.exports = { getAllFunds, getFund ,deleteFund}