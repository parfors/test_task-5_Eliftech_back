const { Product } = require("../../models/products");

const getAll = async (req, res, next) => {
  const result = await Product.find({});
  return res.status(201).json(result);
};
module.exports = getAll;
