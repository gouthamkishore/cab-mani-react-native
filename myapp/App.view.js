import * as React from 'react';
// import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';
import { Provider } from "react-redux";
import { StatusBar } from 'expo-status-bar';
export default function (props, store, state, styles, className, storeState) {
    const javascript = `window.android={enabled:true};`;
    return (
        <Provider store={storeState}>
            <View style={styles.container}>
                <Text>My First React Native APP</Text>
                <StatusBar style="auto" />
            </View>
            {/* <View style={styles.container}>
                <WebView
                    style={styles.container}
                    source={{ uri: 'https://findmycabs.com' }}
                    onError={(e) => alert('Error', e.nativeEvent.description)}
                    injectedJavaScriptBeforeContentLoaded={javascript}
                />
            </View> */}
        </Provider>
    )
}