import mongoose from "mongoose";
const  UserShema  = new mongoose.Schema({
    name :{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:["instructor","student"],
        default:"student"  
    },
    enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
    }],
    photoURL:{
        type:String,
        default:""
    }
},{timestamps:true});
const User = mongoose.model("User",UserShema);
export default User;