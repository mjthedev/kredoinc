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
import ShirtsProducts from '../components/ShirtsProducts';
import PantsProducts from '../components/PantsProducts';
import ShoesProducts from '../components/ShoesProducts';





export const getStaticProps = async () => {
  const all = await fetch('http://localhost:9000/api/category')
  const shirts = await fetch('http://localhost:9000/api/category/1')
  const pants = await fetch('http://localhost:9000/api/category/2')
  const shoes = await fetch('http://localhost:9000/api/category/3')
  // const product = await fetch('http://localhost:9000/api/product/:id')
  
  
  const allData = await all.json();
  const allShirts = await shirts.json();
  const allPants = await pants.json();
  const allShoes = await shoes.json();
  // const theProduct = await JSON.parse(product);
 
  return {
   props: {
     allData,
     allShirts,
     allPants,
     allShoes,
    //  theProduct
   }
  }
 }
 




function componentCondition(state, all) {
  if(state) {
    return (

    all.map(item => {
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

export default function Home({
  allData, 
  allShirts, 
  allPants, 
  allShoes, 
  theProduct
}) {

  // console.log(data)


  const [apiData, setData] = React.useState('')

  const [state, setState] = useState({
    allData: false,
    allShirts: false,
    allPants: false,
    allShoes: false
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>RESTful API Challenge</title>
        <meta name="description" content="RESTful API Challenge" />
        <link rel="icon" href="/favicon.ico" />
        

      </Head>

        <h1 className={styles.title}>
        RESTful API Challenge
        </h1>
        <Dropdown/>
      <main className={styles.main}>


      {/* <AllProducts data = {allData}/> */}

      {/* <ShirtsProducts data = {allShirts}/>
      <PantsProducts data = {allPants}/>
      <ShoesProducts data = {allShoes}/>  */}
      {componentCondition(state.allData, allData)}
        
          
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Marrion Johnson'}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )

  
}









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




