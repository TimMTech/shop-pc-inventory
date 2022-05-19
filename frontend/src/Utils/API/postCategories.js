import axios from "axios";

const postCategories = (categoryInputs) => {
  axios
    .post(
      "https://shop-pc-inventory.herokuapp.com/api/category",
      categoryInputs
    )
    .then((res) => console.log(res.data));
};

export default postCategories;
