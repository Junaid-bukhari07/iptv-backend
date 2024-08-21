import { genresService } from "../services/genres.services.js"
import { httpResponse } from "../utils/index.js"

export const genreController={
    getAll: async (req,res)=>{
        try {
            const data=await genresService.getAll()
       return httpResponse.SUCCESS(res,data)
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);

        }
    },
    add:async (req,res)=>{
      try {
        const data=await genresService.add(req.body)
return httpResponse.CREATED(res,data)
      } catch (error) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);

      }    },
      update: async (req,res)=>{
        try {
            const data=await genresService.update(req.params.id,req.body)
            return httpResponse.SUCCESS(res,data)
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
     
        }
      },
      delete:async (req,res)=>{
try {
    const data=await genresService.delete(req.params.id)
    return httpResponse.SUCCESS(res,data)
} catch (error) {
    return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
   
}      }
}
  