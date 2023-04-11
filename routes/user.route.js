const express = require("express");
const {UserModel} = require("../Model/User.model")
const userRouter  = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

userRouter.get("/",(req,res)=>{
 res.send("user")

})


userRouter.post("/signup",async(req,res)=>{

const {email,password} = req.body
try{
bcrypt.hash(password,5,async(err,secured_password)=>{

if(err){

  res.send({"msg":"something get wrong"})  
}else{
    const post = new UserModel({email,password:secured_password})
    await post.save()
    res.send({"msg":"User registered"})

}

})


}catch(err){
    res.send({"msg":"something get wrong"})  

}


})

userRouter.post("/login",async(req,res)=>{

const {email,password} = (req.body)
const id = req.params.id

try{
const user = await UserModel.find({email})
if(user.length>0){
bcrypt.compare(password,user[0].password,async(err,result)=>{

if(result){
let token = jwt.sign({userID: user[0]._id},"masai")
res.send({"message":"Logged in", "token":token})

}else{
    res.send({"message":"Wrong Credentials"})
    
}

})

}else{
    res.send({"message":"Wrong Credentials"})
}


}
catch(err){

    res.send({"message":"Can't login"})
    console.log(err)

}


})




// userRouter.patch("/update/:id",async(req,res)=>{
//  const ID = req.params.id
// const payload = req.body
// try{
// await UserModel.findByIdAndUpdate({_id:ID},payload)
// res.send({"msg":"User has been updated"})
// } catch(err){
//     res.send({"msg":"Cannot modify" , "error":err})
// }
// })


// userRouter.delete("/delete/:id",async(req,res)=>{
//    const ID = req.params.id
//    try{
//    await UserModel.findByIdAndDelete({_id:ID})
//    res.send({"msg":"User has been deleted"})
//    } catch(err){
//        res.send({"msg":"Cannot delete" , "error":err})
//    }
//    })


   module.exports={
    userRouter
   }