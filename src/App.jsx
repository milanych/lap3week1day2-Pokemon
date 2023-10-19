import React, {useState, useEffect } from "react";
import {Pokedex, Pokeform} from "./components/";
import './css/App.css';

export default function App() {
  const [name, setName] = useState('');
  const [pokemonList, setPokemon] = useState([])

  const getPokemonInfo = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      setPokemon((currentList) => [...currentList, result])
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <>
      <Pokeform name={name} setName={setName} getPokemonInfo={getPokemonInfo}/>
        <>
        <h1>Pokedex</h1>
        <Pokedex pokemonList={pokemonList} />
        </>
    </>
  )
}
