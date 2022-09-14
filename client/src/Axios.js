const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: "https://my-confession-app.herokuapp.com/",
})

module.exports = axiosInstance;