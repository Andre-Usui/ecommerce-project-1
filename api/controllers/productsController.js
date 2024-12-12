const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const productModel = require('../models/productModel');

// fetch all products
router.get('/', asyncHandler(async (req, res) => {
  const products = await productModel.find({});
  console.log(req.body)
  //Se o Objeto não for definido, ele irá retornar todos os
  //dados registrados
  res.json(products);
}));

// fetch product by id
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);
  //req.params.id é um parâmetro definido pelo user. após o /
  if (product) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error('product not found');
  }
}));

module.exports = router;