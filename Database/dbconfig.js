const password = '***********';
const connectionString = `mongodb+srv://admin:${password}@cluster0.oruwf.mongodb.net/<funds>?retryWrites=true&w=majority`;

dbCollection='mutual-funds2'

module.exports={connectionString,dbCollection}