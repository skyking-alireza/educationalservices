import axios from "axios";

const user_api = axios.create({
    baseURL: 'http://localhost:8000/main/',
    timeout: 2000,
});
export {user_api}