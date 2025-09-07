import React from 'react'
import { useContext } from 'react'
import {BioContext} from '../Context/Context'
export default function ClassC() {

    const {name ,age} = useContext(BioContext);
  return (
    <div>
        <h1>My name is {name} and my age is {age}</h1>
      
    </div>
  )
}
