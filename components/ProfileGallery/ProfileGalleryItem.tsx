import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {SCREEN_WIDTH} from '../../constants';
import {Photo} from '../../interfaces/Photo';

// TS
interface Props {
  index: number;
  photo: Photo;
}

const ProfileGalleryItem = ({photo}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{uri: photo.thumbnailUrl, method: 'GET'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 3,
  },
  photo: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 3,
  },
});

export default ProfileGalleryItem;
