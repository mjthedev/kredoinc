import express from 'express';
const updateRouter  = express();
import Product from '../services/Products/products.js';






updateRouter.put('/updateProduct', (req, res) => {

    console.log('updateProduct route working');

//    Products.updateProduct(req);
  // once the function above is done running 
  // we can refresh the page with the res parameter
//    res.send('refresh the page');

});


export {
    updateRouter
}


