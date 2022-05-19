import axios from "axios"

const getCategories = (callback) => {
    axios
      .get("https://shop-pc-inventory.herokuapp.com/api/category")
      .then((response) => {
        callback(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
}

export default getCategories

//"https://shop-pc-inventory.herokuapp.com/api/category"//
//"https://shop-pc-inventory.herokuapp.com/api/manufacturer"//
//"https://shop-pc-inventory.herokuapp.com/api/parts"//