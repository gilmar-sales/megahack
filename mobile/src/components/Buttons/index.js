import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "native-base";

export class RoundedButton extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { title = "button", style = {}, textStyle = {}, onPress } = this.props;

    return (
      <Button style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#4B45BD",
    borderRadius: 24,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    textTransform: "capitalize",
    alignSelf: "center"
  }
});