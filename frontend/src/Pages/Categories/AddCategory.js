import styled from "styled-components";

const AddCategory = ({
  showForm,
  inputValue,
  handleChange,
  handleCategorySubmit,
}) => {
  return (
    <div>
      {showForm.categoryForm && (
        <form method="POST" action="/">
          <input
            name="title"
            type="text"
            value={inputValue.title}
            onChange={(e) => handleChange(e)}
            placeholder="Title"
          />
          <input
            name="description"
            type="text"
            value={inputValue.description}
            onChange={(e) => handleChange(e)}
            placeholder="Description"
          />

          <button type="button" onClick={handleCategorySubmit}>
            Add Catergory
          </button>
        </form>
      )}
    </div>
  );
};

export default AddCategory;
