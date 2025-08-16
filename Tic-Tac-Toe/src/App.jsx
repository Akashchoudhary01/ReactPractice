import React from 'react'
// import Card from './Cards/Card'
import Grid from './Grid/Grid'

export default function App() {
  return (
    <div className=' h-screen w-full flex justify-center items-center text-3xl bg-gradient-to-r from-white to-yellow-600 '>
      <Grid numberOfCards={9}/>

      
    </div>
  )
}
