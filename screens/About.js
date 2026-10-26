import React from "react";
import {View , Stylesheet , Text , Button} from 'react-native';


const About =({navigation})=> {
    return(
        <View>
            <Text>Welcome to About Screen</Text>
            <Button
            title='Go back to Main Screen'
            onPress={()=>navigation.goBack()}
            />
        </View>
    );
}


export default About;