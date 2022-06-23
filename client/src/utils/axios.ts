import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log('BASE_URL', BASE_URL);

export default axios.create({
    baseURL: BASE_URL,
    timeout: 1000 * 30, // 30 seconds
    timeoutErrorMessage: 'Request timeout',
});
