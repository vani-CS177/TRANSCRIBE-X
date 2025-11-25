import express from "express";
import {
  getSignIn,
  postSignIn,
  getSignUp,
  signupValidation,
  postSignUp,
  postSignout,
} from "../controllers/authController.js";

const router = express.Router();

// Render Pages
router.get("/login", getSignIn);
router.get("/register", getSignUp);

// Form Submissions
router.post("/login", postSignIn);
router.post("/register", signupValidation, postSignUp);

// Logout
router.get("/logout", postSignout);

export default router;