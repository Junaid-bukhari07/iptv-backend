
import { seriesServies } from "../services/series.servies.js"
import { httpResponse } from "../utils/index.js"

export const seriesControlle={
    getAll: async (req,res)=>{
        try {
            const data=await seriesServies.getAll()
            return httpResponse.SUCCESS(res,data)
        } catch (error) {
          return  httpResponse.INTERNAL_SERVER_ERROR('error')
        }
    },

    add: async (req, res) => {
        try {
            const data = await seriesServies.add(req.body);
            return httpResponse.CREATED(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },
    update: async (req,res)=>{
       try {
        const data=await seriesServies.update(req.params.id,req.body)
        return httpResponse.SUCCESS(res,data)
       } catch (error) {
        return  httpResponse.INTERNAL_SERVER_ERROR('error')
       }
    },
    delete: async (req,res)=>{
        try {
            const data=await seriesServies.delete(req.params.id)
            return httpResponse.SUCCESS(res,data)
        } catch (error) {
            return  httpResponse.INTERNAL_SERVER_ERROR('error')
        }
    }
}