import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
export default function (props, store, state, className) {
    return (
        <View style={styles.container}>
            <Text>My First React Native APP</Text>
            <StatusBar style="auto" />
        </View>
    )
}