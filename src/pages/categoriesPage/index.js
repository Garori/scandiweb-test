import React, { Component } from 'react'
import { Title, Container, ProductsWrapper, Item, ItemNameWrapper } from './CategoriesCSS';
import image from "./../../assets/images/placeholder.png"

class CategoriesPage extends Component {

  products = [
    {name: "coisa 1",
    price: "$50.00"
    },
    {name: "coisa 2",
    price: "$50.00"
    },
    {name: "coisa 3",
    price: "$50.00"
    },
    {name: "coisa 4",
    price: "$50.00"
    },
    {name: "coisa 5",
    price: "$50.00"
    },
    {name: "coisa 6",
    price: "$50.00"
    },
    {name: "coisa 7",
    price: "$50.00"
    },

  ];

  render(){
    return(
      <Container>
        <Title>Category name</Title>
        <ProductsWrapper>
        {this.products.map( (product, index) => (
          <Item key={index}>
            {/*<img src={require(product.image)}/>*/}
            <img style={{width: "-webkit-fill-available"}} src={image}/>
              <p>{product.name}</p>
              <p>{product.price}</p>
          </Item>
        ))}
        </ProductsWrapper>
      </Container>
    )
  }

}

export default CategoriesPage
