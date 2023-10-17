import React, { useState, useEffect } from "react";

export default function Pokeform({inputText, setInputText, pokemonList, setPokemons}) {
  const handleInput = (e) => setInputText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemons([
      pokemonList,
      {name: inputText}
    ])

    // setInputText('')
  }
  return (
    <div className="pokemon">

      <form onSubmit={handleSubmit}>
        <input value={inputText} type="text" onChange={handleInput}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
