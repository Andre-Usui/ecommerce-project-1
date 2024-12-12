const mongoose = require('mongoose');
const Product = require('./productModel');

const reviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    _user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    _product_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
  }, { timestamps: true }
);

reviewSchema.pre('save', async function () {
  console.log(this.isNew);
  if (!this.isNew) {
    return
  }

  try {
    const productId = this._product_id;
    const product = await Product.findById(productId);
    console.log("trying");
    if (product) {
      console.log('old numReviews: ', product.numReviews);
      product.numReviews += 1;
      await product.save();
      console.log('new numReviews: ', product.numReviews);
    } else {
      throw new Error("Product wasnt found");
    }
  } catch (err) {
    console.error('Error updating numReviews:', err);
  }

});


reviewSchema.pre('remove', async function (next) {
  try {
    const productId = this.product_id;
    const product = await Product.findById(productId);

    if (product) {
      console.log('old numReviews: ', product.numReviews);
      product.numReviews -= 1;
      await product.save();
      console.log('new numReviews: ', product.numReviews);
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("Review", reviewSchema);