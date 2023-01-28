import axios from "axios";
const course_api = axios.create({
    baseURL: 'http://localhost:8000/course/',
    timeout: 2000,
});
export {course_api}