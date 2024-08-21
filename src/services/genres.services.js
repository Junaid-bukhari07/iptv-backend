import { genresModel } from "../models/genres.model.js";
export const genresService={
    getAll: async ()=>{
        return genresModel.find()
    },
    add: async(body)=>{
        return genresModel.create(body)
    },
    update: async(id,body)=>{
        return genresModel.findByIdAndUpdate(id,body)
    },
    delete:async (id)=>{
        return genresModel.findByIdAndDelete(id)
    }
}