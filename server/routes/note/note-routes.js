import express from "express";
import { requestNote } from "../../controllers/note/note-controller.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to request a medical note
router.post("/request", authenticateUser, requestNote);

export default router;