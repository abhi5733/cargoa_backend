const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    orderID:String,
    price:String,
    ManufacturerID:String,
    userID:String 
})


const chatModel = mongoose.model("chat" , chatSchema)

module.exports =   {chatModel}  