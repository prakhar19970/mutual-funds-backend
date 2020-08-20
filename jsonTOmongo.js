const fs = require('fs');

const MongoClient = require('mongodb').MongoClient
const password= 'Kochikame02@';
const connectionString=`mongodb+srv://admin:${password}@cluster0.oruwf.mongodb.net/<funds>?retryWrites=true&w=majority`;
    MongoClient.connect(connectionString, {
        useUnifiedTopology: true
      }, (err, client) => {
          console.log('connected')
         const db = client.db('funds')
         initialize(db);
    });

function initialize(db) {
    const dbCollection = db.collection('mutual-funds2')
    const rawdata = fs.readFileSync('./funds.json')
    const funds = JSON.parse(rawdata);
    dbCollection.insertMany(funds)
}