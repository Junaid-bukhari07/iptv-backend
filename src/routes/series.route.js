import express from 'express'
import { seriesControlle } from '../controllers/series.controller.js'
const router=express.Router()
router.get("/",seriesControlle.getAll)

router.post('/',seriesControlle.add)
router.patch('/:id',seriesControlle.update)
router.delete('/:id',seriesControlle.delete)
export default router