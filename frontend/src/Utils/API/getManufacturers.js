import axios from "axios"

const getManufacturers = (callback) => {
    axios
      .get("https://shop-pc-inventory.herokuapp.com/api/manufacturer")
      .then((response) => {
        callback(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
}

export default getManufacturers