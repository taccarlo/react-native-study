import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => onPress(navigation)} title="Go To Page" />
    </View>
  );
};

function onPress(navigation) {
  Alert.alert('ciao');
  navigation.navigate('Profile');
}

export default Home;
