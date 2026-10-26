

import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Welcome to home screen</Text>

            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate("About")}
            />
        </View>
    );
};

export default Home;
