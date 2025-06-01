import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import AlbumButton from '../assets/components/AlbumButton'
import IconButton from '../assets/components/IconButton'
import PodcastButton from '../assets/components/PodcastButton'

//detalhe para a inserção de props: para usar uma imagem da internet, use a prop URLHH. para uma imagem local, use ImagemLocalHH.

export default function App() {

  return(
    <LinearGradient
    colors={['rgba(25, 20, 20, 1)', 'rgba(80, 80, 80, 1)']}
    locations={[0.85, 1]}
    start={{x:1, y:1}}
    end={{x:0, y:0}}
    style={styles.containerHH}
    >
      
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        <Text style={styles.titleHH}>Boa tarde</Text>
        <View style={{flexDirection: 'row', padding: 20, gap: 10}}>
            <IconButton URLHH = "https://img.icons8.com/m_outlined/512/FFFFFF/appointment-reminders--v2.png"/>
            <IconButton URLHH = "https://img.icons8.com/m_outlined/200/FFFFFF/clock.png"/>
            <IconButton URLHH = "https://img.icons8.com/m_outlined/512/FFFFFF/settings.png"/>
        </View>
      </View>

      <View style={styles.viewGenericaHH}>
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
      <View style={styles.viewGenericaHH}>
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

      <Text style={styles.titleHH}>Episódios para você</Text>
      <View style={styles.viewGenericaHH}>
        <PodcastButton
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        tituloHH = 'Omniscient Reader'
        subtituloHH = 'A novel virou real e só eu tinha lido'
        />
        <PodcastButton
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        tituloHH = 'Magnus Archives'
        subtituloHH= 'Tinham documentos sobrenaturais na biblioteca'
        />
      </View>

      <Text style={styles.titleHH}>Recomendado para hoje</Text>
      <View style={styles.viewGenericaHH}>
        <PodcastButton
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        tituloHH = 'Hollow Knight: Gods & Nightmares'
        subtituloHH = ''
        />
        <PodcastButton
        URLHH = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        tituloHH = 'O Segredo Na Ilha'
        subtituloHH= ''
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
    fontSize: 28,
    fontWeight: 700,
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 20,
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

console.log(Dimensions.get('window'));