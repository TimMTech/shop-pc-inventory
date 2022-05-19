import axios from "axios"

const getParts = (callback) => {
    axios
      .get("https://shop-pc-inventory.herokuapp.com/api/parts")
      .then((response) => {
        callback(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
}

export default getParts