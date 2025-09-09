import { createContext, useContext, useState } from "react";
import {FaRegSun , FaRegMoon} from 'react-icons/fa'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
  const [theme , setTheme] = useState('dark');

  const HandelToggleButton=()=>{
    setTheme((prevTheme)=> (prevTheme == 'dark' ? 'light' : 'dark'));
  }

   return(
    <ThemeContext.Provider value={{theme , HandelToggleButton}}> {children}

    </ThemeContext.Provider>
   )

}

export const ThemeChange=()=>{

  const {theme , HandelToggleButton} = useContext(ThemeContext);
  return(
    <div className={`flex h-lvh w-full justify-center items-center text-3xl flex-col ${theme == 'dark' ? "bg-black" : "bg-white" }`}>
      <h1 className={`${theme == 'dark' ? "text-white" : "text-black"}`}>Theme Toggler</h1>
      <p className={`text-xl text-wrap ${theme == 'dark' ? "text-white" : "text-black"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quidem necessitatibus, iusto culpa libero optio!</p>

      <button className=" absolute top-4 right-3 items-center bg-pink-500  mt-3 p-2 rounded-full" onClick={HandelToggleButton}>{theme == 'dark' ? <FaRegSun/> : <FaRegMoon/>}</button>

    </div>
  )


}