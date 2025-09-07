import React from 'react'
import { DarkLightTheme, ThemeProvider } from './Context/ThemeContext'

export default function App() {
  return (
    <div className=' bg-green-400 h-lvh w-lvw'>
        <ThemeProvider>
          <DarkLightTheme/>
        </ThemeProvider>
      
    </div>
  )
}
