import axios from 'axios';

// show turn this function into a class

export default class ProductGiver {

  constructor() {

  }

async  showData() {
  await axios.get('http://localhost:9000/api/category')
   .then(function(response) {
     // handle response
     const data = response.data;
   
     // console.log(JSON.stringify(data[0]))
     // const finalData = JSON.stringify(data[0].Name)
     // console.log(finalData)
     return data;
   }).catch(function(err){
     // handle error
     console.error(err)
   }).finally(function() {
     // always executed
   })
}



 async showCategoryShirts() {
   await axios.post('http://localhost:9000/api/category/1')
   .then(function(response) {
     // handle response
     const data = response.data;
   
     // console.log(JSON.stringify(data[0]))
     // const finalData = JSON.stringify(data[0].Name)
 
     // console.log(finalData)
 
     return data;
   }).catch(function(err){
     // handle error
     console.error(err)
   }).finally(function() {
     // always executed
   })

}



async showCategoryPants() {
   await axios.post('http://localhost:9000/api/category/2')
   .then(function(response) {
     // handle response
     const data = response.data;
   
     // console.log(JSON.stringify(data[0]))
     // const finalData = JSON.stringify(data[0].Name)
 
     // console.log(finalData)
 
     return data;
   }).catch(function(err){
     // handle error
     console.error(err)
   }).finally(function() {
     // always executed
   })

}

async showCategoryShoes() {
   await axios.post('http://localhost:9000/api/category/3')
   .then(function(response) {
     // handle response
     const data = response.data;
   
     // console.log(JSON.stringify(data[0]))
     // const finalData = JSON.stringify(data[0].Name)
 
     // console.log(finalData)
 
     return data;
   }).catch(function(err){
     // handle error
     console.error(err)
   }).finally(function() {
     // always executed
   })

}

async showProductById(id) {
   await axios.get(`http://localhost:9000/api/product/${id }`)
   .then(function(response) {
     // handle response
     const data = response.data;
     console.log(data)
   
     // console.log(JSON.stringify(data[0]))
     // const finalData = JSON.stringify(data[0].Name)
 
     // console.log(finalData)
 
     // return data;
   }).catch(function(err){
     // handle error
     console.error(err)
   }).finally(function() {
     // always executed
   })

}


}


