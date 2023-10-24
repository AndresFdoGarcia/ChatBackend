import { Router } from "express";
import{createChat,findUserChat,findChat} from '../controllers/chat.controller.js'

const router = Router();

router.post("/", createChat);
router.get("/:userId", findUserChat);
router.get("/find/:firstId/:secondId", findChat);

export default router;