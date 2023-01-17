const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price should be filled"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["samsung", "mi", "apple", "dell"],
      message: "invalid Company name",
    },
  },
});

module.exports = mongoose.model("Product", prodSchema);
