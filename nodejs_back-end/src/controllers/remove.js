import express from 'express';
const deleteRouter  = express();
import Product from '../services/Products/products.js';






deleteRouter.delete('/product/:id', (req, res) => {

    console.log('delete product route working');

//    Products.updateProduct(req);
  // once the function above is done running 
  // we can refresh the page with the res parameter
//    res.send('refresh the page');

});




deleteRouter.delete('/category/:id', (req, res) => {

  // delete entire category
})

export {
    deleteRouter
}


