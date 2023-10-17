import React, { useState, useEffect } from "react";
import Pokecard from '../Pokecard/Pokecard';


export default function Pokedex({pokemons}) {
  return (
    <>
      <h1>Pokedex</h1>
      <div className="pokemon">
      {pokemons.map((pokemon,i) => <Pokecard pokemon={pokemon} key={i}/>)}
      </div>
    </>
  )
}
