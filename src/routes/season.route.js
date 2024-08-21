import express from 'express'
const router=express.Router()
import { seasonController } from "../controllers/season.controller.js"
router.get('/',seasonController.getAll)
router.post('/',seasonController.add)
router.patch('/:id',seasonController.update)
router.delete('/:id',seasonController.delete)
export default router