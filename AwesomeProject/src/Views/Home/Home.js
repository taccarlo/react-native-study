import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import stylesHome from './Home.style';
import styles from '../index.style';
import onPress from './HomeManager';
import strings from '../../Models/Constants/strings.json';

const Home = ({navigation}) => {
  let str = strings.Home[0];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{str.home}</Text>
        <Text style={stylesHome.textInHome}>{str.text1}</Text>
        <Button onPress={() => onPress(navigation)} title={str.goPage} />
      </View>
    </SafeAreaView>
  );
};
export default Home;
