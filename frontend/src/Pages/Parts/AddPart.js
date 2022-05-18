import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { formatUpperCase } from "../../Utils/Helpers/formatText";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const form = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const AddPart = ({
  categories,
  manufacturers,
  inputValue,
  showForm,
  handleChange,
  handlePartSubmit,
  closeForm,
}) => {
  const categoryOptions = categories.map((category) => category);
  const manufacturerOptions = manufacturers.map((manufacturer) => manufacturer);

  return (
    <AnimatePresence>
      {showForm.partForm && (
        <>
          <Modal
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeForm}
            transition={{ ease: "easeOut", duration: 0.5 }}
          />
          <FormWrapper
            variants={form}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <Form method="POST" action="/">
              <CloseIcon onClick={closeForm}>X</CloseIcon>
              <FormTitle>Create A Part</FormTitle>
              <TextArea
                name="title"
                type="text"
                value={inputValue.title}
                onChange={(e) => handleChange(e)}
                placeholder="Title"
              />
              <NumericDiv>
                <CostTitle>Cost</CostTitle>
                <TextBox>
                  <Currency>$</Currency>
                  <CostInput
                    name="cost"
                    type="number"
                    value={inputValue.cost}
                    onChange={(e) => handleChange(e)}
                  />
                </TextBox>
                <QuantityTitle>Quantity</QuantityTitle>
                <QuantityInput
                  name="quantity"
                  type="number"
                  value={inputValue.quantity}
                  onChange={(e) => handleChange(e)}
                />
              </NumericDiv>
              <TextArea
                name="description"
                type="text"
                value={inputValue.description}
                onChange={(e) => handleChange(e)}
                placeholder="Description"
              />
              <OptionDiv>
                <CategoryMenu
                  autoComplete="off"
                  list="categories"
                  name="category"
                  type="text"
                  value={inputValue.category}
                  onChange={(e) => handleChange(e)}
                  placeholder="Category"
                >
                  {categoryOptions.map((categories) => {
                    const { _id, title } = categories;
                    return <Option key={_id}>{formatUpperCase(title)}</Option>;
                  })}
                </CategoryMenu>
                <ManufacturerMenu
                  autoComplete="off"
                  list="manufacturers"
                  name="manufacturer"
                  type="text"
                  value={inputValue.manufacturer}
                  onChange={(e) => handleChange(e)}
                  placeholder="Manufacturer"
                >
                  {manufacturerOptions.map((manufacturer) => {
                    const { _id, title } = manufacturer;
                    return <Option key={_id}>{formatUpperCase(title)}</Option>;
                  })}
                </ManufacturerMenu>
              </OptionDiv>

              <Button type="button" onClick={handlePartSubmit}>
                Add Part
              </Button>
            </Form>
          </FormWrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddPart;



const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000dd;
  z-index: 9;
`;

const FormWrapper = styled(motion.div)`
  position: fixed;
  top: 5%;
  left: 33%;
  width: 500px;
  height: 700px;
  background: rgba(0, 0, 0, 1);
  border: 0.3rem solid rgb(255, 255, 255);
  z-index: 10;
  overflow-y: scroll;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const FormTitle = styled.h1`
  color: rgb(255, 255, 255);
  font-family: Montserrat Bold;
`;

const NumericDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const TextBox = styled.div`
  box-sizing: border-box;
  background-color: white;
  
`;

const Currency = styled.span`
  font-size: 1.5rem;
  display: inline;
`;

const CostTitle = styled.p`
  color: rgb(255, 255, 255);
  padding: 0.5rem;
`;

const QuantityTitle = styled.p`
  color: rgb(255, 255, 255);
  padding: 0.5rem;
`;

const CostInput = styled.input`

  width: 10rem;
  display: inline;
  border: none;
  height: 4rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  word-wrap: break-word;
  text-align: left;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;

const QuantityInput = styled.input`
  border: none;
  width: 15%;
  height: 4rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  word-wrap: break-word;
  text-align: center;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 75%;
  height: 4rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  word-wrap: break-word;
  &:focus {
    outline: none;
  }
`;

const OptionDiv = styled.div`
  display: flex;
  height: 3rem;
  gap: 0.5rem;
`;

const CategoryMenu = styled.select`
  width: 60%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1rem;
  word-wrap: break-word;
  &:focus {
    outline: none;
  }
`;
const ManufacturerMenu = styled.select`
  width: 60%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1rem;
  word-wrap: break-word;
  &:focus {
    outline: none;
  }
`;

const CategoryList = styled.datalist``;

const ManufacturerList = styled.datalist``;

const Option = styled.option``;

const Button = styled.button`
  width: 10rem;
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

const CloseIcon = styled.span`
  font-family: "Montserrat Bold";
  color: rgb(255, 255, 255);
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
  font-size: 1rem;
  transition: 1s;
`;
