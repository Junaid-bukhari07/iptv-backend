import { streamModel } from "../models/stream.model.js"

export const streamService={
    // getAll: async ()=>{
    //     return streamModel.find()
    // },
    add: async (body)=>{
        return streamModel.create(body)
    },
//     update: async (id,body)=>{
//         return streamModel.findByIdAndUpdate(id,body,{new:true})
//     },
//     delete :async (id)=>{
//     return streamModel.findByIdAndDelete(id)
// }
}