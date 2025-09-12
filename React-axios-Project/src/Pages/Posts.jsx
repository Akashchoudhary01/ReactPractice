import React, { useEffect, useState } from "react";
import { getData, DeleteData } from "../Utils/PostUtils";
import PostCard from "./PostCard";
import CreatePost from "../Component/CreatePost";

export default function Posts() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await getData();
      const finalData = res.data;
      setData(finalData);
      console.log(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  //   functionToDeleteData

    const handelPostDelete = async (id) => {
    try {
      const res = await DeleteData(id);
      console.log(res);
      if (res.status === 200) {
        const updatedData = data.filter((currData) => currData.id !== id);
        setData(updatedData); // update UI after delete
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-l from-zinc-800  via-zinc-300 to-zinc-700 flex flex-col items-center">
      <h1 className="text-4xl tracking-widest text-black p-3">JSON DATA</h1>

{/* Create Post */}
<CreatePost data={data} setData={setData} />

      <hr className="w-3/4 border-white my-2 border-t-2 p-4" />

      <ul className="grid grid-cols-3 mx-10 gap-4 ">
        {data.map((currPost) => {
          return (
            <li key={currPost.id}>
              {" "}
              <PostCard
                title={currPost.title}
                body={currPost.body}
                id={currPost.id}
               onDelete={handelPostDelete}
              />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
