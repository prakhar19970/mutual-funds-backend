
async function getFunds(db) {
    let allFunds = ''
    await new Promise((resolve, reject) => {
        db.collection('mutual-funds2').find().toArray().then(results => {
            allFunds = results;
            resolve()
        })
    });
    return allFunds;
}



module.exports = { getFunds }