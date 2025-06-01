import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout(){

return(
    <Stack screenOptions={{
        headerShown: false,
    }
    }>
        <Stack.Screen name="home" options={{title:'Home'}}/>
    </Stack>
);
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});