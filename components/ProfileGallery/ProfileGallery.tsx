import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SCREEN_WIDTH} from '../../constants';
import useProfilePhotos from '../../hooks/useProfilePhotos';
import {Photo} from '../../interfaces/Photo';
import ProfileImageModal from '../ProfileImageModal/ProfileImageModal';
import ProfileGalleryItem from './ProfileGalleryItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
});

const ProfileGallery = ({navigate}) => {
  const {photos} = useProfilePhotos();
  const [selected, setSelected] = useState<Photo | null>(null);
  return (
    <ScrollView>
      <View style={styles.container}>
        {photos.map((item, index) => {
          return (
            <>
              {/* Using navigation show details */}
              {/* <TouchableOpacity
                onPress={() => {
                  navigate('profiledetails', {item: item});
                }}>
                <ProfileGalleryItem photo={item} index={index} key={item.id} />
              </TouchableOpacity> */}
              {/* Using modal show details */}
              <TouchableOpacity
                onPress={() => {
                  setSelected(item);
                }}>
                <ProfileGalleryItem photo={item} index={index} key={item.id} />
              </TouchableOpacity>
              <ProfileImageModal
                selected={selected}
                setSelected={setSelected}
              />
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

// []

export default ProfileGallery;
