






export default class Product {

    // const this.name;
   // const this.price;
   // const this.description;

    constructor (name = null, price = null, description = null) {
        this.name = name;
        this.price = price;
        this.description = description;

      };


    


getProductById(request) {
    // fetch product from database using the param property from the request object
    // send stringified data to front-end client
    // after the initial get request make sure the to cache the data locally
    
};

addProduct(request) {
    // take the parameters from the body of the request 
    // destructure the values
    // add to database using mongodb driver

};

updateProduct(req) {

};


deleteProduct(req) {

};


showAllProducts() {

    // showAll products from database
    // use query database function 
    // then destructure the values in the array
    // and iterate through each one
    // display the values for each object in that array
    // send stringified data to front-end client

};

};

