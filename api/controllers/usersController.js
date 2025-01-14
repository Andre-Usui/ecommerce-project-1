const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');
const generateToken = require('../tokenGenerate');
const protect = require('../middleware/auth');

// login user route
router.post('/login', asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required'});
  };

  const user = await userModel.findOne({ email }).select('+password');
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      createdAt: user.createdAt,
    })
  } else {
    res.status(401).json({ message: 'Invalid Email or Password'});
  }

}));


// register user route
router.post('/register', asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existEmail = await userModel.findOne({ email });
  const existName = await userModel.findOne({ name });
  if (existEmail) {
    res.status(400).json({ message: 'Email already registered'});
  } else if (existName) {
    res.status(400).json({ message: 'User name already exist'});
  } else {
    var user = await userModel.create({
      name,
      email,
      password
    });
  }

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    })
  } else {
    res.status(400).json({ message: 'Invalid User data'});
  }
}));


// profile data
//    using protect middleware token
router.get('/profile', protect, asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      token: generateToken(user._id)
    })
  } else {
    res.status(404).json({ message: 'User not found'});
  }
}));


//user profile update

router.put('/profile', protect, asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save()
    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      createdAt: updatedUser.createdAt,
      token: generateToken(updatedUser._id)
    });
  } else {
    res.status(404).json({ message: 'User not found'});
  }
}));

//Adding a product to the wishlist

router.put('/addwishlist/:id', protect, asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (!user) {
    res.status(404).json({ message: 'User not found, please log in again' });
    return;
  }

  const product = await productModel.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  try {
    await user.addWishlist(req.params.id);
    await user.save(); 
    console.log("product added: ", product)
    res.status(201).json({ message: 'Product added to wishlist successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}));

//Deleting a product to the wishlist

router.put('/deletewishlist/:id', protect, asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (!user) {
    res.status(404).json({ message: 'User not found, please log in again' });
    return;
  }

  const product = await productModel.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  try {
    await user.deleteWishlist(req.params.id);
    await user.save(); 
    res.status(201).json({ message: 'Product deleted of the wishlist successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}));

module.exports = router;