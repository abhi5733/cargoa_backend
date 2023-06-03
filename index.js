
const express = require("express")
const {connection} = require("./db")
const  {userRouter} = require("./routes/userRoutes")
const {cargoRoute} = require("./routes/cargoRoute")
const app = express()
const cors = require("cors")
const { Auth } = require("./middleware/Auth")
app.use(express.json())
app.use(cors())

app.use("/user" , userRouter)
app.use(Auth)
app.use("/cargo" , cargoRoute)

require("dotenv").config()







app.listen(process.env.port,async ()=>{

    try{
        await connection
        console.log("db connected")
    }catch(err){
        console.log("db not connected")
    }
    console.log(`connected to  ${process.env.port} port`)

})