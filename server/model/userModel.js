import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import becrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
   
    email : {
        type : String,
        required : String
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true})

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
        next()
    }
    this.password  
})
//jwt token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id : this._id}, process.env.JWT_SECRET, {
      expiresIn : "15d"
      })
   
  }
  
  //isPasswordCorrect
  userSchema.methods.isPasswordCorrect = function(enteredPassword){
     return  becrypt.compare(enteredPassword, this.password)
  }

const User = mongoose.model("User", userSchema)
export default User