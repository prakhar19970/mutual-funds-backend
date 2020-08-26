const { ObjectId, Double } = require("mongodb");
// const { dbCollection } = require("../Database/dbconfig.js")
const Fund =require("../Schema/fundSchema.js")


function getAllFunds() {
    // return new Promise((resolve, reject) => {
//    let result=db.collection(dbCollection).find().toArray().then(allFunds => {
//         return allFunds;
//     })
//     return result; 
    // });

    
    // return result;
}

function getFund(db, id) {
    return new Promise((resolve, reject) => {
        query = { "_id": ObjectId(id) }
        db.collection(dbCollection).findOne(query).then(fund => {
            resolve(fund)
        })
    });
}

function createFund(db, newFund) {
    return new Promise((resolve, reject) => {
        db.collection(dbCollection).insertOne(newFund).then(status => {
            resolve(status)
        })
    });
}

function deleteFund(db, id) {
    return new Promise((resolve, reject) => {
        query = { "_id": ObjectId(id) }
        db.collection(dbCollection).deleteOne(query).then(status => {
            resolve(status)
        })
    });
}

function updateFund(db, id, updateFeilds) {
    return new Promise((resolve, reject) => {
        query = { "_id": ObjectId(id) }
        newvalues = { $set: updateFeilds };
        db.collection(dbCollection).updateOne(query, newvalues).then(status => {
            resolve(status)
        })
    });
}

module.exports = { getAllFunds, getFund, createFund, deleteFund, updateFund }