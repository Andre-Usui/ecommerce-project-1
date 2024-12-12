const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const protect = require('../middleware/auth');
const productModel = require('../models/productModel');


// fetch all products

router.get('/', asyncHandler(async (req, res) => {
  try {
    const products = await productModel.find({});
    //Se o Objeto não for definido, ele irá retornar todos os
    //dados registrados
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong at fetching all products.' });
  }

}));


// fetch product by _id

router.get('/:id', asyncHandler(async (req, res) => {

  try {
    const product = await productModel.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found.' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong at fetching the product.' });
  }
}));

// fetch product by _user_id

router.get('/user/:user_id', asyncHandler(async (req, res) => {

  try {
    const products = await productModel.find({ _user_id: req.params.user_id });
    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ error: 'User products not found.' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong at fetching the product.' });
  }
}));


// add a new product

router.post('/addproduct', protect, asyncHandler(async (req, res) => {
  const {
    name,
    image,
    description,
    price,
    countInStock,
    type,
    variable
  } = req.body;

  const userId = req.user._id;
  const newProduct = {
    name: name,
    image: image,
    description: description,
    price: price,
    countInStock: countInStock,
    type: type,
    variable: variable,
    _user_id: userId
  }
  try {
    await productModel.create(newProduct);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Product add not compete', error: err })
  }
}));


// edit a product

router.put('/editproduct/:id', protect, asyncHandler(async (req, res) => {
  const {
    name,
    image,
    description,
    price,
    countInStock,
    type,
    variable
  } = req.body;
  const userId = req.user._id;
  const productId = req.params.id;
  const product = await productModel.findById(productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  } else if (product._user_id.toString() !== userId.toString()) {
    return res.status(403).json({ error: 'You are not authorized to edit this product.' })
  } else {
    product.name = name || product.name;
    product.image = image || product.image;
    product.description = description || product.description;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;
    product.type = type || product.type;
    product.variable = variable || product.variable;
  } try {
    const updatedproduct = await product.save();
    res.status(200).json(updatedproduct);
  } catch (err) {
    res.status(400).json({ message: 'Product edit not compete', error: err })
  }
}));


// delete a new product

router.post('/deleteproduct/:id', protect, asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const userId = req.user._id;
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      res.status(404).json({ error: 'Product doesnt exist' });
    } else if (product._user_id.toString() !== userId.toString()) {
      return res.status(403).json({ error: 'You are not authorized to edit this product.' })
    } else {
      await product.deleteOne();
      res.status(200).json({ message: `${JSON.stringify(product)} was deleleted.` });
    }
  } catch (err) {
    res.status(400).json({ message: 'Product delete not compete', error: err })
  }
}));


module.exports = router;