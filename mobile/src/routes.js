import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Back } from "./components/Icons";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

const Routes = createAppContainer(
  createStackNavigator({
    Welcome: {
      screen: Welcome,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerTransparent: true,
        headerLeft: () => <Back navigation={navigation} />
      })
    }
  })
);

export default Routes;
