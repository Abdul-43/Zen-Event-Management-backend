import express from "express";
import { assignCapstone, batchCreate, getCapstone, giveBatch, studentBatches, studentDetails } from "../controllers/batch.js";
import {authenticates} from '../controllers/authenticate.js'
const router = express.Router();

router.post("/batchCreate", authenticates,batchCreate);
router.get("/giveBatches",authenticates, giveBatch);
router.post("/studentBatches",authenticates, studentBatches)
router.post("/assignCapstone/:userId",authenticates, assignCapstone)
router.get("/studentDetails/:userId",authenticates, studentDetails)
router.get("/getCapstone", getCapstone)

export default router;
