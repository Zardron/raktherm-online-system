import express from "express";
import {
  addPprFittings,
  addPprPipes,
  getPprPipes,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/ppr-pipes", getPprPipes);
router.post("/ppr-pipes", addPprPipes);
router.post("/ppr-fittings", addPprFittings);

export default router;
