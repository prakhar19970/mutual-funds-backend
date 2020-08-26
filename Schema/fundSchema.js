const mongoose = require("mongoose");
const { Double } = require("mongodb");
const Schema = mongoose.Schema;

const FundsSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        reinvestment: {
            type: String,
            trim: true,
        },
        fund_house: {
            type: String,
            required: true,
            trim: true,
        },
        fund_type: {
            type: String,
            required: true,
            trim: true,
        },
        fund_category: {
            type: String,
            required: true,
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
                required: true
            },
            year_3: {
                type: Number,
                required: true
            },
            year_5: {
                type: Number,
                required: true
            },
            inception: {
                type: Number,
                required: true
            },
            date: {
                type: String,
                required: true,
                trim:true,
            }
        },
        volatility: {
            type: Number,
            required: true
        }
    },
);

module.exports = Fund = mongoose.model("funds", FundsSchema);
