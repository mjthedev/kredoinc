import express from 'express';
const router  = express();
import Product from '../services/Products/products.js';
import {connection} from '../models/database/db.js';






router.get('/categories', (req, res) => {
  
// connection.connect();

  
})

 
router.get('/allProducts', async (req, res) => {

        
    
  console.log('allProducts route working');
   // Product(req);
   // once the function above is done running 
   // we can refresh the page with the res parameter
//    res.send('refresh the page');

});

router.post('/addProduct', (req, res) => {






     console.log('addProduct route working');

 //   Products.addProduct(req);
   // once the function above is done running 
   // we can refresh the page with the res parameter
//    res.send('refresh the page');


});


router.put('/updateProduct', (req, res) => {

   

     console.log('updateProduct route working');

//    Products.updateProduct(req);
   // once the function above is done running 
   // we can refresh the page with the res parameter
//    res.send('refresh the page');

});


router.delete('/deleteProduct', (req, res) => {



    


     console.log('deleteProduct route working');

//    Products.deleteProduct(req);

    // once the function above is done running
    // we can refresh the page with the res parameter
 //   res.send('refresh the page');

});






export { router } 
