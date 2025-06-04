// app/(stack)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react'; 

export default function MainStackLayoutHH() {
  return (
    <Stack
        screenOptions={{
                headerShown: false,}}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
       <Stack.Screen
        name="profile" 
        options={{
          title: 'Perfil do Usuário',
        }}
      />
      <Stack.Screen
        name="settingstela" 
        options={{
          title: 'Configurações da Conta',
        }}
      />

    </Stack>
  );
}