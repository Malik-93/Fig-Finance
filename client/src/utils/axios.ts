import axios from 'axios';
const BASE_URL = "http://localhost:8000"
// const BASE_URL = process.env.REACT_APP_BASE_URL
export default axios.create({
    baseURL: BASE_URL,
    timeout: 3000, // 3 seconds
    timeoutErrorMessage: "Request timeout"
});
