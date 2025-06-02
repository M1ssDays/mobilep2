import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import IconButtonHH from '../../assets/components/Buttons/IconButton';
import PodcastButtonHH from '../../assets/components/Buttons/PodcastButton'; 
import AlbumButton from '../../assets/components/Buttons/AlbumButton';
import { router } from 'expo-router';


const episodiosDataHH = [
    { idHH: 'epi1', coverHH: '../', titleHH: 'Podcast Show', artistHH: 'Host Fictício' },
    { idHH: 'epi2', coverHH: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=EPI2', titleHH: 'Daily Boost', artistHH: 'Notícias Rápidas' },
    { idHH: 'epi3', coverHH: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=EPI3', titleHH: 'Entrevistas Top', artistHH: 'Jornalista XPTO' },
    { idHH: 'epi4', coverHH: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=EPI4', titleHH: 'Outro Show', artistHH: 'Outro Host' },
    { idHH: 'epi5', coverHH: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=EPI5', titleHH: 'Mais um Podcast', artistHH: 'Mais Um' },
];

const recomendadosDataHH = [
    { idHH: 'rec1', coverHH: 'https://via.placeholder.com/60/FFFF00/000000?text=MUSICA1', titleHH: 'Shy Away', subtitleHH: 'Twenty One Pilots' },
    { idHH: 'rec2', coverHH: 'https://via.placeholder.com/60/FF00FF/000000?text=MUSICA2', titleHH: 'Blinding Lights', subtitleHH: 'The Weeknd' },
    { idHH: 'rec3', coverHH: 'https://via.placeholder.com/60/00FFFF/000000?text=MUSICA3', titleHH: 'Levitating', subtitleHH: 'Dua Lipa' },
    { idHH: 'rec4', coverHH: 'https://via.placeholder.com/60/FF8800/FFFFFF?text=MUSICA4', titleHH: 'Drivers License', subtitleHH: 'Olivia Rodrigo' },
    { idHH: 'rec5', coverHH: 'https://via.placeholder.com/60/0000FF/FFFFFF?text=MUSICA5', titleHH: 'Save Your Tears', subtitleHH: 'The Weeknd' },
    { idHH: 'rec6', coverHH: 'https://via.placeholder.com/60/000000/FFFF00?text=MUSICA6', titleHH: 'Good 4 u', subtitleHH: 'Olivia Rodrigo' },
];

const musicasBoaTardeDataHH = [
    { idHH: 'bt1', coverHH: 'https://via.placeholder.com/60/FF0000/FFFFFF?text=COLDPLAY', titleHH: 'Yellow', subtitleHH: 'Coldplay' },
    { idHH: 'bt2', coverHH: 'https://via.placeholder.com/60/0000FF/FFFFFF?text=BEATLES', titleHH: 'Here Comes The Sun', subtitleHH: 'The Beatles' },
    { idHH: 'bt3', coverHH: 'https://via.placeholder.com/60/00FF00/FFFFFF?text=QUEEN', titleHH: 'Bohemian Rhapsody', subtitleHH: 'Queen' },
    { idHH: 'bt4', coverHH: 'https://via.placeholder.com/60/FFFF00/000000?text=ELVIS', titleHH: 'Cant Help Falling in Love', subtitleHH: 'Elvis Presley' },
];


export default function HomeHH() {

    return(
        <LinearGradient
            colors={['rgba(25, 20, 20, 1)', 'rgba(80, 80, 80, 1)']}
            locations={[0.85, 1]}
            start={{x:1, y:1}}
            end={{x:0, y:0}}
            style={styles.containerHH}
        >
            <ScrollView style={styles.scrollViewHH} showsVerticalScrollIndicator={false}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text style={styles.titleHH}>Boa tarde</Text>
                    <View style={{flexDirection: 'row', padding: 20, gap: 10}}>
                        <IconButtonHH URLHH = "https://img.icons8.com/m_outlined/512/FFFFFF/appointment-reminders--v2.png "/>
                        <IconButtonHH URLHH = "https://img.icons8.com/m_outlined/200/FFFFFF/clock.png"/>
                        <IconButtonHH
                            URLHH = "https://img.icons8.com/m_outlined/512/FFFFFF/settings.png"
                            onPressHH={() => router.push('/settings')}
                        />
                    </View>
                </View>

                <View style={styles.boaTardeGridHH}>
                    {musicasBoaTardeDataHH.map((item) => (
                        <AlbumButton 
                            key={item.idHH}
                            albumCoverUrlHH={item.coverHH}
                            albumTitleHH={item.titleHH}
                            artistNameHH={item.subtitleHH} 
                            onPressHH={() => console.log('Clicou na música do Boa Tarde:', item.titleHH)}
                        />
                    ))}
                </View>

                <Text style={styles.sectionTitleHH}>Episódios para você</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalListContainerHH}>
                    {episodiosDataHH.map((item) => (
                        <PodcastButtonHH 
                            key={item.idHH}
                            URLHH={item.coverHH} 
                            tituloHH={item.titleHH} 
                            subtituloHH={item.artistHH}
                            onPressHH={() => console.log('Clicou no episódio:', item.titleHH)}
                        />
                    ))}
                </ScrollView>

                <Text style={styles.sectionTitleHH}>Recomendado para hoje</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalListContainerHH}>
                    {recomendadosDataHH.map((item) => (
                        <PodcastButtonHH 
                            key={item.idHH}
                            URLHH={item.coverHH} 
                            tituloHH={item.titleHH} 
                            subtituloHH={item.subtitleHH} 
                            onPressHH={() => console.log('Clicou na música:', item.titleHH)}
                        />
                    ))}
                </ScrollView>


                <StatusBar style="auto" />
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    containerHH: {
        flex: 1,
    },
    scrollViewHH: {
        flex: 1,
        width: '100%',
    },
    titleHH:{
        fontSize: 28,
        fontWeight: 'bold', 
        color: '#fff',
        alignSelf: 'flex-start',
        marginTop: 20, 
        marginLeft: 20
    },
    sectionTitleHH: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    horizontalListContainerHH: {
        paddingHorizontal: 15,
    },
    gridListContainerHH: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    viewGenericaHH:{ 
        flexDirection: 'row',
        gap: 15, 
        paddingHorizontal: 20, 
        width: '100%', 
        flexWrap: 'wrap', 
    },
     horizontalScrollContainerHH: {
        paddingHorizontal: 15,
        gap: 10,
    },
     gridScrollContainerHH: {
        paddingHorizontal: 10,
    },
    gridRowHH: { 
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        gap: 10,
    },
    boaTardeGridHH: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15, 
        marginTop: 10, 
        marginBottom: 20, 
        gap: 10, 
    },
});

console.log(Dimensions.get('window'));