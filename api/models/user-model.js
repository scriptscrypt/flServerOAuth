const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    keyUserName: {type: String, required: true, unique: true},
    keyGoogleId: String,
    keyProfileImage: String,
    keyFirstName: String, 
    keyLastName: String,
    keyPhoneNumber: Number,
    keyTypeOfUser: String,  
    keySkills: String,
    keyWorks: String,
    createdUserAt: { type: Date, default: Date.now },
})

//Collection name will appear as 'collectionUser'
const User = mongoose.model("collectionUser", userSchema)

module.exports = User;