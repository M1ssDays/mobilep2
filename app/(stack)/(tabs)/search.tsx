import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SearchScreenHH() {
    return (
        <View style={styles.containerHH}>
            <Text style={styles.textHH}>Tela de Busca</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    containerHH: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    textHH: {
        color: '#fff',
        fontSize: 24,
    },
});