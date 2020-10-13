import React from "react";
import AppNavigator from './routes/homeStack'

import {
  StyleSheet,
  View,
  Platform,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? 40 : 0,
    display: "flex",
  },
 
});
