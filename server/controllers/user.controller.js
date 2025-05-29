import User from "../Models/user.model.js";
import  bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js";
export const register = async(req,res)=>{
    try{
        const {name,email,password} =req.body;
        if(!name || !email || !password){
            return res.this.status(400).json({
                message:"All field are required."
            })
        }
        const user =await User.findOne({email});
        if(user){
            return res.status(400).json({
                success:"false",
                message:"user already exist with this email"
            })
        }
        let hash_password =  await bcrypt.hash(password,10);
        await User.create({
            name,
            email,
            password:hash_password
            });
            return res.status(201).json({
                success:true,
                message:"account created succefully" 
            })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"failed to register"
        });
    }
}

export const login = async(req,res)=>{
try{
    const {email,password} = req.body;
     if(!email || !password){
            return res.status(400).json({
                message:"All field are required."
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"incorrect email and password"
            })
        }
        const isPasswordmatch =  await bcrypt.compare(password,user.password);
        if(!isPasswordmatch){
              return res.status(400).json({
                success:false,
                message:"incorrect email and password"
            })
        }
// create a json web token for session 
generateToken(res,user,`welcome ${user.name}`);



}catch(error){
     console.log("failed to login");
        return res.status(500).json({
            success:false,
            message:"failed to register"
        });
       
}

}
export const logout = async(req,res)=>{
   try{
    return res.status(200).cookie("token","",{maxAge:0}).json({
        success:true,
        message:"logged out successfully",
    })
   }catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"failed to logout"
    });
   }
}

export const getUserProfile  = async(req,res)=>{
    try{
        const userId = req.id;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }
        return res.status(200).json({
            success:true,
            user
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed to load user profile"
        });
    }
}
