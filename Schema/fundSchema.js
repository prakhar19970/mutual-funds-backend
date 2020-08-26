const mongoose = require("mongoose");
const {dbCollection}= require('../Database/dbconfig.js')

const Schema = mongoose.Schema;

const FundsSchema = new Schema(
    {
        code: {
            type: String, 
            unique: true,
            uppercase: true,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
        reinvestment: {
            type: String,
            trim: true,
        },
        fund_house: {
            type: String,
            trim: true,
        },
        fund_type: {
            type: String,
            trim: true,
        },
        fund_category: {
            type: String,
            trim: true,
        },
        plan: {
            type: String,
            uppercase: true,
            trim: true,
        },
        returns: {
            year_1: {
                type: Number,
            },
            year_3: {
                type: Number,
            },
            year_5: {
                type: Number,
            },
            inception: {
                type: Number,
            },
            date: {
                type: Date,
                trim:true,
            }
        },
        volatility: {
            type: Number,
        }
    },
);

module.exports = Fund = mongoose.model(dbCollection, FundsSchema);
