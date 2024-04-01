import express from "express";
import {
  addPprFittings,
  addPprPipes,
  getAllPprFittings,
  getAllPprPipes,
  getPprFittings,
  getPprPipes,
  removePprFittings,
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
router.get("/ppr-fittings", getPprFittings);
router.post("/ppr-fittings", addPprFittings);
router.post("/remove-ppr-fittings", removePprFittings);

export default router;
