import React from 'react';
import { NavLink } from 'react-router-dom';
import errorImage from '../assets/CodePen-404-Page.gif'; // Correct import syntax
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

    const navigate = useNavigate();
    const handelOnClick = ()=>{
        navigate(-1);
    }
  return (
    <div className='w-full h-lvh justify-center items-center flex flex-col'>
      <img className='w-4xl' src={errorImage} alt="404 Not Found" />
      {/* <h1>Page Not Found</h1> */}
      <button onClick={handelOnClick}
       className='px-2 py-1 outline-1'> go back</button>
   
    </div>
  );
}