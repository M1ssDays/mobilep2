import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

export default function SearchBar(){
    const[texto, setTexto] = useState('');
    return(
        <View style={styles.containerHH}>
            <Image source={{uri: 'https://img.icons8.com/ios7/600/FFFFFF/search.png'}}/>
            <TextInput placeholder='Procurar...' onChangeText={setTexto} value={texto} style={styles.inputHH}/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerHH:{

    },
    
    inputHH:{

    },

    imageHH:{

    }
})

