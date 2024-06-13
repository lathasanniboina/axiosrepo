const axios = require('axios');

async function fetchData() {
    try {
        // Create URLSearchParams object to store query parameters
        const params = new URLSearchParams();
        params.append('wordstart', 'l');
        params.append('wordend', 'com');

        // Make GET request with query parameters
        const readFilterResponse = await axios.get('http://localhost:3000/readfilter-request', {
            params: params
        });
        console.log('Read Filter Response:', readFilterResponse.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();
