import { Router } from "express";
import {createRegister,getRegister,getRegisters,deleteRegister} from "../controllers/trans.controller.js";

const router = Router();

router.post("/register", createRegister);
router.get("/register",getRegisters);
router.get("/register/:id",getRegister);
router.delete("/register/id",deleteRegister);

export default router;