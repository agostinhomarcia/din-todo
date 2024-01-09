import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });
  return (
    <View style={styles.container}>
      {!fontsLoaded ? (
        <Text>Carregou...</Text>
      ) : (
        <ActivityIndicator size={55} />
      )}
      <StatusBar style="auto" />
    </View>
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
