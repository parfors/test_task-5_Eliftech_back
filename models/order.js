const mongoose = require("mongoose");
const Joi = require("joi");
const { handelSaveErrors } = require("../helpers");

const emailRegexp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "password is require"],
    },
    email: {
      type: String,
      required: [true, "email is require"],
      unique: true,
      match: emailRegexp,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    order: {
      type: Array,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.post("save", handelSaveErrors);

const orderJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  order: Joi.array().required(),
});

const Order = mongoose.model("orders", orderSchema);

module.exports = {
  Order,
  schemas: { orderJoiSchema },
};
