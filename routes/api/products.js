const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/products");

router.get("/", ctrlWrapper(ctrl.getAll));

module.exports = router;
