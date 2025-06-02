import React, { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import MusicButton from '../../assets/components/Buttons/MusicButton';
import SearchBar from '../../assets/components/SearchBar';
import { router } from 'expo-router';
import { musicasDataHH } from '../../assets/components/musicas';

const epic = require('../../assets/images/epic.jpg');
const saint = require('../../assets/images/saintjuvi.jpg');

export default function SearchHH() {
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
  return(
    <SafeAreaView style={styles.safeAreaHH}>
    <LinearGradient
    colors={['rgba(25, 20, 20, 1)', '#1E142D']}
    locations={[0.7, 1]}
    start={{x:0.5, y:1}}
    end={{x:0.5, y:0}}
    style={styles.containerHH}
    >
    
    <SearchBar
                valueHH={searchQueryHH}
                onChangeTextHH={setSearchQueryHH}
                placeholderHH="Pesquisar músicas ou artistas"
            />
    {searchQueryHH.length > 0 && filteredMusicasHH.length === 0 ? (
                <Text style={styles.noResultsTextHH}>Nenhum resultado encontrado para "{searchQueryHH}"</Text>
            ) : null}

            {/* FlatList para exibir os resultados filtrados */}
            <FlatList
                data={filteredMusicasHH} // Exibe os dados filtrados
                renderItem={renderMusicItemHH}
                keyExtractor={(item) => item.idHH}
                contentContainerStyle={styles.musicListContainerHH}
                showsVerticalScrollIndicator={false}
            />
    
    <StatusBar style="auto" />
    </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerHH: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },

  titleHH:{
    fontSize: 24,
    fontWeight: 600,
    color: '#fff',
    marginLeft: 20
  },

  iconbarHH:{
    flexDirection: 'row',
    width: '100%',
    height: 100
  },

  viewGenericaHH:{
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
    },
    safeAreaHH: {
        flex: 1, // Faz o SafeAreaView ocupar toda a tela
        backgroundColor: 'black', // Cor de fundo para o SafeAreaView se o gradiente não cobrir tudor
    },
});

