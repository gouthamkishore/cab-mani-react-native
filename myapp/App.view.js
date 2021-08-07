import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
export default function (props, store, state, styles, className, storeState) {
    return (
        <Provider store={storeState}>
            <View style={styles.container}>
                <Text>My First React Native APP</Text>
                <StatusBar style="auto" />
            </View>
        </Provider>
    )
}