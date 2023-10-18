import React, { useState, useEffect } from "react";

export default function Pokeform({inputText, setInputText, pokemon, setPokemon}) {
  const handleInput = (e) => setInputText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemon([
      ...pokemon,
      {name: pokemon.name, order: pokemon.order}
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
