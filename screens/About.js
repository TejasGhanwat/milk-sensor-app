import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput
} from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

export default function About() {
  return (
    <View >
      <Card>
        <Card.Content>
          
          <Paragraph>A mobile application that helps its users determine
          milk's shelf life by simply clicking a picture by
          their smartphone's camera, of our specially designed 
          color sensitive milk sensor. This sensor sits under
          the caps of the milk cans and is coated with a secure
          film that does not allow the sensor to come in contact
          with the milk but has the ability to sense microbial 
          changes with milk's dropping shelf life and changing 
          its color. Our mobile application helps you keep track
          of your milk's shelf life and reminds you of finishing
          it while its fresh! 
          </Paragraph>
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
