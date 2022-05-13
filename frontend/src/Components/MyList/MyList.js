import styled from "styled-components";
import { Link } from "react-router-dom";

const MyList = ({ thisSelection, totalPrice }) => {
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
            <TableRow>
              <TableData>
                <Part>Chassis</Part>
              </TableData>
              <TableData>
                {thisSelection.chassis && thisSelection.chassis.length === 0 && (
                  <Selection id="Chassis" to={"/categories/Chassis"}>
                    Choose Your Chassis
                  </Selection>
                )}
                {thisSelection.chassis &&
                  thisSelection.chassis.length > 0 &&
                  thisSelection.chassis.map((selection) => {
                    const { _id, title } = selection;
                    return <div key={_id}>{title}</div>;
                  })}
              </TableData>
              <TableData>
                <Price>
                  {thisSelection.chassis.map((selection) => {
                    const { _id, cost } = selection;
                    return <div key={_id}>${cost}</div>;
                  })}
                </Price>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Part>Processor</Part>
              </TableData>
              <TableData>
                {thisSelection.processor &&
                  thisSelection.processor.length === 0 && (
                    <Selection id="Processor" to={"/categories/Processor"}>
                      Choose Your Processor
                    </Selection>
                  )}
                {thisSelection.processor &&
                  thisSelection.processor.length > 0 &&
                  thisSelection.processor.map((selection) => {
                    const { _id, title } = selection;
                    return <div key={_id}>{title}</div>;
                  })}
              </TableData>
              <TableData>
                <Price>
                  {thisSelection.processor.map((selection) => {
                    const {_id, cost } = selection;
                    return <div key={_id}>${cost}</div>;
                  })}
                </Price>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Part>GPU</Part>
              </TableData>
              <TableData>
                {thisSelection.gpu && thisSelection.gpu.length === 0 && (
                  <Selection id="GPU" to={"/categories/GPU"}>
                    Choose Your GPU
                  </Selection>
                )}
                {thisSelection.gpu &&
                  thisSelection.gpu.length > 0 &&
                  thisSelection.gpu.map((selection) => {
                    const { _id, title } = selection;
                    return <div key={_id}>{title}</div>;
                  })}
              </TableData>
              <TableData>
                <Price>
                  {thisSelection.gpu.map((selection) => {
                    const { _id, cost } = selection;
                    return <div key={_id}>${cost}</div>;
                  })}
                </Price>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Part>Memory</Part>
              </TableData>
              <TableData>
                {thisSelection.memory && thisSelection.memory.length === 0 && (
                  <Selection id="Memory" to={"/categories/Memory"}>
                    Choose Your Memory
                  </Selection>
                )}
                {thisSelection.memory &&
                  thisSelection.memory.length > 0 &&
                  thisSelection.memory.map((selection) => {
                    const { _id, title } = selection;
                    return <div key={_id}>{title}</div>;
                  })}
              </TableData>
              <TableData>
                <Price>
                  {thisSelection.memory.map((selection) => {
                    const {_id,  cost } = selection;
                    return <div key={_id}>${cost}</div>;
                  })}
                </Price>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <Part>Mother Board</Part>
              </TableData>
              <TableData>
                {thisSelection.motherboard &&
                  thisSelection.motherboard.length === 0 && (
                    <Selection
                      id="Mother Board"
                      to={"/categories/Mother%20Board"}
                    >
                      Choose Your Mother Board
                    </Selection>
                  )}
                {thisSelection.motherboard &&
                  thisSelection.motherboard.length > 0 &&
                  thisSelection.motherboard.map((selection) => {
                    const { _id, title } = selection;
                    return <div key={_id}>{title}</div>;
                  })}
              </TableData>
              <TableData>
                <Price>
                  {thisSelection.motherboard.map((selection) => {
                    const {_id, cost } = selection;
                    return <div key={_id}>${cost}</div>;
                  })}
                </Price>
              </TableData>
            </TableRow>
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
  color: rgb(255,255,255);
  font-size: 2rem;
  text-align: center;
  padding-top: 3rem;
`;
