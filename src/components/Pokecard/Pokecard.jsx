import React, { useState, useEffect } from "react";

export default function Pokecard({pokemon}) {
  return (
    <>
    <div className="pokemonCard">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image}/>
      <p>Type: {pokemon.type}</p>
    </div>
    </>
  )  
}
