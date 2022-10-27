import React from 'react';
import {View, Text} from 'react-native';

const ProfileDetails = props => {
  const {route} = props;
  const {params} = route;
  const {item} = params;
  const {title} = item;
  console.log(params);

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default ProfileDetails;
