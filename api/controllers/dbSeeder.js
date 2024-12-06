const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');
const usersData = require('../data/usersData');
const productsData = require('../data/productsData');

router.post('/users', asyncHandler(async (req, res, next) => {
  await userModel.deleteMany({}); // deleting the all previous data
  const userSeeder = await userModel.insertMany(usersData); //seeding new data
  res.send({ userSeeder });

}));

router.post('/products', asyncHandler(async (req, res, next) => {
  await productModel.deleteMany({}); // deleting the all previous data
  const productsSeeder = await productModel.insertMany(productsData); //seeding new data
  res.send({ productsSeeder });

}));

module.exports = router;