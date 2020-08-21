const { ObjectId } = require("mongodb");

 function getAllFunds(db) {
    return new Promise((resolve, reject) => {
        db.collection('mutual-funds2').find().toArray().then(allFunds => {
            resolve(allFunds)
        })
    });
}

function getFund(db,id) {
    return new Promise((resolve, reject) => {
        query={"_id":ObjectId(id)}
        db.collection('mutual-funds2').findOne(query).then(fund => {
            resolve(fund)
        })
    });
}

module.exports = { getAllFunds, getFund }