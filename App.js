import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import BottomTabNavigator from "./navigator/TabNavigator";
import DrawerNavigator from "./navigator/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

