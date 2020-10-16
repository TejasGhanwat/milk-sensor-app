import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Image
} from "react-native";
import { Button } from 'react-native-paper';
import ImageColors from "react-native-image-colors"

export default function Capture({navigation}) {
  
  const imageUri = navigation.getParam('photo')

  const goToResults =async ()=>{
    navigation.navigate('Results')

    // const colors = await ImageColors.getColors(imageUri.uri, {
    //   fallback: "#228B22",
    // })
    
    // if (colors.platform === "android") {
    //   // Access android properties
    //   // e.g.
    //   const averageColor = colors.average
    //   console.log(averageColor)
    // } else {
    //   // Access iOS properties
    //   // e.g.
    //   const backgroundColor = colors.background
    // }
  }



 



   return (
    <View style={styles.wrapper}>
      <Image source={{ uri: imageUri.uri}} style={{width:380,height:550}}/>
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
