# Lojinha-Livre
# Project E-Commerce Schema :

- The project objetive is to build an E-Commerce Application with the following features: 
  - User login and encrypted password; 
    - Google Authentication;
    - Token Authentication;
  - MongoDB database;
  - Setup Payment;
  - User can Buy items and register items to Sell;
  - User can filter the list of items; 

# Steps Done:

  - Build a frontend folder with Vite's React App;
  - Build an Express's server in api folder;
  - Build a MongoDB Cluster;
  - Build the connection with mongoose to MongoDB; 
  - Build a dummy data receiver in 'data' folder;
  - build the users models and Schemas with mongoose;
  - build the products models and Schemas with mongoose;
  - Seed dummy data to test db connection in './controllers/dbSeeder';
  - Set a users model to login and register;
  - Seed dummy data to test db connection in './controllers/userController';
  - Set a login and register controller.
  - Set a tokenGenerator to possibly login with Token;
  - Set a middleware to authorize login by Token;
  - Set the user's update router;
  - Set the product's router on controllers;
  - Set the order's router on controllers;
  - Set page UI with React and TailwindCss;
  - Set Product Detail UI;
  - Build Redux Main / ProductList page;

# To-Do : Client

  - Build Main ProductList Page; (Partial)
    - Set Products limit per Page; 
    - Set Pages;
    - Set Filters;

  - Build Product Detail Page;
  - Build Cart Page;
  - Build Payment Page;
    - Implement Payment Logic;
  - Build User Login Page;
  - Build User Register Page;
  - Build User Page;
    - Edit User;
    - View Cart (Redirect Cart Page);
    - Wishlist;
    - Add Product to sell;
    - Edit Product to sell;
    - Delete Product to sell;
  - Build Contact-me Page;

# To-Do : Server 

  - Rearrange models of products; (DONE)
    - More images support; (DONE)
    - Type: (DONE)
      - Clothes;
      - Eletronics;
      - Books; 
      - ...
    - Options to variables(Size, type, options); (DONE)
    - Number of Reviews; (DONE)
  - Rearrange models of user; 
    - WishList;
    - Product to sell attatched;
    - Product buy history;
      - Add review;
    - Reviews;
      - Edit review;
      - Delete review;
  - Build Model of reviews; (DONE)
    - Comments; (DONE)
    - User_id Comment;  (DONE)
    - Product_id Comment; (DONE)
  - Build review Controller 


# Tecnologies used

  - React;
  - TailwindCSS;
  - NodeJs;
  - ExpressJs;
  - Mongoose (MongoDB);
  - jsonwebtoken;
  - Cors;
  - Axios;
  - Redux;
  - Redux-persist;
  - Redux-thunk;
  - Excalidraw
  - Trello (Kanban)