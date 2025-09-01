import React, { useEffect, useState } from 'react'

export default function CleanUp() {
    const [count , setCount] = useState(0);
    useEffect(()=>{
       const timer = setInterval(()=>{
            setCount((prev)=> prev+1)

        } , 2000)
        return()=> clearInterval(timer);

    } , [])
  return (
    <div className='h-screen w-[100%] flex flex-col gap-8 justify-center items-center bg-white'>
       <h1 className='text-3xl text-black tracking-wide'>  Follower Count
        </h1>

        <h1 className='text-4xl text-red-500 '>{count}</h1>

      
    </div>
  )
}
