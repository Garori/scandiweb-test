import React, { Component } from 'react'
import { NavbarNav, CategoriesDiv, LogoDiv, AccountDiv  } from './navbarCSS';
import  {ReactComponent as Logo}  from "./../../assets/images/logo.svg"
import  {ReactComponent as Cart}  from "./../../assets/images/cart.svg"

class Navbar extends Component {

  render(){
    return(
      <NavbarNav>
        <CategoriesDiv><a>Tech</a><a>Clothes</a></CategoriesDiv>
        <LogoDiv><Logo/></LogoDiv>
        <AccountDiv><Cart style={{fill: "black"}}/></AccountDiv>
      </NavbarNav>
    )
  }

}

export default Navbar
