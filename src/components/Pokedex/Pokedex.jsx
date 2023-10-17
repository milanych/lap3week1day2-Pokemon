import React, { useState, useEffect } from "react";
import Pokecard from '../Pokecard/Pokecard';


export default function Pokedex({pokemon}) {
  return (
    <>
      <h1>Pokedex</h1>
      <div className="pokemon">
      {/* {pokemon.map((p,i) => {
        <Pokecard p={p} key={i}/>
      })}  */}
      </div>
    </>
  )
}
