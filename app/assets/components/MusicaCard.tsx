import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";


type DadosMusicaHH = {
    urlHH: ImageSourcePropType;
    tituloHH?: string;
    artistaHH?: string;
    onPressHH?: () => void;
};

export default function MusicaHH({urlHH, artistaHH, tituloHH, onPressHH}: DadosMusicaHH){
    return(
         <TouchableOpacity style={styles.cardHH} onPress={onPressHH}>
            {urlHH && <Image source={urlHH} style={styles.imagemHH}/>}

            <View style={styles.textoContainerHH}>
                <Text style={styles.tituloHH}>{tituloHH}</Text>
                <Text style={styles.artistaHH}>{artistaHH}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardHH:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#282828',
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
        fontSize: 14,
        color: '#ccc',
    },
    textoContainerHH: {
        flex: 1,
        justifyContent: 'center',
    },
})