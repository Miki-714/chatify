import express from "express";
import { getAllContacts } from "../controllers/message.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  getMessagesbyUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { getChatPartners } from "../controllers/message.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
// Protect all routes after this middleware i need that
router.use(arcjetProtection, protectedRoute);

router.get("/contacts", getAllContacts);

router.get("/chats", getChatPartners);
router.get("/:id", getMessagesbyUserId);
router.post("/send/:id", sendMessage);

export default router;
