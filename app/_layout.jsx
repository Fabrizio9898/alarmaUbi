import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="search"
          options={{
            headerShown: false,
            presentation: 'modal', // Hace que cubra toda la pantalla
            animation: "slide_from_right", // Animación estilo Google Maps
          }}
        />
      </Stack>
    </>
  );
}