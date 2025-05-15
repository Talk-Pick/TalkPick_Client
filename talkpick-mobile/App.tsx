import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>WebView Demo</Text>
      <WebView
        style={styles.webview}
        source={{ uri: "http://localhost:5173" }}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  webview: {
    flex: 1,
    marginTop: 5,
  },
});
