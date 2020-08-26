const { ObjectId, Double } = require("mongodb");
// const { dbCollection } = require("../Database/dbconfig.js")


// function createFund(db, newFund) {
//     return new Promise((resolve, reject) => {
//         db.collection(dbCollection).insertOne(newFund).then(status => {
//             resolve(status)
//         })
//     });
// }

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

module.exports = { deleteFund, updateFund }