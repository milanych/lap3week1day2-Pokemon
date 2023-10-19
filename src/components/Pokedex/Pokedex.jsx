import React from "react";
import Pokecard from '../Pokecard/Pokecard';


export default function Pokedex({pokemonList}) {
  if(pokemonList.length === 0) {
    return (
      <>
      <div className="pokemon">no pokemon yet, please submit a pokemon!</div>
      </>
      )
  }
  return (
    <>
      <div className="pokemon">
        {pokemonList.map((pokemon, index) => (
         <Pokecard pokemon={pokemon} key={index}/>
        ))}  
      </div>
    </>
  )
}
