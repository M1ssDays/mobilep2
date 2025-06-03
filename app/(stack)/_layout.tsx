// app/(stack)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react'; // Certifique-se de importar React

export default function MainStackLayoutHH() {
  return (
    <Stack
        screenOptions={{
                headerShown: false,}}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: 'Seu Perfil' }} />
      <Stack.Screen name="settingstela" options={{ title: 'Configurações' }} />
    </Stack>
  );
}