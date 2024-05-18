import mongoose from "mongoose";

export const db = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("Db Connected")
    }catch(e){
        console.log("Db error connect "+e)
    }
}