
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to About Screen
      </Text>

      <Button
        title="Go back to Main Screen"
        onPress={() => navigation.goBack()}
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

export default About;
