import React, { useEffect, useState } from 'react'
import { CreateData, UpdateData } from '../Utils/PostUtils'

export default function CreatePost({ data, setData, updateApiData, setUpdateApiData }) {
  const [addData, setAddData] = useState({
    title: "",
    body: ""
  })

  let isEmpty = Object.keys(updateApiData).length === 0;

  // When updateApiData changes, populate form fields
  useEffect(() => {
    if (!isEmpty) {
      setAddData({
        title: updateApiData.title || "",
        body: updateApiData.body || "",
      })
    }
  }, [updateApiData])

  // Input Change
  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  // AddPost
  const addPostData = async () => {
    const res = await CreateData(addData);
    if (res.status === 201) {
      setData([...data, res.data]);
      // Reset input fields
      setAddData({ title: "", body: "" });
    }
  }

  // UpdatePost
  const UpdatepostData = async () => {
    const res = await UpdateData(updateApiData.id, addData);
    if (res.status === 200) {
      // replace the updated post in data
      const updatedList = data.map((item) =>
        item.id === updateApiData.id ? res.data : item
      );
      setData(updatedList);

      // Reset
      setAddData({ title: "", body: "" });
      setUpdateApiData({}); // clear updateApiData
    }
  }

  // Handle Form Submit
  const handelFormSubmit = async (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      UpdatepostData();
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
          value={isEmpty ? "Add" : "Edit"}
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </div>
  )
}
