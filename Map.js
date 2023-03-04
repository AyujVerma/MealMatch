import React from 'react';
import MapView from 'react-native-maps';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';

export default function Map({navigation}) {
    const [region, setRegion] = React.useState({
        latitude: 30.284918,
        longitude: -97.734055,
        latitudeDelta: 0.922,
        longitudeDelta: 0.0421
      })
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Dashboard</Text>      
          <MapView
            initialRegion={region}
            showsUserLocation={false}
            showsCompass={true}
            rotateEnabled={true}
            style={styles.map} 
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#121212',
    },
    map: {
      borderTopRightRadius: 20, 
      borderTopLeftRadius: 20,
      top: 140,
      left: 0, 
      right: 0, 
      bottom: 0,
      position: 'absolute'
    },
    title: {
      fontSize: 30,
      fontWeight: '800',
      textAlign: 'center',
      marginTop: 80,
      color: 'white',
    }
  });