import React, { Component } from 'react'
import { Product, ProductPhoto, OutOfStock, OOStext, Photodiv, PhotodivOOS, CartIcon, CartIconDiv } from './productCardCSS';
import  {ReactComponent as Cart}  from "./../../assets/images/cart.svg"

class ProductCard extends Component {

  render(){
    return(
      <>
        <Product inCart={this.props.product.inCart} inStock={this.props.product.inStock}>
          <Photodiv>
            {!this.props.product.inStock ? (
              <OOStext>OUT OF STOCK</OOStext>
            ) : null }
            <ProductPhoto src={this.props.product.photo + this.props.index}/>
          </Photodiv>
          {this.props.product.inCart ?(
            <CartIconDiv>
              <CartIcon><Cart style={{height: "20px", fill: "white"}}/></CartIcon>
            </CartIconDiv>
          ): null }
          <p>{this.props.product.name}</p>
          <p className="bold-raleway">{this.props.product.price}</p>
        </Product>
      </>
    )
  }

}

export default ProductCard
