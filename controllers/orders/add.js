const { Order } = require("../../models/order");

const add = async (req, res) => {
  const result = await Order.create({
    ...req.body,
  });
  res.json({ data: result, message: "success" });
  res.status(200);
};

module.exports = add;
