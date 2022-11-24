import React from 'react'
import Products from './Products'




export const getStaticProps = async () => {
    const res = await fetch('http://localhost:9000/api/category/1')
    const data = await res.json();
    
   
    return {
     props: {
       data
     }
    }
   }

   

export default function ShirtsProducts ({data}) {
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




