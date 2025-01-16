const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const BCRYPT_SALT = +process.env.BCRYPT_SALT;


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    password: { type: String, required: true, select: false },
    isAdmin: { type: Boolean, required: true, default: false },
    wishlist: { type: [mongoose.Schema.Types.ObjectId], ref: 'Product' },
    cart: { type: [mongoose.Schema.Types.ObjectId], ref: 'Product' },
    productBuyed: { type: [mongoose.Schema.Types.ObjectId], ref: 'Product' }
  },
  { timestamps: true }

);

// Creating a Method to a Schema
// to validate password match

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


//register password hash

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(BCRYPT_SALT);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Adding product in Wishlist

userSchema.methods.addWishlist = async function (product_id) {
  const checkingDoubles = this.wishlist.find(item => item.toString() === product_id.toString());
  if (!checkingDoubles) {
    this.wishlist.push(product_id);
  } else {
    throw new Error('Product already exist in wishlist');
  }
};

// Deletinging product in Wishlist

userSchema.methods.deleteWishlist = async function (product_id) {
  const index = this.wishlist.findIndex(item => item.toString() === product_id.toString());
  if (index !== -1) {
    this.wishlist.splice(index, 1);
  } else {
    throw new Error('Product does not exist in wishlist');
  }
};

// Adding product in Cart
userSchema.methods.addCart = async function (product_id) {
  const checkingDoubles = this.cart.find(item => item.toString() === product_id.toString());
  if (!checkingDoubles) {
    this.wishlist.push(product_id);
  } else {
    throw new Error('Product already exist in wishlist');
  }
};

// Deletinging product in Cart

userSchema.methods.deleteCart = async function (product_id) {
  const index = this.cart.findIndex(item => item.toString() === product_id.toString());
  if (index !== -1) {
    this.cart.splice(index, 1);
  } else {
    throw new Error('Product does not exist in wishlist');
  }
};

// Adding product in productBuyed 
// use on OrderController

userSchema.methods.addProductBuyed = async function (products) {
  products.forEach(product_id => {
    if (!this.productBuyed.some(item => item.toString() === product_id.toString())) {
      this.productBuyed.push(product_id);
    }
  });
};

module.exports = mongoose.model('User', userSchema);