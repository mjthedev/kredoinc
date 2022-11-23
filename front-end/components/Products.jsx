import React from 'react'
import { showData } from '../pages/api/Data'
import styles from '../styles/Home.module.css'




const Products = (props) => {
    
  return (
    <div>
        <div className={styles.grid} key={props.id}>
          <a href="" className={styles.card}>
            <h2>Product &rarr;</h2>
            <p><strong>Name:</strong> 
            <h6>{props.Name}</h6>
            </p>
            <p><strong>Price:</strong> $ {props.Price}.00</p>
            <p><strong>Description:</strong> 
            <h6>{props.Description}</h6>
            </p>
          </a>
        </div>
    </div>
  )
}

export default Products
