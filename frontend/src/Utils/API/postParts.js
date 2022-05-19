import axios from "axios"

const postParts = (partInputs) => {
    axios
      .post("https://shop-pc-inventory.herokuapp.com/api/parts", partInputs)
      .then((res) => console.log(res.data));
}

export default postParts;