/**
 * Pre-configured HTTP client for REST API endpoint testing.
 * Points to the automationexercise.com public API layer.
 */
const axios = require('axios');

const httpService = axios.create({
    baseURL: 'https://automationexercise.com/api',
    timeout: 15000,
    headers: {
        'Accept': 'application/json'
    }
});

module.exports = httpService;
