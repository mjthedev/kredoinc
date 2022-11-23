import React from 'react'
import { showData } from '../pages/api/Data'
import styles from '../styles/Home.module.css'




const Products = (props) => {
    
  return (
    <div>
        <div className={styles.grid} key={props.id}>
          <a href="" className={styles.card}>
            <h2>Product &rarr;</h2>
            <p>Name: {props.Name}</p>
            <p>Price: {props.Price}</p>
            <p>Description: {props.Description}</p>
          </a>
        </div>
    </div>
  )
}

export default Products
