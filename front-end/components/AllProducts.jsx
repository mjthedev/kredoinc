import React from 'react'
import Products from './Products'






   

export default function AllProducts ({data}) {
    console.log(data)
  return (
    


    <>
         {data.map(item => {
     return(
      <Products 
        id={item.id}
        Name={item.Name} 
        Price={item.Price} 
        Description={item.Description}>
      </Products>
     )
    })}
    
    
    </>  
    
  )
}




