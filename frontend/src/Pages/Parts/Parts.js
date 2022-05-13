import styled from "styled-components";
import { Link } from "react-router-dom";

const Parts = ({ parts, addSelection, handleShowForm }) => {
  return (
    <PartsPageWrapper>
      <PartTitle>All Componenets</PartTitle>
      <SearchResults>Items Found: {parts.length}</SearchResults>
      <Button onClick={handleShowForm}>Add Part</Button>
      {parts.map((part) => {
        const {
          _id,
          title,
          cost,
          quantity,
          description,
          category,
          manufacturer,
        } = part;
        return (
          <MappedParts key={_id}>
            <PartWrapper>
              <StyledLink to={`/part/${_id}`}>
                <Title>{title}</Title>
              </StyledLink>
              <Price>${cost}</Price>
              <Quantity>In Stock: {quantity}</Quantity>
              <Description>{description}</Description>
              <Category>Component: {category}</Category>
              <Manufacturer>Manufacturer: {manufacturer}</Manufacturer>
              <StyledLink to={`/`}>
                <Button onClick={() => addSelection(parts, category, _id)}>
                  Add Selection
                </Button>
              </StyledLink>
            </PartWrapper>
          </MappedParts>
        );
      })}
    </PartsPageWrapper>
  );
};

export default Parts;

const PartsPageWrapper = styled.div`
  min-height: 100vh;
  background-color: rgb(0, 0, 0, 0.88);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  color: rgb(255, 255, 255);
  font-family: Montserrat Bold;
  padding-left: 2rem;
  cursor: default;
`;

const PartTitle = styled.h1`
  margin: 2rem 0;
  font-size: 3rem;
`;

const SearchResults = styled.p``;

const MappedParts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 0.15rem solid rgba(255, 255, 255, 0.5);
  padding: 1.5rem;
`;
const Description = styled.p`
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  font-family: Montserrat Light;
`;

const PartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  
`;

const Title = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 0.5rem;
  &: hover {
    text-decoration: underline;
  }
`;

const Quantity = styled.p`
  padding-bottom: 0.5rem;
`;


const Manufacturer = styled.p``;

const Price = styled.p``;

const Category = styled.p``;

const Button = styled.button`
  margin-top: 0.5rem;
  width: 8rem;
  color: rgb(255, 255, 255);
  border: 0.15rem solid rgb(245, 65, 15);
  border-radius: 0.5rem;
  font-family: Montserrat Bold;
  background-color: transparent;
  padding: 0.5rem;
  transition: 1s;
  cursor: pointer;
  &: hover {
    
    font-weight: 900;
    color: rgb(255, 87, 51);
  }
`;
