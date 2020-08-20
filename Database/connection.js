const MongoClient = require('mongodb').MongoClient
const password = 'Kochikame02@';
const connectionString = `mongodb+srv://admin:${password}@cluster0.oruwf.mongodb.net/<funds>?retryWrites=true&w=majority`;

module.exports = {

    connect: async function () {
        var connection;
        await new Promise( (resolve, reject) => {
            MongoClient.connect(connectionString, {
                useUnifiedTopology: true
            },(err, client) => {
                if (err) {
                    reject();
                }
                else {
                    connection = client.db('funds')
                    resolve()
                }
            });
        });
        return connection;
    }
};
