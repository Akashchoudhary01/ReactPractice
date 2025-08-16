import React, { useState } from 'react'
import Card from '../Cards/Card'

export default function Grid({numberOfCards}) {
    const[board ] = useState(Array(numberOfCards).fill(""))
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-2
                 p-2 rounded-lg'>
        {board.map((el , idx)=> <Card key={idx}/>)}
      
    </div>
  )
}
