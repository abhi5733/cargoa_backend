const express = require("express")

const userRouter = express.Router()
const {userModel} = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

// signup request

userRouter.post("/signup", async (req, res) => {
  const { pass, email } = req.body;

  try {
    const users = await userModel.find({ email });
    if (users.length == 0) {
      bcrypt.hash(pass, 10, async function (err, hash) {
        if (hash) {
          const user = new userModel({ ...req.body, pass: hash });
          await user.save();
          res.status(201).send({ "msg": "signup successful" });
        } else {
          res.status(500).send({ "msg": "something went wrong" });
        }
      });
    } else {
      res.status(400).send({ "msg": "user already registered" });
    }
  } catch (err) {
    res.status(500).send({ "msg": "something went wrong" });
  }
});

// login request

userRouter.post("/login" ,async (req,res)=>{

    const {email,pass} = req.body

    try{

        const user = await userModel.find({email})
       
  const roles = user[0].role

        if(user.length>0){

            bcrypt.compare(pass, user[0].pass , function(err, result) {
              
                if(result){
                    const token = jwt.sign({ userID: user[0]._id }, 'masai');
                     
        res.send({"msg":"login successfull",token,roles})

                }else{
                  console.log(err)
                  res.status(500).send({ "msg": "something went wrong 2" });
                }

            });

        }else{
         
          res.status(500).send({ "msg": "something went wrong 1" });
        }


        

    }catch(err){
      res.status(500).send({ "msg": "something went wrong" });
    }


} )













module.exports = {userRouter}