import styled from "styled-components";

export const NavbarNav = styled.nav`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 4vh 7vw
`;

export const CategoriesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  > a {
    font-size: 1.3em;
    border-bottom-style: solid;
  }
`;
export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
export const AccountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
`;
