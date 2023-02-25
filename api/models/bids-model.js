const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bidsSchema = new Schema({
    keyBidOnWorkId : {type:String, required:true },
    keyBidByUserId : {type:String, required:true },
    keyBidByUserName : String,
    keyBidBudget : Number,
    keyBidDeadline : {type:Date, required:true },
    createdUserAt: { type: Date, default: Date.now },
})

const Bids = mongoose.model("collectionBids", bidsSchema)

module.exports = Bids;