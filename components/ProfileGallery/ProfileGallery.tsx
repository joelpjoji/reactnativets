import React from 'react';
import {View, StyleSheet, ScrollView, Modal, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SCREEN_WIDTH} from '../../constants';
import useProfilePhotos from '../../hooks/useProfilePhotos';
import ProfileGalleryItem from './ProfileGalleryItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});

const ProfileGallery = ({navigate}) => {
  const {photos} = useProfilePhotos();
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
                  console.log('hello');
                }}>
                <ProfileGalleryItem photo={item} index={index} key={item.id} />
              </TouchableOpacity>
              <Modal animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text>Hello</Text>
                  </View>
                </View>
              </Modal>
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

// []

export default ProfileGallery;
