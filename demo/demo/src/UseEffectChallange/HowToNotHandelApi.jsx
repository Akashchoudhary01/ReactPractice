import React, { useEffect, useState } from "react";

export default function HowToNotHandelApi() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  function PokemonData() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    PokemonData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center  items-center bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300">
        <h1 className="text-4xl font-bold text-black animate-pulse">
          Loading ...
        </h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col gap-6 justify-center items-center bg-gradient-to-br from-yellow-200 via-yellow-100 to-white">
      <h1 className="text-4xl font-extrabold text-yellow-600 tracking-wider drop-shadow-md">
        {apiData.name.toUpperCase()}
      </h1>
      <img
        className="w-48 h-48 drop-shadow-xl hover:scale-110 transition-transform duration-300"
        src={apiData.sprites.other.dream_world.front_default}
        alt={apiData.name}
      />
      <p className="text-lg text-gray-700 font-medium">
        Height: {apiData.height} | Weight: {apiData.weight}
      </p>
    </div>
  );
}
