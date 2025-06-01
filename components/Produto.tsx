import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


type DadosMusicaHH = {
    urlHH?: string;
    tituloHH?: string;
    artistaHH?: string;
};

export default function MusicaHH({urlHH, artistaHH, tituloHH}: DadosMusicaHH){
    return(
        <View style={styles.cardHH}>
            <Image source={{uri: urlHH}} style={styles.imagemHH}/>

            <View>
                <Text style={styles.tituloHH}>{tituloHH}</Text>
                <Text style={styles.artistaHH}>{artistaHH}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardHH:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#0071a5',
        padding:10,
        borderRadius:10,
        marginBottom:10,
    },
    imagemHH:{
        width: 60,
        height: 60,
        borderRadius:8,
        marginRight:10,
    },
    tituloHH:{
        fontSize: 28,
        fontWeight: 700,
        color: '#fff'
    },
    artistaHH:{

    },
})