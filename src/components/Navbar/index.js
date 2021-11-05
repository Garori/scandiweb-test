import React, { Component } from 'react'
import { NavbarNav, CategoriesDiv, LogoDiv, AccountDiv  } from './navbarCSS';
class Navbar extends Component {

  render(){
    return(
      <NavbarNav>
        <CategoriesDiv><a>Tech</a><a>Clothes</a></CategoriesDiv>
        <LogoDiv></LogoDiv>
        <AccountDiv></AccountDiv>
      </NavbarNav>
    )
  }

}

export default Navbar
