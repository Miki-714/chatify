import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/update_profile", protectedRoute, updateProfile);

router.get("/check", protectedRoute, (req, res) =>
  res.status(200).json(req.user)
);

export default router;
