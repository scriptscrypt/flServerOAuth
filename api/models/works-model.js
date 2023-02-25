const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const worksSchema = new Schema({
    // key: {type: String, required: true, unique: true},
        keyTitle: String,
        keyDescription: String,
        keyLinks: String,
        keyBudget: {type: Number, required: true},
        createdWorkAt: { type: Date, default: Date.now },
        keyDeadline:{type: Date, required: true},
        
})

const Works = mongoose.model("collectionWorks", worksSchema)

module.exports = Works;