import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import { createContext } from 'react'
import { showData } from './api/Data';
import Products from '../components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from '../components/Dropdown';
import Blog from './Test';

import renderConditionalComponent from '../operations/render';









export default function Home({
  allData, 
  allShirts, 
  allPants, 
  allShoes, 
  // theProduct
}) {



  // console.log(data)


  


  // The following states on reliant on whether the component renders 
  // base on event handler
  // const [state, setState] = useState({
  //   allData: false ,
  //   allShirts: false,
  //   allPants: false,
  //   allShoes: false
  // })

const  [allProductData, setAllProductData] = useState(false);
const [allShirtsData, setAllShirtsData] = useState(false); 
const [allPantsData, setAllPantsData] = useState(false); 
const [allShoesData, setAllShoesData] = useState(false); 



  const showAll = () => {
    setAllProductData(!allProductData);
    setAllShirtsData(false);
    setAllPantsData(false); 
    setAllShoesData(false);
  }

  const showShirts = () => {
    setAllProductData(false);
    setAllShirtsData(!allShirtsData);
    setAllPantsData(false); 
    setAllShoesData(false);
  }

  const showPants = () => {
    setAllProductData(false);
    setAllShirtsData(false);
    setAllPantsData(!allPantsData); 
    setAllShoesData(false);
  }

  const showShoes= () => {
    setAllProductData(false);
    setAllShirtsData(false);
    setAllPantsData(false); 
    setAllShoesData(!allShoesData);
  }

  

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
        {/* <Dropdown  State = {state} Data = {allData} Shirts ={allShirts} Pants = {allPants} Shoes = {allShoes} /> */}
      <button className='btn' onClick={() => {
        showAll();
        // console.log(allProductData)
      }}>All</button>
      <button className='btn' onClick={() => {
        showShirts();
        // console.log(allShirtsData)
      }}>Shirts</button>
      <button className='btn' onClick={() => {
        showPants();
        // console.log(allPantsData)
      }}>Pants</button>
      <button className='btn' onClick={() => {
        showShoes();
        // console.log(allShoesData)
      }}>Shoes</button>
      <main className={styles.main}>
      

      {/* This function renders the content from our rest api */}
      {renderConditionalComponent(allProductData, allShirtsData, allPantsData, allShoesData, allData, allShirts, allPants, allShoes)}
        
          
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





// The getStaticProps function will make all the api calls
// and store the data in a variable so we can add the to our component props later

export const getStaticProps = async () => {
  const all = await fetch('http://localhost:9000/api/category')
  const shirts = await fetch('http://localhost:9000/api/category/1')
  const pants = await fetch('http://localhost:9000/api/category/2')
  const shoes = await fetch('http://localhost:9000/api/category/3')
  // const product = await fetch('http://localhost:9000/api/product/16a1be78-69fe-11ed-801b-d4a9d32642db')
  
  
  const allData = await all.json();
  const allShirts = await shirts.json();
  const allPants = await pants.json();
  const allShoes = await shoes.json();
  // const theProduct = await product.json();
 
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
 





