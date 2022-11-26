import React from 'react'
import { showData } from '../pages/api/Data'

import styles from '../styles/Home.module.css'
import ProductGiver from '../pages/api/Data'

const Product = new ProductGiver();


const Products = (props) => {
    
  return (
    <div onClick={props.clickme}>
        <div className={styles.grid}  >
          <a  href="#"className={styles.card}

          onClick={()=> {
            Product.showProductById(props.id)
            console.log()
          }}
          
          // onClick={async (e)=> {
          //   e.preventDefault();
          //   console.log(props.id)

          //   try {
          //     const response = await fetch(`http://localhost:9000/api/product/${props.id}`, {
          //       method: 'GET'
          //     });
        
          //     if (!response.ok) {
          //       throw new Error(`Error! status: ${response.status}`);
          //     }
        
          //     const result = await response.json();
        
          //     console.log('result is: ', JSON.stringify(result, null, 4));
        
              
          //   } catch (err) {
          //     console.error(err.message);
          //   } finally {
          //     console.log('it worked')
          //   }
          
        
          // // console.log(data);


          // }}
          >
            <h2>Product &rarr;</h2>
            <p><strong>Name:</strong> 
            {props.Name}
            </p>
            <p><strong>Price:</strong> 
            $ {props.Price}.00
            </p>
            <p><strong>Description:</strong> 
            {props.Description}
            </p>
            
          </a>

          
        </div>
    </div>
  )
}

export default Products
