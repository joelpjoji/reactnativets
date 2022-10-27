import React from 'react';
import {View, Text} from 'react-native';

const ProfileDetails = ({route}) => {
  const {params} = route;
  console.log(params);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default ProfileDetails;
