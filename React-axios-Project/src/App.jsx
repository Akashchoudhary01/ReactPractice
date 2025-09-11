import React, { useEffect, useState } from 'react'
import {getData} from './Utils/PostUtils'
import PostCard from './Pages/PostCard';

export default function App() {
  const [post , setPost] = useState([]);

  const fetchData =async()=>{
      try {
    const res = await getData();
    const finalData  = await res.data;
    setPost(finalData);
    console.log(finalData);
  }
  
 catch (error) {
  console.log(error);
 }
  
  
}
  useEffect(()=>{
    fetchData()

  } , [])

  return (
    <div className='bg-blue-600 h-lvh flex justify-center items-center text-4xl'>
      Hello  , React 
     {post.map((currElem) => {
  return (
    <ul className='flex flex-wrap'>

    <PostCard 
      key={currElem.id} 
      title={currElem.title} 
      body={currElem.body} 
      />
      </ul>
  );
})}
      
    </div>
  )
}
