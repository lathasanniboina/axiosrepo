// axiosExample.js

const axios = require('axios');

async function fetchAllData() {
    try {

        // Make DELETE request to /delete-request
        const deleteResponse = await axios.delete('http://localhost:3000/delete-request', {
            data: { email: 'example@example.com' }
        });
        console.log('Delete Response:', deleteResponse.data);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchAllData();
