import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/Signup", signup);

router.get("/login", (req, res) => {
  res.send("Login endpoint is working");
});
router.get("/logout", (req, res) => {
  res.send("Logout endpoint is working");
});

export default router;
