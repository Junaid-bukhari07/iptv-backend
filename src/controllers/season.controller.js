
import { seasonService } from "../services/season.servise.js"
import { httpResponse } from "../utils/index.js"

export const seasonController={
    getAll: async (req,res)=>{
        try {
            const data=await seasonService.getAll()
            return httpResponse.SUCCESS(res,data)
        } catch (error) {
            return  httpResponse.INTERNAL_SERVER_ERROR('error')
        }
    },
    add: async (req,res)=>{
        try {
            const data=await seasonService.add(req.body)
            return httpResponse.CREATED(res,data)
        } catch (error) {
            return  httpResponse.INTERNAL_SERVER_ERROR('error')
        }
    },
    update: async (req,res)=>{
       try {
        const data= await seasonService.update(req.params.id,req.body)
        return httpResponse.SUCCESS(res,data)
       } catch (error) {
        return  httpResponse.INTERNAL_SERVER_ERROR('error')
       }
    },
    delete: async (req,res)=>{
        try {
            const data=await seasonService.delete(req.params.id)
            return httpResponse.SUCCESS(res,body)
        } catch (error) {
            return  httpResponse.INTERNAL_SERVER_ERROR('error')
        }
    }

}