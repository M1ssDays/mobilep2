import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import AlbumButton from './assets/components/AlbumButton'

export default function App() {

  return (
    <LinearGradient
    colors={['rgba(25, 20, 20, 1)', 'rgba(100, 100, 100, 1)']}
    locations={[0.8, 1]}
    start={{x:1, y:1}}
    end={{x:0, y:0}}
    style={[styles.containerHH, { borderWidth: 2, borderColor: 'red' }]}
    >
      <Text style={styles.titleHH}>Boa tarde</Text>
      <AlbumButton
      texto = ""
      URL = ""
      onPress={() => alert}
      />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerHH: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  titleHH:{
    fontSize: 20,
    fontWeight: 900,
    color: '#fff'
  },

  iconbarHH:{
    flexDirection: 'row',
    width: '100%',
    height: 100
  },

});
console.log(Dimensions.get('window'));