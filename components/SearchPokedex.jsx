import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Image } from 'react-native';
import NavigationButton from './NavigationButton';

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
      <Image style={styles.searchbar} source={require('../assets/searchbar-open.webp')}></Image>
      <View style={styles.containerTop}>
        <TextInput
          placeholder="Enter Pokémon name"
          placeholderTextColor="black"
          value={pokemon}
          onChangeText={handleChangePokemon}
          style={styles.textInput}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
        <NavigationButton onPress={handleSubmit} colour={'#A1EEFF'}>
        </NavigationButton>
      <View style={styles.containerBottom}>
        <Image style={styles.typography} source={require('../assets/typography2.webp')}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  typography:{
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 0,
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  searchbar:{
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  container: {
    flex:1,
    justifyContent: 'center',
  },
  containerTop: {
    zIndex: -5,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderBottomWidth: 20,
  },
  containerBottom: {
    flex:1,
    justifyContent: 'center',
  },
  textInput: {
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
    borderColor: '#C3BEC2', 
    borderWidth: 5,
    borderRadius: 20,
    fontFamily: 'TitilliumWeb_400Regular',
  },
  errorText: {
    color: 'white'
  }
});

export default SearchPokedex;
