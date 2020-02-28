import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

Icon.loadFont();

export const Back = ({ navigation }) => (
  <Icon
    onPress={() => navigation.goBack()}
    name="keyboard-arrow-left"
    style={{
      position: "absolute",
      fontSize: 35,
      color: "#333",
      width: 35,
      height: 35,
      left: 10
    }}
  />
);
