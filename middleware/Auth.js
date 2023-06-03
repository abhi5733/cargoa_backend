
const Navigate = require('react-router-dom').Navigate;

const jwt = require("jsonwebtoken")

 const  Auth = async (req,res,next)=>{

    const token = req.headers.authorization

   //  console.log(token)

     try{

        if(token){
   
            const decoded = jwt.verify(token, 'masai')
             req.body.userID = decoded.userID
            if(decoded){
     
             
           next()
            }else{
               res.redirect("/");
               //  res.send("please login first")
               //  next()
            }

        }
 
    
     }catch(err){
      res.redirect("/");
         // res.send("please login first")
     }


  }

  module.exports = {Auth}