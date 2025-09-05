import React from 'react'

export default function Search({search , setSearch}) {
  return (
     <input 
      type="text" 
      value={search}   
      placeholder="Pokemon Name..." 
      className="w-full max-w-[600px] text-black mx-auto block text-md pl-3 py-3 border border-black rounded-xl outline-none" 
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
