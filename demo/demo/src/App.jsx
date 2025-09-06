import React from 'react'
import { BioContext } from './useContextApi'
import Home from './useContextApi/Home'

export default function App() {
  return (
    <div>
      <BioContext>
        <Home/>
      </BioContext>
      
    </div>
  )
}
