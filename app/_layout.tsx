import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

export default function RootLayout() {
  const [loaded] = useFonts({
    // IBM Condensed
    IBMCondensedBold: require('../assets/fonts/condensed/bold.ttf'),
    IBMCondensedExtralight: require('../assets/fonts/condensed/extralight.ttf'),
    IBMCondensedLight: require('../assets/fonts/condensed/light.ttf'),
    IBMCondensedMedium: require('../assets/fonts/condensed/medium.ttf'),
    IBMCondensedRegular: require('../assets/fonts/condensed/regular.ttf'),
    IBMCondensedSemibold: require('../assets/fonts/condensed/semibold.ttf'),
    IBMCondensedThin: require('../assets/fonts/condensed/thin.ttf'),
    // IBM Devanagari
    IBMDevanagariBold: require('../assets/fonts/devanagari/bold.ttf'),
    IBMDevanagariExtralight: require('../assets/fonts/devanagari/extralight.ttf'),
    IBMDevanagariLight: require('../assets/fonts/devanagari/light.ttf'),
    IBMDevanagariMedium: require('../assets/fonts/devanagari/medium.ttf'),
    IBMDevanagariRegular: require('../assets/fonts/devanagari/regular.ttf'),
    IBMDevanagariSemibold: require('../assets/fonts/devanagari/semibold.ttf'),
    IBMDevanagariThin: require('../assets/fonts/devanagari/thin.ttf'),
    // IBM Italic
    IBMItalicBold: require('../assets/fonts/italic/bold-italic.ttf'),
    IBMItalicCondensed: require('../assets/fonts/italic/condensed-italic.ttf'),
    IBMItalicExtralight: require('../assets/fonts/italic/extralight-italic.ttf'),
    IBMItalicLight: require('../assets/fonts/italic/light-italic.ttf'),
    IBMItalicMedium: require('../assets/fonts/italic/medium-italic.ttf'),
    IBMItalicSemibold: require('../assets/fonts/italic/semibold-italic.ttf'),
    IBMItalicThin: require('../assets/fonts/italic/thin-italic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
