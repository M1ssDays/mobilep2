// app/(stack)/profile.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, router } from 'expo-router'; // Importar Stack e router

export default function ProfileScreenHH() { // Use seu prefixo HH
    return (
        <View style={styles.containerHH}>
            <Stack.Screen options={{ title: 'Seu Perfil' }} /> {/* Define o título do header desta tela */}
            <Text style={styles.textHH}>Esta é a tela do Perfil</Text>
            
            {/* Opcional: Botão de voltar para settings */}
            <TouchableOpacity
                style={styles.backButtonHH} 
                onPress={() => router.back()} 
            >
                <Text style={styles.backButtonTextHH}>Voltar</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    containerHH: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Fundo escuro
        padding: 20,
    },
    textHH: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
    },
    backButtonHH: {
        backgroundColor: '#1DB954',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    backButtonTextHH: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});