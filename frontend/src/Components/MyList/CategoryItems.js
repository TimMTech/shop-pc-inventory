import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatUpperCase } from "../../Utils/Helpers/formatText";

const CategoryItems = ({ categories, thisSelection }) => {
  const findSelection = Object.values(thisSelection);
  const flatArray = findSelection.flat(1);

  return (
    <>
      {categories.map((category) => {
        return (
          <TableRow key={category._id}>
            <TableData>
              <Part>{formatUpperCase(category.title)}</Part>
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
                  id={formatUpperCase(category.title)}
                  to={`/categories/${formatUpperCase(category.title)}`}
                >
                  Choose Your {formatUpperCase(category.title)}
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
  cursor: pointer;
  color: rgb(255, 255, 255);
  text-decoration-color: rgba(255, 255, 255, 0);
  transition: text-decoration-color 1s;
  &: hover {
    text-decoration: underline 0.1em rgba(255, 255, 255, 1);
`;

const Price = styled.h1`
  font-family: Montserrat Light;
`;
