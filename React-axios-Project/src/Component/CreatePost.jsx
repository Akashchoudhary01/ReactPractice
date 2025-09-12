import React, { useState } from 'react'
import { CreateData } from '../Utils/PostUtils'

export default function CreatePost({ data, setData }) {
  const [addData, setAddData] = useState({
    title: "",
    body: ""
  })

  // Input Change
  const handelInputChange = (e) => {
    const { name, value } = e.target

    setAddData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handelFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await CreateData(addData)
      if (res.status === 201) {
        setData([...data, res.data])
        // Reset input fields
        setAddData({ title: "", body: "" })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mb-5 px-20 py-5 rounded-md bg-zinc-500'>
      <form onSubmit={handelFormSubmit}>
        <input
          type="text"
          placeholder='Add Title'
          className='outline-1 mx-2 bg-zinc-300 px-6 py-2'
          name='title'
          value={addData.title}
          onChange={handelInputChange}
        />
        <input
          type="text"
          placeholder='Add Post'
          className='outline-1 bg-zinc-300 px-6 py-2'
          name='body'
          value={addData.body}
          onChange={handelInputChange}
        />
        <button
          type="submit"
          className='px-5 py-2 mx-2 bg-green-400 outline-1 active:bg-green-700'
        >
          Add
        </button>
      </form>
    </div>
  )
}
