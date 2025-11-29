import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        telegramId: {
            type: String,
            unique: true,
            required: true
        },

        firstname: {
            type:String,
            default:"User"
        },
        balance:{
            type:Number,
            default:5000
        }

    }
)

const User =new mongoose.model("User",userSchema)
console.log(User);

export default User