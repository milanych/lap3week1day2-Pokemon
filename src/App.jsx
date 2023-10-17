import React, {useState, useEffect} from "react";
import {Pokedex, Pokeform} from "./components/";
import './css/App.css';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [pokemonList, setPokemons] = useState([])
    
  useEffect(() => {
    getPokemonInfo(inputText)
  }, [inputText])
  const getPokemonInfo = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      setPokemons(result)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <Pokeform inputText={inputText} setInputText={setInputText} pokemonList={pokemonList} setPokemons={setPokemons}/>
      <Pokedex pokemonList={pokemonList}/>
    </>
  )
}
