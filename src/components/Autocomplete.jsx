import React, { useMemo, useState } from 'react'
import './Autocomplete.css'
import pokemonNames from '../assets/data/pokemonNames';

function Autocomplete({guess, setGuess, gameState, className, handleEnter}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const onChange = (event) => {
    setGuess(event.target.value);
    setDropdownVisible(true)
  }

  const onDropdownSelect = (item) => {
    setGuess(item)
    setDropdownVisible(false)
  }

  const checkEnter = (e) => {
    if (e.key === 'Enter') { 
        handleEnter();
        setDropdownVisible(false)
    }
  }

  const filteredPokemonNames = useMemo(() => {
    return pokemonNames.filter(item => {
      const searchTerm = guess.toLowerCase();
      const fullName = item.toLowerCase();
  
      return searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm
    });
  }, [pokemonNames, guess]);

  return (
    <div className="autocomplete-container">
      <div className="autocomplete-inner">
        <input
          type="text"
          value={guess}
          onChange={onChange}
          className={className}
          placeholder={gameState === ''? 'Guess Name': `You ${gameState}`}
          onKeyUp={(e)=>checkEnter(e)} 
          disabled={gameState !== ''} 
          maxLength="12"
        />
      </div>
      {
        dropdownVisible &&
        <div className="dropdown">
        {
          filteredPokemonNames.length > 0
            ? filteredPokemonNames.slice(0, 10).map((item, index) => (
                <div 
                  className="dropdown-row"
                  onClick={() => onDropdownSelect(item)}
                  key={`pokemon-${index+1}`}
                >
                  {item}
                </div>
              ))
            : setDropdownVisible(false)
        }
        </div> 
      }
    </div>
  )
}

export default Autocomplete