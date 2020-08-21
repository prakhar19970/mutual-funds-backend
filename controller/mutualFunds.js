
 function getAllFunds(db) {
    return new Promise((resolve, reject) => {
        db.collection('mutual-funds2').find().toArray().then(allFunds => {
            resolve(allFunds)
        })
    });
}



module.exports = { getAllFunds }