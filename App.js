import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { TitilliumWeb_400Regular, TitilliumWeb_700Bold } from '@expo-google-fonts/titillium-web';
import Index from './app/index.jsx';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          TitilliumWeb_400Regular,
          TitilliumWeb_700Bold
        });

        setFontsLoaded(true);

        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return(
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}
