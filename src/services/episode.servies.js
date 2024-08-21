import { episodeModel } from "../models/episode.model.js"

export const episodeService={
    getAll: async ()=>{
        return episodeModel.find()
    },
    add: async(body)=>{
        return episodeModel.create(body)
    },
    update: async(id,body)=>{
        return episodeModel.findByIdAndUpdate(id,body)
    },
    delete:async (id)=>{
        return episodeModel.findByIdAndDelete(id)
    }
}