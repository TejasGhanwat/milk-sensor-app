import React, { useState, useEffect, useRef } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { IconButton, Colors, Button } from "react-native-paper";
import { StyleSheet, Platform } from "react-native";

export default function Home({ navigation }) {
  const goToAbout = () => {
    navigation.navigate("About");
  };

  const goToHelp = () => {
    navigation.navigate("Help");
  };

  const camera = useRef<Camera | null>();

  const _toggleFlash = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };
  const takePicture = async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      let photo = await camera.current.takePictureAsync(options);
      console.log(camera.current.getSupportedRatiosAsync());
      const source = photo.uri;

      if (source) {
        camera.current.resumePreview();
        navigation.navigate("Capture", { photo: photo });
        console.log("picture source", source);
      }
    }
  };

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera ref={camera} style={{ flex: 2.5 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => _toggleFlash()}>
            <Icon
              name={flash === Camera.Constants.FlashMode.on ? "zap" : "zap-off"}
              size={20}
              color='white'
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <IconButton
        icon='camera'
        size={50}
        style={styles.captureButton}
        onPress={takePicture}
      />
      <View style={styles.footer}>
        <Button mode='text' onPress={goToAbout}>
          About
        </Button>
        <Button mode='text' onPress={goToHelp}>
          Help
        </Button>
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  captureButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  footer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
});
