import express from "express";
import { episodeController } from "../controllers/episode.controller.js";
const router=express.Router()
router.get('/',episodeController.getAll)
router.post('/',episodeController.add)
router.patch('/:id',episodeController.update)
router.delete('/:id',episodeController.delete)
export default router;
