import express from 'express';
const router  = express();
import Product from '../services/Products/products.js';
import {connection} from '../models/database/db.js'




router.get('/category', (req, res) => {


  // this will get all the categories

connection.connect(function(err) {
  if(err) {
    console.error(err)
  }
  

  connection.query('SELECT BIN_TO_UUID(id) AS id, Name, Price, Description, category_id FROM products', function (err, result) {
    if(err) {
      console.error(err);
    }

    console.log(result);
    res.send(JSON.stringify(result));
    
    
  });

})

  

   // Product(req);
   // once the function above is done running 
   // we can refresh the page with the res parameter
//    res.send('refresh the page');

});

router.post('/category/:id', (req, res) => {



  // this will get all the products inside a category


  connection.connect(function(err) {
    if(err) {
      console.error(err)
    }
    
  
    connection.query(`SELECT BIN_TO_UUID(id) AS id, Name, Price, Description, category_id FROM products WHERE category_id = ${req.params.id}`, function (err, result) {
      if(err) {
        console.error(err);
      }
  
      console.log(result);
      res.send(JSON.stringify(result));
      
      
    });
  
  })
  




    // const data = req.params.id
    //  console.log('category by id route working');
    //  res.send(data)

 //   Products.addProduct(req);
   // once the function above is done running 
   // we can refresh the page with the res parameter
//    res.send('refresh the page');


});



router.post('/product/:id', (req, res) => {

  // this will get the details of a product


  connection.connect(function(err) {
    if(err) {
      console.error(err)
    }
    
  
    connection.query(`SELECT BIN_TO_UUID(id) AS id, Name, Price, Description, category_id FROM products HAVING id = "${req.params.id}"`, function (err, result) {
      if(err) {
        console.error(err);
      }
  
      console.log(result);
      res.send(JSON.stringify(result));
      
      
    });
  
  })
  

  

//   Products.addProduct(req);
 // once the function above is done running 
 // we can refresh the page with the res parameter
//    res.send('refresh the page');


});




export { router } 
