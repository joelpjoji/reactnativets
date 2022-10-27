import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {Photo} from '../../interfaces/Photo';

const styles = StyleSheet.create({
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

interface Props {
  selected: Photo | null;
  setSelected(item: Photo | null): void;
}

const ProfileImageModal: React.FC<Props> = ({selected, setSelected}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={!!selected}>
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
          <Image style={styles.modalImage} source={{uri: selected?.url}} />
          <Text>{selected?.title}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileImageModal;
