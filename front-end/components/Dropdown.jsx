import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Products from './Products';
import styles from '../styles/Home.module.css'

import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
  } from "reactstrap";


const Dropdown = () => {


  return (

    <>
    <UncontrolledDropdown className={styles.dropdown_style}>
      <DropdownToggle
        caret
        color="dark"
        id="dropdownMenuButton"
        type="button"
        
      >
        Categories
      </DropdownToggle>

      <DropdownMenu  aria-labelledby="dropdownMenuButton">
        <DropdownItem href="#pablo" onClick={() => {
            
            console.log('All Button Clicked')
           
        }}>
          All
        </DropdownItem>

        <DropdownItem href="#pablo" onClick={() => {
            console.log('Shirts Button Clicked')
        }}>
          Shirts
        </DropdownItem>

        <DropdownItem href="#pablo" onClick={() => {
            console.log('Pants Button Clicked')
        }}>
          Pants
        </DropdownItem>

        <DropdownItem href="#pablo" onClick={() => {
            console.log('Shoes Button Clicked')
        }}>
          Shoes
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    </>



    
//  <div className="dropdown">
//     <button className="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown">Categories
//     <span className="caret"></span></button>
//     <ul className="dropdown-menu">
//     <li><a href="#">All</a></li>
//     <li><a href="#">Shirts</a></li>
//     <li><a href="#">Pants</a></li>
//     <li><a href="#">Shoes</a></li>
//     </ul>
// </div>
  )
}





export default Dropdown
