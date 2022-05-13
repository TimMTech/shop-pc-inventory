import axios from "axios"

const getParts = (callback) => {
    axios
        .get("http://localhost:5000/api/parts")
        .then((response) => {
            callback(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export default getParts