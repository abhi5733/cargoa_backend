const mongoose = require("mongoose")

const cargoSchema = mongoose.Schema({
    orderID:String,
    To:String,
    From:String,
    Quantity:String , 
    TransporterID:String,
    userID:String
    
})

const cargoModel = mongoose.model("cargo" ,cargoSchema)

module.exports = {cargoModel}