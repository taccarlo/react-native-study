import {images} from '../../Models/Constants';
import React from 'react';
import {Image, View, Text} from 'react-native';

const Profile = () => {
  let Image_Http_URL = {
    uri: images.GTSA_logo, //'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  };
  return (
    <View>
      <Text>Profile</Text>

      <Image
        source={Image_Http_URL}
        style={{height: 200, resizeMode: 'stretch', margin: 5}}
      />
    </View>
  );
};

export default Profile;
