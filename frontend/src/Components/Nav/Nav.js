import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavWrapper>
      <NavTitle>
        <StyledLink to={"/"}>PC INVENTORY</StyledLink>
      </NavTitle>
      <MenuWrapper>
        <StyledLink to={"/categories"}>Categories</StyledLink>
        <StyledLink to={"/manufacturers"}>Manufacturers</StyledLink>
        <StyledLink to={"/parts"}>Parts</StyledLink>
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
  gap: 1.2rem;
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
