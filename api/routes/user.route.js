import express from "express";
import {
  getUser,
} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/search/:id/:ip", verifyToken, getUser);

export default router;
