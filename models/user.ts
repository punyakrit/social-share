import mongoose, { models, Schema } from "mongoose";
import { boolean } from "zod";

const userSchema = new Schema({
    email:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    validated:{
        type: Boolean,
        require:true,
        default:false
    }
    
},{timestamps:true})

const User = models.User || mongoose.model("User", userSchema)

export default User