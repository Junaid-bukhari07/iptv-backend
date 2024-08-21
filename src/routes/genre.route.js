import express from "express";
import { genreController } from "../controllers/genre.conroller.js";
const router=express.Router()
router.get('/',genreController.getAll)
router.post('/',genreController.add)
router.patch('/:id',genreController.update)
router.delete('/:id',genreController.delete)
export default router;
