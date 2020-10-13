import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput
} from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

export default function Results() {
  return (
    <View style={styles.wrapper} >
      
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent:"center",
    textAlign:"center",
    paddingTop: Platform.OS === "android" ? 0 : 0,
    display: "flex",
  },
});
