const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: [String], required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    _user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    
  }
);

module.exports = mongoose.model("Product", productSchema);