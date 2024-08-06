import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import SearchPokedex from '../components/SearchPokedex';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FormatData from '../components/FormatData';

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
          name="FormatData"
          component={FormatData}
        />
      </Stack.Navigator>
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
