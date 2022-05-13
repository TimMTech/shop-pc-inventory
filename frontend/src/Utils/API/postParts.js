import axios from "axios"

const postParts = (partInputs) => {
    axios
        .post("http://localhost:5000/api/parts", partInputs)
        .then((res) => console.log(res.data))
}

export default postParts;