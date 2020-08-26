const { ObjectId, Double } = require("mongodb");
// const { dbCollection } = require("../Database/dbconfig.js")

function updateFund(db, id, updateFeilds) {
    return new Promise((resolve, reject) => {
        query = { "_id": ObjectId(id) }
        newvalues = { $set: updateFeilds };
        db.collection(dbCollection).updateOne(query, newvalues).then(status => {
            resolve(status)
        })
    });
}

module.exports = { updateFund }