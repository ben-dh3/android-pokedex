import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import SearchPokedex from '../components/SearchPokedex';

export default function Index() {
  return (      
    <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
          <SearchPokedex />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
  },
});
