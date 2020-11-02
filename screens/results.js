import React from "react";
import { StyleSheet, View, Platform, Image } from "react-native";
import { Button } from "react-native-paper";

export default function Results({ navigation }) {
  const goToHome = () => {
    navigation.replace("Home");
  };
  return (
    <View style={styles.wrapper}>
      <Button mode='outlined' onPress={goToHome}>
        {" "}
        Capture New
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    paddingTop: Platform.OS === "android" ? 0 : 0,
    display: "flex",
  },
});
