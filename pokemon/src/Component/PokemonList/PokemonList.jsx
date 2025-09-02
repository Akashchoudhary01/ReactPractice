import React from "react";

export default function PokemonList({ data }) {
  return (
    <div className="w-60 bg-white shadow-lg rounded-2xl p-4 m-3 text-center hover:scale-105 transition-transform duration-300">
      <img
        src={data.sprites.other.dream_world.front_default}
        
        alt={data.name}
        className="w-28 h-28 mx-auto mb-3 "
      />
      <h2 className="bg-green-400 text-black items-center px-3 rounded-2xl m-2 py-1 ">
        {data.types.map((currElem) => currElem.type.name).join(", ")}
      </h2>

      <h1 className="text-xl font-bold capitalize">{data.name}</h1>
      <div className="grid grid-cols-2 justify-around m-4">
        <p className="text-gray-600">Height: {data.height}</p>
        <p className="text-gray-600">Weight: {data.weight}</p>
        <p className="text-gray-600">Speed : {data.stats[5].base_stat}</p>
        <p className="text-gray-600">Attack : {data.stats[1].base_stat}</p>
      </div>
    </div>
  );
}
