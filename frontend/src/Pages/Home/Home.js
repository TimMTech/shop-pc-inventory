import styled from "styled-components";
import MyList from "../../Components/MyList/MyList";
import { CSVLink } from "react-csv";

const Home = ({ categories, totalPrice, csv, handleCsv, thisSelection }) => {
  return (
    <HomeWrapper>
      <CSVWrapper>
        <HomeTitle>My List</HomeTitle>
        <CSVLink data={csv}  onClick={handleCsv}>
          <CSVButton>Export to CSV</CSVButton>
        </CSVLink>
      </CSVWrapper>
      <ListSection>
        <MyList categories={categories} totalPrice={totalPrice} thisSelection={thisSelection}  />
      </ListSection>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  min-height: 100vh;
  font-family: Montserrat ExtraBold;
  background-color: rgb(0, 0, 0, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CSVWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  color: rgb(255, 255, 255);
`;

const HomeTitle = styled.h1``;

const CSVButton = styled.button`
  color: rgb(255, 255, 255);
  border: 0.15rem solid rgb(245, 65, 15);
  font-family: Montserrat Bold;
  background-color: transparent;
  padding: 0.4rem;
  border-radius: 0.8rem;
  transition: 1s;
  cursor: pointer;
  &: hover {
    font-weight: 900;
    color: rgb(255, 87, 51);
  }
`;

const ListSection = styled.section`
  padding-top: 2rem;
  width: 75%;
`;
