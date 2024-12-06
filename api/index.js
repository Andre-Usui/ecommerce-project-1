const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Products = require('./data/productsData');
const controllerDbSeeder = require('./controllers/dbSeeder');
const controllerUser = require('./controllers/userController')
const controllerProduct = require('./controllers/productsController');
const controllerOrder = require('./controllers/orderController');

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // defining main data receiving

mongoose.connect(process.env.MONGODB_CONNECT)
  .then(() => console.log('db connected'))
  .then((err) => {
    if (err) console.log(err)
  });


//Seeder controller
// localhost:3000/api/seed/users - POST
// localhost:3000/api/seed/products - POST
app.use('/api/seed', controllerDbSeeder);


//User controller
// localhost:3000/api/users/login - POST
// localhost:3000/api/users/register - POST
// localhost:3000/api/users/profile - GET
app.use('/api/users', controllerUser);


//Products controller
// localhost:3000/api/products/ - GET
// localhost:3000/api/products/:id - GET
// localhost:3000/api/users/register - POST
app.use('/api/products', controllerProduct);


//Order controller
// localhost:3000/api/order/ - POST

app.use('/api/orders', controllerOrder);



app.get('/', (req, res, next) => {
  res.send('Working fine');
})

app.get('api/products', (req, res, next) => {
  res.json(Products);
});

app.get('/api/products:id', (req, res, next) => {
  const product = Products.find((product) => product.id === req.params.id);
  res.json(product);
});


app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
})