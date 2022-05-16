// React Library Imports //
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Utility Imports //
import getCategories from "./Utils/API/getCategories";
import getManufacturers from "./Utils/API/getManufacturers";
import getParts from "./Utils/API/getParts";
import postCategories from "./Utils/API/postCategories";
import postManufacturers from "./Utils/API/postManufacturers";
import postParts from "./Utils/API/postParts";
import { pageReload } from "./Utils/Helpers/pageReload";

// Component Imports //
import CategoryParts from "./Components/CategoryLinks/CategoryParts";
import ManufacturerParts from "./Components/ManufacturerLinks/ManufacturerParts";
import Nav from "./Components/Nav/Nav";

// Page Imports //
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Parts from "./Pages/Parts/Parts";
import Manufacturers from "./Pages/Manufacturers/Manufacturers";
import AddCategory from "./Pages/Categories/AddCategory";
import AddManufacturer from "./Pages/Manufacturers/AddManufacturer";
import AddPart from "./Pages/Parts/AddPart";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

const App = () => {
  const [csv, setCsv] = useState([]);

  const [categories, setCategories] = useState([]);

  const [manufacturers, setManufacturers] = useState([]);
  const [parts, setParts] = useState([]);
  const [total, setTotal] = useState(0);

  const [selection, setSelection] = useState({
    chassis: [],
    processor: [],
    gpu: [],
    memory: [],
    motherboard: [],
  });

  const [showForm, setShowForm] = useState({
    categoryForm: false,
    manufacturerForm: false,
    partForm: false,
  });
  const [categoryInputs, setCategoryInputs] = useState({
    title: "",
    description: "",
  });

  const [manufacturerInputs, setManufacturerInputs] = useState({
    title: "",
    description: "",
  });

  const [partInputs, setPartInputs] = useState({
    title: "",
    cost: 0,
    quantity: 0,
    description: "",
    category: "",
    manufacturer: "",
  });

  const categoryForm = () => {
    setShowForm({
      ...showForm,
      categoryForm: true,
    });
  };

  const closeCategoryForm = () => {
    setShowForm({
      ...showForm,
      categoryForm: false,
    });
  };

  const manufacturerForm = () => {
    setShowForm({
      ...showForm,
      manufacturerForm: true,
    });
  };

  const closeManufacturerForm = () => {
    setShowForm({
      ...showForm,
      manufacturerForm: false,
    });
  };

  const partForm = () => {
    setShowForm({
      ...showForm,
      partForm: true,
    });
  };

  const closePartForm = () => {
    setShowForm({
      ...showForm,
      partForm: false
    })
  }

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategoryInputs({
      ...categoryInputs,
      [name]: value,
    });
  };

  const handleManufacturerChange = (e) => {
    const { name, value } = e.target;
    setManufacturerInputs({
      ...manufacturerInputs,
      [name]: value,
    });
  };

  const handlePartChange = (e) => {
    const { name, value } = e.target;
    setPartInputs({
      ...partInputs,
      [name]: value,
    });
  };

  const handleCategorySubmit = () => {
    postCategories(categoryInputs);
    setShowForm({
      ...showForm,
      categoryForm: false,
    });
    pageReload();
  };

  const handleManufacturerSubmit = () => {
    postManufacturers(manufacturerInputs);
    setShowForm({
      ...showForm,
      manufacturerForm: false,
    });
    pageReload();
  };

  const handlePartSubmit = () => {
    postParts(partInputs);
    setShowForm({
      ...showForm,
      partForm: false,
    });
    pageReload();
  };

  const handleCsv = () => {
    setCsv(() => {
      const subTotal = [{ Subtotal: `$${total}` }];
      const selectionArray = [selection];
      const combinedArrays = Object.values(selectionArray[0]).concat(subTotal);
      return combinedArrays.flat(1);
    });
  };

  const handleAddSelection = (findParts, category, _id) => {
    const trimmedCategory = category.toLowerCase().replace(/\s+/g, "");
    const matchKey = Object.keys(selection);
    const filteredPart = findParts.filter((part) => part._id === _id);
    matchKey.forEach((key) => {
      if (key === trimmedCategory) {
        setSelection((prevState) => ({
          ...prevState,
          [key]: filteredPart,
        }));
      }
    });
  };

  console.log(parts)
  const calculateTotal = () => {
    let totalPrice = 0;
    const combinedArrayValues = Object.values(selection);
    combinedArrayValues.forEach((array) => {
      array.forEach((obj) => {
        const total = obj.cost * 1;
        totalPrice += total;
      });
      setTotal(totalPrice.toFixed(2));
    });
  };

  useEffect(() => {
    getCategories((categories) => {
      setCategories(categories);
    });
    getManufacturers((manufacturers) => {
      setManufacturers(manufacturers);
    });
    getParts((parts) => {
      setParts(parts);
    });
    calculateTotal();
  }, [selection]);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              thisSelection={selection}
              categories={categories}
              totalPrice={total}
              csv={csv}
              handleCsv={handleCsv}
            />
          }
        />
        <Route
          path="/categories"
          element={
            <Categories categories={categories} handleShowForm={categoryForm} />
          }
        />
        <Route
          path="/manufacturers"
          element={
            <Manufacturers
              manufacturers={manufacturers}
              handleShowForm={manufacturerForm}
            />
          }
        />
        <Route
          path="/parts"
          element={
            <Parts
              parts={parts}
              addSelection={handleAddSelection}
              handleShowForm={partForm}
            />
          }
        />
        <Route
          path="/categories/:title"
          element={
            <CategoryParts parts={parts} addSelection={handleAddSelection} />
          }
        />
        <Route
          path="/manufacturers/:title"
          element={
            <ManufacturerParts
              parts={parts}
              addSelection={handleAddSelection}
            />
          }
        />
        <Route
          path="/part/:_id"
          element={
            <ProductDetails parts={parts} addSelection={handleAddSelection} />
          }
        />
      </Routes>
      <AddCategory
        closeForm={closeCategoryForm}
        showForm={showForm}
        handleChange={handleCategoryChange}
        inputValue={categoryInputs}
        handleCategorySubmit={handleCategorySubmit}
      />
      <AddManufacturer
        closeForm={closeManufacturerForm}
        showForm={showForm}
        handleChange={handleManufacturerChange}
        inputValue={manufacturerInputs}
        handleManufacturerSubmit={handleManufacturerSubmit}
      />
      <AddPart
      categories={categories}
      manufacturers={manufacturers}
      closeForm={closePartForm}
        showForm={showForm}
        handleChange={handlePartChange}
        inputValue={partInputs}
        handlePartSubmit={handlePartSubmit}
      />
    </>
  );
};

export default App;
