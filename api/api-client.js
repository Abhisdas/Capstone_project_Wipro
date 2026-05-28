const axios = require('axios');

const client = axios.create({
    baseURL: 'https://automationexercise.com/api',
    timeout: 12000
});

module.exports = client;
