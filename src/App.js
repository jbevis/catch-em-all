import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchData()
  });

  function fetchData() {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      setPokemon(data.pokemon)
    })
  }

  return (
    <div className="App">
     {pokemon.map(pokemon => {
      return (
        <p>{pokemon.name}</p>
      )
     })}
    </div>
  );
}

export default App;
