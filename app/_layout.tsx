// app/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function RootLayoutHH(){
    return (
        <Stack>
            <Stack.Screen name="(stack)" options={{ headerShown: false }}/>
        </Stack>
    )
}