import express from 'express';
const postRouter  = express();
import Product from '../services/Products/products.js';






postRouter.post('/product/:id', (req, res) => {

    console.log('delete product route working');

//    Products.updateProduct(req);
  // once the function above is done running 
  // we can refresh the page with the res parameter
//    res.send('refresh the page');

});


postRouter.post('/category/:id', (req, res) => {

    // return a category based on id param
})

export {
    postRouter
}


