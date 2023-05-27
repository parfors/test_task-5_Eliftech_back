const mongoose = require("mongoose");
const Joi = require("joi");
const { handelSaveErrors } = require("../helpers");

const shops = ["McDonald's", "KFC", "Dominos", "ATB", "Silpo"];

const productSchema = mongoose.Schema(
  {
    img: {
      type: String,
    },
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    shop: {
      type: String,
      enum: shops,
      require: true,
      default: "",
    },
    location: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

productSchema.post("save", handelSaveErrors);

const productJoiAddSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  shop: Joi.string().valid(...shops),
});

const Product = mongoose.model("products", productSchema);

module.exports = {
  Product,
  schemas: {
    productJoiAddSchema,
  },
};
