import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-paper";
import ImageColors from "react-native-image-colors";

export default function Capture({ navigation }) {
  const initialState = {
    colorOne: { value: "", name: "" },
    colorTwo: { value: "", name: "" },
    colorThree: { value: "", name: "" },
    colorFour: { value: "", name: "" },
    rawResult: "",
  };

  const [colors, setColors] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await ImageColors.getColors(yunaUrl, {
        fallback: "#000000",
        quality: "low",
        pixelSpacing: 5,
      });

      if (result.platform === "android") {
        setColors({
          colorOne: { value: result.average, name: "average" },
          colorTwo: { value: result.dominant, name: "dominant" },
          colorThree: { value: result.vibrant, name: "vibrant" },
          colorFour: { value: result.darkVibrant, name: "darkVibrant" },
          rawResult: JSON.stringify(result),
        });
      } else {
        setColors({
          colorOne: { value: result.background, name: "background" },
          colorTwo: { value: result.detail, name: "detail" },
          colorThree: { value: result.primary, name: "primary" },
          colorFour: { value: result.secondary, name: "secondary" },
          rawResult: JSON.stringify(result),
        });
      }

      setLoading(false);
    };

    fetchColors();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  const goToResults = () => {
    navigation.navigate("Results");
  };

  const yunaUrl = navigation.getParam("photo");

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.resultContainer}>
        <Text style={styles.loading}>Result:</Text>
        <Text style={styles.result}>{colors.rawResult}</Text>
      </SafeAreaView>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={{ uri: yunaUrl }}
      />
      <View style={styles.row}>
        <Box name={colors.colorOne.name} value={colors.colorOne.value} />
        <Box name={colors.colorTwo.name} value={colors.colorTwo.value} />
      </View>
      <View style={styles.row}>
        <Box name={colors.colorThree.name} value={colors.colorThree.value} />
        <Box name={colors.colorFour.name} value={colors.colorFour.value} />
      </View>
      <Image
        source={{ uri: yunaUrl.uri }}
        style={{ width: 380, height: 550 }}
      />
      <View style={styles.captureButton}>
        <Button mode='outlined' onPress={goToResults}>
          Proceed
        </Button>
      </View>
    </View>
  );
}

const Box = (props) => {
  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: props.value,
        },
      ]}
    >
      <Text style={styles.colorName}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  colorName: {
    backgroundColor: "white",
    padding: 4,
    fontSize: 18,
  },
  box: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  resultContainer: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  result: {
    textAlign: "center",
    color: "#333333",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
    display: "flex",
    flex: 3,
  },
  captureButton: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
