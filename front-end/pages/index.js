import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { showData } from './api/Data';
import Products from '../components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from '../components/Dropdown';
import Blog from './Test';
import AllProducts from '../components/AllProducts';








export default function Home({data}) {

  console.log(data)


  const [apiData, setData] = React.useState('')

// async function getStaticProps() {

//   try {
//     const result = await axios.get('http://localhost:9000/api/category');
//     const data = await result.data;
//     return {data}
//   } catch (error) {
//     console.log(error)
//   }

  



  // axios.get('http://localhost:9000/api/category').then((response) => {

  //   // console.log(response.data);
  //   const apiData = response.data;
  //   console.log(apiData);
    
  
  // }).catch((err) => {
  //   console.error(err)
  // }).finally(function() {
  //   // execution expected
    
    
  // })

// }


// getStaticProps().then((data) => {
//   console.log(data)
  
// })




  return (
    <div className={styles.container}>
      <Head>
        <title>RESTful API Challenge</title>
        <meta name="description" content="RESTful API Challenge" />
        <link rel="icon" href="/favicon.ico" />
        

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        RESTful API Challenge
        </h1>

<Dropdown></Dropdown>



        

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

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )

  
}


export const getStaticProps = async () => {
 const res = await fetch('http://localhost:9000/api/category')
 const data = await res.json();

 return {
  props: {
    data
  }
 }
}