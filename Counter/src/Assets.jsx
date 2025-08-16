import React from 'react'

export default function Assets({src , width , height}) {
  return (
    <div>
        <img src={src} width={width} height={height} alt="" />
      
    </div>
  )
}
