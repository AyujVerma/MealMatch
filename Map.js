import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
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
    const [ pin, setPin ] = React.useState({
		  latitude: 30.284918,
		  longitude: -97.734055
	  })
    const [ pin2, setPin2 ] = React.useState({
		  latitude: 30.685918,
		  longitude: -97.734055
	  })
    const [ pin3, setPin3 ] = React.useState({
		  latitude: 30.384918,
		  longitude: -97.834055
	  })
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
          >
            <Marker
					coordinate={pin}
					pinColor="black"
					draggable={true}
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: 30.284918,
							longitude: -97.734055
						})
					}}
				>
					<Callout>
						<Text>Low</Text>
					</Callout>
				</Marker>
        <Marker
					coordinate={pin2}
					pinColor="red"
					draggable={true}
					onDragStart={(f) => {
						console.log("Drag start", f.nativeEvent.coordinates)
					}}
					onDragEnd={(f) => {
						setPin2({
							latitude: 35.284918,
							longitude: -97.734055
						})
					}}
				>
					<Callout>
						<Text>High</Text>
					</Callout>
				</Marker>
        <Marker
					coordinate={pin3}
					pinColor="green"
					draggable={true}
					onDragStart={(f) => {
						console.log("Drag start", f.nativeEvent.coordinates)
					}}
					onDragEnd={(f) => {
						setPin3({
							latitude: 35.284918,
							longitude: -97.734055
						})
					}}
				>
					<Callout>
						<Text>Medium</Text>
					</Callout>
				</Marker>
          </MapView>

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