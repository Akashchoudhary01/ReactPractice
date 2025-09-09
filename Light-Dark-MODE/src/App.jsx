import React from 'react'
import { ThemeChange, ThemeProvider } from './Context/ThemeContext'


export default function App() {
  return (
    <div className=' '>
      <ThemeProvider>
        <ThemeChange/>
      </ThemeProvider>
      
    </div>
  )
}
