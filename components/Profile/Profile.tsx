import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import ProfileGallery from '../ProfileGallery/ProfileGallery';

const Profile = (props: any) => {
  console.log(props);

  const {navigation} = props;
  const {navigate} = navigation;

  return (
    <>
      <View style={styles.header}>
        <View style={styles.profileWrapper}>
          <View style={styles.profileImageWrapper}>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://via.placeholder.com/150/9e59da'}}
            />
            <View style={styles.addPostButton}>
              <Image
                style={styles.addPostButtonImage}
                source={require('../../assets/images/addpost.png')}
              />
            </View>
          </View>
          <View style={styles.profileContent}>
            <Text style={styles.profileName}>Praveen</Text>
          </View>
        </View>
      </View>
      <ProfileGallery navigate={navigate} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
  },
  profileWrapper: {
    position: 'relative',
    padding: 15,
    flexDirection: 'row',
  },
  profileImageWrapper: {
    position: 'relative',
  },
  addPostButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  addPostButtonImage: {
    width: 20,
    height: 20,
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  profileContent: {
    padding: 10,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
