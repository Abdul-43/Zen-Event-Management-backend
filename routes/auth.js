import express from "express";
import { adminRegister, login, stuRegister } from "../controllers/auth.js";
import { authenticates } from "../controllers/authenticate.js";


const router = express.Router();

router.post("/stuRegister",authenticates, stuRegister)
router.post("/login", login)
router.post("/adminRegister", adminRegister)


export default router