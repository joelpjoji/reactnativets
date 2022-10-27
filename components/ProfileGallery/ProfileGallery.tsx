import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Modal, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SCREEN_WIDTH} from '../../constants';
import useProfilePhotos from '../../hooks/useProfilePhotos';
import {Photo} from '../../interfaces/Photo';
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
  modalImage: {
    width: 300,
    height: 300,
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
              <Modal
                animationType="slide"
                transparent={true}
                visible={!!selected}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Image
                      style={styles.modalImage}
                      source={{uri: selected?.url}}
                    />
                    <Text>{selected?.title}</Text>
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
