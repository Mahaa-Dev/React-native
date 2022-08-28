import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
    useFonts,
    FingerPaint_400Regular
} from '@expo-google-fonts/finger-paint'
import AppLoading from 'expo-app-loading';


export default function App() {

    let [fontsLoaded] = useFonts({
        FingerPaint_400Regular
    });

    if (!fontsLoaded) {
        return (
            <AppLoading />
        )
    } else

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello World!</Text>
                <StatusBar style="auto" />
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'FingerPaint_400Regular'
    }
});
