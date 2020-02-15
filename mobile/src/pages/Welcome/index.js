import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RoundedButton } from "../../components/Buttons";

// import { Container } from './styles';

export default function Welcome({ navigation }) {
  function handleOnPress() {
    navigation.navigate("Login");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome</Text>
      <RoundedButton title="Criar uma conta" onPress={() => navigation.navigate("Register")} />
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}
