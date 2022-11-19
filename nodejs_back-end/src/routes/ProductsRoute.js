import express from 'express';
const router  = express();
import Products from '../models/Products/products';


router.get('/allProducts', (req, res) => {
    
   Products(req);

});

router.post('/addProduct', (req, res) => {

    Products.addProduct(req);

}; 

router.put('updateProduct', (req, res) => {

    Products.updateProduct(req);
};


router.delete('deleteProduct', (req, res) => {

    Products.deleteProduct(req)

};


module.exports = productRoute; 
