const { Order } = require("../../models/order");

const getAll = async (req, res) => {
  const result = await Order.find({});
  return res.status(200).json(result);
};

module.exports = getAll;
