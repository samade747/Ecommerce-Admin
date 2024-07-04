import axios from "axios";

const baseURL = "http://localhost:5000/api/";
const Token = `JSON.parse(localStorage.getItem('persist:root'))?.user?.currentUser?.accessToken`





export const publicRequest = axios.create({ 
    baseURL: baseURL 
});

export const userRequest = axios.create({
    baseURL: baseURL,
    headers: { token: `Bearer ${localStorage.getItem("accessToken")}` },
})