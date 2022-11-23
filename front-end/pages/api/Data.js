import axios from 'axios';


async function showData() {

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



function showCategoryShirts() {
    axios.post('http://localhost:9000/api/category/1')
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



function showCategoryPants() {
    axios.post('http://localhost:9000/api/category/2')
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

function showCategoryShoes() {
    axios.post('http://localhost:9000/api/category/3')
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

function showProductById(id) {
    axios.post(`http://localhost:9000/api/product/${id }`)
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


export {
    showData,
    showCategoryShirts,
    showCategoryPants,
    showCategoryShoes,
    showProductById
}