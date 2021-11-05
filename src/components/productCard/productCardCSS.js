import styled from "styled-components";

export const Product = styled.div`
padding: 1vw;
margin: 3vh 1vw;
/* box-shadow only appears if the product is in cart */
box-shadow: ${props => props.inCart ? "0px 0px 4px 4px rgba(168, 172, 176, 0.19)" : ""};

> div img {
  filter: ${props => !props.inStock ? "opacity(0.3)" : "" };
}
> p {
  color: ${props => !props.inStock ? "#8D8F9A": ""};
}
background-color: white;
`;

export const ProductPhoto = styled.img`
  width: -webkit-fill-available;
  max-width: 100%;
`;


export const OOStext = styled.p`
  color: #8D8F9A;
  /* position absolute so I could position it over the image */
  position: absolute;
  z-index: 1;
  /* I tested this calc on mobile screens too to see if it wasn't too big */
  font-size: calc(1vh + 1vw);
`;

export const CartIcon = styled.button`
  border-radius: 100%;
  border-style: none;
  height: 50px;
  width: 50px;
  margin-top: -25px;
  background-color: #5ECE7B;
  /* position absolute because without it the cart button was redimensioning the entire card and making them bigger than the others */
  position: absolute;
`;

export const CartIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 25px;
  height: 0px;
`;

export const Photodiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
