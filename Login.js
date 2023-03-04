import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.mainView}>
      <ScrollView>
        <Text style={styles.title}>Login Page</Text>
        <TouchableOpacity
          style={{
            margin: 20,
            backgroundColor: '#b0c17d',
            borderRadius: 20,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('University')}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
            Go to University Page
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 20,
            backgroundColor: '#b0c17d',
            borderRadius: 20,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Map')}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
            Go to Recipient Page
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
});