import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Produto from '../components/Produto'
import { musicasHH } from '../components/musicas';
import AlbumButton from '../assets/components/AlbumButton'
import IconButton from '../assets/components/IconButton'

//detalhe para a inserção de props: para usar uma imagem da internet, use a prop URLHH. para uma imagem local, use ImagemLocalHH.

export default function App() {

  const [buscaHH, setBuscaHH] = useState('');

  
  return(
    <LinearGradient
    colors={['rgba(25, 20, 20, 1)', 'rgba(80, 80, 80, 1)']}
    locations={[0.85, 1]}
    start={{x:1, y:1}}
    end={{x:0, y:0}}
    style={styles.containerHH}
    >
      
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20}}>
        <Text style={styles.titleHH}>Boa tarde</Text>
        <View style={{flexDirection: 'row'}}>
            <IconButton URLHH = "https://img.icons8.com/m_outlined/200/FFFFFF/clock.png"/>
            <IconButton URLHH = "https://img.icons8.com/m_outlined/200/FFFFFF/clock.png"/>
            <IconButton URLHH = "https://img.icons8.com/m_outlined/512/FFFFFF/settings.png"/>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 10}}>
        <AlbumButton
        textoHH = "epic"
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        onPressHH={() => alert("apertou")}
        />
        <AlbumButton
        textoHH = "desconjuração"
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        onPressHH={() => alert("apertou")}
        />
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <AlbumButton
        textoHH = "epic"
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        onPressHH={() => alert("apertou")}
        />
        <AlbumButton
        textoHH = "desconjuração"
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        onPressHH={() => alert("apertou")}
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
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    gap: 10,
  },

  titleHH:{
    fontSize: 28,
    fontWeight: 700,
    color: '#fff'
  },

  iconbarHH:{
    flexDirection: 'row',
    width: '100%',
    height: 100
  },

});

console.log(Dimensions.get('window'));