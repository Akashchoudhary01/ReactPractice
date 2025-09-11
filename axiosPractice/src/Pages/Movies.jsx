import React, { useEffect, useState } from 'react'
import axios from 'axios'; 

export default function Movies() {
    const API = `https://pokeapi.co/api/v2/pokemon`;
    const [Pokemon , setPokemon] = useState([]);

    const getApiData =async ()=>{
         // First fetch list of pokemon
        const res = await axios.get(API);
        const PokemonResult = res.data.results;
           // Create an array of promises for details
        const detailedPokemon = PokemonResult.map((currPokemon) => axios.get(currPokemon.url));
            // Wait for all details
            const details = await axios.all(detailedPokemon);
            
      // Extract data
      const finalData = details.map((d) => d.data);
      console.log(finalData);
      setPokemon(finalData);
      
       
            
    
    }

    useEffect(()=>{
        getApiData()

    } , [])

  return (
    <div className='grid grid-col-5'>
        <ul>
            {Pokemon.map((currPokemon)=>{
                return(
                   <li key={currPokemon.id}>
                    {currPokemon.name}
                    <img src={currPokemon.sprites.other.dream_world.front_default} alt={currPokemon.name} />
                   </li>
                  
                )
            })}
        </ul>
        
    </div>
  )
}
