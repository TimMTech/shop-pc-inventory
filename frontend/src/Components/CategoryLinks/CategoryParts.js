import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryParts = ({ parts, addSelection }) => {
  const { title } = useParams();

  const findParts = parts.filter((part) => part.category === title);

  return (
    <CategoryWrapper>
      <CategoryTitle>{title}(s)</CategoryTitle>
      <SearchResults>Items Found: {findParts.length}</SearchResults>
      {findParts.map((parts) => {
        const { _id, title, manufacturer, cost, description, category } = parts;
        return (
          <MappedParts key={_id}>
            <PartWrapper>
              <StyledLink to={`/part/${_id}`}>
                <Title>{title}</Title>
              </StyledLink>
              <Description>{description}</Description>
              <Manufacturer>Manufacturer: {manufacturer}</Manufacturer>
              <Price>${cost}</Price>
              <StyledLink to={`/`}>
                <Button onClick={() => addSelection(findParts, category, _id)}>
                  Add Selection
                </Button>
              </StyledLink>
            </PartWrapper>
          </MappedParts>
        );
      })}
    </CategoryWrapper>
  );
};

export default CategoryParts;

const CategoryWrapper = styled.div`
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

const CategoryTitle = styled.h1`
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

const Manufacturer = styled.p``;

const Price = styled.p``;

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
