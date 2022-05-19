import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const form = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const AddCategory = ({
  showForm,
  inputValue,
  handleChange,
  handleCategorySubmit,
  closeForm,
}) => {
  return (
    <AnimatePresence>
      {showForm.categoryForm && (
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
              <FormTitle>Create A Category</FormTitle>
              <TextArea
                name="title"
                type="text"
                value={inputValue.title}
                onChange={(e) => handleChange(e)}
                placeholder="Title"
              />
              <TextArea
                name="description"
                type="text"
                value={inputValue.description}
                onChange={(e) => handleChange(e)}
                placeholder="Description"
              />

              <Button type="button" onClick={handleCategorySubmit}>
                Add Catergory
              </Button>
            </Form>
          </FormWrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddCategory;

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
  top: 15%;
  left: 35%;
  width: 400px;
  height: 600px;
  background: rgba(0, 0, 0, 1);
  border: 0.3rem solid rgb(255, 255, 255);
  z-index: 10;
  overflow-y: scroll;
  @media (max-width: 750px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
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
  @media (max-width: 750px) {
    text-align: center;
  };
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

const Button = styled.button`
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
