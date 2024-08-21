import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();
router.get("/", UserController.getAll);
router.post("/", UserController.add);
router.patch('/:id',UserController.update)
router.delete('/:id',UserController.delete)
router.post('/register',UserController.register)
router.post('/login',UserController.login)
export default router;
