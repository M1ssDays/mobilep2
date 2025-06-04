import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, ImageSourcePropType } from "react-native";

interface PropsHH {
    albumCoverUrlHH: ImageSourcePropType;
    albumTitleHH: string;
    artistNameHH: string;
    onPressHH?: () => void;
}

export default function AlbumButton({ albumCoverUrlHH, albumTitleHH, artistNameHH, onPressHH }: PropsHH){
    return(
        <TouchableOpacity style={styles.containerHH} onPress={onPressHH}>
            <Image
                style = {styles.imageHH}
                source = {albumCoverUrlHH || require('../../images/placeholder.png')}
            />
            <Text style = {styles.textHH}>{albumTitleHH}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerHH:{
        height: 75,
        width: 180,
        borderRadius: 10,
        backgroundColor: '#303030',
        flexDirection: "row",
        gap: 10,
        alignItems: 'center',
        overflow: 'hidden'
    },

    imageHH:{
        borderRadius: 10,
        height: 75,
        width: 75
    },

    textHH:{
        fontSize: 16,
        color: '#fff',
    }
});