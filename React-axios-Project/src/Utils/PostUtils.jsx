import axios from 'axios';

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// To get Data
// eslint-disable-next-line react-refresh/only-export-components
export const getData = ()=>{
   return API.get("/Posts")
} 

//to Delete the exixting  Data
export const DeleteData = (id)=>{
    return API.delete(`/Posts/${id}`)
}

// to create a new  Post
export const CreateData = (post)=>{
    return API.post("/Posts" , post)
}

