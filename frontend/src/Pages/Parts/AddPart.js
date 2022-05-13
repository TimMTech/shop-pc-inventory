const AddPart = ({
  inputValue,
  showForm,
  handleChange,
  handlePartSubmit,
}) => {
  return (
    <div>
      {showForm.partForm && (
        <form method="POST" action="/">
          <input
            name="title"
            type="text"
            value={inputValue.title}
            onChange={(e) => handleChange(e)}
            placeholder="Title"
          />
          <input
            name="cost"
            type="number"
            value={inputValue.cost}
            onChange={(e) => handleChange(e)}
            placeholder="Cost"
          />
          <input
            name="quantity"
            type="number"
            value={inputValue.quantity}
            onChange={(e) => handleChange(e)}
            placeholder="Quantity"
          />
          <input
            name="description"
            type="text"
            value={inputValue.description}
            onChange={(e) => handleChange(e)}
            placeholder="Description"
          />
          <input
            name="category"
            type="text"
            value={inputValue.category}
            onChange={(e) => handleChange(e)}
            placeholder="Category"
          />
          <input
            name="manufacturer"
            type="text"
            value={inputValue.manufacturer}
            onChange={(e) => handleChange(e)}
            placeholder="Manufacturer"
          />

          <button type="button" onClick={handlePartSubmit}>
            Add Part
          </button>
        </form>
      )}
    </div>
  );
};

export default AddPart;
