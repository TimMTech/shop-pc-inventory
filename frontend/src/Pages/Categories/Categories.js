import styled from "styled-components";
import { Link } from "react-router-dom";

const Categories = ({ categories, handleShowForm}) => {
  return (
    <CategoryPageWrapper>
      <Button onClick={handleShowForm}>Add Category</Button>
      {categories.map((category) => {
        const { _id, title, description } = category;
        return (
          <MappedCategories key={_id}>
            <StyledLink to={`/categories/${title}`}>
              <Title>{title}</Title>
            </StyledLink>
            <Description>{description}</Description>
          </MappedCategories>
        );
      })}
    </CategoryPageWrapper>
  );
};

export default Categories;

const CategoryPageWrapper = styled.div`
  height: 100%;
  background-color: rgb(0, 0, 0, 0.88);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: default;
`;

const MappedCategories = styled.div`
  color: rgb(255, 255, 255);
  width: 75%;
  font-family: Montserrat Bold;
  border-bottom: 0.15rem solid rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
`;
const Title = styled.h1`
  cursor: pointer;
  &: hover {
    text-decoration: underline;
  }
`;

const Description = styled.p``;

const Button = styled.button`
  align-self: flex-start;
  margin-left: 2rem;
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
