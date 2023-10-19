import React, {useEffect, useState} from "react";

export default function Pokecard({pokemon}) {
  const [isFlipped, setFlipped] = useState();
  if (!pokemon) {
    return null;
  }
  useEffect(() => {
    let interval;
    if(pokemon.sprites.front_default) {
      interval = setInterval(() => setFlipped(state => !state), 1000);
    }
    return () => clearInterval(interval)
  }, [pokemon])
  return (
    <>
    <div className="pokemonCard">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} style={{transform: isFlipped ? "scaleX(-1)" : "scaleX(1)"}}/>
      <p>Type: {pokemon.types[0].type.name}</p>
    </div>
    </>
  )  
}
