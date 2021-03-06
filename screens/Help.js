import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
} from "react-native";

export default function Help() {
  return (
    <View style={styles.wrapper}>
      <TextInput>Help Page</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
    display: "flex",
  },
});
