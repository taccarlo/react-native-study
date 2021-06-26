import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import stylesHome from './Home.style';
import styles from '../index.style';
import onPress from './HomeManager';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Home</Text>
        <Text style={stylesHome.textInHome}>
          This text is just in Home view
        </Text>
        <Button onPress={() => onPress(navigation)} title="Go To Page" />
      </View>
    </SafeAreaView>
  );
};
export default Home;
