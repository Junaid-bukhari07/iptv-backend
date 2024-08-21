import mongoose from "mongoose";
const serireSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        description:{type:String,required:true},
        trailer_id:{type:Number,required:true},
        trailer_id:{type:Number,required:true},
    },
    { timestamps: true },
)
export const seriesModel=mongoose.model("Series",serireSchema)