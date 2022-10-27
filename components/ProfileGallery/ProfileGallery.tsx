import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SCREEN_WIDTH} from '../../constants';
import useProfilePhotos from '../../hooks/useProfilePhotos';
import ProfileGalleryItem from './ProfileGalleryItem';

const ProfileGallery = ({navigate}) => {
  const {photos} = useProfilePhotos();

  // console.log(photos);

  return (
    <ScrollView>
      <View style={styles.container}>
        {photos.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigate('profiledetails', {item: item});
              }}>
              <ProfileGalleryItem photo={item} index={index} key={item.id} />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

// []

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
});

export default ProfileGallery;
