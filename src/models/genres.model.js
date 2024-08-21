
import mongoose from 'mongoose'
const genresSchema=new mongoose.Schema(
{
    name:{type:String,required:true}
},
	{ timestamps: true },
)
export const genresModel=mongoose.model("Genre",genresSchema)