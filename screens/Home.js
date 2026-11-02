
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Home Screen
      </Text>

      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Home;
