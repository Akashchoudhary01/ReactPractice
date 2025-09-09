import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex flex-row p-4  mb-4 fixed top-0 w-[100%] justify-between  bg-gray-400">
      {/* Logo / Title */}
      <h1 className="font-extralight tracking-widest text-lg">Akashh</h1>

      {/* Nav Links */}
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
