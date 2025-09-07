import React from 'react'
import ClassA from './Component/ClassA'
import { BioProvider } from './Context/Context'
import About from './About/About'

export default function App() {
  return (
    <div>
      <BioProvider>

      <ClassA/>
      <About/>
      </BioProvider>
      
      
    </div>
  )
}
