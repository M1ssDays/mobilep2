// app/P2mobile/app/(stack)/(tabs)/search.tsx

import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Importe o componente SearchBar corretamente
import SearchBar from '../../../app/assets/components/SearchBar'; // Caminho corrigido
import MusicButton from '../../../app/assets/components/Buttons/MusicButton'; // Caminho corrigido
import { router } from 'expo-router';

// Importe musicasDataHH (já verificamos este caminho)
import { musicasDataHH } from '../../../data/musicas';

export default function SearchScreenHH() { // Renomeado para evitar confusão com o componente SettingsHH se ele existir
    const [searchQueryHH, setSearchQueryHH] = useState('');

    const filteredMusicasHH = useMemo(() => {
        if (!searchQueryHH) {
            return musicasDataHH;
        }
        const lowerCaseQueryHH = searchQueryHH.toLowerCase();
        return musicasDataHH.filter(
            (musica) =>
                musica.tituloHH.toLowerCase().includes(lowerCaseQueryHH) ||
                musica.artistaHH.toLowerCase().includes(lowerCaseQueryHH)
        );
    }, [searchQueryHH]);

    const renderMusicItemHH = ({ item }: { item: typeof musicasDataHH[0] }) => (
        <MusicButton
            URLHH={item.capaDaMusicaHH}
            textoHH={item.tituloHH}
            subtextoHH={item.artistaHH}
            onPressHH={() => console.log('Playing:', item.tituloHH)}
        />
    );

    return (
        <LinearGradient
            colors={['rgba(25, 20, 20, 1)', '#1E142D']}
            locations={[0.7, 1]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.containerHH}
        >
            <SearchBar // Use o componente SearchBar aqui
                valueHH={searchQueryHH}
                onChangeTextHH={setSearchQueryHH}
                placeholderHH="Pesquisar músicas ou artistas"
            />

            {searchQueryHH.length > 0 && filteredMusicasHH.length === 0 ? (
                <Text style={styles.noResultsTextHH}>Nenhum resultado encontrado para "{searchQueryHH}"</Text>
            ) : null}

            <FlatList
                data={filteredMusicasHH}
                renderItem={renderMusicItemHH}
                keyExtractor={(item) => item.idHH}
                contentContainerStyle={styles.musicListContainerHH}
                showsVerticalScrollIndicator={false}
            />

            <StatusBar style="auto" />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    containerHH: {
        flex: 1,
        alignItems: 'center',
    },
    titleHH: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        marginLeft: 20,
    },
    musicListContainerHH: {
        paddingVertical: 10,
        width: '100%',
        paddingHorizontal: 20,
        gap: 30,
        flexDirection: 'column'
    },
    noResultsTextHH: {
        color: '#ccc',
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
    }
});