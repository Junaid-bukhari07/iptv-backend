import { episodeService } from "../services/episode.servies.js";
import { httpResponse } from "../utils/index.js"

export const episodeController={
    getAll: async (req,res)=>{
        try {
            const data=await episodeService.getAll()
       return httpResponse.SUCCESS(res,data)
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);

        }
    },
    add:async (req,res)=>{
      try {
        const data=await episodeService.add(req.body)
return httpResponse.CREATED(res,data)
      } catch (error) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);

      }    },
      update: async (req,res)=>{
        try {
            const data=await episodeService.update(req.params.id,req.body)
            return httpResponse.SUCCESS(res,data)
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
     
        }
      },
      delete:async (req,res)=>{
try {
    const data=await episodeService.delete(req.params.id)
    return httpResponse.SUCCESS(res,data)
} catch (error) {
    return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
   
}      }
}
  