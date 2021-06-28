import {images} from '../../Models/Constants';
import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';

import style from '../index.style';
import styleProfile from './Profile.style';
import strings from '../../Models/Constants/strings.json';

const Profile = () => {
  let str = strings.Profile[0];
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.title}>{str.profile}</Text>
        <Image source={images.GTSA_logo} style={styleProfile.imageInProfile} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
