import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import MusicButton from '../../assets/components/Buttons/MusicButton';
import SearchBar from '../../assets/components/SearchBar';
import { router } from 'expo-router';

export default function SettingsHH() {

  return(
    <LinearGradient
    colors={['rgba(25, 20, 20, 1)', '#1E142D']}
    locations={[0.7, 1]}
    start={{x:0.5, y:1}}
    end={{x:0.5, y:0}}
    style={styles.containerHH}
    >
    <SearchBar/>
    <View style={{gap: 25, flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <MusicButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='Suffering'
        subtextoHH='EPIC etc'
        />
        <MusicButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='Scylla'
        subtextoHH='blabla'
        />  
        <MusicButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='Lembranças'
        subtextoHH='Saint Juvi'
        />
        <MusicButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='Suffering'
        subtextoHH='EPIC etc'
        />
        <MusicButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='Scylla'
        subtextoHH='blabla'
        />  
        <MusicButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='Lembranças'
        subtextoHH='Saint Juvi'
        />
    </View>
    
    <StatusBar style="auto" />
    </LinearGradient>
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
  }
});

