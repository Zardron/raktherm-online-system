import express from "express";
import {
  deleteExistingOrder,
  getExistingOrder,
  getOrderDetails,
} from "../controllers/OrderController.js";

const router = express.Router();

router.get("/:id", getExistingOrder);
router.delete("/:id", deleteExistingOrder);
router.post("/", getOrderDetails);

export default router;
