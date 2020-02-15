import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Back } from "./components/Icons";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = createAppContainer(
  createStackNavigator({
    Welcome: {
      screen: Welcome,
      navigationOptions: () => ({
        headerShown: false
      })
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerTransparent: true,
        headerLeft: () => <Back navigation={navigation} />
      })
    },
    Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerTransparent: true,
        headerLeft: () => <Back navigation={navigation} />
      })
    }
  })
);

export default Routes;
