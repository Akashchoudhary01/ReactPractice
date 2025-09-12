import React from 'react'

export default function PostCard({ title, body , id}) {
  return (
    <div className="w-80 border px-4 py-6 rounded-xl shadow-md bg-white 
                    hover:shadow-lg hover:scale-105 transform transition duration-200 ease-in-out">
                      <h2>{id}.</h2>

      <h1 className="text-3xl font-semibold mb-2 text-gray-900"><span className='font-bold text-black'>title :</span> {title}</h1>
      <hr className="my-2" />
      <p className="text-gray-600 text-2xl"><span className='font-bold text-black'>News : </span>{body}</p>
      <div className='p-3 gap-2' >
        <button className='bg-green-500 text-xl px-4 py-1 rounded-md mr-3 outline-1 '>Edit</button>
        <button className='bg-red-500 text-xl px-4 py-1 rounded-md outline-1 '>Delete</button>
      </div>
    </div>
  )
}
