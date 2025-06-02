import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MusicButton from '../app/assets/components/Buttons/MusicButton'; // Renamed from MusicaHH to MusicButton
import SearchBar from '../app/assets/components/SearchBar';
import { router } from 'expo-router';

// Import your data from musicas.ts
import { musicasDataHH } from '../app/assets/components/musicas'; // Path already correct

export default function SettingsHH() {
    // Renomeado para searchQueryHH e setSearchQueryHH
    const [searchQueryHH, setSearchQueryHH] = useState('');

    // Renomeado para filteredMusicasHH
    const filteredMusicasHH = useMemo(() => {
        if (!searchQueryHH) {
            return musicasDataHH; // Show all musicas if search is empty
        }
        const lowerCaseQueryHH = searchQueryHH.toLowerCase();
        return musicasDataHH.filter(
            (musica) =>
                musica.tituloHH.toLowerCase().includes(lowerCaseQueryHH) ||
                musica.artistaHH.toLowerCase().includes(lowerCaseQueryHH)
        );
    }, [searchQueryHH]); // Dependência atualizada para searchQueryHH

    // Renomeado para renderMusicItemHH
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
            <SearchBar
                valueHH={searchQueryHH} // Usando valueHH
                onChangeTextHH={setSearchQueryHH} // Usando onChangeTextHH
                placeholderHH="Pesquisar músicas ou artistas" // Usando placeholderHH
            />

            {/* Conditionally render message if no search results */}
            {searchQueryHH.length > 0 && filteredMusicasHH.length === 0 ? (
                <Text style={styles.noResultsTextHH}>Nenhum resultado encontrado para "{searchQueryHH}"</Text>
            ) : null}

            <FlatList
                data={filteredMusicasHH} // Usando filteredMusicasHH
                renderItem={renderMusicItemHH} // Usando renderMusicItemHH
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
    iconbarHH: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
    },
    viewGenericaHH: {
        flexDirection: 'row',
        gap: 15,
    },
    musicListContainerHH: {
        paddingVertical: 10,
        width: '100%',
        paddingHorizontal: 20,
        gap: 10,
    },
    noResultsTextHH: {
        color: '#ccc',
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
    }
});