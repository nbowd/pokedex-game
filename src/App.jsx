import { useEffect, useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex';

function App() {
  const pixels = [30, 20, 15, 10, 5];
   const genRanges = {
    'gen1': [1,152],
    'gen2': [152,252],
    'gen3': [252,387],
    'gen4': [387,494],
    'gen5': [494,650],
    'gen6': [650,722],
    'gen7': [722,810],
    'gen8': [810,906],
    'gen9': [906,1011],
   }

  const [pokemon, setPokemon] = useState({});

  const [gameState, setGameState] = useState('');

  const [guess, setGuess] = useState('');
  const [pixelDensity, setPixelDensity] = useState(0);

  const [gensSelected, setGensSelected] = useState(['gen1'])

  async function getPokemon() {
    const ranges = combineRanges();
    let id = 0;

    let valid_id = false;

    while(valid_id === false) {
      id = Math.floor(Math.random() * 1011) + 1;
      console.log(ranges)
      console.log(id)

      if (ranges.some((a) => id >= a[0] && id < a[1])){
        valid_id = true;
      }
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log('id chosen', id)
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

  function combineRanges() {
    const ranges = gensSelected.map(gen => genRanges[gen]);
    return ranges
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <div className="App">
      <Pokedex 
        image={pokemon.sprites?.front_default} 
        name={pokemon.name? pokemon.name: ''} 
        guess={guess} setGuess={setGuess} 
        pixels={gameState === ''? pixels[pixelDensity]: 0} 
        handleCheckGuess={()=> checkGuess()} gameState={gameState} 
        pixelDensity={pixelDensity}
        gensSelected={gensSelected}
        setGensSelected={setGensSelected}
      />
    </div>
  )
}

export default App
