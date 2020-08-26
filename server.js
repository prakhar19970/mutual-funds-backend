const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { connectionString } = require("./Database/dbconfig.js")
const { getAllFunds,getSingleFund,createFund,deleteFund,updateFund } = require("./controller/mutualFunds.js");

const mongoose = require("mongoose");
//connect to database
mongoose.connect(connectionString, {  useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, })
    .then(response => {
        console.log("connected database")
    })




app.get('/funds', getAllFunds)
app.get('/funds/:id', getSingleFund)
app.post('/funds', createFund)
app.delete('/funds/:id', deleteFund)
app.put('/funds/:id', updateFund)

app.delete('/funds',  (req, res) => {
        res.status(404).send("Not Found : Invalid Input")
    })
    

app.listen(process.env.PORT || 3000);
console.log("server started");

