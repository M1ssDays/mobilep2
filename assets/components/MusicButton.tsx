import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function MusicButton(){
    return(
        <TouchableOpacity style = {styles.container} onPress={() => alert("pressionado")}>
            <Image style = {styles.image}/>
            <Text style = {styles.text}></Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{

    },

    image:{

    },

    text:{

    }
});