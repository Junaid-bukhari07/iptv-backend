import mongoose from "mongoose";

const streamSchema=new mongoose.Schema({
    episode_id:{type:Number,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,
    ref:"User"},
    
},
{ timestamps: true },
)
export const streamModel=mongoose.model('Stream',streamSchema)