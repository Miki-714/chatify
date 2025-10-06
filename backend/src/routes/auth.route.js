import express from "express";

const router = express.Router();

router.get("/Signup", (req, res) => {
  res.send("Signup endpoint is working");
});

router.get("/login", (req, res) => {
  res.send("Login endpoint is working");
});
router.get("/logout", (req, res) => {
  res.send("Logout endpoint is working");
});

export default router;
