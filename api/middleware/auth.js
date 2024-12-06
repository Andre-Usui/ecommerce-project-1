const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {

  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await userModel.findById(decodedToken.id).select('-password');
      // finding user within the jwt.verify, excluding the password data. 
      // the data of the password shouldn't be passed by default because the 
      // userModel i set the password key with 'select: false'.
      next();
    } catch (err) {
      console.log(err);
    };
  };
  if (!token) {
    res.status(401);
    throw new Error('not authorized for login with token');
  };
});

module.exports = protect;