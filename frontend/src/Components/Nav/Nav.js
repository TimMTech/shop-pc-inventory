import styled from "styled-components";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <NavWrapper>
      <NavTitle>
        <StyledLink to={"/"}>PC INVENTORY</StyledLink>
      </NavTitle>
      <MenuWrapper>
        <NavList toggleMenu={hamburgerOpen}>
          <StyledLink to={"/categories"}>Categories</StyledLink>
          <StyledLink to={"/manufacturers"}>Manufacturers</StyledLink>
          <StyledLink to={"/parts"}>Parts</StyledLink>
        </NavList>
        <HamburgerMenu onClick={toggleHamburger}>
          {console.log(hamburgerOpen)}
          <Hamburger />
        </HamburgerMenu>
      </MenuWrapper>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.9);
  font-family: Montserrat Bold;
`;

const NavTitle = styled.h1``;

const MenuWrapper = styled.div`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  float: right;
  overflow: hidden;
  gap: 1rem;
  @media (max-width: 750px) {
    display: ${(props) => (props.toggleMenu ? "flex" : "none")};
    font-size: 1.5rem;
    gap: 3rem;
    border: 0.2rem solid rgb(255,255,255);
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.9);
    height: 40%;
    width: 15rem;
    margin-top:50px;
    position: fixed;
    right: 6%;
    top: 0;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: fixed;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: rgb(255, 255, 255);
  text-decoration-color: rgba(255, 255, 255, 0);
  transition: text-decoration-color 1s;
  &: hover {
    text-decoration: underline 0.1em rgba(255, 255, 255, 1);
  }
`;
