const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {

  let token = req.cookies.authToken;
  console.log('protect is working');

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    next()
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await userModel.findById(decodedToken.id).select('-password');
    // finding user within the jwt.verify, excluding the password data. 
    // the data of the password shouldn't be passed by default because 
    // in the userModel i set the password key with 'select: false'.

    next();
  } catch (err) {
    res.status(403).json({ message: 'Incorrect Token' })
  };

});

module.exports = protect;