import express from 'express';
const router  = express();
import Product from '../services/Products/products.js';
import {connection} from '../models/database/db.js'
import getAll from '../controllers/get.js'
import getCategory from '../controllers/getCategory.js'
import getProduct from '../controllers/getProduct.js';



// GET ALL ITEMS IN DATABASE
router.get('/category', (req, res) => {
  // this will get all the categories
  getAll(res);
});


// GET SELECT ITEMS BASED ON GIVEN CATEGORY
router.get('/category/:id', (req, res) => {
  // this will get all the products inside a given category
  // depending on the value of the request parameter
  getCategory(req, res);
});


// GET SELECT PRODUCT BASED ON GIVEN PRODUCT ID
router.get('/product/:id', (req, res) => {
  // this will get the details of a product
  getProduct(req, res)
});




export { router } 
