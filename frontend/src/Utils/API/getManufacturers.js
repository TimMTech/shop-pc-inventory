import axios from "axios"

const getManufacturers = (callback) => {
    axios
        .get("http://localhost:5000/api/manufacturer")
        .then((response) => {
            callback(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export default getManufacturers