import express from 'express'
import { streamController } from '../controllers/stream.controller.js'
const router=express.Router()
// router.get("/",streamController.getAll)

router.post('/',streamController.add)
// router.patch('/:id',streamController.update)
// router.delete('/:id',streamController.delete)
export default router