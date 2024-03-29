import express from "express";
import {
  addPprFittings,
  addPprPipes,
  getAllPprFittings,
  getAllPprPipes,
  getPprPipes,
  removePprPipes,
} from "../controllers/ProductController.js";

const router = express.Router();

// PPR PIPES
router.get("/all-ppr-pipes", getAllPprPipes);
router.get("/ppr-pipes", getPprPipes);
router.post("/ppr-pipes", addPprPipes);
router.post("/remove-ppr-pipes", removePprPipes);

// PPR FITTINGS
router.get("/all-ppr-fittings", getAllPprFittings);
router.get("/ppr-fittings", getPprPipes);
router.post("/ppr-fittings", addPprFittings);

export default router;
