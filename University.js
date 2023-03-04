import React, { useState, useEffect } from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function University({ navigation }) {

    const [currentDate, setcurrentDate] = useState('')

    const monthName = ['January', 'Febuary', 'March', 'April', 'May', 
        'June', 'July', 'August', 'September', 'October', 'November', 'December']

    useEffect(() => {
        var date = new Date().getDate()
        var month = new Date().getMonth()

        setcurrentDate(
            monthName[month] + ' ' + date
        )
    }, [])

    return (
            <ScrollView>
                <SafeAreaView style={styles.mainView}>
                <Text style={styles.dateStyle}>
                    {currentDate}
                </Text>
                </SafeAreaView>
                <View
                    style={{
                        paddingTop: 0,
                        padding: 0,
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: 170,
                        bottom: 0,
                        width: 390,
                        borderRadius: 40
                      }}>
                    <TouchableOpacity
                        style={{
                            margin: 25,
                            marginTop: 50,
                            backgroundColor: '#63692B',
                            borderRadius: 50,
                            padding: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowOpacity: 0.3,
                            elevation: 20,
                            shadowRadius: 5 ,
                            shadowOffset : { width: 1, height: 10},
                        }}
                        onPress={() => navigation.navigate('Table')}>
                        <Text style={{ color: 'black', fontWeight: '600', fontSize: 22 }}>
                            Breakfast
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            margin: 25,
                            marginTop: 10,
                            backgroundColor: '#63692B',
                            borderRadius: 50,
                            padding: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowOpacity: 0.3,
                            elevation: 20,
                            shadowRadius: 5 ,
                            shadowOffset : { width: 1, height: 10},
                        }}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: 'black', fontWeight: '600', fontSize: 22, fontStyle: 'Avenir next' }}>
                            Lunch
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            margin: 25,
                            marginTop: 10,
                            backgroundColor: '#63692B',
                            borderRadius: 50,
                            padding: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowOpacity: 0.3,
                            elevation: 20,
                            shadowRadius: 5 ,
                            shadowOffset : { width: 1, height: 10},
                        }}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: 'black', fontWeight: '600', fontSize: 22, fontStyle: 'Avenir next' }}>
                            Dinner
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            margin: 25,
                            marginTop: 50,
                            backgroundColor: '#d75c42',
                            borderRadius: 10,
                            padding: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowOpacity: 0.3,
                            elevation: 20,
                            shadowRadius: 5 ,
                            shadowOffset : { width: 1, height: 10},
                        }}
                        onPress={() => navigation.navigate('Requests')}>
                        <Text style={{ color: 'black', fontWeight: '700', fontSize: 30, fontStyle: 'Avenir next' }}>
                            Requests
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#B0C17D',
    },
    dateStyle: {
        textAlign: 'center',
        fontSize: 45,
        fontWeight: '800',
        color: 'white',
        marginTop: 25,
        fontStyle: 'Avenir next'
    }
});
