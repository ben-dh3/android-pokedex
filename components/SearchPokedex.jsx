import React, { useState } from 'react';
import { TextInput, View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        </TouchableOpacity>
      <View style={styles.containerBottom}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  containerTop: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderBottomWidth: 20,
  },
  containerBottom: {
    flex:1,
  },
  textInput: {
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
    borderColor: '#C3BEC2', 
    borderWidth: 5,
    borderRadius: 20,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    backgroundColor:'#A1EEFF',
    borderWidth:20,
  },
  errorText: {
    color: 'white'
  }
});

export default SearchPokedex;
