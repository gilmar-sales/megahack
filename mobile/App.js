import React from "react";
import { View, StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </View>
  );
}
