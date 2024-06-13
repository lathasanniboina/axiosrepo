// axiosExample.js

const axios = require('axios');

async function fetchAllData() {
    try {
        // Make DELETE request to /clear-request
        const clearResponse = await axios.delete('http://localhost:3000/clear-request');
        console.log('Clear Response:', clearResponse.data);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchAllData();
