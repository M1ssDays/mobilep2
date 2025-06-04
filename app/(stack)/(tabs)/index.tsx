import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import IconButtonHH from '../../assets/components/Buttons/IconButton';
import PodcastButtonHH from '../../assets/components/Buttons/PodcastButton'; 
import AlbumButton from '../../assets/components/Buttons/AlbumButton';
import { router } from 'expo-router';

const localPlaceholderImage = require('../../assets/images/placeholder.png');
const balelaHH = require('../../assets/images/balela.jpg');
const orvHH = require('../../assets/images/ovr.jpg');
const magnumHH = require('../../assets/images/magnun.jpg');
const roxanaHH = require('../../assets/images/roxana.jpg');
const hollowHH = require('../../assets/images/hollow knight.jpg');
const epicHH = require('../../assets/images/epic.jpg');
const saintHH = require('../../assets/images/saintjuvi.jpg');

const episodiosDataHH = [
    { idHH: 'epi1', coverHH:  balelaHH, titleHH: 'Balela podcast ep 1', artistHH: 'Calango' },
    { idHH: 'epi2', coverHH: orvHH, titleHH: 'Omniscient Reader ', artistHH: 'Spoiler' },
    { idHH: 'epi3', coverHH:  magnumHH, titleHH: 'Magnum Archives ', artistHH: 'Magnum' },
    { idHH: 'epi4', coverHH: roxanaHH, titleHH: 'Roxana ep 49', artistHH: 'Roxana' },
    { idHH: 'epi5', coverHH: hollowHH, titleHH: 'Hollow Knight ep 10', artistHH: 'Team Cherry' },
];

const recomendadosDataHH = [
    { idHH: 'rec1', coverHH: epicHH, titleHH: 'Suffering', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec2', coverHH: epicHH, titleHH: 'Different Beast', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec3', coverHH: epicHH, titleHH: 'Scylla', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec4', coverHH: epicHH, titleHH: 'Mutiny', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec5', coverHH: epicHH, titleHH: 'Thunder Bringer', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec6', coverHH: saintHH, titleHH: 'Lembranças', subtitleHH: 'Jorge Rivera-Herrans' },
];

const musicasBoaTardeDataHH = [
    { idHH: 'bt1', coverHH: saintHH, titleHH: 'Sangue', subtitleHH: 'Saint Juvi' },
    { idHH: 'bt2', coverHH: saintHH, titleHH: 'Faça Eles Sentirem', subtitleHH: 'Saint Juvi' },
    { idHH: 'bt3', coverHH: saintHH, titleHH: 'Gal', subtitleHH: 'Saint Juvi' },
    { idHH: 'bt4', coverHH: saintHH, titleHH: 'Enpap', subtitleHH: 'Saint Juvi' },
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
                            onPressHH={() => router.push('./settingstela')}
                        />
                    </View>
                </View>

                <View style={styles.boaTardeHH}>
                    {musicasBoaTardeDataHH.map((item) => (
                        <AlbumButton 
                            key={item.idHH}
                            albumCoverUrlHH={item.coverHH}
                            albumTitleHH={item.titleHH}
                            artistNameHH={item.subtitleHH} 
                            onPressHH={() => console.log('clicou na música do boa tarde:', item.titleHH)}
                        />
                    ))}
                </View>

                <Text style={styles.titleHH}>Episódios para você</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.podcastsHH}>
                    {episodiosDataHH.map((item) => (
                        <PodcastButtonHH 
                            key={item.idHH}
                            URLHH={item.coverHH} 
                            tituloHH={item.titleHH} 
                            subtituloHH={item.artistHH}
                            onPressHH={() => console.log('clicou no episódio:', item.titleHH)}
                        />
                    ))}
                </ScrollView>

                <Text style={styles.titleHH}>Recomendado para hoje</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.podcastsHH}>
                    {recomendadosDataHH.map((item) => (
                        <PodcastButtonHH 
                            key={item.idHH}
                            URLHH={item.coverHH} 
                            tituloHH={item.titleHH} 
                            subtituloHH={item.subtitleHH} 
                            onPressHH={() => console.log('clicou na música:', item.titleHH)}
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
    podcastsHH: {
        paddingHorizontal: 15,
        gap: 15,
    },
    viewGenericaHH:{ 
        flexDirection: 'row',
        gap: 15, 
        paddingHorizontal: 20, 
        width: '100%', 
        flexWrap: 'wrap', 
    },
    boaTardeHH: {
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