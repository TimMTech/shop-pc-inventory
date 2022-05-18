import styled from "styled-components";
import { Link } from "react-router-dom";
import CategoryItems from "./CategoryItems"

const MyList = ({ categories, totalPrice, thisSelection, removeSelection }) => {
  return (
    <>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaders>
                <ListHeader>Part</ListHeader>
              </TableHeaders>
              <TableHeaders>
                <ListHeader>Selection</ListHeader>
              </TableHeaders>
              <TableHeaders>
                <ListHeader>Price</ListHeader>
              </TableHeaders>
            </TableRow>
          </TableHead>
          <TableBody>
            <CategoryItems categories={categories} thisSelection={thisSelection} removeSelection={removeSelection} />
         </TableBody>
        </Table>
      </TableWrapper>
      <SubTotal>Subtotal: ${totalPrice}</SubTotal>
    </>
  );
};

export default MyList;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

const Table = styled.table`
  border-spacing: 0;
  table-layout: fixed;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr`
  color: rgb(255, 255, 255);
`;

const TableHeaders = styled.th`
  text-align: left;
  border-bottom: 0.15rem solid rgba(0, 0, 0, 0.3);
  padding: 1.2rem;
  font-size: 1.3rem;
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
  padding: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ListHeader = styled.h1``;

const Part = styled.h1`
  font-family: Montserrat Light;
`;

const Selection = styled(Link)`
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

const Price = styled.h1`
  font-family: Montserrat Light;
`;

const SubTotal = styled.p`
  color: rgb(255, 255, 255);
  font-size: 2rem;
  text-align: center;
  padding-top: 3rem;
`;
