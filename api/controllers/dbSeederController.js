const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');
const reviewModel = require('../models/reviewModel');
const usersData = require('../data/usersData');
const productsData = require('../data/productsData');
const reviewsData = require('../data/reviewsData');

router.post('/users', asyncHandler(async (req, res) => {
  await userModel.deleteMany({}); // deleting the all previous data
  const userSeeder = await userModel.insertMany(usersData); //seeding new data
  res.send({ userSeeder });

}));

router.post('/products', asyncHandler(async (req, res) => {
  await productModel.deleteMany({}); // deleting the all previous data
  const productsSeeder = await productModel.insertMany(productsData); //seeding new data
  res.send({ productsSeeder });

}));

router.post('/reviews', asyncHandler(async (req, res) => {
  await reviewModel.deleteMany({}); // deleting the all previous data
  const reviewsSeeder = await reviewModel.insertMany(reviewsData); //seeding new data
  res.send({ reviewsSeeder });

}));

module.exports = router;