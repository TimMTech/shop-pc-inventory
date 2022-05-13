import axios from "axios"

const getCategories = (callback) => {
    axios
        .get("http://localhost:5000/api/category")
        .then((response) => {
            callback(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export default getCategories