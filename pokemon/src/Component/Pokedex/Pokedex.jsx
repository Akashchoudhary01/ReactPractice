import React, { useState, useEffect } from "react";
// import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search , setSearch] = useState('');
  const [error, setError] = useState(false);

  const API = `https://pokeapi.co/api/v2/pokemon?limit=100`; //to generate first 50 pokemon
// //to generate random 50 pokemon every time
// const totalPokemons = 1302; 
// const limit = 50;  
// const randomOffset = Math.floor(Math.random() * (totalPokemons - limit));



// const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${randomOffset}`;

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemon = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        return await res.json();
      });

      const allPokemonDetails = await Promise.all(detailedPokemon);
      setPokemon(allPokemonDetails);
      console.log(allPokemonDetails);
      
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //search

  const searchData = pokemon.filter((currElem) =>
  search === "" ? true : currElem.name.toLowerCase().includes(search.toLowerCase())
);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <h1 className="text-4xl font-bold text-black animate-pulse">
          Loading ...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300">
        <h1 className="text-4xl font-bold text-black animate-pulse">
          Error: {error}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-5xl font-[Poppins] tracking-[10px] bg-black bg-clip-text text-transparent drop-shadow-lg m-8">
        Pokedex
      </h1>

       <input 
      type="text" 
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
   
      placeholder="Pokemon Name..." 
      className="w-full max-w-[600px] text-black mx-auto block text-md pl-3 py-3 border border-black rounded-xl outline-none" 
      // onChange={(e) => updateSearchTerm(e.target.value)}
    />

      <div className="text-center grid grid-cols-4 gap-4 place-items-center">
        
          {searchData.map((currentElem)=>{
            return <PokemonList key={currentElem.id} data={currentElem}/>
          })}      
        
      </div>

          {/* <div className="m-5 items-center text-center  ">
            <button className="px-2 py-1 outline-1 outline-black text-xl m-2 bg-gray-100 rounded-md ">Prev</button>
          <button onClick={nextPage} className="px-2 py-1 outline-1 outline-black text-xl m-2 bg-gray-100 rounded-md ">Next</button>
          </div> */}

    </div>
  );
}
