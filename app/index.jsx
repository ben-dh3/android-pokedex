import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexEntry from '../components/PokedexEntry';
import SearchPokedex from '../components/SearchPokedex';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Search Pokedex"
          component={SearchPokedex}
        />
        <Stack.Screen
          name="PokedexEntry"
          component={PokedexEntry}
        />
      </Stack.Navigator>
  );
}
