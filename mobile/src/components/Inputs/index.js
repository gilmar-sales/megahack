import React from "react";
import { StyleSheet, View } from "react-native"
import { Input } from "native-base"



export class RoundedTextInput extends React.Component {

  constructor(props) {
    super();
    this.props = props;

    this.state = { hasFocus: false };
  }

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this)
    }
  }

  render() {
    const {
      placeholder = "Type here",
      style = {},
      placeholderColor = "#888888",
      autoFocus = false,
      keyboardType = "default",
      returnKeyType = "default"
    } = this.props;

    return (
      <View style={{ width: "100%", height: styles.textInput.height, alignItems: "center", marginBottom: 20 }}>
        <Input
          ref={input => this.textInput = input}
          style={[styles.textInput, style, (this.state.hasFocus ? styles.textInputFocus : {})]}
          placeholder={placeholder}
          placeholderTextColor={[placeholderColor]}
          autoFocus={autoFocus}
          onFocus={this.setFocus.bind(this, true)} onBlur={this.setFocus.bind(this, false)}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
        ></Input>
      </View>
    );
  }

  focus() {
    this.textInput._root.focus()
  }

  onSubmitEditing() {
    if (this.props.onSubmitEditing)
      this.props.onSubmitEditing();
  }

  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }
}


const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    height: 48,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    color: "#555",
    borderColor: "#ccc",
    borderRadius: 24,
    paddingLeft: 20,
    fontSize: 18
  },
  textInputFocus: {
    borderColor: "#4B45BD",
    borderWidth: 2
  }
});