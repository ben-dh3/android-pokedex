import React, { useState } from 'react';
import FormatData from './FormatData';
import { TextInput, View, Button, Text, StyleSheet } from 'react-native';

function SearchPokedex() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const [error, setError] = useState(null);
  
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;

  const handleChangePokemon = (text) => {
    setPokemon(text);
  };

  const handleSubmit = () => {
    setError(null);
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
      <View style={styles.containerTop}>
        <TextInput
          placeholder="Enter Pokemon name"
          placeholderTextColor="white"
          value={pokemon}
          onChangeText={handleChangePokemon}
          style={styles.textInput}
        />
        <Button title='Search' onPress={handleSubmit} style={styles.button} />
      </View>

      <View style={styles.containerBottom}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <FormatData data={pokemonData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBottom: {
  },
  containerTop: {
    flexDirection: 'row',  
  },
  textInput: {
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderColor: '#C3BEC2', 
    borderWidth: 5, 
    padding: 0,
    flex: 3
  },
  button: {
    textAlign: 'center',
    flex: 1
  },
  errorText: {
    color: 'red'
  }
});

export default SearchPokedex;
