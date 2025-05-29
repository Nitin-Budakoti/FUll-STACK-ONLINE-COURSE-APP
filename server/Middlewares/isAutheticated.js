import jwt from "jsonwebtoken";
const isAuthenticated = async(req,res,next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"please login to access this page"
            })
        }
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        if(!decoded){
            return res.status(401).json({
                success:false,
                message:"invalid token"
            })
        }
        req.id = decoded.userid;
        next();
        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed to authenticate user"
        })
    }
}
export default isAuthenticated;