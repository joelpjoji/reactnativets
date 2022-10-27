import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Modal,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
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
    position: 'relative',
  },
  modalImage: {
    width: 300,
    height: 300,
  },
  modalClose: {
    width: 30,
    height: 30,
  },
  modalCloseContainer: {
    position: 'absolute',
    top: -10,
    right: -10,
    elevation: 100,
    zIndex: 100,
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
                    <TouchableOpacity
                      style={styles.modalCloseContainer}
                      onPress={() => {
                        setSelected(null);
                      }}>
                      <Image
                        style={styles.modalClose}
                        source={require('../../assets/images/cancel-icon.png')}
                      />
                    </TouchableOpacity>
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
