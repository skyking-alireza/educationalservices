import axios from "axios";
const blog_api = axios.create({
    baseURL : 'http://localhost:8000/blog/',
    timeout : 2000
});
export {blog_api}