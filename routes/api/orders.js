const express = require("express");
const router = express.Router();
const {
  schemas: { orderJoiSchema },
} = require("../../models/order");
const { validateBody } = require("../../middleWares");
const ctrl = require("../../controllers/orders");
const { ctrlWrapper } = require("../../helpers");

router.post("/", validateBody(orderJoiSchema), ctrlWrapper(ctrl.add));

router.get("/", ctrlWrapper(ctrl.getAll));

module.exports = router;
