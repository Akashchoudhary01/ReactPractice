import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-row p-4 mb-4 fixed top-0 w-[100%] justify-between bg-purple-500">
      {/* Logo / Title */}
      <h1 className="font-normal text-white text-3xl tracking-[15px] ">Akashh</h1>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-xl">
        <li>
          <NavLink 
          className={({isActive})=> `text-md ${isActive ? 'text-white' : 'text-black'}`} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" 
          className={({isActive})=> `text-md ${isActive ? 'text-white' : 'text-black'}`}>About</NavLink>
        </li>
        <li>
          <NavLink to="/movies" 
          className={({isActive})=> `text-md ${isActive ? 'text-white' : 'text-black'}`}>Movies</NavLink>
        </li>
        <li>
          <NavLink to="/contact" 
          className={({isActive})=> `text-md ${isActive ? 'text-white' : 'text-black'}`}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}