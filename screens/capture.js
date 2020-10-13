import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  Image
} from "react-native";
import { IconButton, Colors, Button } from 'react-native-paper';

export default function Capture({navigation}) {

  const goToResults = ()=>{
    navigation.navigate('Results')
  }
  
  return (
    <View style={styles.wrapper}>
      <Image style={{height:500, width:400}} source={require('../images/camera.jpg')} />
      <View style={styles.captureButton}>
      <Button mode="outlined" onPress={goToResults}>
        Proceed
      </Button>
      </View>
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
    flex:3
  },
  captureButton: {
    marginTop:40,
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
