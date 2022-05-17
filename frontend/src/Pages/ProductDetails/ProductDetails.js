import { useParams } from "react-router-dom";
import styled from "styled-components"
import { Link } from "react-router-dom";

const ProductDetails = ({parts, addSelection}) => {
    const {_id} = useParams()

    const thisPart = parts.filter((part) => part._id === _id)

    return (
        <ProductWrapper>
            {thisPart.map((details) => {
                const {
                  _id,
                  title,
                  cost,
                  quantity,
                  description,
                  category,
                  manufacturer,
                } = details;
                return (
                  <MappedParts key={_id}>
                    <Quantity>In Stock: {quantity}</Quantity>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Price>${cost}</Price>
                    <Category>Component: {category}</Category>
                    <Manufacturer>Manufacturer: {manufacturer}</Manufacturer>
                    <StyledLink to={`/`}>
                      <Button
                        onClick={() => addSelection(thisPart, category, _id)}
                      >
                        Add Selection
                      </Button>
                    </StyledLink>
                  </MappedParts>
                );
            })}
        </ProductWrapper>
    )
}

export default ProductDetails;

const ProductWrapper = styled.div`
  min-height: 100vh;
  background-color: rgb(0, 0, 0, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: rgb(255, 255, 255);
  font-family: Montserrat Bold;
  padding-left: 2rem;
  cursor: default;
`;

const MappedParts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 50rem;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding-bottom: 2rem;
  text-align: center;
`;
const Description = styled.p`
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  font-family: Montserrat Light;
  width: 75%;
  text-align: center;

`;

const Quantity = styled.p`
  padding-bottom: 0.5rem;
`;

const Manufacturer = styled.p``;

const Price = styled.p`
    padding-top: 1.5rem;
`;

const Category = styled.p``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
`;

const Button = styled.button`
  margin-top: 0.5rem;
  width: 100%;
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