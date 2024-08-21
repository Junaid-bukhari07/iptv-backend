import { seriesModel } from "../models/series.model.js"

export const seriesServies={
    getAll: async ()=>{
        return seriesModel.find()
    },
  
    add: async (body)=>{
        return seriesModel.create(body)
    },
    update: async (id,body)=>{
        return seriesModel.findByIdAndUpdate(id,body)
    },
    delete: async (id)=>{
        return seriesModel.findByIdAndDelete(id)
    }
}