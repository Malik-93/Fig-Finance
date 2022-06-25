import axios from 'axios';
const BASE_URL = process.env.NODE_ENV === 'development' ? `http://localhost:8080` : process.env.REACT_APP_BASE_URL;
export default axios.create({
    baseURL: BASE_URL,
    timeout: 1000 * 30, // 30 seconds
    timeoutErrorMessage: 'Request timeout',
});
