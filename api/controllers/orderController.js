const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const protect = require('../middleware/auth');
const orderModel = require('../models/orderModel');


// order post request
router.post(
  '/',
  protect,
  asyncHandler(async (req, res) => {
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


// order request payment
router.put(
  '/:order_id/payment',
  protect,
  asyncHandler(async (req, res) => {
    const order = await orderModel.findById(req.params.order_id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.paymentResult.id,
        status: req.body.paymentResult.status,
        updated_time: req.body.paymentResult.updated_time,
        email_address: req.body.paymentResult.email_address,
      };
      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    } else {
      res.error(404);
      throw new Error("order not found !")
    }
  }));


// order get request
router.get(
  '/',
  protect,
  asyncHandler(async (req, res) => {
    const orders = await orderModel.find({ user: req.user._id }).sort({ _id: -1 });
    // sort({_id: -1}) implica em fazer a lista do menor _id para o maior
    // em outras palavras, do mais antigo para o mais novo
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404);
      throw new Error('orders not found');
    }
  }));


// order get request by id
router.get(
  '/:id',
  protect,
  asyncHandler(async (req, res) => {
    const orders = await orderModel.findById(req.params.id).populate('user', 'email');
    // populate('user', 'email') implica em adicionar ao order também os dados 'user' 
    // e 'email'
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404);
      throw new Error('orders not found');
    }
  }));

module.exports = router;