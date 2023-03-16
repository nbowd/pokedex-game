import { useEffect, useState } from 'react'
import { ImagePixelated } from "react-pixelate"
import './App.css'
import Pokedex from './components/Pokedex';

function App() {
  const pixels = [30, 20, 15, 10, 5]

  const [pokemon, setPokemon] = useState({});

  const [gameState, setGameState] = useState('');

  const [guess, setGuess] = useState('');
  const [pixelDensity, setPixelDensity] = useState(0);

  async function getPokemon() {
    const id = Math.floor(Math.random() * 152) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const newPokemon = await response.json();
    setPokemon(newPokemon)
  }

  function checkGuess() {
    if (gameState === 'win' || gameState === 'lose') resetGame();

    if (guess.toLowerCase() === pokemon.name) {
      setGameState('win')
      return
    }

    if (pixelDensity === 4) {
      setGameState('lose')
      return
    }

    setPixelDensity(pixelDensity + 1)

  }

  async function resetGame() {
    await getPokemon();
    setGameState('');
    setGuess('');
    setPixelDensity(0);
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <div className="App">
      <Pokedex image={pokemon.sprites?.front_default} name={pokemon.name? pokemon.name: ''} guess={guess} setGuess={setGuess} pixels={gameState === ''? pixels[pixelDensity]: 0} handleCheckGuess={()=> checkGuess()} gameState={gameState} pixelDensity={pixelDensity}/>
    </div>
  )
}

export default App
