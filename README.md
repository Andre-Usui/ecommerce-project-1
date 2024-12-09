# Project Schema 

- The project objetive is to build an E-Commerce Application with the following features: 
  - User login and encrypted password; 
    - Google Authentication;
  - MongoDB database;
  - Setup Payment;
  - User can Buy items and register items to Sell;
  - User can filter the list of items; 

# Steps:

  - Build a frontend folder with Vite's React App;
  - Build an Express's server;
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





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
