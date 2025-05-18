import jwt from "jsonwebtoken";

 const generateToken = (res, user, Message) => {
    const token = jwt.sign({ userid: user._id }, process.env.SECRETKEY, { expiresIn: '1d' });
    return res.status(200).cookie("token", token, { httpOnly: true, sameSite: 'strict', maxAge: 24 * 60 * 60 * 1000 }).json({
        success:true,
        Message,
        user
    });

} 
export default generateToken;
