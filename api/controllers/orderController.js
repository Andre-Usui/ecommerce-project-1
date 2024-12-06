const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const protect = require('../middleware/auth');
const orderModel = require('../models/orderModel');

router.post('/', protect, asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethods,
    shippingPrice,
    taxPrice,
    totalPrice,
    price
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('no order items found !');
  } else {
    const order = new orderModel({
      orderItems,
      shippingAddress,
      paymentMethods,
      shippingPrice,
      taxPrice,
      totalPrice,
      price,
      user: req.user._id
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
}));

module.exports = router;