import { streamService } from "../services/stream.service.js"
import { httpResponse } from "../utils/index.js"

export const streamController={

    // getAll: async (req,res)=>{
    //     try {
    //         const data=await streamService.getAll()
    //         return httpResponse.SUCCESS(res,data)
    //     } catch (error) {
    //         return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    //     }
    // },
    add: async (req,res)=>{
        try {
            const data=await streamService.add(req.body)
            return httpResponse.CREATED(res,data)
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },
    // update: async (req,res)=>
    // {
    //     try {
    //        const data=await streamService.update(req.params.id,req.body) 
    //        return httpResponse.SUCCESS(res,data)
    //     } catch (error) {
    //         return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    //     }
    // },
    // delete: async (req,res)=>{
    //     try {
    //         const data=await streamService.delete(req.params.id)
    //         return httpResponse.SUCCESS(res,data)
    //     } catch (error) {
    //         return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    //     }
    // }
}