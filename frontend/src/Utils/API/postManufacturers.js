import axios from "axios";

const postManufacturers = (manufacturerInputs) => {
  axios
    .post(
      "https://shop-pc-inventory.herokuapp.com/api/manufacturer",
      manufacturerInputs
    )
    .then((res) => {
      console.log(res.data);
    });
};
export default postManufacturers;
