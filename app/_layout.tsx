import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Heading: require('../assets/fonts/StStronglyCarbonizedDemoRegular-ZV0W3.otf'),
    Text: require('../assets/fonts/FeelingSoon-1GVr0.otf'),
    Text1: require('../assets/fonts/TirtoWritterRegular-Eajrl.ttf'),
    Text2: require('../assets/fonts/Pixellettersfull-BnJ5.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false}}/>
        <Stack.Screen name="chat" options={{ headerShown: false}}/>
        <Stack.Screen name="devinfo" options={{ headerShown: false}} />
      </Stack>
    </ThemeProvider>
  );
}
