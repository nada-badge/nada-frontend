import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000);
  }, []);

  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://docs.expo.dev/versions/latest/sdk/webview/" }}
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
});
