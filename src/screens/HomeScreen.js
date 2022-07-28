import React from "react";
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ top: 300 }}>
            <Text style={{textAlign: 'center'}}>This is Home Screen</Text>
            <Button 
                title="Go to Detail Screen" 
                onPress={() => navigation.navigate("Detail")}>
                Go to Detail Screen
            </Button>
        </View>
    );
}

export default HomeScreen;