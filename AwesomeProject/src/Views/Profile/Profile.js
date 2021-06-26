import {images} from '../../Models/Constants';
import React from 'react';
import {Image, View, Text} from 'react-native';

const Profile = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>Profile</Text>

      <Image
        source={require('../../../assets/GTSA-logo.png')} //images.GTSA_logo}
        style={{
          margin: 5,
          resizeMode: 'stretch',
          height: 200,
        }}
      />
    </View>
  );
};

export default Profile;
