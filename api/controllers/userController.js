const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const generateToken = require('../tokenGenerate');
const protect = require('../middleware/auth');

// login route
router.post('/login', asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
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
    res.status(401);
    throw new Error("Invalid Email or Password");
  }

}));


// register route
router.post('/register', asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existEmail = await userModel.findOne({ email });
  const existName = await userModel.findOne({ name });
  if (existEmail) {
    res.status(400);
    throw new Error('email already registered');
  } else if (existName) {
    res.status(400);
    throw new Error('user name already exist');
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
    res.status(400);
    throw new Error('invalid User Data');
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
    res.status(404);
    throw new Error('User not found');
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
    })


  } else {
    res.status(404);
    throw new Error('User not found');
  }
}));

module.exports = router;