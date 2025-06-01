import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

interface Props {
URL: string
texto: string;
onPress: () => void;
}


export default function AlbumButton(props:Props){
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image 
            style = {styles.image}
            source = {{uri: props.URL}}/>
            <Text style = {styles.text}> {props.texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: 150,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        gap: 5
    },

    image:{
        borderRadius: 10
    },

    text:{
        fontSize: 20
    }
});