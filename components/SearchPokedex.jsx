import React, { useState } from 'react';
import FormatData from './FormatData';
import { TextInput, View, Button, Text } from 'react-native';

function SearchPokedex() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const [error, setError] = useState(null);
  
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;

  const handleChangePokemon = (text) => {
    setPokemon(text);
  };

  const handleSubmit = () => {
    setError(null); // Reset error state
    fetch(URL, {
        method: "GET",
        headers: {
          'Origin': 'http://localhost:3000',
        },
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('That pokemon doesn\'t exist');
      })
      .then((data) => setPokemonData(data))
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View>
      <Text>Search a Pokemon:</Text>
      <TextInput
        placeholder="Enter Pokemon name"
        value={pokemon}
        onChangeText={handleChangePokemon}
        style={{ borderColor: 'gray', borderWidth: 1, padding: 5 }}
      />
      <Button title='Search' onPress={handleSubmit} />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {pokemonData.name && <FormatData data={pokemonData} />}
    </View>
  );
}

export default SearchPokedex;
