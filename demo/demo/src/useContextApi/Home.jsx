import React, { useContext } from 'react';
import { BioContext } from '.';


export default function Home() {
  const { name , age} = useContext(BioContext);


  return (
    <div>
      Hello my name is {name} and my age is {age}

    </div>
  );
}
