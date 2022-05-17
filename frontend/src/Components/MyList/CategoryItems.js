import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryItems = ({ categories, thisSelection }) => {
  const findSelection = Object.values(thisSelection);
  const flatArray = findSelection.flat(1);
  
  return (
    <>
      {categories.map((category) => {
        return (
          <TableRow key={category._id}>
            <TableData>
              <Part>
                {category.title.charAt(0).toUpperCase() +
                  category.title.slice(1)}
              </Part>
            </TableData>
            <TableData>
              {flatArray.find((part) => part.category === category.title) ? (
                <SelectedPart>
                  {flatArray
                    .filter((part) => part.category === category.title)
                    .map((part) => {
                      const { _id, title } = part;
                      return (
                        <SelectedTitle key={_id} to={`/part/${_id}`}>
                          {title}
                        </SelectedTitle>
                      );
                    })}
                </SelectedPart>
              ) : (
                <SelectionButton
                  id={
                    category.title.charAt(0).toUpperCase() +
                    category.title.slice(1)
                  }
                  to={`/categories/${
                    category.title.charAt(0).toUpperCase() +
                    category.title.slice(1)
                  }`}
                >
                  Choose Your {category.title}
                </SelectionButton>
              )}
            </TableData>
            <TableData>
              {flatArray
                .filter((part) => part.category === category.title)
                .map((part) => {
                  const { _id, cost } = part;
                  return <Price key={_id}>${cost}</Price>;
                })}
            </TableData>
          </TableRow>
        );
      })}
    </>
  );
};

export default CategoryItems;

const TableRow = styled.tr`
  color: rgb(255, 255, 255);
`;

const TableData = styled.td`
  padding: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Part = styled.h1`
  font-family: Montserrat Light;
`;

const SelectionButton = styled(Link)`
  font-family: Montserrat Bold;
  padding: 0.3rem;
  border: 0.15rem solid rgb(245, 65, 15);
  background-color: transparent;
  border-radius: 0.8rem;
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: 1s;
  cursor: pointer;
  &: hover {
    color: rgb(255, 87, 51);
  }
`;

const SelectedPart = styled.div``;

const SelectedTitle = styled(Link)`
  text-decoration: none;
  color: rgb(255,255,255);
`;

const Price = styled.h1`
  font-family: Montserrat Light;
`;
