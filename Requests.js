import React from 'react';

import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Requests({ navigation }) {

    return (
        <SafeAreaView style={styles.mainView}>
            <ScrollView>
                <Text style={styles.title}>Requests</Text>
            </ScrollView>
        </SafeAreaView>
    )
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
        marginTop: 40,
        color: 'white',
    },
});