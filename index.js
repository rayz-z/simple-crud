const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);





app.get('/', (req, res) => {
    res.send("hello from Node API Server Updated");
});




mongoose.connect('mongodb+srv://tvawesome1859:RjmB6294HCbElgvR@backenddb.kberp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
  })
  })
  .catch(() => {
    console.log('Connection failed');
  });