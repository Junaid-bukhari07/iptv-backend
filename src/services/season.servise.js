import { seasonModel } from "../models/season.model.js"

export const seasonService={
    getAll:async ()=>{
        return seasonModel.find()
    },
    add: async (body)=>{
        return seasonModel.create(body)
    },
    update: async (id,body)=>{
        return seasonModel.findByIdAndUpdate(id,body)
    },
    delete:async (id)=>{
        return seasonModel.findByIdAndDelete(id)
    }
}
