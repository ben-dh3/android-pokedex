import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexEntry from '../components/PokedexEntry';
import SearchPokedex from '../components/SearchPokedex';
import { capitalizeFirstLetter } from '../services/utils.js';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (      
      <Stack.Navigator>
        <Stack.Screen
          name="Search Pokedex"
          component={SearchPokedex}
          options={{title: ''}}
        />
        <Stack.Screen
          name="PokedexEntry"
          component={PokedexEntry}
          options={({ route }) => ({ title: capitalizeFirstLetter(route.params.data.name) })}
        />
      </Stack.Navigator>
  );
}
