const express = require("express")
const { userModel } = require("../model/userModel")
const { cargoModel } = require("../model/cargoModel")
const {chatModel}   = require("../model/chatModel")
const { userRouter } = require("./userRoutes")
const  cargoRoute = express.Router()

// get all transporter


cargoRoute.get("/transporter" , async (req,res)=>{
 
    try{
  
      const users = await userModel.find({role:" Transporter"})
      res.send(users)
  
  
    }catch(err){
      
      res.status(500).send({ "msg": "something went wrong" });
  
    }
  
  
  })


  cargoRoute.post("/transport" ,async (req,res)=>{

   
    try{
  
        const users = new cargoModel(req.body)
        users.save()
        // console.log(req.body)
        res.send({"msg":"created successfully"})
    
       
    
      }catch(err){
        
        res.status(500).send({ "msg": "something went wrong" });
    
      }


  } )



// get all message


// Manufacturer


cargoRoute.get("/Manufacturer" , async (req,res)=>{

  
   try{
  
      const users = await cargoModel.find({
        TransporterID:req.body.userID})
    // const users = await cargoModel.find({From:"Delhi"})
    res.send(users)
  
  
    }catch(err){
      
      console.log(err)
      res.send(err)
  
    }
  

  })

  // post chat


  cargoRoute.post("/chat" , async (req,res)=>{

    try{
// console.log(req.body)
      const chat = new chatModel(req.body)
       
      chat.save()
      res.send({"msg":"chat  created successfully"})

    }catch(err){
      res.status(500).send({ "msg": "something went wrong" });
    }


  })



  //  getting all orders 

  cargoRoute.get("/order" , async (req,res)=>{

    try{
// console.log(req.body)
      const order = await cargoModel.find({userID:req.body.userID})
       
      
      res.send(order)

    }catch(err){
      res.status(500).send({ "msg": "something went wrong" });
    }


  })

  // get chat related to order 


  
  cargoRoute.get("/chatorder/:id" , async (req,res)=>{


    const id = req.params.id
  

    try{
    
      const chat = await chatModel.find({orderID:id})
       
   
      res.send(chat)

    }catch(err){
     res.status(500).send({ "msg": "something went wrong" });
   
    }


  })


  
module.exports = {cargoRoute}