import React from "react";
import { View, Text, Button } from 'react-native';

const OnBoardScreen = ({navigation}) => {
    return (
        <View style={{ top: 300 }}>
            <Text style={{textAlign: 'center'}}>This is Onboard Screen</Text>
            <Button 
                title="Go to Detail Screen" 
                onPress={() => navigation.navigate('Home')}>
                    Go to Home Screen
            </Button>
        </View>
    );
}

export default OnBoardScreen;