import express from "express";
import {
  addPprFittings,
  addPprPipes,
  getAllPprFittings,
  getAllPprPipes,
  getPprPipes,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/all-ppr-pipes", getAllPprPipes);
router.get("/all-ppr-fittings", getAllPprFittings);
router.get("/ppr-pipes", getPprPipes);
router.post("/ppr-pipes", addPprPipes);
router.post("/ppr-fittings", addPprFittings);

export default router;
