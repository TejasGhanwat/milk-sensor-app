import { StatusBar } from "expo-status-bar";
import React from "react";
import { IconButton, Colors, Button } from 'react-native-paper';

import {
  Text,
  StyleSheet,
  TextInput,
  View,

  Image,
  Platform,
} from "react-native";

export default function Home({navigation}) {

  const goToAbout = ()=>{
     navigation.navigate('About')
  }

  const goToHelp = ()=>{
    navigation.navigate('Help')
 }

 
 const goToHome = ()=>{
  navigation.navigate('Home')
}

const goToCapture = ()=>{
  navigation.navigate('Capture')
}



  return (
    <View style={styles.wrapper}>
      <View style={styles.cameraview}>
        <Image
          source={{
            height: 450,
            width: 400,
            uri:
              "https://www.plasticsmakeitpossible.com/wp-content/uploads/2010/11/Steve-Alexander1.jpg",
          }}
        />
        <StatusBar style='auto' />
      </View>
      <View style={styles.captureButton}>
      <IconButton
      
    icon="camera"
    color={Colors.blue500}
    size={40}
    onPress={goToCapture}
  />
        <StatusBar style='auto' />
      </View>
      <View style={styles.footer}>
      <Button  mode="text" onPress={goToAbout}>
        About
      </Button>
      <Button mode="text" onPress={goToHelp}>Help</Button>
        <StatusBar style='auto' />
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
    paddingTop: Platform.OS === "android" ? 0 : 0,
    display: "flex",
  },
  cameraview: {
    flex: 6,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  captureButton: {
    flex: 2,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  footer: {
    width: 500,
    flex: 1,
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-around",
 
  },

});
