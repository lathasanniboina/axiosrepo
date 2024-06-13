// axiosExample.js

const axios = require('axios');

async function fetchAllData() {
    try {
        console.log("hisdf")
        // Make PUT request to /update-request
        const updateResponse = await axios.put('http://localhost:3000/update-request', {
            email: 'example@a.com',
            password: 'askfh'
        });
        console.log('Update Response:', updateResponse.data);

        

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchAllData();
