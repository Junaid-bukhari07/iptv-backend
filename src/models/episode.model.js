import mongoose from "mongoose";

 const episodeSchema=new mongoose.Schema({
    season_id:{type:mongoose.Schema.Types.ObjectId,
    ref:'Season'},
    name:{type:String,required:true},
    descriptiom:{type:String,required:true}
},
{ timestamps: true },)
export const episodeModel=mongoose.model('Episode',episodeSchema)