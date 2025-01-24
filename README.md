# Lojinha-Livre
## A project E-Commerce Schema

You can see the project at 
[lojinhalivre.com ](https://lojinhalivre.com/)

## Description

- The project objetive is to build an E-Commerce Application, similar to Shopee, with the following features: 
  - User login and encrypted password; 
    - Token Authentication;
  - CSRF protection
  - MongoDB database;
  - Setup Payment;
  - User can Buy items and register items to sell;
  - User can filter a custom list of items; 


## Release 1.0.4 Development
  - Build Category Collection Page and Components;
  - Build Filters Components;
    - Category checkbox selector;
    - Rating checkbox selector;
    - Price with Number and double range selectors;
  - Implement Filter Reducer logic at Redux and Redux Persist to store and manage States dinamically;
  - Update and correct Products Controller Collection at API to send Data to Collections Component;
  - Update TopSales Components to render products by the main Category.

### To-do:

- Update Users Reducer Redux Logic to not PURGE the entire stored data;
- Build Pages, Sort By and Order Components and Logic;
- Update Responsive styling at the Collection Components;
- Update TopSales to a Slider Component;
- Build Perfil, Wishlist and Cart page's.

## Release 1.0.3 Development
  - Deploy Client at Hostinger Host.
  - Updated csrf logic for deployment.

## Release 1.0.2 Development
  - Deploy Client and API at Vercel Host.
  - Updated constants of URL for deployment.

## Release 1.0.1 Development

  - Implemented security logic for handling jwt and csrf tokens, using cookies instead of headers in Request. Now the app is protected from CSRF atacks and there is more security since the Cookie doesnt handle JavaScript logic as Headers. 
    - Used `cookie-parser` and `csrf-csrf`.
  - Implemented Redux Persist to handle Users Data.
  - Builded Login and Register Page's.
  - Updated Navbar component to respond dynamically when user is logged.  




### Technologies

**API**

  - NodeJs
  - ExpressJs
  - MongoDB
  - Mongoose
  - cors
  - cookie-parser
  - csrf-csrf
  - JWT token

**Client**

  - React
  - Axios
  - Redux Tool Kit
  - TailwindCss
  - Flowbite

**Organization**

  - Excalidraw
  - Trello (Kanban)


## To-Do : Client

  - Build Main ProductList Page; (Partial)
    - Set Products limit per Page; 
    - Set Pages;
    - Set Filters;

  - Build Product Detail Page;
  - Build Cart Page;
  - Build Payment Page;
    - Implement Payment Logic;
  - Build User Page;
    - Edit User;
    - View Cart (Redirect Cart Page);
    - Wishlist;
    - Add Product to sell;
    - Edit Product to sell;
    - Delete Product to sell;
  - Build Contact-me Page;

## To-Do : Server 

  - Reviews;
    - Add review;
    - Edit review;
    - Delete review;
  - Build review Controller 


### Steps Done:

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
  - Build User Login Page;
  - Build User Register Page;
  - Rearrange models of products;
  - More images support;
  - Type:
    - Clothes;
    - Eletronics;
    - Books; 
    - ...
  - Options to variables(Size, type, options);
  - Number of Reviews;
- Rearrange models of user; 
  - WishList;
  - Product to sell attatched;
  - Product buy history;
- Build Model of reviews;
  - Comments;
  - User_id Comment; 
  - Product_id Comment;


