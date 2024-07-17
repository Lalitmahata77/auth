import User from "../model/userModel.js";
import sendToken from "../utils/sendToken.js";


export const register = async(req,res)=>{
    try {
        const {email, name, password} = req.body;
        const existingEmail = await User.findOne({email})
        if (existingEmail) {
            return res.status(400).json({message : "user already exist"})
        }
        if (password.length < 6) {
            return res.status(400).json({message : "password must be exist at least 6 character"})
        }
        const user = await User.create({
            name,
            email,
            password
        })
        if (user) {
            const token = sendToken(user, 200, res)
            res.status(200).json({
                _id : user._id,
                name : user.name,
                email : user.email,
                password :user.password,
              
                token
        })
    }  
    } catch (error) {
        console.log("Internal server error", error.message);
    }
    }

    export const login = async(req,res)=>{
       try {
         const {email, password} = req.body;
         if (!email || !password) {
             return res.status(400).json({message : "Email or password required"})
         }
         const user = await User.findOne({email})
         if (!user) {
             return res.status(400).json({message : "Invalid email or password"})
         }
        //  const isPasswordMatch = await user.isPasswordCorrect(password)
        //  if (!isPasswordMatch) {
        //      return res.status(400).json({message : "Invalid email or password"})
        //  }
         sendToken(user, 201, res)
       } catch (error) {
        console.log(error.message);
       }
    }