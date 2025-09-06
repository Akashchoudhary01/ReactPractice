import React, { useRef } from 'react'

export default function UseRefhook() {
  const userName = useRef(null)
  const passWord = useRef(null)
    const handelFormSubmit = (e)=>{
        e.preventDefault();
        console.log(userName.current.value , passWord.current.value);
    }
  return (
    <div className=' flex gap-4 h-[100vh] w-[100vw] justify-center items-center bg-gray-500'>
        <form onSubmit={handelFormSubmit}>
            <label htmlFor="">UserName</label>
            <input type="text"
            ref={userName}
            placeholder='userName'
            className='px-6 py-3 mb-3 outline-white outline-1 text-white '
             />
             <br />
            <label htmlFor="">Password</label>
            <input type="password"
            ref={passWord}
            placeholder='Password'
            className='px-6 py-3 mb-3  outline-1 outline-white text-white '
             />
            <br />
             <button className='px-2 py-1 roundex-xl text-2xl  bg-blue-600'>Submit</button>
        </form>

      
    </div>
  )
}



