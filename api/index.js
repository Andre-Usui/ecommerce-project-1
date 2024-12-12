const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
const dbSeederController = require('./controllers/dbSeederController');
const usersController = require('./controllers/usersController')
const productsController = require('./controllers/productsController');
const ordersController = require('./controllers/ordersController');
const reviewsController = require('./controllers/reviewsController');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // defining main data receiving

app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECT)
  .then(() => console.log('db connected'))
  .then((err) => {
    if (err) console.log(err)
});


//Seeder controller
// localhost:3000/api/seed/users - POST
// localhost:3000/api/seed/products - POST
// localhost:3000/api/seed/reviews - POST
app.use('/api/seed', dbSeederController);


//User controller
// localhost:3000/api/users/login - POST
// localhost:3000/api/users/register - POST
// localhost:3000/api/users/profile - GET
// localhost:3000/api/users/profile - PUT
// localhost:3000/api/users/addwishlist/:id - PUT
// localhost:3000/api/users/deletewishlist/:id - PUT
app.use('/api/users', usersController);


//Products controller
// localhost:3000/api/products/ - GET
// localhost:3000/api/products/:id - GET
// localhost:3000/api/products/user/:user_id - GET
// localhost:3000/api/products/addproduct - POST
// localhost:3000/api/products/editproduct/:id - PUT
// localhost:3000/api/products/deleteproduct/:id - POST
app.use('/api/products', productsController);


//Order controller
// localhost:3000/api/order/ - POST
app.use('/api/orders', ordersController);


//Reviews controller
// localhost:3000/api/reviews/productreviews/:_product_id - GET
// localhost:3000/api/reviews/review/:_id - GET
// localhost:3000/api/reviews/addreview - POST
// localhost:3000/api/reviews/editreview/:id - PUT
// localhost:3000/api/reviews/deletereview/:id - POST
app.use('/api/reviews', reviewsController);


app.get('/', (req, res) => {
  res.send('Server working fine');
})


app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
})