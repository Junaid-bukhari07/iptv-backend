import mongoose from "mongoose";
const seasonSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    description:{type:String ,required:true}
},
{ timestamps: true },

)
export const seasonModel=mongoose.model("Season",seasonSchema)