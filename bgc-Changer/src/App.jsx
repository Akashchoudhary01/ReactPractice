import { useState } from 'react'


function App() {
const [color , setColor] = useState("olive");

return(
  <div className='w-full h-screen duration-200'  style={{backgroundColor : color}}>
    <h1 className=' flex text-4xl justify-center items-center pt-60 '>{color}</h1>
    <div className='fixed flex justify-center item-center gap-3 text-white inset-x-0 px-5 flex-wrap bottom-12 p-5 opacity-70'> 
      <div className='flex flex-wrap justify-center gap-4  bg-white shadow-xl px-3 py-2 rounded-xl'>
        <button onClick={()=> setColor('red')} className='outline-none px-5 py-2 rounded-xl 'style={{backgroundColor : "red"}}>Red</button>
     
        <button onClick={()=> setColor('green')} 
        className='outline-none px-5 py-2 rounded-xl '
        style={{backgroundColor : "green"}}>Green</button>
        <button onClick={()=> setColor('Yellow')} className='outline-none px-5 py-2 text-black rounded-xl 'style={{backgroundColor : "yellow"}}>Yellow</button>
        <button onClick={()=> setColor('pink')} className='outline-none px-5 py-2 text-black rounded-xl 'style={{backgroundColor : "pink"}}>pink</button>
        <button  onClick={()=> setColor('Lavender')} className='outline-none px-5 py-2 text-black rounded-xl 'style={{backgroundColor : "lavender"}}>Lavender</button>
        <button onClick={()=> setColor('blue')} className='outline-none px-5 py-2 rounded-xl 'style={{backgroundColor : "blue"}}>Blue</button>
        <button onClick={()=> setColor('black')} className='outline-none px-5 py-2 rounded-xl 'style={{backgroundColor : "black"}}>black</button>
        <button onClick={()=> setColor('brown')} className='outline-none px-5 py-2 rounded-xl 'style={{backgroundColor : "brown"}}>brown</button>
        <button onClick={()=> setColor('orange')} className='outline-none px-5 py-2 text-black rounded-xl 'style={{backgroundColor : "orange"}}>orange</button>
        <button onClick={()=> setColor('navajowhite')} className='outline-none px-5 py-2 text-black rounded-xl 'style={{backgroundColor : "navajowhite"}}>navajowhite</button>
     
      </div>
    </div>
   
  </div>
)
}

export default App
