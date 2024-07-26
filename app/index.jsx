import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import SearchPokedex from '../components/SearchPokedex';

// const image = {require('../assets/pokedex-graphics')};

export default function Index() {
  return (      
    <ImageBackground source={require('../assets/pokedex-graphics.png')} resizeMode="cover" style={styles.image}>
      <View>
          <SearchPokedex />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
