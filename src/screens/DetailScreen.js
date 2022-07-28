import React from "react";
import { View, Text, Button } from 'react-native';

const DetailScreen = ({navigation}) => {
    return (
        <View style={{ top: 300 }}>
            <Text style={{textAlign: 'center'}}>This is Details Screen</Text>
            <Button title="Go to Detail Screen" onPress={() => navigation.navigate("Home")}>Go to Home Screen</Button>
        </View>
    );
}

export default DetailScreen;