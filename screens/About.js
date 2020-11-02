import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
  TextInput,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";

export default function About() {
  return (
    <View>
      <Card>
        <Card.Content>
          <Image
            source={{
              uri:
                "https://www.wane.com/wp-content/uploads/sites/21/2018/09/Walmart_Great_Value_milk_expiration_0_50873475_ver1.0.jpg",
            }}
            style={{ width: 400, height: 250 }}
          />
          <Paragraph style={{ fontSize: 20 }}>
            A mobile application that helps its users determine milk's shelf
            life by simply clicking a picture by their smartphone's camera, of
            our specially designed color sensitive milk sensor. This sensor sits
            under the caps of the milk cans and is coated with a secure film
            that does not allow the sensor to come in contact with the milk but
            has the ability to sense microbial changes with milk's dropping
            shelf life and changing its color. Our mobile application helps you
            keep track of your milk's shelf life and reminds you of finishing it
            while its fresh!
          </Paragraph>
          <Image
            source={{
              uri:
                "https://media-exp1.licdn.com/dms/image/C4E12AQHHPR5ytUp-mQ/article-inline_image-shrink_1000_1488/0?e=1606953600&v=beta&t=egMOmoUBhKE0oysKcv_b7jRUx8YnAdvHCOJQr40-DHU",
            }}
            style={{ width: 400, height: 200 }}
          />
        </Card.Content>
      </Card>
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
