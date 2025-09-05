import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ data , id}) {
  return (
    <div className="w-68 bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
      <Link 
  to={`/pokemon/${id}`} 
  className="flex  w-68 bg-white rounded-xl shadow-2xl p-4  flex-col items-center hover:scale-105 transition-transform"
>
      <img
        src={data.sprites.other.dream_world.front_default}
        className="w-28 h-28 object-contain"
        alt={data.name}
      />

      <h1 className="text-black text-xl capitalize">{data.name}</h1>

      {/* Type badge */}
      <div className="bg-green-400 text-md px-2 py-1 m-2 rounded-xl text-black">
        {data.types.map((currType) => currType.type.name).join(", ")}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 m-2 text-sm text-gray-700">
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        <p>Speed: {data.stats[5].base_stat}</p>
        <p>Attack: {data.stats[1].base_stat}</p>
      </div>
      </Link>
    </div>
  );
}
