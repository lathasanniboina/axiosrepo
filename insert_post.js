// axiosExample.js

const axios = require('axios');

async function fetchAllData() {
    try {
        

        // Make POST request to /insert-request
        const insertResponse = await axios.post('http://localhost:3000/insert-request', {
            email: 'example@a.com',
            password: 'password1234'
        });
        console.log('Insert Response:', insertResponse.data);

        

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchAllData();
