import React from "react";
import Products from "../components/Products";
import ProductGiver from "../pages/api/Data";

const Product = new ProductGiver();


export default function renderConditionalComponent(validateAll, validateShirts, validatePants, validateShoes, all, shirts, pants, shoes) {
    if(validateAll) {
        
      return (
      all.map(item => {
        return(
    
           <Products 
            id={item.id}
            Name={item.Name} 
            Price={item.Price} 
            Description={item.Description}

            clickme={()=> {
              
              // this function will return the product selected given the id
              Product.showProductById(item.id)
              
              // showProductById(item.id)
              
            }}>

          </Products>
         
        )
        })
      )
    } else if (validateShirts) {
      return (
        shirts.map(item => {
          return(
            <Products 
              id={item.id}
              Name={item.Name} 
              Price={item.Price} 
              Description={item.Description}>
            </Products>
          )
          })
      )
    } else if (validatePants) {
      return (
        pants.map(item => {
          return(
            <Products 
              id={item.id}
              Name={item.Name} 
              Price={item.Price} 
              Description={item.Description}>
            </Products>
          )
          })
      )
    } else if (validateShoes) {
      return (
        shoes.map(item => {
          return(
            <Products 
              id={item.id}
              Name={item.Name} 
              Price={item.Price} 
              Description={item.Description}>
            </Products>
            
          )
          })
      )
    } else {
      return (
        <h1>Please select a category</h1>
      )
    }
  }