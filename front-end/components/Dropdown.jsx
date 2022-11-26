import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Products from './Products';
import styles from '../styles/Home.module.css'
import renderConditionalComponent from '../operations/render';
import Home from '../pages';
import { AppContext } from '../pages';

import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
  } from "reactstrap";



// Dropdown component for rendering items on page
const Dropdown = (State, Data, Shirts, Pants, Shoes) => {


  return (

    <>
    
    <UncontrolledDropdown className={styles.dropdown_style}>
      <DropdownToggle
        caret
        color="dark"
        id="dropdownMenuButton"
        type="button"
        
      >Categories </DropdownToggle>

      <DropdownMenu  aria-labelledby="dropdownMenuButton">
        <DropdownItem href="#pablo" onClick={()=> 
            
            console.log("")
          
          
          }>All</DropdownItem>

        <DropdownItem href="#pablo" onClick={() => {
            console.log('Shirts button working')
            
        }}>Shirts</DropdownItem>

        <DropdownItem href="#pablo" onClick={() => {
            console.log('Pants Button Clicked')
        }}>Pants</DropdownItem>

        <DropdownItem href="#pablo" onClick={() => {
            console.log('Shoes Button Clicked')
        }}>Shoes</DropdownItem>


      </DropdownMenu>
    </UncontrolledDropdown>
    
    </>
  )
}





export default Dropdown
