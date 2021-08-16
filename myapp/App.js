import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Image,
} from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import * as Updates from "expo-updates";
import * as Device from "expo-device";
//import { getUniqueId, getManufacturer } from 'react-native-device-info';
import { URL, DEV_URL } from "@env"


export default function App() {
  const webviewRef = useRef();

  const checkforupdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...
        await Updates.reloadAsync();
      }
    } catch (e) {
      // handle or log error
      alert(e);
    }
  };
  React.useEffect(() => {
    checkforupdates();
  }, []);

  // for activity indicator
  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <Image
          source={require("./assets/logo.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />

        <Text
          style={{
            marginVertical: 10,
            fontSize: 30,
            textAlign: "center",
            width: "90%",
          }}
        >
          Loading Please Wait
        </Text>
        <ActivityIndicator color="#009688" size="large" />
        <View
          style={{ height: "45%", backgroundColor: "#fff", width: "100%" }}
        ></View>
      </View>
    );
  };

  //getting device information

  const osName = Device.osName;
  const brand = Device.brand;
  const modelName = Device.modelName;
  const modelId = Device.modelId;
  const osVersion = Device.osVersion;
  const osbuild = Device.osBuildId;
  const isDevice = Device.isDevice;
  const Manufacturer = Device.manufacturer;//getManufacturer();//Device.manufacturer;
  const totalMemory = Device.totalMemory;
  //const uniqueId = getUniqueId();

  //DeviceInfo.getUniqueId()

  const jscode = `window.mobapp={
    "name":"${osName}",
    "Brand":"${brand}",
    "ModelName":"${modelName}",
    "ModelId":"${modelId}",
    "OsVersion":"${osVersion}",
    "OsBuild":"${osbuild}",
    "IsDevice":"${isDevice}",
    "Manufacturer":"${Manufacturer}",
    "totalMemory":"${totalMemory}"
  }`;
  console.log("DEV_URL", DEV_URL);
  return (
    <WebView
      javaScriptEnabled={true}
      startInLoadingState={true}
      injectedJavaScriptBeforeContentLoaded={jscode}
      injectedJavaScript={jscode}
      renderLoading={ActivityIndicatorElement}
      style={{ flex: 1, marginTop: Constants.statusBarHeight }}
      source={{ uri: DEV_URL }}
      onMessage={(event) => { }}
      //For the Cache
      domStorageEnabled={true}

    //View to show while loading the webpage
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicatorStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
