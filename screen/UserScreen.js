import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import data from "../assets/data.json"; // Ensure this path correctly points to your assets folder

class UserScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.setState({
      users: data
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Random Users</Text>
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => item.id.toString()} // Converted to string to prevent React Native warnings
          renderItem={({ item }) => {
            return (
              <View style={styles.userCard}>
                <Text>Name: {item.name}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Age: {item.age}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Keeps content from hiding under device notches/status bars
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userCard: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

export default UserScreen;
