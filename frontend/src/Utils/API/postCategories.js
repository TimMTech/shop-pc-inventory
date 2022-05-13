import axios from "axios";

const postCategories = (categoryInputs) => {
  axios
    .post("http://localhost:5000/api/category", categoryInputs)
    .then((res) => console.log(res.data));
};

export default postCategories;
