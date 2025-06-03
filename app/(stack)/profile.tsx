import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import ConfigButton from '../assets/components/Buttons/ConfigButton';
import PlaylistButton from '../assets/components/Buttons/PlaylistButton';
import ProfileCard from '../assets/components/ProfileCard';
import { router } from 'expo-router';

export default function ProfileHH() {

  return(
    <LinearGradient
    colors={['rgba(25, 20, 20, 1)', 'rgba(30, 215, 96, 1)']}
    locations={[0.7, 1]}
    start={{x:0.5, y:1}}
    end={{x:0.5, y:0}}
    style={styles.containerHH}
    >
    
    <View style={{margin: 20, display: 'flex', flexDirection: 'row', width: '90%', height: 30, justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center'}}>
        <TouchableOpacity onPress={()=> router.back()}>
            <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/arrows-jumpicon-glyph/32/-_Double_Left-Arrow-Direction-Back-Move-512.png'}} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {}}>
            <Image source={{uri: 'https://www.svgrepo.com/show/124304/three-dots.svg'}} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
    </View>

    <ProfileCard
    URLHH='https://yt3.googleusercontent.com/ytc/AIdro_l_0RH7fBbJuJ227nz-WUdobkVIEexa-2w0fc0XHzvtA-g=s160-c-k-c0x00ffffff-no-rj'
    tituloHH='duccline'
    buttonHH='Editar perfil'
    onPressHH={()=> {}}
    />

    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: 15}}>
        <Text style={styles.titleHH}>Playlists</Text>
        <PlaylistButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='EPIC The Musical favs'
        subtextoHH='3 saves'
        />
        <PlaylistButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='sever the skyline (coloca img de celeste)'
        subtextoHH='9 saves'
        />  
        <PlaylistButton
        URLHH='https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        textoHH='breakcore'
        subtextoHH='2 saves'
        />
        <ConfigButton textHH='Veja todas as 7 playlists:'/>
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
    marginLeft: 20,
    alignSelf: 'flex-start'
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

