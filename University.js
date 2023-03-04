import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default function University({ navigation }) {

    return (
        <SafeAreaView style={styles.mainView}>
            <ScrollView>
                <Text style={styles.title}>University Screen</Text>
                <Text style={styles.title}>University Screen</Text>
                <TouchableOpacity
                    style={{
                        margin: 20,
                        backgroundColor: '#65b86c',
                        borderRadius: 20,
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>
                        Go to Login Page
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