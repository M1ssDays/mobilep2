import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function PremiunHH() {
    return (
        <View style={styles.containerHH}>
            <Text style={styles.textHH}>Premium, não tenho, não tenho referencias nem nada, obrigado pela atenção</Text>
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