import React, { useState } from 'react';
import { TextInput, View, Button, Text, StyleSheet } from 'react-native';

function SearchPokedex({ navigation }) {
  const [pokemon, setPokemon] = useState("");
  const [error, setError] = useState(null);
  
  const handleChangePokemon = (text) => {
    setPokemon(text);
  };

  const handleSubmit = () => {
    if (pokemon.trim() === "") {
      setError("Please enter a Pokémon name");
      return;
    }
    
    setError(null);
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
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
      throw new Error('That Pokémon doesn\'t exist');
    })
    .then((data) => {
      navigation.navigate('PokedexEntry', { data });
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TextInput
          placeholder="Enter Pokémon name"
          placeholderTextColor="white"
          value={pokemon}
          onChangeText={handleChangePokemon}
          style={styles.textInput}
        />
        <Button title='Search' onPress={handleSubmit} style={styles.button} />
      </View>

      <View style={styles.containerBottom}>
        {error && <Text style={styles.errorText}>{error}</Text>}
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
