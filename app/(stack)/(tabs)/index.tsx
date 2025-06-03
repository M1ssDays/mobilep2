import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import IconButtonHH from '../../assets/components/Buttons/IconButton';
import PodcastButtonHH from '../../assets/components/Buttons/PodcastButton'; 
import AlbumButton from '../../assets/components/Buttons/AlbumButton';
import { router } from 'expo-router';

const localPlaceholderImage = require('../../assets/images/placeholder.png');
const balela = require('../../assets/images/balela.jpg');
const orv = require('../../assets/images/ovr.jpg');
const magnum = require('../../assets/images/magnun.jpg');
const roxana = require('../../assets/images/roxana.jpg');
const hollow = require('../../assets/images/hollow knight.jpg');
const epic = require('../../assets/images/epic.jpg');
const saint = require('../../assets/images/saintjuvi.jpg');

const episodiosDataHH = [
    { idHH: 'epi1', coverHH:  balela, titleHH: 'Balela podcast ep 1', artistHH: 'Calango' },
    { idHH: 'epi2', coverHH: orv, titleHH: 'Omniscient Reader ', artistHH: 'Spoiler' },
    { idHH: 'epi3', coverHH:  magnum, titleHH: 'Magnum Archives ', artistHH: 'Magnum' },
    { idHH: 'epi4', coverHH: roxana, titleHH: 'Roxana ep 49', artistHH: 'Roxana' },
    { idHH: 'epi5', coverHH: hollow, titleHH: 'Hollow Knight ep 10', artistHH: 'Team Cherry' },
];

const recomendadosDataHH = [
    { idHH: 'rec1', coverHH: epic, titleHH: 'Suffering', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec2', coverHH: epic, titleHH: 'Different Beast', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec3', coverHH: epic, titleHH: 'Scylla', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec4', coverHH: epic, titleHH: 'Mutiny', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec5', coverHH: epic, titleHH: 'Thunder Bringer', subtitleHH: 'Jorge Rivera-Herrans' },
    { idHH: 'rec6', coverHH: saint, titleHH: 'Lembranças', subtitleHH: 'Jorge Rivera-Herrans' },
];

const musicasBoaTardeDataHH = [
    { idHH: 'bt1', coverHH: saint, titleHH: 'Sangue', subtitleHH: 'Saint Juvi' },
    { idHH: 'bt2', coverHH: saint, titleHH: 'Faça Eles Sentirem', subtitleHH: 'Saint Juvi' },
    { idHH: 'bt3', coverHH: saint, titleHH: 'Gal', subtitleHH: 'Saint Juvi' },
    { idHH: 'bt4', coverHH: saint, titleHH: 'Enpap', subtitleHH: 'Saint Juvi' },
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
        gap: 15,
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