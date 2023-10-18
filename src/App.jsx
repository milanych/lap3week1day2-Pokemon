import React, {useState, useEffect} from "react";
import {Pokedex, Pokeform} from "./components/";
import './css/App.css';

export default function App() {
  const [inputText, setInputText] = useState('slowpoke');
  const [pokemon, setPokemon] = useState([])
  
  const getPokemonInfo = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      setPokemon(result)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getPokemonInfo(inputText)
  }, [pokemon])
  return (
    <>
      <Pokeform inputText={inputText} setInputText={setInputText} pokemon={pokemon} setPokemon={setPokemon}/>
      <Pokedex pokemon={pokemon}/>
    </>
  )
}
