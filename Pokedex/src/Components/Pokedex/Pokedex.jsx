import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonListCard/PokemonCard";
import Search from "../Search/Search";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  const API = `https://pokeapi.co/api/v2/pokemon?limit=30`;

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedData = data.results.map(async (currData) => {
        const res = await fetch(currData.url);
        const data = await res.json();
        return data;
      });
      console.log(data);
      

      const finalData = await Promise.all(detailedData);
      setPokemon(finalData);
      console.log(finalData);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Easy Search Funcnility

  const filteredPokemon = pokemon.filter((currData) =>
    currData.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-4xl  tracking-wider text-black drop-shadow-lg">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-4xl font-bold tracking-wider text-red-500">
          Something went wrong!
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-5xl font-[Poppins] tracking-[10px] bg-black bg-clip-text text-transparent drop-shadow-lg m-8">
        Pokedex
      </h1>

      {/* Search */}
      <Search value={search} setSearch={setSearch} />

      {/* PokemonCard */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-7  gap-6 my-8">
        {filteredPokemon.map((currElem) => {
          return <PokemonCard key={currElem.id} id={currElem.id} data={currElem} />;
        })}

      </div>

      {/* Pagination */}
      <div className="justify-center flex gap-2 ">
        <button className="outline-1 px-2 rounded-md py-1">Prev</button>
        <button className="outline-1 px-2 py-1 rounded-md">Next</button>
        
      </div>


    </div>
  );
}
