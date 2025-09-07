import React from 'react'
import {useBioContext } from '../Context/Context'

export default function About() {
    const {name , age} = useBioContext();
  return (
    <div>
        <h1>Hello My Friend name is {name } and he is {age} year Old ...</h1>
      
    </div>
  )
}
