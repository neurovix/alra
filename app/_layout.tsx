import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

export default function RootLayout() {
  const [loaded] = useFonts({
    // Roboto normal
    RobotoBold: require('../assets/fonts/roboto/normal/bold.ttf'),
    RobotoExtralight: require('../assets/fonts/roboto/normal/extralight.ttf'),
    RobotoLight: require('../assets/fonts/roboto/normal/light.ttf'),
    RobotoMedium: require('../assets/fonts/roboto/normal/medium.ttf'),
    RobotoRegular: require('../assets/fonts/roboto/normal/regular.ttf'),
    RobotoSemibold: require('../assets/fonts/roboto/normal/semibold.ttf'),
    RobotoThin: require('../assets/fonts/roboto/normal/thin.ttf'),
    // Roboto italic
    RobotoItalicBlack: require('../assets/fonts/roboto/italic/black-italic.ttf'),
    RobotoItalicBold: require('../assets/fonts/roboto/italic/bold-italic.ttf'),
    RobotoItalicExtrabold: require('../assets/fonts/roboto/italic/extrabold-italic.ttf'),
    RobotoItalicExtralight: require('../assets/fonts/roboto/italic/extralight-italic.ttf'),
    RobotoItalicRegular: require('../assets/fonts/roboto/italic/italic.ttf'),
    RobotoItalicLight: require('../assets/fonts/roboto/italic/light-italic.ttf'),
    RobotoItalicMedium: require('../assets/fonts/roboto/italic/medium-italic.ttf'),
    RobotoItalicSemibold: require('../assets/fonts/roboto/italic/semibold-italic.ttf'),
    RobotoItalicThin: require('../assets/fonts/roboto/italic/thin-italic.ttf'),
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
