import React, { useState } from 'react'
import './Autocomplete.css'
import pokemonNames from '../assets/data/pokemonNames';

function Autocomplete() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="autocomplete-container">
      <div className="autocomplete-inner">
        <input type="text" value={value} onChange={onChange}/>
        <button onClick={()=> console.log('search',value)}>Search</button>
      </div>
      <div className="dropdown">
        {pokemonNames.filter(item => {
          const searchTerm = value.toLowerCase();
          const fullName = item.toLowerCase();

          return searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm
        }).slice(0,15)
        .map((item, index) => (
          <div onClick={() => setValue(item)} className="dropdown-row" key={`pokemon ${index+1}`}>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default Autocomplete