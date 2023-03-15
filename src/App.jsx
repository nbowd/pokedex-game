import { useState } from 'react'
import { ImagePixelated } from "react-pixelate"
import './App.css'
import Pokedex from './components/Pokedex';

function App() {

  const [pokemon, setPokemon] = useState({});

  async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/150');
    const newPokemon = await response.json();
    setPokemon(newPokemon)
  }

  getPokemon();

  return (
    <div className="App">
      <Pokedex />
    </div>
  )
}

export default App
