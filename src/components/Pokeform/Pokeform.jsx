import React, {useState, useEffect} from "react";

export default function Pokeform({name, setName, getPokemonInfo}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleInput = (e) => setName(e.target.value)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    try {
      await getPokemonInfo(name);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setName('');
    }
  }
  return (
    <div className="pokemon">
      <form onSubmit={handleSubmit}>
        <input value={name} type="text" onChange={handleInput}/>
        <button type="submit">Add</button>
      </form>
      {isLoading && <div className="pokemon">Loading...</div>}
    </div>
    
  )
}
