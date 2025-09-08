import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
