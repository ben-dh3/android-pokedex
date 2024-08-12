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
      <Image style={styles.navigationButton} source={require('../assets/searchbar-open.webp')}></Image>
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
        <Image style={styles.typography} source={require('../assets/typography1.webp')}></Image>
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
    zIndex: -5,
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
    borderColor: '#F2F2F2', 
    borderWidth: 10,
    borderRadius: 30,
    fontFamily: 'TitilliumWeb_400Regular',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 10
  },
  typography:{
    alignSelf: 'center',
    zIndex: -5,
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  navigationButton:{
    alignSelf: 'center',
    position: 'absolute',
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    zIndex: 0
  },
  errorText: {
    color: 'white'
  }
});

export default SearchPokedex;
