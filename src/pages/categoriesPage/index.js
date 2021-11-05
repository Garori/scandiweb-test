import React, { Component } from 'react'
import { Title, Container, ProductsWrapper, Item, ItemNameWrapper } from './categoriesCSS';
import  ProductCard  from './../../components/productCard';

class CategoriesPage extends Component {

  products = [
    {name: "coisa 1",
    price: "$50.00",
    photo: "https://picsum.photos/512?random=",
    inStock: true,
    inCart: false,
    },
    {name: "coisa 2",
    price: "$50.00",
    photo: "https://picsum.photos/512?random=",
    inStock: true,
    inCart: true,
    },
    {name: "coisa 3",
    price: "$50.00",
    photo: "https://picsum.photos/512?random=",
    inStock: true,
    inCart: false,
    },
    {name: "coisa 4",
    price: "$50.00",
    photo: "https://picsum.photos/512?random=",
    inStock: false,
    inCart: false,
    },
    {name: "coisa 5",
    price: "$50.00",
    photo: "https://picsum.photos/512?random=",
    inStock: true,
    inCart: false,
    },
    {name: "coisa 6",
    price: "$50.00",
    photo: "https://picsum.photos/512?random=",
    inStock: false,
    inCart: false,
    },
    {name: "coisa 7",
    price: "$50.00",
    photo: "https://picsum.photos/512?random=",
    inStock: true,
    inCart: false,
    },

  ];

  render(){
    return(
      <Container>
        <Title>Category name</Title>
        <ProductsWrapper>
        {this.products.map( (product, index) => (
          <ProductCard product={product} index={index}></ProductCard>
        ))}
        </ProductsWrapper>
      </Container>
    )
  }

}

export default CategoriesPage
