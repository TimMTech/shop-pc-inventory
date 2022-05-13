import axios from "axios";

const postManufacturers = (manufacturerInputs) => {
  axios
    .post("http://localhost:5000/api/manufacturer", manufacturerInputs)
    .then((res) => {
      console.log(res.data);
    });
};
export default postManufacturers;
