import axios from 'axios';

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// To get Data
export const getData = ()=>{
   return API.get("/Posts")
} 

//to Delete Data
export const DeleteData = (id)=>{
    return API.delete(`/Posts/${id}`)
}

// to create Post
export const CreateData = (post)=>{
    return API.post("/Posts" , post)
}

