import styled from "styled-components";

const AddManufacturer = ({
  inputValue,
  showForm,
  handleChange,
  handleManufacturerSubmit,
}) => {
  return (
    <div>
      {showForm.manufacturerForm && (
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

          <button type="button" onClick={handleManufacturerSubmit}>
            Add Manufacturer
          </button>
        </form>
      )}
    </div>
  );
};

export default AddManufacturer;
