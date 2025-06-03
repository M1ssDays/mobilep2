import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import ConfigButton from '../assets/components/Buttons/ConfigButton';
import ProfileButton from '../assets/components/Buttons/ProfileButton';
import { router } from 'expo-router';

export default function SettingsTelaHH() {

  return(
    <LinearGradient
    colors={['rgba(25, 20, 20, 1)', 'rgba(25, 20, 20, 1)']}
    locations={[0.7, 1]}
    start={{x:0.5, y:1}}
    end={{x:0.5, y:0}}
    style={styles.containerHH}
    >
    
    <View style={{margin: 20, display: 'flex', flexDirection: 'row', width: '60%', height: 30, justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start'}}>
        <TouchableOpacity onPress={()=> router.back()}>
            <Image source={{uri: 'https://streamline.imgix.net/3b6a532d-fc58-426a-b477-97183707d511/297c327f-b5de-415f-bfd9-2ff95f2deb6a/icon-arrows.png?ixlib=rb-1.1.0&or=0&w=720&h=720&fit=max&auto=format%2Ccompress&s=f271566223602ad361e105be2ad41716'}} style={{width: 20, height: 20, transform: [{ scaleX: -1 }]}}/>
        </TouchableOpacity>
        <Text style={styles.titleHH}>Configurar</Text>
    </View>

    <ProfileButton
    URLHH='https://yt3.googleusercontent.com/ytc/AIdro_l_0RH7fBbJuJ227nz-WUdobkVIEexa-2w0fc0XHzvtA-g=s160-c-k-c0x00ffffff-no-rj'
    tituloHH='duccline'
    subtituloHH='Ver perfil'
    onPressHH={()=> router.push('/profile')}
    />

    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <ConfigButton textHH='Conta'/>
        <ConfigButton textHH='Economia de dados'/>
        <ConfigButton textHH='Idiomas'/>
        <ConfigButton textHH='Reprodução'/>
        <ConfigButton textHH='Conteúdo explícito'/>
        <ConfigButton textHH='Dispositivos'/>
        <ConfigButton textHH='Carro'/>
        <ConfigButton textHH='Redes sociais'/>
        <ConfigButton textHH='Assistentes de voz e aplicativos'/>
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

