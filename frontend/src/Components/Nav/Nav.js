import styled from "styled-components";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState, useRef, useEffect } from "react";

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const ref = useRef(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  };

  const closeNav = () => {
    setHamburgerOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setHamburgerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <NavWrapper>
      <NavTitle>
        <StyledLink to={"/"}>PC INVENTORY</StyledLink>
      </NavTitle>
      <MenuWrapper ref={ref}>
        <NavList toggleMenu={hamburgerOpen}>
          <StyledLink to={"/categories"} onClick={closeNav}>
            Categories
          </StyledLink>
          <StyledLink to={"/manufacturers"} onClick={closeNav}>
            Manufacturers
          </StyledLink>
          <StyledLink to={"/parts"} onClick={closeNav}>
            Parts
          </StyledLink>
        </NavList>
        <HamburgerMenu onClick={toggleHamburger}>
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
  @media (max-width: 750px) {
    display: ${(props) => (props.toggleMenu ? "flex" : "none")};
    font-size: 1.5rem;
    border: 0.2rem solid rgb(255, 255, 255);
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    height: 40%;
    width: 15rem;
    position: fixed;
    right: 7%;
    top: 6%;
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
