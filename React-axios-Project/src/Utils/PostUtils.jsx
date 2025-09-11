import axios from 'axios';

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getData = ()=>{
   return API.get("/Posts")
}