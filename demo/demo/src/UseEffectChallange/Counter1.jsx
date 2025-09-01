import React, { useState , useEffect } from 'react'

export default function Counter1() {
  const [count , setCount] = useState(0);
  const [name , setName] = useState('');

  useEffect(()=>{
    console.log(name);
  } , [name])

  useEffect(()=>{
    document.title =  `Count ${count}`;
  } , [count])


  return (
    <div>
       <div className="w-full h-screen  bg-gradient-to-r  from-red-500 via-purple-600 to-black justify-center items-center flex">
      <div className="w-[60%] h-[70%] text-center rounded-xl bg-purple-200">
        <h1 className='text-3xl text-center mt-4'>UseEffect Challange Counter</h1>
        <h1 className='text-4xl mt-8 '>{count}</h1>

        <button 
        onClick={()=>setCount((prev) => prev+1)}
        className='text-2xl px-3 py-1 m-6 rounded-xl bg-blue-500 active:bg-blue-600'>
          Increment
          </button>
        <h2>{name}</h2>

        <input type="text" value={name} name='naam' className='outline-1 roundex-xl' onChange={(e)=>setName(e.target.value)} />

        
        
      </div>
    </div>
    </div>
  )
}
