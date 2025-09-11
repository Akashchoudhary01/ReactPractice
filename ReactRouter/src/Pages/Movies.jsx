import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Movies() {
  const movieData = useLoaderData();
  console.log(movieData);
  
  return (
     <div className='text-center h-lvh pt-15 flex justify-center item-center text-4xl animate-pulse'>Loading</div>
  )
}
