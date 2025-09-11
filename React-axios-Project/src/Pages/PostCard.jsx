import React from 'react'

export default function PostCard({ title, body }) {
  return (
    <li>
      <div className='w-96 flex  text-center border p-4 rounded-md shadow-md bg-white'>
        <h1 className='text-xl font-bold mb-2'>{title}</h1>
        <p className='text-gray-700'>{body}</p>
      </div>
    </li>
  )
}
