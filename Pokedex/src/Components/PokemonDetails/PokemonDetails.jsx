import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PokemonDetails() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const { id } = useParams();
  const API = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getPokemonDetails = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);
      setPokemonDetails(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6">
      {/* Name */}
     
      <h1 
       className="text-center text-5xl font-[Poppins] tracking-[10px] text-gray-800 drop-shadow-lg mb-6">
        {pokemonDetails.name.toUpperCase()}
      </h1>

      {/* Image */}
      <div className="relative w-52 h-52 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 rounded-full flex justify-center items-center shadow-lg mb-6">
        <img
          src={pokemonDetails.sprites.other.dream_world.front_default}
          className="w-40 h-40 object-contain scale-x-[-1]"
          alt={pokemonDetails.name}
        />
      </div>

      {/* Type Badges */}
      <div className="flex gap-3 mb-6">
        {pokemonDetails.types.map((currType, index) => (
          <span
            key={index}
            className="bg-green-400 text-black px-4 py-1 rounded-full shadow-md capitalize font-medium"
          >
            {currType.type.name}
          </span>
        ))}
      </div>

      {/* Stats Card */}
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Stats</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-md">
          <p><span className="font-bold">Height:</span> {pokemonDetails.height}</p>
          <p><span className="font-bold">Weight:</span> {pokemonDetails.weight}</p>
          <p><span className="font-bold">Base XP:</span> {pokemonDetails.base_experience}</p>
          <p><span className="font-bold">Speed:</span> {pokemonDetails.stats[5].base_stat}</p>
          <p><span className="font-bold">Attack:</span> {pokemonDetails.stats[1].base_stat}</p>
          <p><span className="font-bold">Defense:</span> {pokemonDetails.stats[2].base_stat}</p>
          <p><span className="font-bold">HP:</span> {pokemonDetails.stats[0].base_stat}</p>
        </div>
      </div>

      {/* Moves Preview */}
      <div className="bg-gray-100 shadow-inner rounded-xl p-4 mt-6 w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Top Moves</h2>
        <div className="flex flex-wrap gap-2">
          {pokemonDetails.moves.slice(0, 6).map((move, index) => (
            <span
              key={index}
              className="bg-blue-400 text-white px-3 py-1 rounded-lg text-sm capitalize shadow"
            >
              {move.move.name}
            </span>
          ))}
        </div>
      </div>
      <div className="m-3">
         <Link to={'/'}>
        <button>Back🔙 </button>

      </Link>
      </div>
    </div>
  );
}
