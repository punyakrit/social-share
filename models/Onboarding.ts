import { model, models, Schema } from "mongoose"

const usernameSchema  = new Schema({
    uri:{
        type: String,
        required: true,
        min:1,
        unique: true
    }
},{timestamps: true})

export const UserPage = models.UserPage || model('UserPage' , usernameSchema)

