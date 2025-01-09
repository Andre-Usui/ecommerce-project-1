const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const protect = require('../middleware/auth');
const productModel = require('../models/productModel');

const aggregate = productModel.aggregate();


// ***********************
// fetch all products
// ***********************


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

// fetch random limit products

router.get('/num/:limit', asyncHandler(async (req, res) => {
  var number = +req.params.limit;
  if (number < 0 || number > 20) {
    number = 10
    console.log("limit should be a number between 1 and 20.")
  }
  try {
    const products = await aggregate.sample(number);
    //Se o Objeto não for definido, ele irá retornar todos os
    //dados registrados
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong at fetching random products.', err });
  }
}));

// ***********************
// fetch products with cursor
// ***********************

/*

category
 - multiple categories using "%2C"
price_min
price_max
order
- ascending / asc
- descending / desc
sortBy
- price
- popularity (reviews)
- numSells
- recent
page
review
last cursor / lc

*/

// Working!!!

router.get('/collections', asyncHandler(async (req, res) => {
  let { category, price_min, price_max, review, sortBy, order, page, limit } = req.query;
  const pipeline = [];

  // category filter ******
  if (category) {
    const categoryArray = category.split(',');
    console.log(categoryArray);
    pipeline.push({ $match: { type: { $in: categoryArray } } });
  }

  // price filter ******
  if (price_min || price_max) {
    const p_min = parseFloat(price_min);
    const p_max = parseFloat(price_max);
    if (
      p_min < 0 ||
      p_min === NaN) {
      console.log("price filter should be a positive number");
      price_min = 0;
    }
    if (
      p_max < 0 ||
      p_max < NaN) {
      console.log("price filter should be a positive number");
      price_max = "Infinity";
    }
    const priceFilter = {};
    price_min ? priceFilter.$gte = p_min : priceFilter.$gte = 0;
    price_max ? priceFilter.$lte = p_max : priceFilter.$lte = Infinity;
    pipeline.push({ $match: { price: priceFilter } });
  };

  // reviews filter ******
  if (review) {
    const reviewNum = parseInt(review);
    const reviewFilter = {};
    switch (reviewNum) {
      case 1:
        reviewFilter.$gte = 0;
        reviewFilter.$lt = 1;
        pipeline.push({ $match: { rating: reviewFilter } })
        break;
      case 2:
        reviewFilter.$gte = 1;
        reviewFilter.$lt = 2;
        pipeline.push({ $match: { rating: reviewFilter } })
        break;
      case 3:
        reviewFilter.$gte = 2;
        reviewFilter.$lt = 3;
        pipeline.push({ $match: { rating: reviewFilter } })
        break;
      case 4:
        reviewFilter.$gte = 3;
        reviewFilter.$lt = 4;
        pipeline.push({ $match: { rating: reviewFilter } })
        break;
      case 5:
        reviewFilter.$gte = 4;
        reviewFilter.$lte = 5;
        pipeline.push({ $match: { rating: reviewFilter } })
        break;
      default:
        console.log('Review should be a Integer Number between 1 and 5');
        reviewFilter.$gte = 0;
        reviewFilter.$lte = 5;
        pipeline.push({ $match: { rating: reviewFilter } })
        break;
    }
  }

  // sortBy filter ******
  if (["price", "pop", "numSells", "recent"].includes(sortBy)) {
    let orderNum = parseInt(order);
    if (orderNum !== 1 && orderNum !== -1) {
      console.log("order should be 1 or -1");
      orderNum = 1;
    }
    switch (sortBy) {
      case "price":
        pipeline.push({ $sort: { impulse: 1, price: orderNum } })
        break;
      case "pop":
        pipeline.push({ $sort: { impulse: 1, numReviews: orderNum, rating: orderNum } })
        break;
      case "numSells":
        pipeline.push({ $sort: { impulse: 1, numSells: orderNum } })
        break;
      case "recent":
        pipeline.push({ $sort: { impulse: 1, createdAt: orderNum } })
        break;
      default:
        console.log("sortBy not recognized");
        pipeline.push({ $sort: { impulse: 1, _id: orderNum } })
        break;
    }
  }

  // page filter ******
  if (page) {
    let pageNum = parseInt(page);
    if (pageNum === NaN) {
      console.log("error: page should be a Number!")
      pageNum = 0;
    }
    pipeline.push({ $skip: pageNum * 10 })

  }
  if (limit) {
    var limitNum = parseInt(limit);
    if (limit < 1 || limit > 20 || limit === NaN) {
      console.log("error: limit should be a Number between 1 and 20.")
      var limitNum = 10;
    }
    pipeline.push({ $limit: limitNum });
  } else {
    pipeline.push({ $limit: 10 });
  }

  console.log(pipeline);

  try {
    const products = await productModel.aggregate(pipeline).exec();
    //Se o Objeto não for definido, ele irá retornar todos os
    //dados registrados
    res.status(200).json({ products });
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong at fetching a collection products.', err });
  }
}));


// ***********************
// fetch products by Group 
// ***********************


router.get('/group', asyncHandler(async (req, res) => {
  let { random, category, limit } = req.query;
  const pipeline = [];

  if (category === undefined) random = true;

  if (limit) {
    var limitNum = parseInt(limit);
    if (limit < 1 || limit > 20 || limit === NaN) {
      console.log("error: limit should be a Number between 1 and 20.")
      var limitNum = 5;
    }
  } else {
    limitNum = 5;
  }


  // category filter ******
  if (category) {
    const categoryArray = category.split(',');
    console.log(categoryArray);
    pipeline.push(
      { $match: { impulse: true } },
      { $match: { type: { $in: categoryArray } } },
      { $sample: { size: limitNum } },
    );
  }

  // random filter ******
  if (random) {
    pipeline.push(
      { $match: { impulse: true } },
      { $sample: { size: limitNum } },
    );
  };

  console.log(pipeline);

  try {
    const products = await productModel.aggregate(pipeline).exec();
    if (products.length < limitNum) {
      const pipeline2 = [];
      pipeline2.push(
        { $match: { impulse: false } },
        { $sort: { numReviews: -1, rating: -1 } },
        { $limit: limitNum - products.length }
      )
      const products2 = await productModel.aggregate(pipeline2).exec();
      products2.map(item => products.push(item));
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong at fetching a collection products.', err });
  }
}));


// ***********************
// fetch product by _id
// ***********************


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


// ***********************
// fetch product by _user_id
// ***********************


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


// ***********************
// add a new product
// ***********************


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


// ***********************
// edit a product
// ***********************


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


// ***********************
// delete a new product
// ***********************


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